import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./flp-junction-box.module.css";

export default function FlpJunctionBoxPage() {
  const specParams = [
    { name: "Product", val: "Cat. No. JB/104" },
    { name: "Enclosure", val: "Flame Proof (Ex-d), Gas Group IIA & IIB — as per IS/IEC 60079-1:2007" },
    { name: "Area Classification", val: "Ex db IIA, IIB" },
    { name: "Certification", val: "CIMFR, BIS, PESO" },
    { name: "Size", val: "80mm dia x 40mm depth" },
    { name: "Temperature Class", val: "T5" },
    { name: "Material", val: "Die cast aluminium alloy" },
    { name: "Finish", val: "Epoxy powder coated shade, as per IS:5" },
    { name: "Earthing", val: "1 No. internal & 2 Nos. external" },
    { name: "Hardware", val: "Stainless steel" },
    { name: "Gasket", val: "Neoprene / Silicon 'O' ring endless gasket" },
    { name: "Name Plate", val: "Stainless steel nameplate cum warning plate" },
    { name: "Terminals", val: "Optional: 4-way 15A strip type" },
    { name: "Cable Entry", val: "Up to 4 Nos. M20 / ½\" NPT" },
  ];

  const features = [
    {
      iconFallback: "🔥",
      title: "Flameproof Ex-d Enclosure",
      desc: "Certified Ex db IIA, IIB as per IS/IEC 60079-1:2007. Contains internal explosions and prevents flame propagation.",
    },
    {
      iconFallback: "📜",
      title: "CIMFR / BIS / PESO Certified",
      desc: "Fully certified for use in Indian hazardous-area installations, with documentation supplied for site clearance.",
    },
    {
      iconFallback: "🧱",
      title: "Die-Cast Aluminium Body",
      desc: "80mm dia x 40mm depth housing in die-cast aluminium alloy, finished with epoxy powder coating as per IS:5.",
    },
    {
      iconFallback: "🌧️",
      title: "Weatherproof Sealing",
      desc: "'O' ring endless gasket in neoprene / silicon ensures a reliable weatherproof seal at the enclosure joint.",
    },
    {
      iconFallback: "⚡",
      title: "Dual Earthing Provision",
      desc: "1 No. internal and 2 Nos. external earthing points for reliable, code-compliant grounding.",
    },
    {
      iconFallback: "🔩",
      title: "Stainless Steel Hardware",
      desc: "All external hardware in stainless steel for long-term corrosion resistance in industrial environments.",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* Warning Strip */}
        <div className={styles.warningStrip}>
          <div className={`${styles.container} ${styles.warningInner}`}>
            <div className={styles.warningIcon}>⚠️</div>
            <p className={styles.warningText}>
              <span className={styles.warningHighlight}>Certified for Hazardous Area Use · </span>
              Flame Proof (Ex-d), Gas Group IIA &amp; IIB · IS/IEC 60079-1:2007 compliant — do not open when energised
            </p>
          </div>
        </div>

        {/* 1. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>Hazardous Area Equipment</div>
                <h1 className={styles.heroTitle}>
                  FLP Junction Box <br />
                  <span className={styles.orangeText}>Flameproof Ex-d Enclosure</span>
                </h1>
                <p className={styles.heroDesc}>
                  Cat. No. JB/104 — a flameproof, weatherproof junction box / control station enclosure engineered for safe cable termination in gas-classified hazardous areas. Die-cast aluminium alloy body certified to IS/IEC 60079-1:2007.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Ex db IIA, IIB</span>
                    <span className={styles.metaLabel}>Area Class</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>T5</span>
                    <span className={styles.metaLabel}>Temp. Class</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>415V AC</span>
                    <span className={styles.metaLabel}>Voltage</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>CIMFR/BIS/PESO</span>
                    <span className={styles.metaLabel}>Certification</span>
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
                    src="/figma_assets_267/61b07bd46b17208cb9b1e62774be7d96f42d1d47.png"
                    alt="FLP flameproof junction box, blue die-cast aluminium enclosure with warning nameplate"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-flp-junction-box' }}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                  <div className={styles.tagZone}>Ex-d Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Key Features */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle}>Certified Safety for Hazardous Areas</h2>
            <p className={styles.sectionIntro}>
              Every FLP Junction Box is built and certified to contain an internal explosion, preventing ignition of the surrounding atmosphere.
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

        {/* 3. Construction Section */}
        <section className={styles.constructionSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Construction</span>
            <h2 className={styles.sectionTitle}>Built to Contain, Certified to Protect</h2>
            <p className={styles.sectionIntro}>
              A closer look at the enclosure, nameplate, and dimensional drawing for installation planning.
            </p>

            <div className={styles.constructionSplit}>
              <div className={styles.constructionVisual}>
                <Image
                  src="/figma_assets_267/c35db40ec439723114af71e6ecc2d240381e199c.png"
                  alt="FLP junction box technical data sheet and dimensional drawing"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={styles.constructionContent}>
                <h3>Key Construction Details</h3>
                <p>
                  The FLP Junction Box (Cat. No. JB/104) is machined from <strong>die-cast aluminium alloy</strong>, with a precision-ground flame-path joint between the body and cover — the defining feature of Ex-d protection, tested to contain an internal explosion without rupture.
                </p>
                <p>
                  The enclosure carries an <strong>SS nameplate-cum-warning plate</strong> clearly marked &quot;Do Not Open When Energized&quot;, along with cable entry points sized for up to 4 Nos. M20 / half-inch NPT glands or equivalent.
                </p>
                <div className={styles.constructionList}>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>Size: 80mm dia x 40mm depth</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>Temperature class T5</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>Epoxy powder coated finish (IS:5)</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>1 internal + 2 external earthing points</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>Up to 4 Nos. M20 / ½&quot; NPT cable entries</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>SS nameplate cum warning plate</span>
                  </div>
                  <div className={styles.constructionListItem}>
                    <div className={styles.constructionListBullet}></div>
                    <span>Optional 4-way 15A strip-type terminal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Specifications */}
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
                <h3>Technical Specification Sheet — Cat. No. JB/104</h3>
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

      <Footer />
    </div>
  );
}
