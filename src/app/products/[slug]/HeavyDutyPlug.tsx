import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./heavy-duty-plug.module.css";

export default function HeavyDutyPlugPage() {
  const specParams = [
    { name: "Current Ratings", val: "250A, 315A, 400A, 500A, 600A", highlight: false },
    { name: "Voltage Rating", val: "380V / 400V / 415V / 500V (3P+N+E)", highlight: true },
    { name: "Frequency", val: "50 Hz / 60 Hz", highlight: false },
    { name: "Number of Poles", val: "3P+E / 3P+N+E (5 poles)", highlight: true },
    { name: "Contact Material", val: "Copper alloy (brass/bronze), silver-plated tips on selected models", highlight: false },
    { name: "Body Material", val: "Heavy thermoplastic / die-cast aluminium alloy (model specific)", highlight: true },
    { name: "IP Rating", val: "IP44 (standard) / IP67 (submersible version)", highlight: false },
    { name: "Interlocking", val: "Mechanical safety interlock as standard", highlight: true },
    { name: "Handle", val: "Integrated moulded carrying handle", highlight: false },
    { name: "Cable Entry", val: "Gland plate for cable OD 35 mm – 80 mm", highlight: true },
    { name: "Operating Temperature", val: "-25°C to +60°C", highlight: false },
    { name: "Applicable Standards", val: "IEC 60309, EN 60309", highlight: true },
    { name: "Colour Code", val: "Red (3P, 400V–500V) / Black (special voltages) per IEC 60309", highlight: false },
    { name: "Lead Time", val: "Subject to availability — confirm with enquiry", highlight: false },
  ];

  const features = [
    {
      title: "250A to 600A Rating",
      desc: "Covers the full heavy-industry current spectrum — from large motor starters and welding rectifiers to ship shore power and arc furnace tap connections.",
      icon: "⚡",
    },
    {
      title: "Interlocked Safety Latch",
      desc: "Mechanical interlock prevents live insertion and withdrawal. The latch must be disengaged before the plug can be removed, enforcing safe switching procedures.",
      icon: "🔒",
    },
    {
      title: "Copper Alloy Contact Pins",
      desc: "Heavy copper-alloy pins provide low contact resistance, high conductivity, and long service life even under repeated make-break cycles.",
      icon: "🔌",
    },
    {
      title: "Heavy-Duty Handle",
      desc: "Integrated ergonomic carrying handle on the plug body — essential for safe one-person handling of these high-mass connectors.",
      icon: "🏗️",
    },
    {
      title: "IP44 / IP67 Protection",
      desc: "Weatherproof ratings ensure reliable operation in outdoor yards, wet process areas, and marine environments.",
      icon: "💧",
    },
    {
      title: "IEC 60309 Compliant",
      desc: "Colour-coded to international standard for easy phase identification and cross-site compatibility with matching sockets from any IEC-compliant supplier.",
      icon: "✅",
    },
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Steel & Smelting Plants", desc: "EAF, induction furnace, and ladle tap connections", icon: LocationPin },
    { title: "Shipyards & Ports", desc: "Shore-to-ship power supply; dry-dock connections", icon: LocationPin },
    { title: "Heavy Press Lines", desc: "Large stamping, forging, and extrusion machine feeds", icon: LocationPin },
    { title: "Mining Equipment", desc: "Large ventilation fans, winders, and dragline connectors", icon: LocationPin },
    { title: "Railway Maintenance", desc: "Loco shed power, heavy maintenance pit supplies", icon: LocationPin },
    { title: "Transformer Testing", desc: "High-current test bench supply and load-bank connections", icon: LocationPin },
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
                <span className={styles.heroBadge}>HD Industrial Plugs</span>
                <h1 className={styles.heroTitle}>
                  Heavy Duty Industrial <br />
                  <span className={styles.orangeText}>Plugs — 250A to 600A</span>
                </h1>
                <p className={styles.heroDesc}>
                  Extra heavy-duty industrial plugs engineered for the most demanding high-current applications. Starting at 250A and scaling to 600A, these connectors are built for smelters, heavy press lines, ship-to-shore power, and large transformer connections.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>250–600A</span>
                    <span className={styles.metaLabel}>Current Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>High Current</span>
                    <span className={styles.metaLabel}>Applications</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3P+N+E</span>
                    <span className={styles.metaLabel}>Configuration</span>
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
                    src="/figma_assets_98_3560/b361f198dc471b1b476ef8cfef2c4afa5c604d37.png"
                    alt="Heavy Duty Industrial Plugs"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage}
                    style={{ viewTransitionName: 'product-image-heavy-duty-plug' }}
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
              Quality-assured products backed by technical expertise and pan-India logistics.
            </p>

            <div className={styles.highlightStrip}>
              <strong>Note on Materials:</strong>
              <p>
                These plugs feature a heavy-duty thermoplastic or die-cast housing with aluminium body, copper/brass alloy contact pins, and a stainless-steel interlocking latch mechanism. If you need confirmed material certificates for a specific application, request a datasheet with your enquiry.
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
        <section className={styles.appsSection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrow}>Use Cases</div>
            <h2 className={styles.sectionTitle}>Where This Product Is Used</h2>
            <p className={styles.sectionDesc}>
              Trusted across critical infrastructure and industrial projects throughout India.
            </p>

            <div className={styles.appsGrid}>
              {useCases.map((use, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span className={styles.appIcon}>{use.icon}</span>
                  </div>
                  <h4 className={styles.appTitle}>{use.title}</h4>
                  <p className={styles.appDesc}>{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
