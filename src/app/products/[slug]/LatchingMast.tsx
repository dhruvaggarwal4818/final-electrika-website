import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./latching-mast.module.css";

export default function LatchingMastPage() {
  const specParams = [
    { name: "Assembly Type", val: "Highmast Latching Assembly (head frame + luminaire carriage)", highlight: false },
    { name: "Arm Configuration", val: "3-arm radial, 120° equal spacing (standard)", highlight: false },
    { name: "Latch Type", val: "Spring-loaded, self-aligning mechanical latch", highlight: true },
    { name: "Head Frame", val: "Fixed assembly, permanently mounted at pole apex", highlight: false },
    { name: "Luminaire Carriage", val: "Detachable, travels down for ground-level maintenance", highlight: false },
    { name: "Arm Joint Type", val: "Reinforced hinge and bracket connection", highlight: false },
    { name: "Guide Mechanism", val: "Central guide rope with pulley at head frame", highlight: true },
    { name: "Typical Assembly Weight", val: "Approx. 110-130 kg (3-arm configuration, all components)", highlight: false },
    { name: "Compatible Pole Height", val: "15 m to 40 m", highlight: false },
    { name: "Material", val: "Hot-dip galvanised steel components", highlight: false },
    { name: "Recommended Use Cases", val: "High-traffic, maintenance-critical sites; long-term low-maintenance installations", highlight: false },
    { name: "Pricing Tier", val: "Premium — higher cost than standard fixed/pin carriage systems", highlight: false },
    { name: "Maintenance", val: "Annual latch and spring inspection recommended", highlight: false }
  ];

  const features = [
    { title: "Self-Aligning Latch Mechanism", desc: "Spring-loaded latch arms automatically guide and lock the luminaire carriage into the correct static position against the head frame every time it is raised — eliminating manual alignment.", icon: "🔒" },
    { title: "120° Radial Arm Layout", desc: "Three primary support arms are set at precise 120° spacing around the head frame, evenly distributing the load of the luminaire carriage and improving structural balance under wind load.", icon: "📐" },
    { title: "Two-Piece Head Frame + Carriage", desc: "The system separates into a fixed head frame (permanently mounted at the pole top) and a removable luminaire carriage — the carriage travels down the pole for maintenance while the head frame stays fixed.", icon: "🏗️" },
    { title: "Heavy-Duty Hinged Arms", desc: "Each arm uses a reinforced hinge and structural connection milled from a single block of steel, allowing individual articulation as the carriage docks and undocks from the latch points.", icon: "🔩" },
    { title: "Built for Repeated Cycling", desc: "Unlike simple pin and clamp setups, the latching design is engineered for hundreds of raise-lower cycles over the system's service life without loosening or misalignment.", icon: "⚙️" },
    { title: "Rope-Guided Docking", desc: "A central guide rope threads through the head frame and carriage, ensuring the carriage remains stable and ascends on a true vertical path until lockup slots line up and latch.", icon: "🪢" }
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Highway Mega-Junctions", desc: "High-traffic interchanges where reliability is critical", icon: LocationPin },
    { title: "Airports", desc: "Installations demanding minimal unplanned maintenance downtime", icon: LocationPin },
    { title: "Ports & Container Terminals", desc: "Heavy-duty 24x7 operational lighting masts", icon: LocationPin },
    { title: "Government Flagship Projects", desc: "Tenders specifying premium-grade carriage hardware", icon: LocationPin },
    { title: "Large Stadiums", desc: "High cycle-count maintenance environments", icon: LocationPin },
    { title: "Mining & Industrial Yards", desc: "Harsh-duty sites where standard carriages wear out faster", icon: LocationPin }
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
                <span className={styles.heroBadge}>Premium — Latching Mechanisms</span>
                <h1 className={styles.heroTitle}>
                  Highmast Latching <br />
                  <span className={styles.orangeText}>Assembly System</span>
                </h1>
                <p className={styles.heroDesc}>
                  The most durable and reliable method of hoisting luminaire arms on a high mast. The latching assembly mechanically locks each arm of the luminaire carriage into a fixed, self-aligning position against the head frame — delivering a rock-solid connection that resists vibration, wind sway, and repeated raise/lower cycles far better than simple pin or clamp designs.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3-Arm</span>
                    <span className={styles.metaLabel}>CMP Spacing</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Self-Aligning</span>
                    <span className={styles.metaLabel}>Latch Design</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Premium</span>
                    <span className={styles.metaLabel}>Build Quality</span>
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
                    src="/figma_assets/latching_mast_hero_v2.png"
                    alt="Highmast Latching Assembly System"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-latching-mast' }}
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
              <h4 style={{ color: '#f97316', fontWeight: 700, margin: '0 0 8px 0', fontSize: '15px' }}>Premium Engineering — Premium Pricing:</h4>
              <p style={{ color: '#555555', margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                This latching mechanism is a precision assembly: shock-absorbers, luminaire carriages, spring-loaded latches, and guide ropes working together, and is priced accordingly higher than standard fixed or pin-type carriage systems. We recommend this option where maximum long-term durability and minimal maintenance are the priority.
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
              Full technical data. Manufacturer drawings and datasheets available on request after enquiry.
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
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.sectionEyebrow}>Use Cases</span>
              <h2 className={styles.sectionTitle}>Where This Product Is Used</h2>
              <p className={styles.sectionIntro}>
                Trusted across critical infrastructure and industrial projects throughout India.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {useCases.map((use, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span style={{ color: '#f97316', display: 'flex' }}>{use.icon}</span>
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
