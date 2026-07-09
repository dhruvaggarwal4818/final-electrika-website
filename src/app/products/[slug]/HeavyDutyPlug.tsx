"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./heavy-duty-plug.module.css";

export default function HeavyDutyPlugPage() {
  const features = [
    {
      icon: "⚡",
      title: "250A to 600A Rating",
      desc: "Covers the full heavy-industry current spectrum — from large motor starters and welding rectifiers to ship shore power and arc furnace tap connections.",
    },
    {
      icon: "🔒",
      title: "Interlocked Safety Latch",
      desc: "Mechanical interlock prevents live insertion and withdrawal. The latch must be disengaged before the plug can be removed, enforcing safe switching procedures.",
    },
    {
      icon: "🔌",
      title: "Copper Alloy Contact Pins",
      desc: "Heavy copper-alloy pins provide low contact resistance, high conductivity, and long service life even under repeated make-break cycles.",
    },
    {
      icon: "🏗️",
      title: "Heavy-Duty Handle",
      desc: "Integrated ergonomic carrying handle on the plug body — essential for safe one-person handling of these high-mass connectors.",
    },
    {
      icon: "💧",
      title: "IP44 / IP67 Protection",
      desc: "Weatherproof ratings ensure reliable operation in outdoor yards, wet process areas, and marine environments.",
    },
    {
      icon: "✅",
      title: "IEC 60309 Compliant",
      desc: "Colour-coded to international standard for easy phase identification and cross-site compatibility with matching sockets from any IEC-compliant supplier.",
    },
  ];

  const specRows = [
    { param: "Current Ratings", val: "250A, 315A, 400A, 500A, 600A", alt: false },
    { param: "Voltage Rating", val: "380V / 400V / 415V / 500V (3P+N+E)", alt: true },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: false },
    { param: "Number of Poles", val: "3P+E / 3P+N+E (5 poles)", alt: true },
    { param: "Contact Material", val: "Copper alloy (brass/bronze), silver-plated tips on selected models", alt: false },
    { param: "Body Material", val: "Heavy thermoplastic / die-cast aluminium alloy (model specific)", alt: true },
    { param: "IP Rating", val: "IP44 (standard) / IP67 (submersible version)", alt: false },
    { param: "Interlocking", val: "Mechanical safety interlock as standard", alt: true },
    { param: "Handle", val: "Integrated moulded carrying handle", alt: false },
    { param: "Cable Entry", val: "Gland plate for cable OD 35 mm – 80 mm", alt: true },
    { param: "Operating Temperature", val: "-25°C to +60°C", alt: false },
    { param: "Applicable Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Colour Code", val: "Red (3P, 400V–500V) / Black (special voltages) per IEC 60309", alt: false },
    { param: "Lead Time", val: "Subject to availability — confirm with enquiry", alt: true },
  ];

  const useCases = [
    { icon: "🏭", title: "Steel & Smelting Plants", desc: "EAF, induction furnace, and ladle tap connections" },
    { icon: "🚢", title: "Shipyards & Ports", desc: "Shore-to-ship power supply; dry-dock connections" },
    { icon: "🏗️", title: "Heavy Press Lines", desc: "Large stamping, forging, and extrusion machine feeds" },
    { icon: "⛏️", title: "Mining Equipment", desc: "Large ventilation fans, winders, and dragline connectors" },
    { icon: "🚆", title: "Railway Maintenance", desc: "Loco shed power, heavy maintenance pit supplies" },
    { icon: "⚡", title: "Transformer Testing", desc: "High-current test bench supply and load-bank connections" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO SECTION */}
        <section className={styles.heroSection} style={{ backgroundColor: "#101a28", borderRadius: "20px", margin: "10px", width: "calc(100% - 20px)", padding: "80px 0" }}>
          <div className={styles.container} style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
            <div className={styles.heroGrid} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316", padding: "6px 14px", borderRadius: "20px", display: "inline-block", marginBottom: "20px", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  HD Industrial Plugs
                </span>
                <h1 className={styles.heroTitle} style={{ fontSize: "48px", color: "#fff", fontWeight: "bold", lineHeight: 1.2, marginBottom: "24px" }}>
                  Heavy Duty Industrial <br />
                  <span style={{ color: "#f97316" }}>Plugs — 250A to 600A</span>
                </h1>
                <p className={styles.heroDesc} style={{ color: "#aab0c0", fontSize: '16px', lineHeight: 1.6, maxWidth: "580px", marginBottom: "40px" }}>
                  Extra heavy-duty industrial plugs engineered for the most demanding high-current applications. Starting at 250A and scaling to 600A, these connectors are built for smelters, heavy press lines, ship-to-shore power, and large transformer connections.
                </p>
                
                <div style={{ display: "flex", gap: "30px", marginBottom: "40px" }}>
                  <div>
                    <div style={{ color: "#f97316", fontSize: "20px", fontWeight: "bold" }}>250–600A</div>
                    <div style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>Current Range</div>
                  </div>
                  <div>
                    <div style={{ color: "#f97316", fontSize: "20px", fontWeight: "bold" }}>High Current</div>
                    <div style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>Applications</div>
                  </div>
                  <div>
                    <div style={{ color: "#f97316", fontSize: "20px", fontWeight: "bold" }}>3P+N+E</div>
                    <div style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>Configuration</div>
                  </div>
                  <div>
                    <div style={{ color: "#f97316", fontSize: "20px", fontWeight: "bold" }}>24hr</div>
                    <div style={{ color: "#888", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px", marginTop: "4px" }}>Quote TAT</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a href="#enquiry-form" style={{ background: "#f97316", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", display: "inline-block" }}>Request Quotation →</a>
                  <a href="#specifications" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", textDecoration: "none", display: "inline-block" }}>View Specifications</a>
                </div>
              </div>

              <div className={styles.heroVisual} style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className={styles.heroImageWrapper} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", position: "relative", width: "100%", maxWidth: "570px", aspectRatio: "4/3", overflow: "hidden" }}>
                  <Image
                    src="/figma_assets_98_3560/b361f198dc471b1b476ef8cfef2c4afa5c604d37.png"
                    alt="Heavy Duty Industrial Plugs"
                    fill
                    className={styles.heroImage}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <span style={{ position: "absolute", top: 14, left: 14, background: "#f97316", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 4, letterSpacing: "0.5px", zIndex: 2 }}>In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ELECTRIKA — 6 feature cards */}
        <section className={styles.featuresSection} style={{ backgroundColor: "#f5f7fa", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Why Choose Electrika Inc.</h2>
            <p className={styles.sectionIntro} style={{ color: '#888', maxWidth: '600px', marginBottom: '40px' }}>Quality-assured products backed by technical expertise and pan-India logistics.</p>

            <div style={{ background: "#fff7f0", borderLeft: "4px solid #f97316", padding: "20px", borderRadius: "8px", marginBottom: "40px", maxWidth: "1200px" }}>
              <p style={{ margin: 0, color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
                <strong style={{ color: "#f97316", marginRight: "8px" }}>Note on Materials:</strong>
                These plugs feature a heavy-duty thermoplastic or die-cast housing with aluminium body, copper/brass alloy contact pins, and a stainless-steel interlocking latch mechanism. If you need confirmed material certificates for a specific application, request a datasheet with your enquiry.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ backgroundColor: '#fff', borderRadius: "20px", padding: "40px", border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: "40px", marginBottom: "20px", background: "#f5f7fa", width: "64px", height: "64px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px" }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#101820", marginBottom: "12px" }}>{f.title}</h3>
                  <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS TABLE */}
        <section id="specifications" className={styles.specsSection} style={{ backgroundColor: "#fff", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Product Specifications</h2>
            <p className={styles.sectionIntro} style={{ color: '#888', maxWidth: '600px', marginBottom: '40px' }}>Full technical data sheet. Download available on request after enquiry submission.</p>

            <div style={{ background: "#f9fafb", borderRadius: "20px", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <div style={{ background: "#101820", padding: "20px 30px" }}>
                <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", margin: 0 }}>Technical Specification Sheet — Heavy Duty Plugs</h3>
              </div>
              <div style={{ padding: "0" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {specRows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #e2e8f0", background: row.alt ? "#fff" : "#f9fafb" }}>
                        <td style={{ padding: "20px 30px", color: "#101820", fontWeight: "bold", fontSize: "14px", width: "35%" }}>{row.param}</td>
                        <td style={{ padding: "20px 30px", color: "#666", fontSize: "14px" }}>{row.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE USED */}
        <section className={styles.mandatedSection} style={{ backgroundColor: "#0d0d1a", paddingTop: "80px", paddingBottom: "80px" }}>
          <div className={styles.container}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className={styles.sectionEyebrow} style={{ display: 'inline-block', marginBottom: '16px', color: '#f97316', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Use Cases</span>
              <h2 className={styles.sectionTitle} style={{ fontSize: '32px', color: '#fff', marginBottom: '16px', fontWeight: 'bold' }}>Where This Product Is Deployed</h2>
              <p className={styles.sectionIntro} style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '15px' }}>Trusted across critical infrastructure and heavy industrial projects throughout India.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', maxWidth: '1280px', margin: '0 auto' }}>
              {useCases.map((u, i) => (
                <div key={i} style={{ backgroundColor: '#161630', borderRadius: "10px", padding: "30px 16px", textAlign: 'center', border: '1px solid rgba(249,115,22,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ fontSize: "24px", marginBottom: "20px", background: "rgba(249,115,22,0.15)", width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
                    {u.icon}
                  </div>
                  <h4 style={{ fontSize: "13px", fontWeight: "600", color: "#fff", marginBottom: "8px", lineHeight: 1.2 }}>{u.title}</h4>
                  <p style={{ color: "#888", fontSize: "11px", lineHeight: 1.5 }}>{u.desc}</p>
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
