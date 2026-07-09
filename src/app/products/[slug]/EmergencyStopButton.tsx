import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./emergency-stop.module.css";

export default function EmergencyStopButtonPage() {
  const specParams = [
    { name: "Brand / Origin", val: "Heinrich Hensel GmbH, Germany" },
    { name: "Model Reference", val: "PBS 0101 G8 (as shown)" },
    { name: "Housing Material", val: "High-impact Polycarbonate (PC), self-extinguishing, UV-stabilised" },
    { name: "IP Rating", val: "IP68 (submersible, continuous)" },
    { name: "IK Rating", val: "IK07" },
    { name: "Actuator", val: "Red mushroom-head, turn-to-release, Ø 40 mm" },
    { name: "Contact Action", val: "Positive-opening (direct-open action) per IEC 60947-5-5" },
    { name: "Contact Configuration", val: "1NC (standard); 1NO+1NC (selected models)" },
    { name: "Rated Voltage", val: "Up to 415V AC / 250V DC" },
    { name: "Rated Current", val: "Up to 10A AC / 6A DC" },
    { name: "Operating Temperature", val: "-25°C to +70°C" },
    { name: "Colour", val: "Light grey RAL 7035, red actuator" },
    { name: "Cable Entry", val: "M20 knockouts, four sides" },
    { name: "Housing Dimensions", val: "Approx. 80×80×65 mm" },
    { name: "Applicable Standards", val: "IEC 60947-5-1, IEC 60947-5-5, ISO 13850" },
    { name: "Certifications", val: "CE, VDE" },
  ];

  const features = [
    {
      icon: "/figma_assets_new/icon1.svg", // Fallbacks if SVG missing
      iconFallback: "🏭",
      title: "Hensel Germany Pedigree",
      desc: "Heinrich Hensel GmbH — over 130 years of German electrical engineering. The emergency stop enclosure inherits the same quality standards as the full Hensel range.",
    },
    {
      iconFallback: "💧",
      title: "IP68 — Fully Submersible",
      desc: "Rated for continuous immersion in water. Exceeds IP65/66 — suitable for washdown areas, outdoor plant, marine applications, and underground machinery.",
    },
    {
      iconFallback: "🌡️",
      title: "High-Temperature Tolerance",
      desc: "Polycarbonate housing selected for its heat resistance — maintains structural integrity and dimensional stability at elevated ambient temperatures found in foundries, kilns, and engine rooms.",
    },
    {
      iconFallback: "⚡",
      title: "Positive-Opening Contacts",
      desc: "NC contact opens positively (mechanically) under mushroom-head actuation — cannot weld or fail to open. This is a fundamental safety requirement per IEC 60947-5-5.",
    },
    {
      iconFallback: "🔴",
      title: "Turn-to-Release Actuator",
      desc: "Red mushroom-head actuator latches on depression and releases only by deliberate quarter-turn — prevents inadvertent restart and meets ISO 13850 Category 0 stop requirements.",
    },
    {
      iconFallback: "📦",
      title: "Compact & Surface-Mount",
      desc: "Compact housing (approx. 80×80 mm) with rear-entry cable knockouts mounts directly on machines, panels, and structures. Pre-drilled fixing holes on all four corners.",
    },
  ];

  const useCases = [
    { icon: "⚙️", title: "CNC & Machine Tools", desc: "E-stop on machining centres, lathes, and grinders" },
    { icon: "🏗️", title: "Conveyor Systems", desc: "Emergency stops at head, tail, and transfer points" },
    { icon: "📦", title: "Packaging Machinery", desc: "E-stop on filling, sealing, and wrapping lines" },
    { icon: "🔨", title: "Press & Forging", desc: "Overrun protection, die-change safety stops" },
    { icon: "⚓", title: "Marine & Offshore", desc: "Washdown-resistant controls for engine rooms and decks" },
    { icon: "🧪", title: "Food & Pharma", desc: "Hygienic washdown areas — IP68 prevents ingress during cleaning" },
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
                <div className={styles.heroBadge}>Emergency Stop — Hensel</div>
                <h1 className={styles.heroTitle}>
                  Hensel Polycarbonate <br />
                  <span className={styles.orangeText}>Emergency Stop Button</span>
                </h1>
                <p className={styles.heroDesc}>
                  German-engineered Hensel emergency stop push-button in a robust polycarbonate enclosure. Rated IP68, built to withstand high temperatures and harsh industrial environments. The mushroom-head actuator and positive-opening contact mechanism meet the strictest safety standards for machine and process control.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP68</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>High Temp</span>
                    <span className={styles.metaLabel}>Rated</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Polycarbonate</span>
                    <span className={styles.metaLabel}>Housing</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Hensel Germany</span>
                    <span className={styles.metaLabel}>Brand</span>
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
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets_new/3ecfaf6a57e2fbdee6864af8a20a381df67e7e98.png"
                    alt="Hensel Polycarbonate Emergency Stop Button"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-emergency-stop-button' }}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose Electrika Inc.</h2>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip}>
              <strong>Safety Critical Application:</strong>
              <p>
                This emergency stop device is a safety-rated component. Installation must comply with ISO 13850 (Emergency Stop) and IEC 60947-5-5. Always verify category and PL requirements with a qualified safety engineer for your specific machine application.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{f.iconFallback}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.featuresGridBottom} style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '600px' }}>
              {features.slice(4, 6).map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{f.iconFallback}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Specifications */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer datasheets and test certificates available on request after enquiry.
            </p>

            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <span>📋</span>
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
                      <td className={styles.paramVal}>{param.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Use Cases (Inline styling for speed/brevity since we know the design) */}
        <section style={{ backgroundColor: "#0d0d1a", padding: "80px 0" }}>
          <div className={styles.container}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className={styles.sectionEyebrow}>Use Cases</span>
              <h2 className={styles.sectionTitle} style={{ color: "#ffffff" }}>Where This Product Is Used</h2>
              <p className={styles.sectionIntro} style={{ margin: "0 auto", color: "#888888" }}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
              {useCases.map((uc, i) => (
                <div key={i} style={{ backgroundColor: "#161630", border: "0.8px solid rgba(249,115,22,0.1)", borderRadius: "10px", padding: "24px 16px", textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", backgroundColor: "rgba(249,115,22,0.15)", borderRadius: "50%", marginBottom: "16px" }}>
                    <span style={{ fontSize: "20px" }}>{uc.icon}</span>
                  </div>
                  <h4 style={{ fontFamily: "Inter", fontWeight: 600, fontSize: "13px", color: "#ffffff", marginBottom: "8px" }}>{uc.title}</h4>
                  <p style={{ fontFamily: "Inter", fontSize: "11px", color: "#888888", lineHeight: 1.5 }}>{uc.desc}</p>
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
