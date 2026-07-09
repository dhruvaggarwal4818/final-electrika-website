import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./flag-mast-poles.module.css";

export default function FlagMastPolesPage() {
  const specParams = [
    { name: "Height Range", val: "16 m, 20 m, 25 m, 30 m, 36 m, 40 m, 45 m, 50 m, 60 m (custom)", highlight: false },
    { name: "Number of Sections", val: "Minimum 3 sections (flanged or socketed joints)", highlight: false },
    { name: "Material", val: "IS 2062 Grade A/B Mild Steel", highlight: false },
    { name: "Surface Finish", val: "Hot-Dip Galvanised (IS 4759), minimum 86 µm coating", highlight: true },
    { name: "Shape", val: "Polygonal (8/12/16 sided) or Conical", highlight: false },
    { name: "Base Diameter", val: "Varies: 300 mm (16 m) to 900 mm (60 m)", highlight: false },
    { name: "Wall Thickness", val: "4 mm – 12 mm (height and wind-zone dependent)", highlight: false },
    { name: "Design Wind Speed", val: "Up to 180 km/h (IS 875 Part III)", highlight: true },
    { name: "Hoisting System", val: "Electric motor drive, 230V AC, 0.5 HP – 2 HP", highlight: false },
    { name: "Rope Type", val: "SS304 stainless steel wire rope, 6×19 construction", highlight: false },
    { name: "Rope Diameter", val: "6 mm – 12 mm (height dependent)", highlight: false },
    { name: "Aviation Light", val: "Red LED, 10W, 360° visibility, IP66, DGCA compliant", highlight: false },
    { name: "Flag Size (max)", val: "2×3 ft (16 m) up to 12×8 m (60 m)", highlight: false },
    { name: "Foundation", val: "Anchor bolt cage supplied; civil design drawing provided", highlight: false },
    { name: "Applicable Standards", val: "IS 2713, IS 4759, IS 875, IS 2062", highlight: false },
    { name: "Lead Time", val: "4–6 weeks from drawing approval (custom heights)", highlight: false }
  ];

  const features = [
    { title: "3-Section Minimum Design", desc: "Poles are manufactured in at least three telescoping or flanged sections for road transport and site assembly — no heavy-lift crane needed for transport.", icon: "🏗️" },
    { title: "16 m to 60 m Heights", desc: "Standard range covers monument poles, institutional flagpoles, and landmark mega-masts. Heights above 30 m are custom engineered to wind-load calculations.", icon: "📏" },
    { title: "Hot-Dip Galvanised", desc: "Full structural zinc coating to IS 4759, providing 25+ years of corrosion protection — critical for coastal and high-humidity installations.", icon: "🛡️" },
    { title: "Electric Hoisting Motor", desc: "Heavy-duty motor and pulley system for raising and lowering flags remotely. Suitable for flags up to 12×8 m on tall masts.", icon: "⚙️" },
    { title: "Aviation Obstruction Light", desc: "DGCA-compliant red LED aviation warning light fitted at the apex. Mandatory for poles above 30 m near airports or helipad approach zones.", icon: "🚨" },
    { title: "Stainless Steel Rope", desc: "Marine-grade SS304/SS316 halyards replace traditional nylon ropes — corrosion-free, UV-stable, and low-friction for smooth flag movement.", icon: "🪢" }
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Government Buildings", desc: "Secretariats, panchayat offices, police headquarters", icon: LocationPin },
    { title: "Airports & Ports", desc: "Landmark masts, national flag installations at gateways", icon: LocationPin },
    { title: "Smart Cities", desc: "City entrance poles, roundabout monuments, heritage squares", icon: LocationPin },
    { title: "Corporate Campuses", desc: "SEZs, IT parks, industrial headquarters, townships", icon: LocationPin },
    { title: "Sports Stadiums", desc: "Flag rows at stadiums, velodrome flagpoles", icon: LocationPin },
    { title: "Border & Defence", desc: "BSF/CRPF posts, cantonment areas, national border monuments", icon: LocationPin }
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
                <span className={styles.heroBadge}>Flag Mast Poles</span>
                <h1 className={styles.heroTitle}>
                  Monumental Flag Mast <br />
                  <span className={styles.orangeText}>Poles & Systems</span>
                </h1>
                <p className={styles.heroDesc}>
                  Premium flag mast poles from 16 m to 60 m, manufactured in a minimum of three sections for easy transport and installation. Supplied complete with all accessories — rope, electric motor, aviation warning light, and foundation hardware.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>16–60m</span>
                    <span className={styles.metaLabel}>Height Range</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>3+ Section</span>
                    <span className={styles.metaLabel}>Construction</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Full Kit</span>
                    <span className={styles.metaLabel}>Accessories Included</span>
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
                    src="/figma_assets/flag_mast_hero.png"
                    alt="Monumental Flag Mast Poles & Systems"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-flag-mast-poles' }}
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
              <h4 style={{ color: '#f97316', fontWeight: 700, margin: '0 0 8px 0', fontSize: '15px' }}>Complete System Supply:</h4>
              <p style={{ color: '#555555', margin: 0, fontSize: '13.5px', lineHeight: 1.6 }}>
                Every flag mast is supplied as a complete kit — pole sections, wall/ground flange, stainless steel rope, electric hoisting motor, aviation obstruction light (red LED, DGCA compliant), and anchor bolt cage. Nothing extra to source.
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

      <Footer />
    </div>
  );
}
