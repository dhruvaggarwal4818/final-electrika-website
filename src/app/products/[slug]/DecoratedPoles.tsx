import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./decorated-poles.module.css";

export default function DecoratedPolesPage() {
  const specParams = [
    { name: "Height Range", val: "3 m, 4 m, 5 m, 6 m, 7 m, 8 m" },
    { name: "Material", val: "Aluminium die-cast (pole shaft and ornamental components)" },
    { name: "Design Options", val: "100+ catalogue designs — classical, colonial, contemporary, themed" },
    { name: "Surface Finish", val: "Polyester powder coating, UV and weather resistant" },
    { name: "Accent Finish", val: "Brass / gold-tone detailing (design dependent)" },
    { name: "Luminaire Compatibility", val: "LED lantern heads, decorative glass/acrylic diffusers" },
    { name: "Base Type", val: "Decorative cast base cover with anchor bolt access" },
    { name: "Mounting", val: "Surface-mount on RCC foundation with anchor bolts" },
    { name: "Bracket Style", val: "Integrated cast scrollwork or straight arm (per design)" },
    { name: "Wind Load Rating", val: "Designed per IS 875 (Part III) for project wind zone" },
    { name: "Cable Entry", val: "Internal cable routing through pole shaft" },
    { name: "Customisation", val: "Custom colour, finish, and bracket variations available" },
    { name: "Lead Time", val: "3–5 weeks depending on design and quantity" }
  ];

  const features = [
    { title: "Aluminium Die-Cast Construction", desc: "Precision die-cast aluminium components deliver crisp ornamental detailing that sand-cast or fabricated steel poles cannot replicate, while remaining lightweight and corrosion-resistant.", icon: "🏛️" },
    { title: "100+ Heritage & Modern Designs", desc: "Catalogue spans classical European scrollwork, colonial-style lanterns, minimalist contemporary columns, and themed designs for heritage zones, gardens, and boulevards.", icon: "🎨" },
    { title: "Integrated Ornamental Bracket", desc: "Cast scrollwork brackets connect the lamp head to the pole as a single design language — not a bolt-on afterthought — for a cohesive, premium appearance.", icon: "📐" },
    { title: "Corrosion-Resistant Finish", desc: "Polyester powder coating over die-cast aluminium resists weathering, UV fade, and coastal salt exposure far longer than painted mild steel alternatives.", icon: "🛡️" },
    { title: "Brass & Gold-Tone Accents", desc: "Decorative finial caps and banding in brass or gold-tone detailing add a premium architectural touch, commonly specified for hotel driveways, government plazas, and luxury townships.", icon: "✨" },
    { title: "3 m to 8 m Range", desc: "Covers garden pathway lighting at the shorter end up to boulevard and plaza lighting at 8 m, fitting most landscaped and heritage-zone lighting plans.", icon: "📏" }
  ];

  const sizes = [
    { height: "3", suffix: "m", tag: "Standard", title: "Garden Pathway", desc: "Compact scale for garden walkways and courtyard lighting.", popular: false },
    { height: "4", suffix: "m", tag: "Standard", title: "Residential Avenue", desc: "Township internal roads and residential boulevards.", popular: false },
    { height: "5", suffix: "m", tag: "Most Popular", title: "Most Popular", desc: "Balanced scale for most heritage and plaza installations.", popular: true },
    { height: "6", suffix: "m", tag: "Standard", title: "Commercial Boulevard", desc: "Wider roads, hotel driveways, commercial high-streets.", popular: false },
    { height: "8", suffix: "m", tag: "Premium", title: "Grand Plaza", desc: "Monumental scale for government plazas and large avenues.", popular: false }
  ];

  const LocationPin = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const useCases = [
    { title: "Heritage Zones", desc: "Old city restoration projects, historic district lighting", icon: LocationPin },
    { title: "Garden & Park Pathways", desc: "Botanical gardens, public parks, riverside promenades", icon: LocationPin },
    { title: "Premium Townships", desc: "Gated communities, villa projects, luxury residential roads", icon: LocationPin },
    { title: "Hotel & Resort Driveways", desc: "Entrance avenues, porte-cochère, landscaped courtyards", icon: LocationPin },
    { title: "Government Plazas", desc: "Secretariat lawns, monument surroundings, ceremonial avenues", icon: LocationPin },
    { title: "Commercial Boulevards", desc: "High-street retail districts, mixed-use development walkways", icon: LocationPin }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Decorative Poles</span>
              <h1 className={styles.heroTitle}>
                Aluminium Die-Cast <br />
                <span>Decorative Poles</span>
              </h1>
              <p className={styles.heroDesc}>
                Heritage-style decorative lighting poles for landscaped roads, parks, plazas, and premium townships. Cast in aluminium for a refined, long-lasting finish, available from 3 m to 8 m, with over 100 design options to match any architectural theme.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>3–8 m</span>
                  <span className={styles.metaLabel}>Height Range</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>100+</span>
                  <span className={styles.metaLabel}>Designs</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Aluminium</span>
                  <span className={styles.metaLabel}>Die-Cast</span>
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
                src="/figma_assets_deco/e68d606018ae12ca5ee249fc3dac1004f3739c5c.png"
                alt="Decorative Poles"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                priority
              />
              <div className={styles.tagInStock}>In Stock</div>
            </div>
          </div>
        </section>

        {/* 2. Key Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Why Choose these designer poles.</h2>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip}>
              <h4 className={styles.highlightStripTitle}>100+ Design Catalogue:</h4>
              <p className={styles.highlightStripDesc}>
                From classic wrought-iron scrollwork to minimalist contemporary profiles, our decorative pole range spans more than 100 distinct designs. Share your project theme or reference image and we'll recommend matching options from the catalogue.
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

        {/* 3. Available Sizes Section */}
        <section className={styles.sizesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Sizes</span>
            <h2 className={styles.sectionTitle}>Select the Right Specification</h2>
            <p className={styles.sectionIntro}>
              Standard configurations shown below. Custom sizes available on request.
            </p>

            <div className={styles.sizesGrid}>
              {sizes.map((size, idx) => (
                <div key={idx} className={`${styles.sizeCard} ${size.popular ? styles.popular : ''}`}>
                  <div className={styles.sizeBadge}>{size.tag}</div>
                  <h3 className={styles.sizeHeight}>
                    {size.height} <span>{size.suffix}</span>
                  </h3>
                  <p className={styles.sizeTitle}>{size.title}</p>
                  <p className={styles.sizeDesc}>{size.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Specifications Table */}
        <section id="specs" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer datasheets available on request after enquiry.
            </p>

            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span style={{color: 'white'}}>📄</span>
                <span className={styles.specsHeaderTitle}>Technical Specification Sheet</span>
              </div>
              <table className={styles.specsTable}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {specParams.map((spec, idx) => (
                    <tr key={idx}>
                      <td className={styles.specLabel}>{spec.name}</td>
                      <td className={styles.specValue}>{spec.val}</td>
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
            <span className={styles.sectionEyebrow}>Use Cases</span>
            <h2 className={styles.sectionTitle}>Where This Product Is Used</h2>
            <p className={styles.sectionIntro}>
              Trusted across critical infrastructure and industrial projects throughout India.
            </p>

            <div className={styles.useCasesGrid}>
              {useCases.map((uc, index) => (
                <div key={index} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <span style={{ color: '#f97316', display: 'flex' }}>{uc.icon}</span>
                  </div>
                  <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                  <p className={styles.useCaseDesc}>{uc.desc}</p>
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
