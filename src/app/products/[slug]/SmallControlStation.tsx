import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./small-control-station.module.css";

export default function SmallControlStationPage() {
  const specParams = [
    { name: "Enclosure Material", val: "Polycarbonate / Thermoplastic (UV-stabilised, self-extinguishing)" },
    { name: "IP Rating", val: "IP65 (dust-tight + water jet protection)" },
    { name: "IK Rating", val: "IK09 (10 Joule impact resistance)" },
    { name: "Door Options", val: "Transparent (smoked) or Opaque" },
    { name: "Protection Devices", val: "MCB / RCCB — configurable count and rating" },
    { name: "Industrial Sockets", val: "IEC 60309 — blue (230V) and red (415V 3-phase) as required" },
    { name: "Internal Wiring", val: "Factory pre-wired, colour-coded, terminal block connections" },
    { name: "DIN Rail", val: "35 mm DIN rail, pre-installed" },
    { name: "Cable Entry", val: "Bottom/side gland plate, configurable knockouts" },
    { name: "Mounting", val: "Wall-mount or pole-mount bracket (configurable)" },
    { name: "Operating Temperature", val: "-25°C to +60°C" },
    { name: "Colour", val: "Light grey RAL 7035 (standard)" },
    { name: "Brand Reference", val: "Hensel-style modular construction (as shown)" },
    { name: "Lead Time", val: "2–3 weeks depending on configuration" },
  ];

  const features = [
    {
      iconFallback: "🛡️",
      title: "IP65 Weatherproof Rating",
      desc: "Dust-tight and protected against water jets from any direction — suitable for outdoor mounting on construction sites, factory yards, and exposed installations.",
    },
    {
      iconFallback: "🔨",
      title: "IK09 High Impact Resistance",
      desc: "Rated to withstand a 10-joule impact — significantly tougher than standard enclosures, protecting internal components in high-traffic industrial and site environments.",
    },
    {
      iconFallback: "☀️",
      title: "Polycarbonate / Thermoplastic Body",
      desc: "UV-stabilised, self-extinguishing material resists cracking, yellowing, and chemical attack across years of outdoor service, while remaining lighter than equivalent metal enclosures.",
    },
    {
      iconFallback: "🚪",
      title: "Transparent or Opaque Door Options",
      desc: "Smoked transparent doors allow visual inspection of MCB status and indicator lamps without opening the box; opaque doors are available where a fully enclosed appearance is preferred.",
    },
    {
      iconFallback: "🔌",
      title: "Industrial Socket Integration",
      desc: "Factory-wired IEC 60309 sockets (as shown — blue CEE and red 3-phase) for tool power, temporary supply, or equipment hookup, alongside the protection devices.",
    },
    {
      iconFallback: "✅",
      title: "Fully Wired & Tested",
      desc: "Each unit is internally wired with labelled circuits, terminal blocks, and tested before dispatch — visible in our factory photos with colour-coded conductors and properly dressed cable runs.",
    },
  ];

  const gallery = [
    {
      img: "/figma_assets_132/19e9d8e719af1fa9421c135779b56745f03218a1.png",
      title: "Studio Reference",
      desc: "Compact dual-compartment box with MCB row and two IEC 60309 sockets."
    },
    {
      img: "/figma_assets_132/d8e14bb6044b430850ab18806463e6824c027539.png",
      title: "Factory Build",
      desc: "Same configuration shown assembled and ready for dispatch."
    },
    {
      img: "/figma_assets_132/b510ba0ce04a6630e7835b758fd5fef410dae105.png",
      title: "Internal Wiring View",
      desc: "Open enclosure showing colour-coded wiring, terminal blocks, and socket termination."
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
                <div className={styles.heroBadge}>Customizable Control Station</div>
                <h1 className={styles.heroTitle}>
                  Small Control Station <br />
                  <span className={styles.orangeText}>Box — Customizable</span>
                </h1>
                <p className={styles.heroDesc}>
                  Compact, IP65 / IK09-rated control station boxes in polycarbonate or thermoplastic, built to your exact requirement — protection devices, industrial sockets, metering, and wiring configured around your single-line diagram. Available with transparent or opaque doors.
                </p>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IP65</span>
                    <span className={styles.metaLabel}>Protection</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>IK09</span>
                    <span className={styles.metaLabel}>Impact Rated</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaVal}>Custom Built</span>
                    <span className={styles.metaLabel}>Configuration</span>
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
                    src="/figma_assets_132/d8e14bb6044b430850ab18806463e6824c027539.png"
                    alt="Control Station Box"
                    fill
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-small-control-station' }}
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
              Quality-assured products backed by technical expertise and pan-India delivery.
            </p>

            <div className={styles.highlightStrip}>
              <strong>Fully Customizable:</strong>
              <p>
                Internal layout, number of MCBs/RCCBs, industrial socket count and current rating, busbar configuration, and door type (transparent or opaque) are all configured to your project's single-line diagram. Share your requirement and we'll quote the exact build.
              </p>
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

        {/* 3. Product Range / Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.container}>
             <span className={styles.sectionEyebrow}>Product Range</span>
             <h2 className={styles.sectionTitle}>Build Reference Gallery</h2>
             <p className={styles.sectionIntro}>
               Studio and factory photographs showing the actual build quality and internal wiring.
             </p>

             <div className={styles.galleryGrid}>
               {gallery.map((g, i) => (
                 <div key={i} className={styles.galleryCard}>
                   <div className={styles.galleryImageWrapper}>
                      <Image
                        src={g.img}
                        alt={g.title}
                        fill
                        className={styles.heroImage} style={{ viewTransitionName: 'product-image-small-control-station' }}
                      />
                   </div>
                   <div className={styles.galleryLabel}>
                     <div className={styles.galleryLabelTitle}>{g.title}</div>
                     <div className={styles.galleryLabelDesc}>{g.desc}</div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 4. Specifications */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionIntro}>
              Full technical data. Manufacturer datasheets available on request after enquiry.
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

      <Footer />
    </div>
  );
}
