"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pce-plug-socket.module.css";

export default function PcePlugSocketPage() {
  const features = [
    {
      icon: "🇦🇹",
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine products with manufacturer documentation and warranty.",
    },
    {
      icon: "💧",
      title: "IP44 to IP67 Rating",
      desc: "Wide range of protection classes — from splash-proof industrial plugs to fully submersible underwater connectors.",
    },
    {
      icon: "⚡",
      title: "16A to 125A Range",
      desc: "Full current range covering light-duty portable tools through to heavy industrial three-phase machinery connections.",
    },
    {
      icon: "🚧",
      title: "Construction Site Ready",
      desc: "Robust thermoplastic housing rated for impact, UV, and chemical resistance. Designed to survive site conditions.",
    },
    {
      icon: "🔒",
      title: "Interlocked Versions",
      desc: "Interlock switch models prevent live insertion and withdrawal — mandatory in many safety-regulated environments.",
    },
    {
      icon: "🔌",
      title: "Panel-Mount & Surface",
      desc: "Complete ecosystem: plugs, sockets, couplers, extension reels, distribution boards, and panel-mount versions.",
    },
  ];

  const specRows = [
    { param: "Brand / Origin", val: "PCE Elektro GmbH, Austria", alt: false },
    { param: "Standards", val: "IEC 60309, EN 60309", alt: true },
    { param: "Current Ratings", val: "16A, 32A, 63A, 125A", alt: false },
    { param: "Voltage Ratings", val: "110V, 230V, 400V, 500V", alt: true },
    { param: "Poles", val: "2P+E, 3P+E, 3P+N+E", alt: false },
    { param: "Frequency", val: "50 Hz / 60 Hz", alt: true },
    { param: "IP Ratings", val: "IP44, IP54, IP67 (model specific)", alt: false },
    { param: "Housing", val: "Reinforced thermoplastic (PA66)", alt: true },
    { param: "Operating Temp.", val: "-25°C to +40°C", alt: false },
    { param: "Colour Coding", val: "IEC 60309 compliant (blue/red/yellow/black)", alt: true },
    { param: "Interlocked Version", val: "Available (MAINS before switching)", alt: false },
    { param: "Certifications", val: "CE, VDE, ÖVE, SABS", alt: true },
  ];

  const useCases = [
    { icon: "🏗️", title: "Construction Sites", desc: "Temporary power distribution, site offices, tower cranes" },
    { icon: "🏭", title: "Manufacturing Plants", desc: "Machine tool connections, welding equipment, compressors" },
    { icon: "🎭", title: "Event & Stage", desc: "Temporary power for concerts, exhibitions, outdoor events" },
    { icon: "🚢", title: "Marine & Offshore", desc: "Shore power connections, vessel electrical systems" },
    { icon: "⛏️", title: "Mining & Quarrying", desc: "Heavy duty connections for underground and surface machinery" },
    { icon: "💻", title: "Data Centres", desc: "UPS output connections, redundant power switching" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                PCE Connectors
              </span>
              <h1 className={styles.heroTitle}>
                Industrial Plugs & <br />
                <span className={styles.orangeText}>Connectors</span>
              </h1>
              <p className={styles.heroDesc}>
                Austrian-engineered PCE industrial connectors — CEE plugs, sockets, couplers, and distribution boxes for construction sites, factories, and marine environments. Authorised distributor.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP44–IP67</span>
                  <span className={styles.metaLabel}>Protection</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>16A–125A</span>
                  <span className={styles.metaLabel}>Current Range</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>MULTIPLE</span>
                  <span className={styles.metaLabel}>Brand</span>
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
              <Image
                src="/figma_assets_pce_plug_socket/custom_hero_image.jpg"
                alt="Industrial Plugs & Connectors"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                style={{ objectFit: "cover" }}
                priority
              />
              <div className={styles.tagPremium}>In Stock</div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Why Choose Electrika Inc.</h2>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India logistics.
            </p>

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

        {/* SPECIFICATIONS TABLE */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span className={styles.specsHeaderTitle}>Technical Specification Sheet</span>
              </div>
              <table className={styles.specsTable}>
                <thead>
                  <tr>
                    <th>Specification Parameter</th>
                    <th>Standard Rating Details</th>
                  </tr>
                </thead>
                <tbody>
                  {specRows.map((spec, idx) => (
                    <tr key={idx}>
                      <td className={styles.specLabel}>{spec.param}</td>
                      <td className={`${styles.specValue} ${spec.alt ? styles.specValueHighlight : ''}`}>
                        {spec.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#f97316' }}>Use Cases</span>
            <h2 className={styles.sectionTitle} style={{ color: 'white', marginBottom: '16px' }}>Where Our Products Are Deployed</h2>
            <p className={styles.sectionIntro} style={{ color: '#888', marginBottom: '40px' }}>
              Trusted across critical infrastructure and commercial projects throughout India.
            </p>

            <div className={styles.useCasesGrid}>
              {useCases.map((use, index) => (
                <div key={index} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <span>{use.icon}</span>
                  </div>
                  <h3 className={styles.useCaseTitle}>{use.title}</h3>
                  <p className={styles.useCaseDesc}>{use.desc}</p>
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
