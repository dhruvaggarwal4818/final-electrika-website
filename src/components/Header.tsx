"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Electrika INC Home">
          <Image
            src="/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png"
            alt="Electrika INC Logo"
            width={202}
            height={60}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Hamburger Menu Toggle (Mobile Only) */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen1 : ""}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen2 : ""}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.barOpen3 : ""}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`} role="navigation">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#products" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about-us" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#enquiry-form" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quick Action Callouts */}
        <div className={styles.actions}>
          <a
            href="https://wa.me/919971499542"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.btnWa}`}
            aria-label="Contact us on WhatsApp"
          >
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }}
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp us
            </span>
          </a>
          <a
            href="tel:+919971499542"
            className={`${styles.actionBtn} ${styles.btnCall}`}
            aria-label="Call Electrika INC support"
          >
            <span>📞 Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
