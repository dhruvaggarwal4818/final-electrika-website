import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./flood-light.module.css";

export default function FloodLightPage() {
  const specParams = [
    { name: "Power Range", val: "10W to 500W", highlight: false },
    { name: "Luminous Efficacy", val: "130–160 lm/W", highlight: true },
    { name: "Colour Temperature", val: "3000K / 4000K / 5000K / 6500K", highlight: false },
    { name: "CRI", val: "≥ 80 Ra", highlight: false },
    { name: "Input Voltage", val: "85–265V AC, 50 Hz", highlight: false },
    { name: "Power Factor", val: "≥ 0.95", highlight: false },
    { name: "THD", val: "< 10%", highlight: false },
    { name: "IP Rating", val: "IP65 / IP66 (model specific)", highlight: true },
    { name: "IK Rating", val: "IK08 (impact resistant)", highlight: false },
    { name: "Operating Temperature", val: "-20°C to +55°C", highlight: false },
    { name: "Housing", val: "Die-cast aluminium, powder coated", highlight: false },
    { name: "Warranty", val: "5 Years (driver + module)", highlight: false },
    { name: "Certifications", val: "BIS, CE, RoHS", highlight: false }
  ];

  const features = [
    { title: "Energy Efficiency", desc: "Up to 160 lm/W efficacy. Reduce energy bills by 60–70% compared to traditional HPS or MH luminaires.", icon: "⚡" },
    { title: "Long Service Life", desc: "L70 rated at 50,000+ hours. Drastically reduces maintenance frequency and replacement costs.", icon: "⏳" },
    { title: "IP65 / IP66 Rated", desc: "Dust-tight and jet-water resistant enclosures suitable for harsh industrial and outdoor environments.", icon: "🛡️" },
    { title: "Wide Voltage Range", desc: "Compatible with 85–265V AC input. Suitable for fluctuating Indian grid conditions without additional stabilisers.", icon: "🔌" },
    { title: "5-Year Warranty", desc: "Full fixture warranty covering driver, LED module, and housing against manufacturing defects.", icon: "✅" },
    { title: "EESL / BEE Compliant", desc: "Products meet Bureau of Energy Efficiency norms for government tender eligibility and EESL procurement.", icon: "🏆" }
  ];

  const galleryItems = [
    { src: "/figma_assets_flood_light/756d3ce1c7bbe2d36dcd9c4a39ac21c2984e95f9.png", alt: "Front view of industrial LED flood light" },
    { src: "/figma_assets_flood_light/79a170ed404ea826613d693f4fac08614c9811aa.png", alt: "Close view of flood light housing" },
    { src: "/figma_assets_flood_light/54f047f8bbf27411d98de1e080b1347d15273917.png", alt: "Lens and reflector detail of flood light" },
    { src: "/figma_assets_flood_light/f146492e9d0d2191a80dd7612a9f136a515a48f2.png", alt: "Bracket detail of industrial flood light" }
  ];

  const useCases = [
    { title: "Warehouses & Factories", desc: "High bay and low bay fittings for industrial interiors", icon: "🏭" },
    { title: "Street & Road Lighting", desc: "IS 1944 compliant street light heads, 30W–200W", icon: "🛣️" },
    { title: "Floodlighting", desc: "Sports grounds, perimeter security, building facades", icon: "🏟️" },
    { title: "Canopy Lighting", desc: "Petrol stations, parking structures, underpasses", icon: "⛽" },
    { title: "Office & Commercial", desc: "Panel lights, downlights, troffer replacements", icon: "🏢" },
    { title: "Cold Storage", desc: "Specialist low-temperature LED fittings to -30°C", icon: "❄️" }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>LED Lighting</span>
              <h1 className={styles.heroTitle}>
                Industrial & Commercial <br />
                <span>LED Flood Lighting</span>
              </h1>
              <p className={styles.heroDesc}>
                Energy-efficient LED luminaires engineered for warehouses, factories, roads, and outdoor spaces. Cut your power costs by up to 70% while achieving superior lux levels and 50,000+ hour lifespan.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>70%</span>
                  <span className={styles.metaLabel}>Energy Savings</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>50K hr</span>
                  <span className={styles.metaLabel}>Lifespan</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP65+</span>
                  <span className={styles.metaLabel}>Protection</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>24hr</span>
                  <span className={styles.metaLabel}>Quote TAT</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#enquiry" className={styles.btnPrimary}>
                  Request Quotation →
                </a>
                <a href="#specs" className={styles.btnSecondary}>
                  View Specifications
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/figma_assets_flood_light/e3dbb7d1a18cf613cd9d92ba21670648d6d28626.png"
                alt="Industrial & Commercial LED Flood Lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                style={{ viewTransitionName: 'product-image-flood-light' }}
                priority
              />
              <div className={styles.tagPremium}>In Stock</div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Built for safety, visibility, and long service life</h2>
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
        <section id="specs" className={styles.specsSection}>
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
                  {specParams.map((spec, idx) => (
                    <tr key={idx}>
                      <td className={styles.specLabel}>{spec.name}</td>
                      <td className={`${styles.specValue} ${spec.highlight ? styles.specValueHighlight : ''}`}>
                        {spec.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. Professional Product Views Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#f97316', marginBottom: '16px', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>Image Gallery</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '40px' }}>Professional product views</h2>

            <div className={styles.galleryGrid}>
              {galleryItems.map((item, index) => (
                <div key={index} className={styles.galleryItemCard}>
                  <div className={styles.galleryImageWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 370px"
                      className={styles.galleryImage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Use Cases Section */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#f97316' }}>Hazardous Area Applications</span>
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
