import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./pbs-control-box.module.css";

export default function PbsControlBoxPage() {
  const specParams = [
    { name: "Product Type", val: "Multi-meter distribution panel (modular)" },
    { name: "Enclosure", val: "Hensel modular insulated enclosures, light grey" },
    { name: "IP Rating", val: "IP65 enclosure range (final rating depends on cable entries)" },
    { name: "Meter Compartments", val: "Individual compartments with transparent covers" },
    { name: "Meter Count", val: "As per requirement (build shown: 4 meters)" },
    { name: "Meter Type", val: "Single-phase or three-phase energy meters, as specified" },
    { name: "Meter Isolation", val: "Individual MCB / isolator per meter compartment" },
    { name: "Busbar", val: "Colour-coded R / Y / B / N busbar chamber" },
    { name: "Main Incomer", val: "Main switch / isolator, rated to total load" },
    { name: "Indication", val: "R / Y / B phase indicator lamps" },
    { name: "Outgoing Protection", val: "MCB / RCCB section, ratings as per load" },
    { name: "Mounting", val: "Wall-mounted; conduit or gland cable entry" },
  ];

  const features = [
    {
      iconFallback: "⚙️",
      title: "Built to Your Meter Count",
      desc: "Number of meters, meter type, incomer rating and outgoing MCBs are configured to your single-line diagram — from a few meters to a full building board.",
    },
    {
      iconFallback: "⚡",
      title: "Separate Meter Compartments",
      desc: "Each energy meter sits in its own compartment with its own isolating device, so every flat, shop, tenant or feeder is metered independently.",
    },
    {
      iconFallback: "🔍",
      title: "Transparent Meter Windows",
      desc: "Clear covers let meter readings be taken from outside without opening compartments or exposing live parts.",
    },
    {
      iconFallback: "🔌",
      title: "Busbar Chamber & Main Switch",
      desc: "A dedicated chamber carries colour-coded R / Y / B / N busbars, fed through a main switch in the central section with a viewing window.",
    },
    {
      iconFallback: "🔴",
      title: "Phase Indicator Lamps",
      desc: "Red, yellow and blue lamps on the front panel show at a glance that all three incoming phases are present.",
    },
    {
      iconFallback: "🧩",
      title: "Expandable Modular Design",
      desc: "Hensel modular enclosures join side-by-side and stack, so meter compartments can be added later as the building or load grows.",
    },
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
                <div className={styles.heroBadge}>Hensel Modular Meter Panel</div>
                <h1 className={styles.heroTitle}>
                  Multi-Meter <br />
                  <span className={styles.orangeText}>Panel Box</span>
                </h1>
                <p className={styles.heroDesc}>
                  Wall-mounted multi-meter distribution panels built from Hensel modular enclosures — separate transparent meter compartments, a colour-coded busbar chamber, main switch with R-Y-B phase lamps, and an MCB section for outgoing circuits. Built to your meter count for apartments, commercial complexes and shared industrial buildings.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Custom Built</span>
                    <span className={styles.metaLabel}>Configuration</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Hensel</span>
                    <span className={styles.metaLabel}>Enclosure</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Modular</span>
                    <span className={styles.metaLabel}>Expandable</span>
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
                    src="/figma_assets_120/0974c8596a588eb83994a8b16a3c0cc5d8f42ffa.png"
                    alt="Hensel modular multi-meter panel box with four energy meter compartments, busbar chamber, main switch and R-Y-B phase lamps"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-pbs-control-box' }}
                    priority
                  />
                  <div className={styles.tagPremium}>Made to Order</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>What&apos;s Inside the Panel</h2>
            <p className={styles.sectionIntro}>
              One incoming supply, one main switch and a common busbar — split into separately metered, separately protected outgoing circuits.
            </p>

            <div className={styles.highlightStrip}>
              <strong>Built Around Your Requirement:</strong>
              <p>Every multi-meter panel is configured to your project — number and type of meters, main switch rating, outgoing MCB/RCCB ratings and busbar arrangement. Share your single-line diagram (SLD) or simply your meter count and load, and we will propose the layout and quote accordingly.</p>
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
              Typical build data. Final meter count, ratings and layout are confirmed in the general arrangement (GA) drawing shared with your quotation.
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


      </main>

    </div>
  );
}
