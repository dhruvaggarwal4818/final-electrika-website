import { NextRequest, NextResponse } from "next/server";
import { appendRowToGoogleSheet } from "@/services/googleSheets";
import { sendEnquiryNotificationEmail, sendCustomerConfirmationEmail } from "@/services/email";
import { syncLeadToZohoCRM } from "@/services/crm";

// Simple IP-based rate limiting in-memory cache (works locally)
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      phoneNumber,
      emailAddress,
      productRequired,
      quantity,
      cityState,
      requirement,
      sourceUrl,
      websiteUrl,
      honeypot, // Bot check
    } = body;

    // 1. Bot check (Honeypot)
    if (honeypot) {
      console.warn("Spam bot detected via honeypot field.");
      return NextResponse.json({ success: false, message: "Spam detected." }, { status: 400 });
    }

    // 2. Rate Limiting (Prevent spamming)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip);
    
    if (lastRequestTime && now - lastRequestTime < 5000) { // 5-second cooldown
      return NextResponse.json(
        { success: false, message: "Too many requests. Please wait a few seconds before trying again." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    // 3. Validation
    if (!fullName || fullName.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Name is required." }, { status: 400 });
    }
    if (!companyName || companyName.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Company name is required." }, { status: 400 });
    }
    if (!productRequired || productRequired === "default" || productRequired.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Please select a valid product." }, { status: 400 });
    }
    if (!requirement || requirement.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Requirement details are required." }, { status: 400 });
    }
    
    // Indian Phone Number validation (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return NextResponse.json({ success: false, message: "Please enter a valid 10-digit Indian phone number." }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    // Sanitize input
    const cleanName = fullName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanCompany = companyName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanRequirement = requirement.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanCityState = (cityState || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const leadId = `LEAD-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const dateTime = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Prepare data payloads
    const sheetData = [
      dateTime,
      leadId,
      cleanName,
      cleanCompany,
      phoneNumber,
      emailAddress,
      productRequired,
      quantity || "1",
      cleanCityState || "N/A",
      cleanRequirement,
      sourceUrl || "N/A",
      websiteUrl || "N/A",
      "New" // Status
    ];

    const emailPayload = {
      leadId,
      fullName: cleanName,
      companyName: cleanCompany,
      phoneNumber,
      emailAddress,
      productRequired,
      quantity: quantity || "1",
      cityState: cleanCityState || "N/A",
      requirement: cleanRequirement,
      sourceUrl: sourceUrl || "N/A",
      dateTime
    };

    // 4. Fire API calls in a fault-tolerant way
    let sheetLogged = false;
    let emailSent = false;
    let autoResponseSent = false;
    let zohosynced = false;
    let isMockRun = false;

    // Check if configuration exists
    const hasSheetsConfig = process.env.GOOGLE_SHEET_WEBAPP_URL;
    const hasEmailConfig = process.env.RESEND_API_KEY;

    if (!hasSheetsConfig && !hasEmailConfig) {
      console.warn("⚠️ API keys are missing! Running in local mock mode.");
      console.log("Mock Lead Logged to Console:", sheetData);
      isMockRun = true;
    } else {
      // Log to Google Sheets
      try {
        await appendRowToGoogleSheet(sheetData);
        sheetLogged = true;
      } catch (err) {
        console.error("Enquiry API Warning: Google Sheets logging failed:", err);
      }

      // Send Admin Notification Email via Resend
      try {
        await sendEnquiryNotificationEmail(emailPayload);
        emailSent = true;
      } catch (err) {
        console.error("Enquiry API Warning: Business notification email failed:", err);
      }

      // Send Customer Auto-Response
      try {
        await sendCustomerConfirmationEmail(emailAddress, cleanName);
        autoResponseSent = true;
      } catch (err) {
        console.error("Enquiry API Warning: Customer auto-response email failed:", err);
      }
    }

    // Sync to Zoho CRM (Future-Ready Mock)
    try {
      const names = cleanName.split(" ");
      const lastName = names[names.length - 1] || "N/A";
      const firstName = names.slice(0, -1).join(" ") || undefined;
      await syncLeadToZohoCRM({
        First_Name: firstName,
        Last_Name: lastName,
        Company: cleanCompany,
        Phone: phoneNumber,
        Email: emailAddress,
        Description: `Product: ${productRequired} | Qty: ${quantity} | City: ${cleanCityState} | Req: ${cleanRequirement}`,
        Lead_Source: "Website"
      });
      zohosynced = true;
    } catch (err) {
      console.error("Enquiry API Warning: Zoho CRM sync failed:", err);
    }

    // Fallback conditions: We succeed if it was a mock run OR if AT LEAST Sheets OR Notification Email worked.
    if (!isMockRun && !sheetLogged && !emailSent) {
      throw new Error("Both Google Sheets and Business Email notifications failed.");
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: "Your enquiry has been submitted successfully.",
      debug: { sheetLogged, emailSent, autoResponseSent, zohosynced, isMockRun }
    });

  } catch (error: any) {
    console.error("Enquiry API Critical Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Our team has been notified." },
      { status: 500 }
    );
  }
}
