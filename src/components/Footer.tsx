"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import QuickEnquiry from "./QuickEnquiry";

interface FooterProps {
  hideEnquiry?: boolean;
}

export default function Footer({ hideEnquiry = false }: FooterProps) {
  const pathname = usePathname();
  const allProducts = PRODUCT_CATEGORIES.flatMap(cat => cat.products);

  // Determine WhatsApp URL with prefilled text depending on the active product
  const getWhatsAppUrl = () => {
    const isProductPage = pathname?.startsWith("/products/");
    const currentSlug = isProductPage ? pathname.split("/").pop() : null;
    let currentProduct = "";

    if (currentSlug) {
      const match = allProducts.find(p => p.slug === currentSlug);
      if (match) {
        currentProduct = match.name;
      }
    }

    if (currentProduct) {
      const text = `Hello,\n\nI am interested in:\n${currentProduct}\n\nPlease send quotation.`;
      return `https://wa.me/919971499542?text=${encodeURIComponent(text)}`;
    }
    return "https://wa.me/919971499542";
  };

  return (
    <div className={styles.footerWrapper}>
      {/* 1. CTA Banner Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaBgImageContainer}>
          <Image
            src="/figma_assets/e96368a1c2720a5f3db1157ebf32107daa298d88.png"
            alt="Supply Partner call-to-action background"
            fill
            className={styles.ctaBgImage}
          />
        </div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaText}>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Your Supply Partner <span className={styles.lightText}>is</span>{" "}
              <span className={styles.gradientText}>One Call Away</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Formal quotation for your project within 24 hours — bulk orders welcome.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <a
              href="#enquiry-form"
              className={styles.ctaBtnPrimary}
              style={{
                backgroundImage: "url('/figma_assets/f0788b8c49f1b93f939000c8259adc91ee92a9cb.png')",
              }}
            >
              Get a Quote Now
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnSecondary}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* 2. Enquiry Form Section */}
      {!hideEnquiry && <QuickEnquiry />}

      {/* 3. Core Corporate Footer */}
      <footer className={styles.coreFooter} role="contentinfo">
        <div className={styles.footerGrid}>
          {/* Company Intro */}
          <div className={styles.footerIntro}>
            <Link href="/" className={styles.footerLogoLink}>
              <Image
                src="/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png"
                alt="Electrika INC Footer Logo"
                width={220}
                height={66}
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.footerDesc}>
              Industrial electrical supplier for contractors, government departments, and infrastructure projects across India since 2002.
            </p>
            <div className={styles.socialLinks} aria-label="Social media links">
              <a
                href="https://instagram.com/electrikainc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Follow us on Instagram"
              >
                📷
              </a>
              <a
                href="https://linkedin.com/company/electrika-inc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Connect with us on LinkedIn"
              >
                💼
              </a>
              <a
                href="https://wa.me/919971499542"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Chat with us on WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Navigate</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/#products" className={styles.columnLink}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#brands" className={styles.columnLink}>
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={styles.columnLink}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about-us" className={styles.columnLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#enquiry-form" className={styles.columnLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Products</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/products/high-mast-poles" className={styles.columnLink}>
                  High Mast Poles
                </Link>
              </li>
              <li>
                <Link href="/products/flp-led-highbay" className={styles.columnLink}>
                  LED Lighting
                </Link>
              </li>
              <li>
                <Link href="/products/solar-street-light" className={styles.columnLink}>
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link href="/products/pce-plug-socket" className={styles.columnLink}>
                  PCE Connectors
                </Link>
              </li>
              <li>
                <Link href="/products/hensel-boxes" className={styles.columnLink}>
                  Hensel Boxes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactDetails}>
              <li className={styles.contactInfoLine}>
                📞 +91 9971499542, 9818079762, 9871714055
              </li>
              <li className={styles.contactInfoLine}>
                ✉️ Electrikainc@gmail.com
              </li>
              <li className={styles.addressLine}>
                📍{" "}
                <a
                  href="https://www.google.com/maps/place/Electrika+Inc/@28.4582633,77.02649,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.addressLink}
                >
                  L-01 Radha Palace, Gurudwara Road, Sadar bazaar Haryana, India - 122001
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & badges */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Electrika INC. All rights reserved.
          </p>
          <div className={styles.badges}>
            <div className={styles.badgeGst}>GST REGISTERED</div>
            <div className={styles.badgeMakeInIndia}>MAKE IN INDIA</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
