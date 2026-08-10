import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pce-plug-socket.module.css";

export default function PcePlugSocketPage() {
  const specParams = [
    { name: "Brand / Origin", val: "PCE Elektro GmbH, Austria", highlight: false },
    { name: "Standards", val: "IEC 60309, EN 60309", highlight: false },
    { name: "Current Ratings", val: "16A, 32A, 63A, 125A", highlight: false },
    { name: "Voltage Ratings", val: "110V, 230V, 400V, 500V", highlight: true },
    { name: "Poles", val: "2P+E, 3P+E, 3P+N+E", highlight: false },
    { name: "Frequency", val: "50 Hz / 60 Hz", highlight: false },
    { name: "IP Ratings", val: "IP44, IP54, IP67 (model specific)", highlight: false },
    { name: "Housing", val: "Reinforced thermoplastic (PA66)", highlight: true },
    { name: "Operating Temp.", val: "-25°C to +40°C", highlight: false },
    { name: "Colour Coding", val: "IEC 60309 compliant (blue/red/yellow/black)", highlight: false },
    { name: "Interlocked Version", val: "Available (MAINS before switching)", highlight: false },
    { name: "Certifications", val: "CE, VDE, ÖVE, SABS", highlight: false },
  ];

  const features = [
    {
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine products with manufacturer documentation and warranty.",
      icon: "🇦🇹",
    },
    {
      title: "IP44 to IP67 Rating",
      desc: "Wide range of protection classes — from splash-proof industrial plugs to fully submersible underwater connectors.",
      icon: "💧",
    },
    {
      title: "16A to 125A Range",
      desc: "Full current range covering light-duty portable tools through to heavy industrial three-phase machinery connections.",
      icon: "⚡",
    },
    {
      title: "Construction Site Ready",
      desc: "Robust thermoplastic housing rated for impact, UV, and chemical resistance. Designed to survive site conditions.",
      icon: "🚧",
    },
    {
      title: "Interlocked Versions",
      desc: "Interlock switch models prevent live insertion and withdrawal — mandatory in many safety-regulated environments.",
      icon: "🔒",
    },
    {
      title: "Panel-Mount & Surface",
      desc: "Complete ecosystem: plugs, sockets, couplers, extension reels, distribution boards, and panel-mount versions.",
      icon: "🔌",
    },
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Construction Sites", desc: "Temporary power distribution, site offices, tower cranes", icon: LocationPin },
    { title: "Manufacturing Plants", desc: "Machine tool connections, welding equipment, compressors", icon: LocationPin },
    { title: "Event & Stage", desc: "Temporary power for concerts, exhibitions, outdoor events", icon: LocationPin },
    { title: "Marine & Offshore", desc: "Shore power connections, vessel electrical systems", icon: LocationPin },
    { title: "Mining & Quarrying", desc: "Heavy duty connections for underground and surface machinery", icon: LocationPin },
    { title: "Data Centres", desc: "UPS output connections, redundant power switching", icon: LocationPin },
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
                <span className={styles.heroBadge}>PCE Connectors</span>
                <h1 className={styles.heroTitle}>
                  Industrial Plugs & <br />
                  <span className={styles.orangeText}>Connectors</span>
                </h1>
                <p className={styles.heroDesc}>
                  Austrian-engineered PCE industrial connectors — CEE plugs, sockets, couplers, and distribution boxes for construction sites, factories, and marine environments. Authorised distributor.
                </p>

                <div className={styles.metaGrid}>
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
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets_pce_plug_socket/custom_hero_image.jpg"
                    alt="Industrial Plugs & Connectors"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage}
                    style={{ viewTransitionName: 'product-image-pce-plug-socket' }}
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
