import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./lowering-mechanisms.module.css";

export default function LoweringMechanismsPage() {
  const specParams = [
    { name: "System Type", val: "Motorised lowering luminaire carriage assembly", highlight: false },
    { name: "Drive Mechanism", val: "Electric gear motor with wire rope winch", highlight: false },
    { name: "Motor Rating", val: "0.5 HP – 2 HP (height/load dependent)", highlight: false },
    { name: "Power Supply", val: "230V / 415V AC, 50 Hz", highlight: true },
    { name: "Wire Rope", val: "Galvanised steel, 6x19 construction", highlight: false },
    { name: "Carriage Type", val: "Multi-arm radial head frame, fixed luminaire spacing", highlight: false },
    { name: "Number of Luminaire Arms", val: "4 / 6 / 8 / 10 / 12 (project specific)", highlight: false },
    { name: "Guide System", val: "Internal roller guides for stable vertical travel", highlight: true },
    { name: "Control", val: "Local control panel with up/down push-button operation", highlight: false },
    { name: "Limit Switches", val: "Upper and lower travel limit switches fitted as standard", highlight: false },
    { name: "Compatible Pole Height", val: "12 m to 40 m", highlight: false },
    { name: "Safety Factor (Rope)", val: "Minimum 5:1 on rated carriage load", highlight: false },
    { name: "Applicable Standards", val: "IS 2713, IS 4759", highlight: false },
    { name: "Maintenance Interval", val: "Annual rope and motor inspection recommended", highlight: false }
  ];

  const features = [
    { title: "Motorised Winch Drive", desc: "An electric gear motor mounted inside the pole base drives a wire rope winch, raising or lowering the luminaire carriage through the full height of the pole via a single-button control switch.", icon: "⚙️" },
    { title: "Ground-Level Servicing", desc: "Maintenance crews work entirely at ground level — no scaffolding, cherry pickers, or high-access cranes required for luminaire replacement or cleaning.", icon: "🔧" },
    { title: "Multi-Arm Luminaire Carriage", desc: "A custom-built frame holds multiple luminaire brackets in a symmetrical circular arrangement, ensuring consistent light distribution restored every time the carriage is re-raised.", icon: "💡" },
    { title: "Guided Travel Path", desc: "Internal guide rollers and a track system keep the carriage centered and stable on the pole shaft during travel, preventing swinging or misalignment.", icon: "↕️" },
    { title: "Wire Rope & Pulley System", desc: "Galvanised steel wire rope runs over a heavy-duty assembly, rated with a safety factor of 5:1. Internal limit switches prevent over-travel.", icon: "🪢" },
    { title: "Reduced Maintenance Cost", desc: "Eliminates the recurring cost of specialised high-access equipment or contractors for every maintenance cycle — pays for itself over the life of the installation.", icon: "📉" }
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Highway Interchanges", desc: "Tall masts where ground-level access dramatically cuts maintenance cost", icon: LocationPin },
    { title: "Toll Plazas", desc: "High-mast lighting requiring frequent lamp checks", icon: LocationPin },
    { title: "Container Yards & Ports", desc: "Heavy-use installations needing fast turnaround maintenance", icon: LocationPin },
    { title: "Stadiums & Sports Grounds", desc: "Large-area floodlighting with multiple luminaires per mast", icon: LocationPin },
    { title: "Railway Yards", desc: "Marshalling yard lighting with restricted overhead access", icon: LocationPin },
    { title: "Industrial Complexes", desc: "Factory yard and large open-area lighting", icon: LocationPin }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Lowering Mast System</span>
                <h1 className={styles.heroTitle}>
                  High Mast with <br />
                  <span className={styles.orangeText}>Motorised Lowering System</span>
                </h1>
                <p className={styles.heroDesc}>
                  Complete high mast lighting system fitted with a motorised winch and lowering mechanism. The luminaire carriage travels down to ground level on demand, allowing maintenance teams to service, clean, or replace fixtures safely without climbing or aerial work platforms.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Motorised</span>
                    <span className={styles.metaLabel}>Winch Drive</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Ground-Level</span>
                    <span className={styles.metaLabel}>Servicing</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Multi-Arm</span>
                    <span className={styles.metaLabel}>Carriage</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>24hr</span>
                    <span className={styles.metaLabel}>Quote TAT</span>
                  </div>
                </div>

                <div className={styles.heroActions}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>
                    Request Quotation →
                  </a>
                  <a href="#specifications" className={styles.btnSecondary}>
                    View Specifications
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper} >
                  <Image
                    src="/figma_assets/lowering_mechanisms_hero.png"
                    alt="High Mast with Motorised Lowering System"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-lowering-mechanisms' }}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose Electrika Inc.</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip} style={{
              backgroundColor: '#fff7f0',
              borderLeft: '4px solid #f97316',
              borderRadius: '8px',
              padding: '20px 24px',
              marginBottom: '32px',
              fontFamily: 'var(--font-poppins)'
            }}>
              <h4 style={{ color: '#f97316', fontWeight: 700, margin: '0 0 8px 0', fontSize: '15px' }}>System Overview:</h4>
              <p style={{ color: '#555555', margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                This is a complete electromechanical assembly — pole, internal winch motor, wire rope, pulley head frame, and a multi-arm luminaire carriage that rides up and down the pole shaft. Exact configuration (number of arms, motor rating, travel speed) is tailored to project height and luminaire count.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feat, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{feat.icon}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Technical Specifications Table */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer datasheets and test certificates available on request after enquiry.
            </p>

            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <h3>Technical Specification Sheet</h3>
              </div>
              <table className={styles.specsTable}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specParams.map((param, index) => (
                    <tr key={index} className={index % 2 === 1 ? styles.altRow : ""}>
                      <td className={styles.paramName}>{param.name}</td>
                      <td className={param.highlight ? styles.paramValHighlight : styles.paramVal}>
                        {param.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Use Cases Section */}
        <section className={styles.useCasesSection} style={{ textAlign: "center" }}>
          <div className={styles.container}>
            <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className={styles.sectionEyebrow} style={{ color: "#f97316", textTransform: "uppercase", fontSize: "11px", letterSpacing: "2.5px", fontWeight: "bold" }}>Use Cases</span>
              <h2 className={styles.sectionTitle} style={{ color: "#ffffff", fontSize: "28px", marginTop: "8px", marginBottom: "16px" }}>Where This Product Is Used</h2>
              <p className={styles.sectionIntro} style={{ color: "#888888", fontSize: "15px", maxWidth: "528px", margin: "0 auto" }}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {useCases.map((use, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span style={{ color: "#f97316", display: "flex" }}>{use.icon}</span>
                  </div>
                  <h4 className={styles.appTitle}>{use.title}</h4>
                  <p className={styles.appDesc}>{use.desc}</p>
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
