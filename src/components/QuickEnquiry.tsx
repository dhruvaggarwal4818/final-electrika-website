"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import styles from "./Footer.module.css";

export default function QuickEnquiry() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phoneNumber: "",
    emailAddress: "",
    productRequired: "default",
    quantity: "",
    cityState: "",
    requirement: "",
    honeypot: "", // Bot field
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Populate dynamic dropdown list of products
  const allProducts = PRODUCT_CATEGORIES.flatMap(cat => cat.products);

  // Set default product if on a product page
  useEffect(() => {
    const isProductPage = pathname?.startsWith("/products/");
    const currentSlug = isProductPage ? pathname.split("/").pop() : null;
    
    if (currentSlug) {
      const match = allProducts.find(p => p.slug === currentSlug);
      if (match) {
        setFormData(prev => ({ ...prev, productRequired: match.name }));
      }
    }
  }, [pathname]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // 1. Client-Side Validations
    if (!formData.fullName.trim()) {
      setErrorMsg("Full Name is required.");
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMsg("Company Name is required.");
      return;
    }
    if (formData.productRequired === "default") {
      setErrorMsg("Please select a product from the list.");
      return;
    }
    if (!formData.requirement.trim()) {
      setErrorMsg("Please describe your requirement.");
      return;
    }

    // Indian Phone Number check (10 digits starting with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMsg("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    // Prevent duplicate submissions via local storage rate limiter
    const lastSubmission = localStorage.getItem("last_lead_submission");
    const now = Date.now();
    if (lastSubmission && now - parseInt(lastSubmission) < 15000) {
      setErrorMsg("You have recently submitted an enquiry. Please wait 15 seconds.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: window.location.href,
          websiteUrl: window.location.origin,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      // Success
      localStorage.setItem("last_lead_submission", now.toString());
      setSubmitted(true);
      setFormData({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        emailAddress: "",
        productRequired: "default",
        quantity: "",
        cityState: "",
        requirement: "",
        honeypot: "",
      });
    } catch (err: any) {
      setErrorMsg(err.message || "Submission failed. Please check your internet connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiry-form" className={styles.enquirySection} aria-labelledby="enquiry-heading">
      <div className={styles.enquiryHeader}>
        <p className={styles.enquiryEyebrow}>Quick Enquiry</p>
        <h2 id="enquiry-heading" className={styles.enquiryTitle}>
          Need Help Choosing the Right Product?
        </h2>
        <p className={styles.enquirySubtitle}>
          We respond with specs and pricing within 24 hours.
        </p>
      </div>

      <div className={styles.formContainer}>
        {submitted ? (
          <div className={styles.successMessage} role="alert">
            <span className={styles.successIcon}>✓</span>
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully.</p>
            <p>Our technical team will contact you within 24 hours.</p>
            <button onClick={() => setSubmitted(false)} className={styles.submitAgainBtn}>
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {errorMsg && (
              <div style={{ color: "#ef4444", fontSize: "13px", fontWeight: 600, padding: "8px", backgroundColor: "#fef2f2", borderRadius: "6px", border: "1px solid #fee2e2" }}>
                ⚠️ {errorMsg}
              </div>
            )}
            
            {/* Honeypot Field (Spambots check) */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullName" className="sr-only">
                  Full Name (Required)
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  aria-required="true"
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="companyName" className="sr-only">
                  Company Name (Required)
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  aria-required="true"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number (Required)
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  aria-required="true"
                />
              </div>
              <div className={styles.inputGroup} ref={dropdownRef}>
                <label htmlFor="productRequired" className="sr-only">
                  Product Required (Required)
                </label>
                <div 
                  className={`${styles.customSelectHeader} ${isDropdownOpen ? styles.customSelectHeaderActive : ""}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span style={{ color: formData.productRequired === "default" ? "var(--color-text-muted-light)" : "var(--color-text-dark)" }}>
                    {formData.productRequired === "default" ? "Product Required" : formData.productRequired}
                  </span>
                  <span className={`${styles.customSelectArrow} ${isDropdownOpen ? styles.customSelectArrowOpen : ""}`}>▼</span>
                </div>
                
                <div className={`${styles.customSelectOptions} ${isDropdownOpen ? styles.customSelectOptionsOpen : ""}`}>
                  <div 
                    className={`${styles.customSelectOption} ${formData.productRequired === "default" ? styles.customSelectOptionSelected : ""}`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, productRequired: "default" }));
                      setIsDropdownOpen(false);
                    }}
                  >
                    Select Product
                  </div>
                  {allProducts.map((p, idx) => (
                    <div 
                      key={idx}
                      className={`${styles.customSelectOption} ${formData.productRequired === p.name ? styles.customSelectOptionSelected : ""}`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, productRequired: p.name }));
                        setIsDropdownOpen(false);
                      }}
                    >
                      {p.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="quantity" className="sr-only">
                  Quantity
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity (e.g. 50 nos)"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="cityState" className="sr-only">
                  City &amp; State
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  placeholder="City &amp; State (e.g. Mumbai, MH)"
                  value={formData.cityState}
                  onChange={handleInputChange}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="emailAddress" className="sr-only">
                Email Address (Required)
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                required
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
                className={styles.inputField}
                aria-required="true"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="requirement" className="sr-only">
                Describe your requirement (Required)
              </label>
              <textarea
                id="requirement"
                name="requirement"
                required
                placeholder="Describe your requirement — product specifications, custom dimensions, timeline..."
                value={formData.requirement}
                onChange={handleInputChange}
                className={styles.textareaField}
                rows={4}
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={styles.submitBtn}
              style={{
                backgroundImage: "url('/figma_assets/be57c2526f2a879a1eb09e1d1b5770b7542185bb.png')",
              }}
            >
              {submitting ? "SUBMITTING..." : "SUBMIT ENQUIRY →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
