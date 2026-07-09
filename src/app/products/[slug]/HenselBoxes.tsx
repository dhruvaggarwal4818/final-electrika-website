import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./hensel-boxes.module.css";

export default function HenselBoxesPage() {
  const specParams = [
    { name: "Brand / Origin", val: "Heinrich Hensel GmbH, Germany" },
    { name: "Standards", val: "IEC 62208, EN 60670" },
    { name: "Material Options", val: "GRP (thermosetting), ASA, Steel" },
    { name: "Size Range", val: "80×80×55 mm to 800×600×300 mm" },
    { name: "IP Rating", val: "IP55 / IP65 / IP66 (model specific)" },
    { name: "IK Rating", val: "IK07 to IK10" },
    { name: "Colour", val: "Light grey RAL 7035 / Other on request" },
    { name: "Gland Knockouts", val: "Multiple sizes, metric and PG" },
    { name: "Door Lock", val: "Key lock / quarter-turn / padlock provision" },
    { name: "Operating Temp.", val: "-35°C to +70°C" },
    { name: "Internal Mounting", val: "DIN rail 35mm / mounting plate" },
    { name: "Certifications", val: "CE, VDE, ATEX (selected models)" },
  ];

  const features = [
    {
      iconFallback: "🇩🇪",
      title: "Hensel Germany — Authorised",
      desc: "Official distributor of Heinrich Hensel GmbH, Germany. Over 130 years of German engineering excellence.",
    },
    {
      iconFallback: "🛡️",
      title: "IP55 to IP66 Protection",
      desc: "Weatherproof and dustproof enclosures for indoor and outdoor installation in industrial environments.",
    },
    {
      iconFallback: "🏗️",
      title: "GRP & Steel Range",
      desc: "Glass-reinforced polyester (GRP) for chemical resistance; powder-coated steel for robustness and earthing.",
    },
    {
      iconFallback: "✅",
      title: "DIN Rail Ready",
      desc: "Internal DIN rail mounting systems pre-fitted or configurable for MCBs, RCCBs, MCCBs, and contactors.",
    },
    {
      iconFallback: "🏢",
      title: "Consumer Units",
      desc: "IK10 rated domestic and commercial consumer units with integrated busbars and cable management.",
    },
    {
      iconFallback: "⚙️",
      title: "Custom Configurations",
      desc: "Blank enclosures, pre-wired panels, metering boxes, and bespoke configurations to project drawings.",
    },
  ];

  const useCases = [
    {
      iconFallback: "🏭",
      title: "Industrial Plants",
      desc: "Machine control panels, junction boxes, control enclosures"
    },
    {
      iconFallback: "🛣️",
      title: "Infrastructure",
      desc: "Road-side control boxes, utility metering panels, pump control"
    },
    {
      iconFallback: "🏗️",
      title: "Construction",
      desc: "Temporary distribution boards, site offices, welfare units"
    },
    {
      iconFallback: "⚓",
      title: "Marine / Coastal",
      desc: "Salt air resistant GRP enclosures for coastal installations"
    },
    {
      iconFallback: "☢️",
      title: "Hazardous Areas",
      desc: "ATEX-certified enclosures for Zone 1 and Zone 2 locations"
    },
    {
      iconFallback: "🏠",
      title: "Residential",
      desc: "IK10 consumer units for premium residential and commercial applications"
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
                <div className={styles.heroBadge}>Hensel Boxes</div>
                <h1 className={styles.heroTitle}>
                  Enclosures & Distribution <br />
                  <span className={styles.orangeText}>Hensel Boxes</span>
                </h1>
                <p className={styles.heroDesc}>
                  German-engineered Hensel electrical enclosures, junction boxes, and distribution boards. From IP55 weatherproof boxes to IK10 anti-vandal consumer units. Authorised distributor.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP55–IP66</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Made in Germany</span>
                    <span className={styles.metaLabel}>Origin</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Hensel GmbH</span>
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
                    src="/figma_assets_95/ba4ee5b43dd4909a4c7fcf0cffd13c7d5da1bb03.png"
                    alt="Hensel Boxes"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-hensel-boxes' }}
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
              Quality-assured products backed by technical expertise and pan-India logistics.
            </p>

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
              Full technical data sheet. Download available on request after enquiry submission.
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
              <h2 className={styles.sectionTitle}>Where Our Products Are Deployed</h2>
              <p className={styles.sectionIntro} style={{ maxWidth: "528px", margin: "0 auto" }}>
                Trusted across critical infrastructure and commercial projects throughout India.
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
