import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./led-high-bay.module.css";

export default function LedHighBay() {
  const specParams = [
    { name: "Ex Protection Code", val: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db" },
    { name: "Compliance Testing Standard", val: "IEC 60079-0, IEC 60079-1, EN 60079-31" },
    { name: "Ingress Protection Level", val: "IP66 Dust-tight & High Pressure Water Jet Resistant", highlight: true },
    { name: "Housing Assembly Material", val: "High-Strength Copper-Free Die-Cast Aluminum Gray" },
    { name: "Optical Window Material", val: "Toughened Prismatic Borosilicate Flameproof Glass" },
    { name: "Input Electrical Operating Range", val: "100V–277V AC, 50Hz/60Hz Functionality" },
    { name: "Conduit Cable Entry Ports", val: "Dual NPT 3/4\" or M20 Openings (1 Pre-Plugged as shown)" },
    { name: "Color Rendering Index (CRI)", val: "> 80 Ra" },
    { name: "Luminaire Lifespan (L70)", val: "> 50,000 Hours Continuous Operating Conditions" }
  ];

  const features = [
    { 
      title: "Finned Thermal Management", 
      desc: "The high-surface-area circular cooling fin structure optimizes natural convection, ensuring cool operation for sensitive internal circuitry.", 
      icon: "⚙" 
    },
    { 
      title: "Explosion-Proof Entry Ports", 
      desc: "Equipped with precise threaded conduit entries and flameproof plugs to securely seal electrical wiring fields against ignition blowouts.", 
      icon: "🛡" 
    },
    { 
      title: "High-Density COB Optics", 
      desc: "Concentrated central optics with a micro-textured patterned lens offer glare-controlled, uniform downlighting for high-clearance structures.", 
      icon: "👁" 
    },
    { 
      title: "Heavy-Duty Mount Bracket", 
      desc: "Thick-gauge steel structural handle features dual-axis locking bolt points for secure overhead hanging, wall, or ceiling mounting.", 
      icon: "⚓" 
    }
  ];

  const zones = [
    { 
      id: "zone1", 
      title: "Zone 1", 
      sub: "Gas / Vapor", 
      desc: "Areas where explosive gas atmospheres are likely to occur in normal operation intermittently.",
      compat: "Fully Certified"
    },
    { 
      id: "zone2", 
      title: "Zone 2", 
      sub: "Gas / Vapor", 
      desc: "Areas where explosive gas atmospheres are not likely to occur, or persist for only a short period.",
      compat: "Fully Certified"
    },
    { 
      id: "zone21", 
      title: "Zone 21", 
      sub: "Dust / Powder", 
      desc: "Environments where combustible dust clouds are expected to occur occasionally in normal operations.",
      compat: "Fully Certified"
    },
    { 
      id: "zone22", 
      title: "Zone 22", 
      sub: "Dust / Powder", 
      desc: "Environments where combustible dust layers or clouds are rare and disappear quickly.",
      compat: "Fully Certified"
    }
  ];

  const applications = [
    { title: "Oil & Gas Refineries", desc: "Process units, pump rooms, valve manifold areas, tank farm walkways", icon: "🛢️" },
    { title: "Offshore Platforms", desc: "Deck lighting, wellhead areas, compressor modules, accommodation exits", icon: "🌊" },
    { title: "Chemical Plants", desc: "Solvent handling, reaction areas, storage zones for flammable liquids", icon: "🧪" },
    { title: "Flour Mills & Grain Silos", desc: "Dust Zone 21/22 classified areas — explosive flour/grain dust atmosphere", icon: "🌾" },
    { title: "Paint Spray Booths", desc: "Automotive and industrial paint shops with solvent vapour hazard", icon: "🎨" },
    { title: "Mining — DGMS Zones", desc: "Underground coal mines, firedamp zones — DGMS and CMRS certified applications", icon: "⛏️" }
  ];

  const checklist = [
    "Oil & Gas Onshore and Offshore Rigs",
    "Chemical & Distillary Process Plants",
    "Grain Silos, Flour Mills & sugar Packaging",
    "Automotive Spray Paint Booth bays",
    "Aerospace Fueling Hangers",
    "Marine Engine Rooms & Cargo Holds"
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        
        {/* 1. Warning Strip */}
        <div className={styles.warningStrip}>
          <div className={styles.warningStripInner}>
            <div className={styles.warningIcon}>
              <img src="/figma_assets_highbay/3322076405062ff047b436c59a5fef2cef2a48e1.png" alt="Warning" style={{ display: 'none' }} />
              ⚠
            </div>
            <p className={styles.warningText}>
              <span>Certified for Hazardous Area Environments · </span>
              Zone 1 & 2 (Flammable Gas/Vapor Protection) · Zone 21 & 22 (Combustible Dust Protection) · Ex d IIC T6 Gb compliant enclosure built for rigorous industrial settings.
            </p>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Heavy-Duty Flameproof Luminaire</span>
              <h1 className={styles.heroTitle}>
                Flameproof High-Bay <br />
                <span>LED Light</span>
              </h1>
              <p className={styles.heroDesc}>
                High-efficiency explosion-proof lighting engineered specifically for high-ceiling architectural structures and challenging industrial processing areas. Features an advanced finned integrated heat sink for maximum thermal dissipation, a durable protective adjustable mounting bracket, and a rugged gas/dust explosion-proof die-cast housing.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Zone 1 / 21</span>
                  <span className={styles.metaLabel}>Class Certified</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP66</span>
                  <span className={styles.metaLabel}>Ingress Rating</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Ex d IIC T6</span>
                  <span className={styles.metaLabel}>ATEX / IECEx</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>COB LED</span>
                  <span className={styles.metaLabel}>Light Source</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#enquiry" className={styles.btnPrimary}>
                  Request Quotation →
                </a>
                <a href="#specs" className={styles.btnSecondary}>
                  Technical Specifications
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <Image
                src="/figma_assets_highbay/2e43797c478614345d71a3076eb9038170a64d78.png"
                alt="Flameproof High-Bay LED Light Enclosure Detail Showing Finned Cooling Array and Entry Ports"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                priority
              />
              <div className={styles.tagPremium}>Premium Quality</div>
              <div className={styles.tagZone}>⚠ Zone 1, 2, 21, 22</div>
            </div>
          </div>
        </section>

        {/* 3. Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Core Performance Engineering</span>
            <p className={styles.sectionIntro}>
              Our Flameproof High-Bay LED Light represents the pinnacle of hazardous-area optical engineering. Designed to replace power-hungry HID lamps in petrochemical refineries, pharmaceutical lines, paint booths, and marine environments, this luminaire delivers reliable illumination while preventing internal ignition from escaping into the surrounding atmosphere.
            </p>

            <div className={styles.featuresGrid}>
              {features.map((feat, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feat.icon}</div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Safety Zones */}
        <section className={styles.zonesSection}>
          <div className={styles.zonesContainer}>
            <span className={styles.sectionEyebrow}>Hazardous Area Safety Compliance</span>
            <p className={styles.sectionIntro}>
              This high-bay light fixture is strictly manufactured and type-tested to operate safely in environments where explosive properties are continuously, periodically, or intermittently present.
            </p>

            <div className={styles.zonesGrid}>
              {zones.map((zone) => (
                <div key={zone.id} className={`${styles.zoneCard} ${styles[zone.id]}`}>
                  <div className={styles.zoneDot} />
                  <h3 className={styles.zoneTitle}>{zone.title}</h3>
                  <p className={styles.zoneSubtitle}>{zone.sub}</p>
                  <p className={styles.zoneDesc}>{zone.desc}</p>
                  <div className={styles.zoneCompat}>{zone.compat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Design Advantages */}
        <section className={styles.advantagesSection}>
          <div className={styles.container}>
            <div className={styles.advantagesGrid}>
              
              <div className={styles.advantagesMain}>
                <span className={styles.sectionEyebrow} style={{ marginBottom: '16px' }}>Design & Material Advantages</span>
                
                <h3 className={styles.advHeading}>Die-Cast Aluminum Enclosure</h3>
                <p className={styles.advText}>
                  Manufactured using premium copper-free die-cast aluminum alloys, the main structural hub offers immense structural integrity capable of withstanding high internal explosion pressures without deformation. The structural components are treated with a corrosion-resistant epoxy electrostatic powder coating.
                </p>

                <h3 className={styles.advHeading}>Dual Conduit Configuration</h3>
                <p className={styles.advText}>
                  As clearly shown in the profile image, the top terminal junction features side-by-side specialized access entries. One port is outfitted with a heavy-duty hexagonal internal wrench drive flameproof blanking plug, while the adjacent open port provides clean access for threaded explosion-proof glands or cable sealing systems.
                </p>

                <h3 className={styles.advHeading}>Advanced Optics & Lens Design</h3>
                <p className={styles.advText}>
                  The fixture utilizes high-transmittance, impact-resistant borosilicate glass with a specialized internal prismatic grid array. This maximizes lumen throughput from the high-power COB chip while ensuring the outer surface maintains a strict T6 thermal threshold below 85°C.
                </p>
              </div>

              <div className={styles.advantagesSidebar}>
                <h3 className={styles.sbHeading}>Key Application Checklist</h3>
                <p className={styles.sbIntro}>
                  Ideal for extreme facilities that demand continuous high-lumen reliability alongside zero sparks propagation:
                </p>
                <div className={styles.sbList}>
                  {checklist.map((item, idx) => (
                    <div key={idx} className={styles.sbListItem}>
                      <div className={styles.sbDot} />
                      <span className={styles.sbText}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. Technical Specs */}
        <section id="specs" className={styles.specsSection}>
          <div className={styles.container}>
            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span className={styles.specsHeaderTitle}>Technical Specifications</span>
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

        {/* 7. Applications */}
        <section className={styles.useCasesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Hazardous Area Applications</span>
            <h2 className={styles.sectionTitle}>Where This Luminaire Is Mandated</h2>
            <p className={styles.sectionIntro}>
              Standard LED or fluorescent fixtures are a legal ignition hazard in these locations. Flameproof certification is a regulatory requirement, not an option.
            </p>

            <div className={styles.useCasesGrid}>
              {applications.map((app, index) => (
                <div key={index} className={styles.useCaseCard}>
                  <div className={styles.useCaseIcon}>
                    <span>{app.icon}</span>
                  </div>
                  <h3 className={styles.useCaseTitle}>{app.title}</h3>
                  <p className={styles.useCaseDesc}>{app.desc}</p>
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
