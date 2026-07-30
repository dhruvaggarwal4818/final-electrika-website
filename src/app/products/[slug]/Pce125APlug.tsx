import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pce-125a-plug.module.css";

export default function Pce125APlugPage() {
  const specParams = [
    { name: "Brand / Origin", val: "PCE Elektro GmbH, Austria", highlight: false },
    { name: "Standards", val: "IEC 60309, EN 60309", highlight: false },
    { name: "Rated Current", val: "125A", highlight: false },
    { name: "Voltage Ratings", val: "400V / 500V (3P+N+E)", highlight: true },
    { name: "Poles", val: "3P+E, 3P+N+E", highlight: false },
    { name: "Frequency", val: "50 Hz / 60 Hz", highlight: false },
    { name: "IP Rating", val: "IP44 (splash-proof) / IP65 (dust-tight, water-jet resistant)", highlight: false },
    { name: "Housing Material", val: "Reinforced thermoplastic (PA66), impact & UV resistant", highlight: true },
    { name: "Operating Temperature", val: "-25°C to +40°C", highlight: false },
    { name: "Colour Coding", val: "Red (400V), IEC 60309 compliant", highlight: false },
    { name: "Contact Material", val: "Brass, silver-plated", highlight: false },
    { name: "Cable Entry", val: "Suitable for 35–50 mm² cable, screw terminals", highlight: true },
    { name: "Certifications", val: "CE, VDE, ÖVE, SABS", highlight: false },
  ];

  const features = [
    {
      title: "PCE Austria — Authorised",
      desc: "Authorised distributor of PCE Elektro GmbH Austria. Genuine 125A plugs and sockets with manufacturer documentation and warranty.",
      icon: "🇦🇹",
    },
    {
      title: "125A Heavy Duty Rating",
      desc: "Full 125A current capacity for three-phase industrial machinery, welding sets, distribution boards, and site power feeds.",
      icon: "⚡",
    },
    {
      title: "IP44 & IP65 Variants",
      desc: "Choose IP44 for general indoor/covered use, or IP65 for dust-tight, water-jet-resistant outdoor and washdown environments.",
      icon: "🛡️",
    },
    {
      title: "Construction Site Ready",
      desc: "Reinforced thermoplastic housing rated for impact, UV, and chemical resistance — built to survive rough site handling.",
      icon: "👷",
    },
    {
      title: "Secure Screw-Locking Sleeve",
      desc: "Threaded coupling sleeve ensures a vibration-proof, positive connection that won't loosen under load or movement.",
      icon: "🔧",
    },
    {
      title: "Complete Connector Set",
      desc: "Matching plug and panel/surface-mount socket available together, plus couplers and extension options in the same range.",
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
    { title: "Construction Sites", desc: "Main power feed to site distribution boards, tower cranes, concrete pumps", icon: LocationPin },
    { title: "Manufacturing Plants", desc: "High-load machine connections, industrial compressors, heavy motors", icon: LocationPin },
    { title: "Diesel Generator Hook-up", desc: "Temporary and standby generator to load-bank connections", icon: LocationPin },
    { title: "Marine & Offshore", desc: "Shore power connections for large vessels and rigs", icon: LocationPin },
    { title: "Mining & Quarrying", desc: "Heavy-duty power connections for underground and surface machinery", icon: LocationPin },
    { title: "Data Centres", desc: "High-current UPS and generator switching connections", icon: LocationPin },
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
                  125A Plug & Socket <br />
                  <span className={styles.orangeText}>IP44 / IP65</span>
                </h1>
                <p className={styles.heroDesc}>
                  Heavy-duty 125A industrial plug and socket set built to IEC 60309 / EN 60309 standards. Reinforced thermoplastic housing rated IP44 or IP65 for splash-proof and dust/water-jet-proof duty on construction sites, factory floors, and heavy machinery connections.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>125A</span>
                    <span className={styles.metaLabel}>Rated Current</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP44/65</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>400/500V</span>
                    <span className={styles.metaLabel}>Voltage</span>
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
                    src="/figma_assets_254_3022_v2/8bff05589e959f191914ae18dca3cee0cfb98e2f.png"
                    alt="125A industrial plug and socket, IP44/65 rated, held by a technician on a work site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage}
                    style={{ viewTransitionName: 'product-image-125a-plug' }}
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

      <Footer />
    </div>
  );
}
