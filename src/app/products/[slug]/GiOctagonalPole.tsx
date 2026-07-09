import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./gi-octagonal-pole.module.css";

export default function GiOctagonalPolePage() {
  const specParams = [
    { name: "Height Range", val: "3 m, 4 m, 5 m, 6 m, 7 m, 8 m, 9 m, 10 m, 11 m, 12 m", highlight: false },
    { name: "Cross-Section", val: "Octagonal (8-sided), tapered", highlight: false },
    { name: "Material", val: "IS 2062 Grade A Mild Steel", highlight: false },
    { name: "Surface Finish", val: "Hot-Dip Galvanised (IS 4759), min. 86 µm", highlight: true },
    { name: "Arm Configuration", val: "Single arm / Double arm (both sides)", highlight: false },
    { name: "Arm Length", val: "0.5 m – 2 m (project specific)", highlight: false },
    { name: "Base Plate", val: "Pre-welded with anchor bolt holes, project-specific bolt circle", highlight: false },
    { name: "Wall Thickness", val: "3 mm – 6 mm (height dependent)", highlight: true },
    { name: "Door Opening", val: "Hand-hole with lockable cover for cable access", highlight: false },
    { name: "Design Wind Speed", val: "Up to 150 km/h (IS 875 Part III)", highlight: false },
    { name: "Foundation Bolts", val: "Supplied as accessory (specify on order)", highlight: false },
    { name: "Applicable Standards", val: "IS 2713, IS 4759, IS 875, IS 2062", highlight: false },
    { name: "Test Certificates", val: "Available on bulk order quantities (MTC)", highlight: false },
    { name: "Lead Time", val: "2–3 weeks ex-factory, subject to order size", highlight: false }
  ];

  const features = [
    { title: "Octagonal Cross-Section", desc: "Eight-sided tapered profile offers a superior strength-to-weight ratio over round poles, with a sleeker architectural appearance for street and avenue lighting.", icon: "⬡" },
    { title: "Hot-Dip Galvanised Finish", desc: "Full immersion galvanising to IS 4759 standard protects against rust and corrosion for 20+ years of outdoor service life, even in coastal and industrial pollution zones.", icon: "🛡️" },
    { title: "Single & Double Arm Options", desc: "Configurable bracket arms support one or two luminaires per pole — ideal for standard roads (single arm) or median/dual-carriageway lighting (double arm).", icon: "📐" },
    { title: "3 m to 12 m Range", desc: "Covers the full spectrum from pathway and parking lot lighting up to arterial road and highway service-lane lighting.", icon: "📏" },
    { title: "Genuine Mill-Tested Steel", desc: "Manufactured from certified IS 2062 structural steel coil. Material test certificates available for bulk order quantities on request.", icon: "🔩" },
    { title: "Base Plate & Door Opening", desc: "Pre-fabricated base plate with anchor bolt holes and a hand-hole door opening with cover for safe access to internal wiring and cable termination.", icon: "🚪" }
  ];

  const sizes = [
    { height: "3", suffix: "m", tag: "Standard", title: "Compact", desc: "Pathways, parking areas, low-rise residential lanes.", popular: false },
    { height: "6", suffix: "m", tag: "Most Popular", title: "Standard Street", desc: "Most common height for colony and arterial road lighting.", popular: false },
    { height: "9", suffix: "m", tag: "Heavy Duty", title: "Highway Service", desc: "Highway service lanes, larger junctions, double-arm capable.", popular: false },
    { height: "12", suffix: "m", tag: "Extreme", title: "Extended Reach", desc: "Wide roads, large junctions requiring extended luminaire reach.", popular: false }
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Street & Road Lighting", desc: "Residential roads, colonies, internal township roads", icon: LocationPin },
    { title: "Highway Service Lanes", desc: "Single and dual-arm lighting along service roads", icon: LocationPin },
    { title: "Parking Areas", desc: "Commercial and institutional parking lot illumination", icon: LocationPin },
    { title: "Pathways & Promenades", desc: "Parks, riverside walks, pedestrian boulevards", icon: LocationPin },
    { title: "Industrial Estates", desc: "Internal road lighting within factories and logistics parks", icon: LocationPin },
    { title: "Smart City Projects", desc: "Standardised pole specification for municipal tenders", icon: LocationPin }
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
                <span className={styles.heroBadge}>GI Octagonal Poles</span>
                <h1 className={styles.heroTitle}>
                  Galvanised Octagonal <br />
                  <span className={styles.orangeText}>Steel Poles</span>
                </h1>
                <p className={styles.heroDesc}>
                  Hot-dip galvanised octagonal poles for street lighting and outdoor illumination, available from 3 m to 12 m in single-arm and double-arm configurations. Complete with foundation hardware — test certificates provided on bulk orders.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3–12 m</span>
                    <span className={styles.metaLabel}>Height Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Single / Double</span>
                    <span className={styles.metaLabel}>Arm Options</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Genuine + TC</span>
                    <span className={styles.metaLabel}>On Bulk Orders</span>
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
                    src="/figma_assets/gi_octagonal_pole_hero.png"
                    alt="Galvanised Octagonal Steel Poles"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-gi-octagonal-pole' }}
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
              <h4 style={{ color: '#f97316', fontWeight: 700, margin: '0 0 8px 0', fontSize: '15px' }}>Tensile & Galvanisation:</h4>
              <p style={{ color: '#555555', margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                Tensile strength test report and galvanisation test certificate (MTC) is available for qualifying bulk order quantities. Please specify your required testing criteria to your company rep so we can confirm TC availability for your batch.
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

        {/* 3. Available Sizes Variants Section */}
        <section className={styles.sizesSection} style={{ backgroundColor: '#f0f2f8', padding: '64px 0' }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Sizes</span>
            <h2 className={styles.sectionTitle}>Select the Right Specification</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro} style={{ marginBottom: '32px' }}>
              Standard configurations shown below. Custom sizes available on request.
            </p>

            <div className={styles.variantsGrid} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}>
              {sizes.map((sz, idx) => (
                <div
                  key={idx}
                  className={`${styles.variantCard} ${sz.popular ? styles.variantCardPopular : ""}`}
                >
                  <span className={`${styles.variantBadge} ${sz.popular ? styles.variantBadgePopular : ""}`} style={{ marginBottom: '16px', display: 'inline-block' }}>
                    {sz.tag}
                  </span>
                  <div style={{ margin: '8px 0 16px 0' }}>
                    <span style={{ fontSize: '32px', fontWeight: 700, color: '#0d0d1a' }}>{sz.height}</span>
                    <span style={{ fontSize: '15px', color: '#888888', fontWeight: 700, marginLeft: '2px' }}>{sz.suffix}</span>
                  </div>
                  <h4 style={{ color: '#555555', fontSize: '14px', fontWeight: 600, margin: '0 0 8px 0' }}>{sz.title}</h4>
                  <p style={{ color: '#999999', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>{sz.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technical Specifications Table */}
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

        {/* 5. Use Cases Section */}
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
