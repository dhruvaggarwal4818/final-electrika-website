"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./polymer-glands.module.css";

export default function PolymerGlandsPage() {

  const features = [
    {
      icon: "🇨🇭",
      title: "AGRO Switzerland Pedigree",
      desc: "Over 65 years developing cable laying and cable entry systems for plant construction, machine fabrication, and professional electrical installation."
    },
    {
      icon: "🛡️",
      title: "IP66 — Dust-Tight & Jet-Proof",
      desc: "Fully protected against dust ingress and powerful water jets from any direction — suited to outdoor enclosures, panels, and general industrial wiring."
    },
    {
      icon: "🔩",
      title: "Trapezoid Lamellar Technology",
      desc: "Trapezoid-shaped articulated lamellas close smoothly around the cable into a hexagon-like grip, giving excellent strain relief and preventing cable rotation."
    },
    {
      icon: "🧪",
      title: "Non-Metallic, Corrosion-Free",
      desc: "Synthetic polymer housing resists corrosion and chemical attack — a lightweight alternative to metal glands where galvanic corrosion is a concern."
    },
    {
      icon: "📏",
      title: "Wide Thread Range",
      desc: "M12×1.5 through M63×1.5, with multiple clamping sub-ranges per thread size to match your exact cable diameter."
    },
    {
      icon: "📊",
      title: "Certified Torque Testing",
      desc: "Every torque figure is derived under IEC / EN 62444 in AGRO's certified in-house laboratory, so results are repeatable and comparable across products."
    }
  ];

  const generalSpecs = [
    { param: "Brand / Origin", val: "AGRO AG, Switzerland" },
    { param: "Product Line", val: "Syntec® Synthetic — Metric" },
    { param: "Housing Material", val: "Synthetic polymer, polyamide" },
    { param: "Sealing Element", val: "Trapezoid-shaped articulated lamellas" },
    { param: "IP Rating", val: "IP66 (dust-tight, powerful jet protection)", highlight: true },
    { param: "Thread Range", val: "M12×1.5 to M63×1.5 (metric)" },
    { param: "Clamping Range", val: "1.5 mm to 44.0 mm, sub-ranged" },
    { param: "Antikink Nozzle", val: "Optional on M16×1.5 and M20×1.5" },
    { param: "Cable Retention / Strain Relief", val: "Hexagon-profile lamellar gripping" },
    { param: "Test Standard", val: "IEC / EN 62444 — tested on mandrels" },
    { param: "Colour", val: "Light grey / black (RAL 7035 / 9005)" },
    { param: "Certifications", val: "CE, tested in AGRO's certified lab" }
  ];

  const clampingSpecs = [
    { thread: "M12×1.5", range: "2.5 – 6.5 mm", torque: "2.0 Nm" },
    { thread: "M16×1.5", range: "2.0 – 6.0 mm", torque: "3.5 Nm" },
    { thread: "M16×1.5", range: "4.5 – 10.0 mm", torque: "3.5 Nm" },
    { thread: "M16×1.5 (Antikink)", range: "4.0 – 8.0 mm", torque: "2.0 Nm" },
    { thread: "M20×1.5", range: "3.5 – 8.0 mm", torque: "5.5 Nm" },
    { thread: "M20×1.5", range: "7.0 – 13.0 mm", torque: "5.5 Nm" },
    { thread: "M20×1.5 (Long Thread)", range: "3.0 – 7.0 mm", torque: "3.0 Nm" },
    { thread: "M20×1.5 (Antikink)", range: "5.5 – 12.0 mm", torque: "4.0 Nm" },
    { thread: "M25×1.5", range: "5.0 – 11.0 mm", torque: "8.0 / 6.0 Nm" },
    { thread: "M25×1.5", range: "10.0 – 17.0 mm", torque: "8.0 / 6.0 Nm" },
    { thread: "M32×1.5", range: "17.0 – 25.0 mm", torque: "7.0 Nm" },
    { thread: "M40×1.5", range: "22.0 – 33.0 mm", torque: "10.0 Nm" },
    { thread: "M50×1.5", range: "28.0 – 38.0 mm", torque: "30.0 Nm" },
    { thread: "M63×1.5", range: "32.0 – 44.0 mm", torque: "25.0 Nm" }
  ];

  const applications = [
    { icon: "⚡", title: "Electrical Panel Building", desc: "Cable entry on LT/HT panels, control cabinets, and distribution boards" },
    { icon: "⚙️", title: "Machine & Equipment Manufacturing", desc: "Strain-relieved cable entry on production machinery and OEM skids" },
    { icon: "🏢", title: "HVAC & Building Systems", desc: "Outdoor and rooftop unit wiring where corrosion resistance matters" },
    { icon: "☀️", title: "Solar & Renewable Installations", desc: "Junction boxes and combiner boxes on rooftop and ground-mount solar arrays" },
    { icon: "🏭", title: "General Industrial Wiring", desc: "Conduit and cable entry across plant and process equipment" },
    { icon: "📦", title: "Outdoor Junction Boxes", desc: "IP66-rated entry points for weatherproof enclosures and street furniture" }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* PRODUCT HERO */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroLeft}>
              <span className={styles.heroBadge}>Cable Gland — AGRO Syntec®</span>
              <h1 className={styles.heroTitle}>
                IP66 Synthetic <br />
                <span className={styles.orangeText}>Polymer Cable Glands</span>
              </h1>
              <p className={styles.heroDesc}>
                AGRO Syntec® synthetic polymer cable glands use trapezoid-shaped articulated lamellar technology to grip cable jackets evenly around the full circumference. The lamellas close around the cable into a hexagon-like profile, giving reliable strain relief and anti-rotation without over-compressing the sheath. Rated IP66 for dust-tight, powerful-water-jet protection, and built in a corrosion-free synthetic body for indoor and outdoor electrical installations.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP66</span>
                  <span className={styles.metaLbl}>Protection</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Synthetic</span>
                  <span className={styles.metaLbl}>Polymer Body</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Lamellar</span>
                  <span className={styles.metaLbl}>Sealing Tech</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>AGRO Swiss</span>
                  <span className={styles.metaLbl}>Brand</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a 
                  href="#enquiry-form"
                  className={styles.btnPrimary}
                >
                  Request Quotation →
                </a>
                <a href="#specs" className={styles.btnSecondary}>
                  View Specifications
                </a>
              </div>
            </div>

            <div className={styles.heroRight}>
              <span className={styles.stockTag}>In Stock</span>
              <Image
                src="/figma_assets/46e683cae2afa1faaa12693a50a151b4a6b759cb.png"
                alt="AGRO Syntec Synthetic IP66 Cable Gland"
                fill
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Key Features</p>
            <h2 className={styles.sectionTitle}>Why Choose AGRO Syntec® Synthetic Glands</h2>
            <p className={styles.sectionSub}>
              Swiss-engineered polymer cable glands backed by certified laboratory torque testing and pan-India delivery.
            </p>

            <div className={styles.highlightStrip}>
              <span className={styles.highlightStrong}>Torque is cable-dependent:</span>
              Values in the table below are determined per IEC / EN 62444 using standardised test mandrels (65 Shore D ± 15 hardness, Ra ≤ 7µm). Real cables vary in sheath material and construction, so actual installation torque should be verified on the specific cable used — AGRO&apos;s certified in-house lab can test your exact cable and gland combination on request.
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feat, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feat.icon}</div>
                  <h3 className={styles.featureName}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECS & TABLES */}
        <section id="specs" className={styles.specsSection}>
          <div className={styles.container}>
            <p className={styles.sectionLabel}>Specifications</p>
            <h2 className={styles.sectionTitle}>Technical Specs &amp; Range Data</h2>
            <p className={styles.sectionSub}>Comprehensive specification parameters and installation torque data.</p>

            {/* General Specs Table */}
            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span>📋</span> General Technical Specifications
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {generalSpecs.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{item.param}</td>
                      <td className={item.highlight ? styles.specVal : ""}>{item.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clamping & Torque Table */}
            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span>🔧</span> Clamping Range &amp; Installation Torque Table
              </div>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Thread Size</th>
                    <th>Clamping Range (mm)</th>
                    <th>Installation Torque (Nm)</th>
                  </tr>
                </thead>
                <tbody>
                  {clampingSpecs.map((item, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700, color: "#f97316" }}>{item.thread}</td>
                      <td>{item.range}</td>
                      <td style={{ fontWeight: 600 }}>{item.torque}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* APPLICATIONS SECTION */}
        <section className={styles.appsSection}>
          <div className={styles.container}>
            <div className={styles.appsCenter}>
              <p className={styles.sectionLabel}>Use Cases</p>
              <h2 className={styles.sectionTitle} style={{ color: "#ffffff" }}>Where This Product Is Used</h2>
              <p className={styles.sectionSub} style={{ color: "#888888" }}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {applications.map((app, idx) => (
                <div key={idx} className={styles.appCard}>
                  <div className={styles.appIcon}>{app.icon}</div>
                  <h3 className={styles.appName}>{app.title}</h3>
                  <p className={styles.appDesc}>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
