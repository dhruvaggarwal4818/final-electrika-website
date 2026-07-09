import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY;
const resend = resendKey ? new Resend(resendKey) : null;
const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

export interface EnquiryData {
  leadId: string;
  fullName: string;
  companyName: string;
  phoneNumber: string;
  emailAddress: string;
  productRequired: string;
  quantity: string;
  cityState: string;
  requirement: string;
  sourceUrl: string;
  dateTime: string;
}

export async function sendEnquiryNotificationEmail(data: EnquiryData) {
  if (!resend) {
    console.warn("Resend API key is not configured.");
    throw new Error("Email service is unavailable.");
  }

  const businessEmail = process.env.BUSINESS_EMAIL || 'electrikainc@gmail.com';

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
      <h2 style="color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; margin-top: 0; font-size: 20px;">⚡ NEW WEBSITE ENQUIRY</h2>
      <p style="font-size: 13px; color: #64748b; margin-top: -6px;">Lead ID: <strong>${data.leadId}</strong></p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tbody>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 140px; border-bottom: 1px solid #f1f5f9;">Name</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Company</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.companyName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Phone</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Email</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.emailAddress}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Product</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.productRequired}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Quantity</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.quantity}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">City / State</td>
            <td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.cityState}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: 600; color: #475569; vertical-align: top; padding-top: 10px;">Requirement</td>
            <td style="padding: 10px 0; color: #0f172a; white-space: pre-wrap; padding-top: 10px;">${data.requirement}</td>
          </tr>
        </tbody>
      </table>
      
      <div style="margin-top: 30px; padding: 16px; background-color: #f8fafc; border-radius: 8px; font-size: 12px; color: #64748b;">
        <p style="margin: 0 0 6px 0;"><strong>Submitted From:</strong> <a href="${data.sourceUrl}" style="color: #1a9fd8; text-decoration: none;">${data.sourceUrl}</a></p>
        <p style="margin: 0;"><strong>Date & Time:</strong> ${data.dateTime}</p>
      </div>
    </div>
  `;

  return await resend.emails.send({
    from: `Electrika Leads <${senderEmail}>`,
    to: businessEmail,
    subject: `New Enquiry: ${data.fullName} - ${data.productRequired}`,
    html: htmlContent,
  });
}

export async function sendCustomerConfirmationEmail(toEmail: string, customerName: string) {
  if (!resend) {
    console.warn("Resend API key is not configured.");
    throw new Error("Email service is unavailable.");
  }

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #334155;">
      <h3 style="color: #0f172a; font-size: 16px; margin-top: 0;">Dear ${customerName},</h3>
      <p style="line-height: 1.6; font-size: 14px;">
        Thank you for contacting Electrika INC.
      </p>
      <p style="line-height: 1.6; font-size: 14px;">
        Our technical sales team has received your request and will contact you shortly with formal specifications and pricing.
      </p>
      <br/>
      <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;"/>
      <p style="color: #64748b; font-size: 12px; margin-bottom: 2px;">Regards,</p>
      <p style="color: #0f172a; font-weight: 700; font-size: 14px; margin-top: 0;">Electrika INC</p>
    </div>
  `;

  return await resend.emails.send({
    from: `Electrika INC <${senderEmail}>`,
    to: toEmail,
    subject: 'Thank you for contacting Electrika INC',
    html: htmlContent,
  });
}
