"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./led-street-light.module.css";

export default function StreetLightPage() {
  const features = [
    {
      icon: "💡",
      title: "High System Efficacy",
      desc: "Delivers up to 150 lumens per watt, ensuring bright, uniform illumination with lower energy consumption.",
    },
    {
      icon: "🛡️",
      title: "Rugged, Weatherproof Build",
      desc: "Epoxy powder-coated, pressure die-cast aluminium housing rated IP66 with impact protection for long outdoor service life.",
    },
    {
      icon: "🔍",
      title: "Precision Secondary Optics",
      desc: "Non-yellowing polycarbonate/toughened glass optics ensure optimal brightness, clarity, and uniformity on the road surface.",
    },
    {
      icon: "⚡",
      title: "Surge Protected Driver",
      desc: "Potted driver with built-in surge, over-voltage, and open/short circuit protection, plus provision for external SPD.",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      desc: "Tool-less access to the driver with hinged back cover and specially designed clamps for quick, easy servicing.",
    },
    {
      icon: "🛣️",
      title: "Versatile Applications",
      desc: "Suitable for highways, expressways, city roads, service roads and commercial spaces, with tilt-mount flexibility on site.",
    },
  ];

  const specRows = [
    { param: "Wattage Range", val: "20W – 350W (across variants)", alt: false },
    { param: "System Efficacy", val: "Up to 150 lumens per watt", alt: true },
    { param: "Input Voltage", val: "240V AC (270V AC on select variants)", alt: false },
    { param: "Colour Temperature (CCT)", val: "5700K", alt: true },
    { param: "Housing", val: "Epoxy powder coated, pressure die-cast aluminium", alt: false },
    { param: "Secondary Optics", val: "Non-yellowing polycarbonate / toughened glass", alt: true },
    { param: "Driver", val: "Potted, with inbuilt surge, voltage & open/short-circuit protection", alt: false },
    { param: "Ingress Protection", val: "IP66", alt: true },
    { param: "Impact Protection", val: "IK07 / IK08", alt: false },
    { param: "Internal Surge Protection", val: "4kV (10kV external SPD provision)", alt: true },
    { param: "Total Harmonic Distortion (THD)", val: "< 10%", alt: false },
    { param: "Power Factor (PF)", val: "> 0.90 – 0.95", alt: true },
    { param: "Mounting", val: "Pole-mount with tilt adjustment; NEMA/ZHAGA adapter provision on select variants", alt: false },
    { param: "Pole Diameter Compatibility", val: "38mm – 65mm (variant dependent)", alt: true },
    { param: "Smart Control Ready", val: "Compatible with IoT-based lighting management platforms", alt: false },
    { param: "Applications", val: "National/State Highways, Expressways, City & Service Roads, Commercial Spaces", alt: true },
  ];

  const useCases = [
    { icon: "🛣️", title: "Highways & Expressways", desc: "High wattage variants for National & State highways" },
    { icon: "🏙️", title: "City Roads", desc: "Uniform, glare-free lighting for urban streets" },
    { icon: "🛣️", title: "Service Roads", desc: "Reliable illumination for secondary access roads" },
    { icon: "🏢", title: "Commercial Spaces", desc: "Aesthetic, efficient lighting for business districts" },
    { icon: "🏫", title: "Townships & Campuses", desc: "Compact, low-wattage variants for internal roads" },
    { icon: "🌳", title: "Parks & Public Spaces", desc: "Ambient and safety lighting for open areas" },
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
                Street Lighting
              </span>
              <h1 className={styles.heroTitle}>
                LED Street Light — <br />
                <span className={styles.orangeText}>Smart & Energy Efficient</span>
              </h1>
              <p className={styles.heroDesc}>
                Robust, weatherproof LED street light engineered for city roads, highways, service roads and commercial spaces. High system efficacy, precision secondary optics, and a die-cast aluminium housing deliver reliable, low-maintenance illumination with a long service life.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP66</span>
                  <span className={styles.metaLabel}>Ingress Protection</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IK08</span>
                  <span className={styles.metaLabel}>Impact Rating</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>150 lm/W</span>
                  <span className={styles.metaLabel}>Up to Efficacy</span>
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
                src="/figma_assets_led_street_light/custom_hero_image_2.jpg"
                alt="LED Street Light"
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
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Why Choose This Street Light</h2>
            <p className={styles.sectionIntro}>
              Engineered for brightness, durability, and low cost of ownership across road and city lighting applications.
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
            <h2 className={styles.sectionTitle} style={{ color: 'white', marginBottom: '16px' }}>Where This Street Light Is Deployed</h2>
            <p className={styles.sectionIntro} style={{ color: '#888', marginBottom: '40px' }}>
              Suited to a wide range of road and public infrastructure lighting needs.
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
