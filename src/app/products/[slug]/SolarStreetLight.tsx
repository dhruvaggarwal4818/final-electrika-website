"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./solar-street-light.module.css";

export default function SolarStreetLightPage() {
  const features = [
    {
      icon: "☀️",
      title: "All-in-One Integration",
      desc: "Panel, lithium battery, LED engine, motion sensor, and controller are housed in a single compact unit — the fastest and simplest installation in the range, ideal for budget and rapid-deployment projects.",
    },
    {
      icon: "🔌",
      title: "Standalone Flexibility",
      desc: "Separate solar panel and luminaire connected by cable allow the panel to be optimally angled toward the sun independent of the luminaire's mounting position — better performance on poorly oriented poles.",
    },
    {
      icon: "⚖️",
      title: "Semi-Integrated Balance",
      desc: "Panel mounted close to the luminaire on a short arm gives a tidier profile than standalone while retaining a larger, more efficient panel than all-in-one units — a practical mid-ground choice.",
    },
    {
      icon: "🏗️",
      title: "Mini High Mast Output",
      desc: "Multi-panel arrays (dual or radial) atop taller masts deliver significantly higher lumen output for parking lots, highway service areas, and large open yards beyond the reach of standard solar poles.",
    },
    {
      icon: "🎯",
      title: "Motion Sensor & Dimming",
      desc: "Select models include PIR motion sensors that bring the light to full brightness on detecting movement and dim during idle periods, extending battery autonomy on cloudy days.",
    },
    {
      icon: "🌧️",
      title: "IP65 Weatherproof Build",
      desc: "All variants are rated IP65 or better, suitable for outdoor exposure across India's range of climates — from coastal humidity to North Indian winters.",
    },
  ];

  const compareRows = [
    { label: "Power Range", aio: "7W – 30W", standalone: "12W – 60W", semi: "20W – 60W", mhm: "60W – 175W" },
    { label: "Panel Type", aio: "Built-in compact panel", standalone: "Separate larger panel", semi: "Adjacent compact panel", mhm: "Dual / radial multi-panel array" },
    { label: "Typical Pole Height", aio: "3 m – 6 m", standalone: "4 m – 8 m", semi: "4 m – 8 m", mhm: "8 m – 12 m" },
    { label: "Installation Complexity", aio: "Lowest", standalone: "Moderate", semi: "Moderate", mhm: "Highest" },
    { label: "Light Output", aio: "Low – Medium", standalone: "Medium", semi: "Medium – High", mhm: "High" },
    { label: "Best Use Case", aio: "Pathways, small lanes", standalone: "Roads needing optimal panel angle", semi: "Balanced roads / colony streets", mhm: "Parking lots, highway service areas" },
    { label: "Relative Cost", aio: "₹ — Most economical", standalone: "₹₹ — Moderate", semi: "₹₹ — Moderate", mhm: "₹₹₹ — Premium" },
    { label: "Cloudy-Day Autonomy", aio: "2 days", standalone: "3 days", semi: "3–4 days", mhm: "3–4+ days" },
  ];

  const variants = [
    { src: "/figma_assets_solar_street_light/12aefc1094dcd7eb51f73a0b321f7b4e5a75a983.png", name: "All-in-One Solar Light", desc: "Panel, battery, LED, sensor — fully integrated in a single compact fixture." },
    { src: "/figma_assets_solar_street_light/a0e632477db2dda830807bf210adc9e57480eed3.png", name: "Standalone Solar Light", desc: "Separate solar panel and pole-mounted LED luminaire connected by cable." },
    { src: "/figma_assets_solar_street_light/c25448468002a9e10f1942bf87b7813fbfe94049.png", name: "Semi-Integrated Solar Light", desc: "Compact panel mounted directly above the luminaire on a short arm." },
    { src: "/figma_assets_solar_street_light/695793fff42e8e2abd80f85aec0ca5acd5f08448.png", name: "Mini High Mast", desc: "Radial panel array atop a tall mast for large-area solar floodlighting." },
  ];

  const specRows = [
    { param: "Power Range (Overall)", val: "7W to 175W across the range", alt: false },
    { param: "Variant Types", val: "All-in-One, Standalone, Semi-Integrated, Mini High Mast", alt: true },
    { param: "Battery Type", val: "LiFePO4 (Lithium Iron Phosphate) — standard across range", alt: false },
    { param: "Solar Panel", val: "Monocrystalline, 18%–22% efficiency", alt: true },
    { param: "Light Source", val: "SMD / High-Power LED, 130–150 lm/W", alt: false },
    { param: "Control", val: "PIR motion sensor + dusk-to-dawn auto on/off (select models)", alt: true },
    { param: "Autonomy (Backup)", val: "2–4 cloudy days typical, model dependent", alt: false },
    { param: "IP Rating", val: "IP65 (luminaire); IP67 battery compartment (select models)", alt: true },
    { param: "Pole Compatibility", val: "Direct pole-top or arm-mount, 3 m–10 m poles", alt: false },
    { param: "Charge Controller", val: "Integrated MPPT / PWM controller", alt: true },
    { param: "Operating Temperature", val: "-10°C to +55°C", alt: false },
    { param: "Warranty", val: "2 Years standard; extended options available", alt: true },
    { param: "MNRE / BIS Status", val: "MNRE-approved models available; BIS listed on select SKUs", alt: false },
  ];

  const useCases = [
    { icon: "🛣️", title: "Rural Street Lighting", desc: "Off-grid village roads, panchayat lanes, rural highways" },
    { icon: "🏘️", title: "Residential Colonies", desc: "Township internal streets, gated community roads, society pathways" },
    { icon: "🏫", title: "Institutions & Parks", desc: "School and college campuses, public parks, government buildings" },
    { icon: "🏗️", title: "Government Infrastructure", desc: "Smart city projects, highway service areas, district-level tenders" },
    { icon: "🚗", title: "Parking Lots & Yards", desc: "Industrial yards, logistics hubs, large open parking areas" },
    { icon: "🌊", title: "Coastal / Remote Sites", desc: "Coastal areas, island projects, sites without grid connectivity" },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                Solar Street Lighting
              </span>
              <h1 className={styles.heroTitle}>
                Solar Street Lights — <br />
                <span className={styles.orangeText}>4 Variant Range</span>
              </h1>
              <p className={styles.heroDesc}>
                A complete solar street lighting range covering every site condition and budget — All-in-One, Standalone, Semi-Integrated, and Mini High Mast configurations. Power output spans 7W to 175W across the range.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>7–175 W</span>
                  <span className={styles.metaLabel}>Power Range</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>4 Types</span>
                  <span className={styles.metaLabel}>Variants</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Motion Sensor</span>
                  <span className={styles.metaLabel}>On Select Models</span>
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
              <Image
                src="/figma_assets_solar_street_light/55e4686cb41774347b8a7b00dd659af8307d954c.png"
                alt="Solar Street Light Range"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                style={{ objectFit: "cover" }}
                priority
              />
              <div className={styles.tagPremium}>In Stock</div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Key Features</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Why Choose Electrika Inc.</h2>
            <p className={styles.sectionIntro}>
              Quality-assured products backed by technical expertise and pan-India delivery.
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

        {/* COMPARE VARIANTS TABLE */}
        <section className={styles.compareSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Compare Variants</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Which Solar Light Is Right for You?</h2>
            <p className={styles.sectionIntro}>
              A side-by-side comparison of all four configurations to help you choose the right fit for your site.
            </p>

            <div className={styles.compareTableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th><p className={styles.thTitle}>Parameter</p></th>
                    <th>
                      <p className={styles.thTitle}>All-in-One</p>
                      <p className={styles.thSub}>Single unit</p>
                    </th>
                    <th>
                      <p className={styles.thTitle}>Standalone</p>
                      <p className={styles.thSub}>Panel + pole separate</p>
                    </th>
                    <th>
                      <p className={styles.thTitle}>Semi-Integrated</p>
                      <p className={styles.thSub}>Panel on short arm</p>
                    </th>
                    <th>
                      <p className={styles.thTitle}>Mini High Mast</p>
                      <p className={styles.thSub}>Multi-panel tall mast</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.label}</td>
                      <td>{row.aio}</td>
                      <td>{row.standalone}</td>
                      <td>{row.semi}</td>
                      <td>{row.mhm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VARIANT GALLERY SECTION */}
        <section className={styles.variantsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#f97316', marginBottom: '16px', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>Product Range</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '40px' }}>The Full Variant Lineup</h2>
            <p className={styles.sectionIntro}>
              Visual reference for each of the four solar street light configurations.
            </p>

            <div className={styles.variantsGrid}>
              {variants.map((v, i) => (
                <div key={i} className={styles.variantCard}>
                  <div className={styles.variantImageWrapper}>
                    <Image src={v.src} alt={v.name} fill sizes="280px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className={styles.variantContent}>
                    <p className={styles.variantTitle}>{v.name}</p>
                    <p className={styles.variantDesc}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS TABLE */}
        <section id="specifications" className={styles.specsSection}>
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
                  {specRows.map((spec, idx) => (
                    <tr key={idx}>
                      <td className={styles.specLabel}>{spec.param}</td>
                      <td className={`${styles.specValue} ${spec.alt ? styles.specValueHighlight : ''}`}>
                        {spec.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* USE CASES SECTION */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow} style={{ color: '#f97316' }}>Applications</span>
            <h2 className={styles.sectionTitle} style={{ color: 'white', marginBottom: '16px' }}>Where This Product Is Used</h2>
            <p className={styles.sectionIntro} style={{ color: '#888', marginBottom: '40px' }}>
              Deployed across government, residential and commercial solar projects throughout India.
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
