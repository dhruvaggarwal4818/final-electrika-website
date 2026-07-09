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
            <span>💬 WhatsApp us</span>
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
