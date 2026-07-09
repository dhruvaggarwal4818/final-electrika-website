"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pce-125a-plug.module.css";

export default function Pce125APlugPage() {
  const features = [
    {
      icon: "🇦🇹",
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine 125A plugs and sockets with manufacturer documentation and warranty.",
    },
    {
      icon: "⚡",
      title: "125A Heavy Duty Rating",
      desc: "Full 125A current capacity for three-phase industrial machinery, welding sets, distribution boards, and site power feeds.",
    },
    {
      icon: "🛡️",
      title: "IP44 & IP65 Variants",
      desc: "Choose IP44 for general indoor/covered use, or IP65 for dust-tight, water-jet-resistant outdoor and washdown environments.",
    },
    {
      icon: "👷",
      title: "Construction Site Ready",
      desc: "Reinforced thermoplastic housing rated for impact, UV, and chemical resistance — built to survive rough site handling.",
    },
    {
      icon: "🔧",
      title: "Secure Screw-Locking Sleeve",
      desc: "Threaded coupling sleeve ensures a vibration-proof, positive connection that won't loosen under load or movement.",
    },
    {
      icon: "🔌",
      title: "Complete Connector Set",
      desc: "Matching plug and panel/surface-mount socket available together, plus couplers and extension options in the same range.",
    },
  ];

  const specRows = [
    { param: "Brand / Origin", val: "PCE Elektro GmbH, Austria", alt: false },
    { param: "Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Rated Current", val: "125A", alt: false },
    { param: "Voltage Ratings", val: "400V / 500V (3P+N+E)", alt: true },
    { param: "Poles", val: "3P+E, 3P+N+E", alt: false },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: true },
    { param: "IP Rating", val: "IP44 (splash-proof) / IP65 (dust-tight, water-jet resistant)", alt: false },
    { param: "Housing Material", val: "Reinforced thermoplastic (PA66), impact & UV resistant", alt: true },
    { param: "Operating Temperature", val: "-25°C to +40°C", alt: false },
    { param: "Colour Coding", val: "Red (400V), IEC 60309 compliant", alt: true },
    { param: "Contact Material", val: "Brass, silver-plated", alt: false },
    { param: "Cable Entry", val: "Suitable for 35–50 mm² cable, screw terminals", alt: true },
    { param: "Certifications", val: "CE, VDE, ÖVE, SABS", alt: false },
  ];

  const useCases = [
    { icon: "🏗️", title: "Construction Sites", desc: "Main power feed to site distribution boards, tower cranes, concrete pumps" },
    { icon: "🏭", title: "Manufacturing Plants", desc: "High-load machine connections, industrial compressors, heavy motors" },
    { icon: "⚡", title: "Diesel Generator Hook-up", desc: "Temporary and standby generator to load-bank connections" },
    { icon: "🚢", title: "Marine & Offshore", desc: "Shore power connections for large vessels and rigs" },
    { icon: "⛏️", title: "Mining & Quarrying", desc: "Heavy-duty power connections for underground and surface machinery" },
    { icon: "💻", title: "Data Centres", desc: "High-current UPS and generator switching connections" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO SECTION */}
        <section className={styles.heroSection} style={{ padding: '0 10px', marginTop: '10px' }}>
          <div className={styles.heroContainer} style={{ position: 'relative', overflow: 'hidden', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '80px', gap: 0 }}>
            <Image
              src="/figma_assets_254_3022_v2/8bff05589e959f191914ae18dca3cee0cfb98e2f.png"
              alt="125A industrial plug and socket, IP44/65 rated, held by a technician on a work site"
              fill
              className={styles.heroBgImg}
              style={{ objectFit: "cover", opacity: 0.4 }}
              priority
            />
            <div className={styles.heroContent} style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%' }}>
              <span className={styles.heroBadge} style={{ background: "rgba(249,115,22,0.15)", border: "1px solid rgba(249,115,22,0.3)", color: "#f97316", padding: "6px 14px", borderRadius: "20px", display: "inline-block", marginBottom: "20px", fontWeight: "bold", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                PCE Connectors
              </span>
              <h1 className={styles.heroTitle} style={{ fontSize: "56px", color: "#fff", fontWeight: "bold", lineHeight: 1.1, marginBottom: "24px" }}>
                125A Plug & Socket <br />
                <span style={{ color: "#f97316" }}>IP44 / IP65</span>
              </h1>
              <p className={styles.heroDesc} style={{ color: "#aab0c0", fontSize: '16px', lineHeight: 1.6, maxWidth: "600px", marginBottom: "40px" }}>
                Heavy-duty 125A industrial plug and socket set built to IEC 60309 / EN 60309 standards. Reinforced thermoplastic housing rated IP44 or IP65 for splash-proof and dust/water-jet-proof duty on construction sites, factory floors, and heavy machinery connections.
              </p>
              
              <div style={{ display: "flex", gap: "40px", marginBottom: "40px" }}>
                <div>
                  <div style={{ color: "#f97316", fontSize: "24px", fontWeight: "bold" }}>125A</div>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Rated Current</div>
                </div>
                <div>
                  <div style={{ color: "#f97316", fontSize: "24px", fontWeight: "bold" }}>IP44/65</div>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Protection</div>
                </div>
                <div>
                  <div style={{ color: "#f97316", fontSize: "24px", fontWeight: "bold" }}>400/500V</div>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Voltage</div>
                </div>
                <div>
                  <div style={{ color: "#f97316", fontSize: "24px", fontWeight: "bold" }}>24hr</div>
                  <div style={{ color: "#888", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Quote TAT</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <a href="#enquiry-form" style={{ background: "#f97316", color: "#fff", padding: "14px 28px", borderRadius: "8px", fontWeight: "bold", fontSize: "15px", textDecoration: "none" }}>Request Quotation →</a>
                <a href="#specifications" style={{ background: "transparent", color: "#fff", border: "1.6px solid rgba(255,255,255,0.3)", padding: "14px 28px", borderRadius: "8px", fontWeight: "bold", fontSize: "15px", textDecoration: "none" }}>View Specifications</a>
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
                <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", margin: 0 }}>Technical Specification Sheet — 125A Plug & Socket IP44/65</h3>
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
