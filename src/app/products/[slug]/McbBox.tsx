import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./mcb-box.module.css";

export default function McbBoxPage() {
  const specParams = [
    { name: "Material", val: "High-impact Polycarbonate (PC), self-extinguishing" },
    { name: "IP Rating", val: "IP65 (dust-tight + water jet); IP66 (powerful water jet)" },
    { name: "IK Rating", val: "IK08 (impact resistant)" },
    { name: "Module Range", val: "3, 4, 6, 8, 9, 12, 18, 24, 36, 48, 54 modules (single & double row)" },
    { name: "DIN Rail", val: "35 mm × 7.5 mm, pre-installed" },
    { name: "Neutral Strip", val: "Optional factory-fitted neutral busbar (specify at order)" },
    { name: "Door Type", val: "Opaque or smoked transparent cover with quarter-turn fastener" },
    { name: "Cable Entries", val: "Knockouts (bottom, sides, top) — metric PG and M-thread sizes" },
    { name: "Colour", val: "Light grey RAL 7035" },
    { name: "Operating Temp.", val: "-25°C to +60°C" },
    { name: "Gland Plate", val: "Detachable gland plate (selected models)" },
    { name: "Applicable Standards", val: "IEC 62208, EN 60670-24" },
    { name: "Certifications", val: "CE, RoHS" },
    { name: "Lead Time", val: "Ex-stock to 2 weeks depending on module size" },
  ];

  const features = [
    {
      iconFallback: "🛡️",
      title: "IP65 / IP66 Rated",
      desc: "Dust-tight and protected against powerful water jets. Suitable for outdoor installations, wet process areas, construction sites, and rooftop panels.",
    },
    {
      iconFallback: "☀️",
      title: "Polycarbonate Construction",
      desc: "High-impact, UV-stabilised polycarbonate housing resists cracking, yellowing, and brittleness even after years of outdoor exposure.",
    },
    {
      iconFallback: "🔌",
      title: "3 to 54 Module Range",
      desc: "Single-pole-equivalent module range covers everything from a small sub-board with 3 MCBs to a large distribution board with 54 modules and a main incomer.",
    },
    {
      iconFallback: "🚪",
      title: "Transparent Cover Option",
      desc: "Smoked transparent door allows inspection of MCB positions and labels without opening the enclosure — ideal for metered installations and audit requirements.",
    },
    {
      iconFallback: "⚡",
      title: "Integral Neutral Strip",
      desc: "Factory-fitted neutral link/busbar available as a build option — eliminates field-fabricated neutral bars and speeds up panel wiring on site.",
    },
    {
      iconFallback: "✅",
      title: "DIN Rail Pre-Fitted",
      desc: "Internal 35 mm DIN rail(s) supplied pre-installed. Accepts standard MCBs, RCCBs, MCCBs, isolators, and surge protection devices without modification.",
    },
  ];

  const useCases = [
    {
      iconFallback: "🏢",
      title: "Residential Buildings",
      desc: "Apartment DBs, villa consumer units, stairwell panels"
    },
    {
      iconFallback: "🏭",
      title: "Commercial Projects",
      desc: "Offices, retail, hospitals, hotels — tenant sub-boards"
    },
    {
      iconFallback: "⚙️",
      title: "Industrial Sub-Boards",
      desc: "Machine-level protection, pump stations, local isolation"
    },
    {
      iconFallback: "🏗️",
      title: "Construction Sites",
      desc: "Temporary power distribution, weatherproof site supplies"
    },
    {
      iconFallback: "☀️",
      title: "Solar & Renewables",
      desc: "String combiner boxes, AC/DC DBs, inverter protection"
    },
    {
      iconFallback: "🚢",
      title: "Marine & Ports",
      desc: "Corrosion-resistant distribution for coastal installations"
    }
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
                <div className={styles.heroBadge}>MCB Enclosures</div>
                <h1 className={styles.heroTitle}>
                  IP65/66 Polycarbonate <br />
                  <span className={styles.orangeText}>MCB Enclosure Boxes</span>
                </h1>
                <p className={styles.heroDesc}>
                  Weatherproof polycarbonate MCB distribution boxes rated IP65/IP66. Available from 3 modules to 54 modules, with optional integral neutral strip for complete wiring flexibility. Suitable for indoor and outdoor electrical panel installations.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP65/66</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3–54 Module</span>
                    <span className={styles.metaLabel}>Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Polycarbonate</span>
                    <span className={styles.metaLabel}>Material</span>
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
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets_98/afffbe29c4ab102a1582cd7bdedd70c0dfa45c5f.png"
                    alt="IP65/66 MCB Enclosure Boxes"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-mcb-box' }}
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
              <strong>Neutral Strip Option:</strong>
              <p>
                Boxes are available with or without a factory-fitted neutral strip/busbar. Simply specify your requirement at the time of order. Custom DIN rail depths and cable entry positions are also configurable.
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
            
            <div className={styles.featuresGridBottom}>
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

        {/* 4. Use Cases Section */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <div style={{ textAlign: "center" }}>
              <span className={styles.sectionEyebrow}>Use Cases</span>
              <h2 className={styles.sectionTitle}>Where This Product Is Used</h2>
              <p className={styles.sectionIntro} style={{ maxWidth: "528px", margin: "0 auto" }}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {useCases.map((app, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span className={styles.appIcon}>{app.iconFallback}</span>
                  </div>
                  <h4 className={styles.appTitle}>{app.title}</h4>
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
