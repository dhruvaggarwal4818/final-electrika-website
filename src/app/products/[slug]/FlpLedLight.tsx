import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./flp-led-light.module.css";

export default function FlameproofLedLight() {
  const specParams = [
    { name: "Protection Concept", val: "Flameproof Enclosure (Ex d) — IEC 60079-1" },
    { name: "ATEX / IECEx Classification", val: "Ex d IIB T4 Gb / Ex d IIB T5 Gb (model specific)" },
    { name: "Zone Suitability", val: "Zone 1, Zone 2 (Gas); Zone 21, Zone 22 (Dust)" },
    { name: "IP Rating", val: "IP66" },
    { name: "Power Consumption (LED)", val: "18W, 24W, 36W (replaces 2×18W, 2×28W, 2×36W fluorescent)" },
    { name: "Housing Material", val: "Die-cast iron / LM6 aluminium alloy" },
    { name: "Glass Tube", val: "Heat-resistant borosilicate glass" },
    { name: "Wire Guard", val: "Welded steel wire cage, powder-coated" },
    { name: "Mounting Orientation", val: "Universal (Horizontal / Vertical pendant)" }
  ];

  const features = [
    { 
      title: "Ex d IIB T4 / T5 Certified", 
      desc: "ATEX/IECEx certified Exd flameproof protection class, Group IIB (covers most industrial gases including LPG, ethylene, town gas), Temperature Class T4/T5 — max surface temperature 135°C/100°C.", 
      icon: "🛡️" 
    },
    { 
      title: "IP66 Weatherproof Rating", 
      desc: "Fully dust-tight and protected against powerful water jets — suitable for outdoor installations, washdown areas, offshore decks, and marine environments in addition to hazardous area compliance.", 
      icon: "💧" 
    },
    { 
      title: "LED — 60%+ Energy Saving", 
      desc: "Replaces conventional fluorescent tube lamps (2×36W / 2×40W) with LED modules drawing 18W–36W, delivering equivalent or better lux levels at dramatically lower running costs.", 
      icon: "⚡" 
    },
    { 
      title: "Wire Guard Protection", 
      desc: "Heavy-gauge wire cage around the tube prevents mechanical damage to the glass envelope from accidental contact, falling objects, or vibration — mandatory in most process plant environments.", 
      icon: "⛓️" 
    },
    { 
      title: "Wall & Pendant Mount", 
      desc: "Mounting foot on the body accommodates both horizontal wall-mount (as shown installed) and vertical pendant-mount orientations — covering column-face and overhead installations without additional hardware.", 
      icon: "🏗️" 
    },
    { 
      title: "IS 5572 / IS 2148 Certified", 
      desc: "Certified to Indian Standards for flameproof electrical equipment in addition to international ATEX / IECEx certification — meeting the requirements of PESO, OISD, DGMS, and other Indian regulatory authorities.", 
      icon: "📜" 
    }
  ];

  const zones = [
    { 
      id: "zone1", 
      title: "Zone 1", 
      sub: "Gas / Vapour — Frequent", 
      desc: "Explosive gas atmosphere likely to occur during normal operation. Refineries, offshore platforms, chemical process areas, paint spray booths." 
    },
    { 
      id: "zone2", 
      title: "Zone 2", 
      sub: "Gas / Vapour — Occasional", 
      desc: "Explosive gas atmosphere not likely in normal operation but may occur in abnormal conditions. Fuel storage areas, pump rooms, compressor buildings." 
    },
    { 
      id: "zone21", 
      title: "Zone 21", 
      sub: "Dust — Frequent", 
      desc: "Explosive dust cloud likely in normal operation. Flour mills, grain silos, coal handling, pharmaceutical powder areas." 
    },
    { 
      id: "zone22", 
      title: "Zone 22", 
      sub: "Dust — Occasional", 
      desc: "Explosive dust cloud unlikely in normal operation but may occur. Storage areas for combustible dust, packaging and bagging operations." 
    }
  ];

  const applications = [
    { title: "Oil & Gas Refineries", desc: "Process units, pump rooms, valve manifold areas, tank farm walkways", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L3 10v12h18V10L12 2z"/></svg> },
    { title: "Offshore Platforms", desc: "Deck lighting, wellhead areas, compressor modules, accommodation exits", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
    { title: "Chemical Plants", desc: "Solvent handling, reaction areas, storage zones for flammable liquids", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8 22 16 12 22 2 16 2 8"/></svg> },
    { title: "Flour Mills & Grain Silos", desc: "Dust Zone 21/22 classified areas — explosive flour/grain dust atmosphere", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 7 12 12 2 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg> },
    { title: "Paint Spray Booths", desc: "Automotive and industrial paint shops with solvent vapour hazard", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
    { title: "Mining — DGMS Zones", desc: "Underground coal mines, firedamp zones — DGMS and CMRS certified applications", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        
        {/* 1. Hero Section */}
        <div className={styles.warningStrip}>
          <div className={styles.warningStripInner}>
            <div className={styles.warningIcon}>⚠</div>
            <p className={styles.warningText}>
              <span>Certified for Hazardous Area Use · </span>
              Zone 1, Zone 2 (Gas) · Zone 21, Zone 22 (Dust) · ATEX / IECEx / IS 5572 compliant — for use where explosive atmospheres may be present
            </p>
          </div>
        </div>
        
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Flameproof LED — Hazardous Area</span>
              <h1 className={styles.heroTitle}>
                Flameproof <br />
                <span>LED Tube Light</span>
              </h1>
              <p className={styles.heroDesc}>
                Industrial-grade flameproof LED tube luminaires engineered for explosive-atmosphere locations — oil & gas platforms, chemical plants, paint booths, flour mills, and mining environments. Rugged die-cast enclosure with wire guard, rated for continuous operation in Zone 1 / Zone 2 hazardous areas.
              </p>

              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>Zone 1/2</span>
                  <span className={styles.metaLabel}>Hazardous Areas</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>IP66</span>
                  <span className={styles.metaLabel}>Protection</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaVal}>ExdIIBT4</span>
                  <span className={styles.metaLabel}>ATEX Classification</span>
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
                src="/figma_assets_flp/89ff9ee880f0694434e1beb497687e69a49c87b7.png"
                alt="Flameproof LED Tube Light Installed"
                fill
                sizes="(max-width: 1024px) 100vw, 570px"
                className={styles.heroImage}
                priority
              />
              <div className={styles.tagInStock}>In Stock</div>
              <div className={styles.tagZone}>⚠ Zone 1 / Zone 2</div>
            </div>
          </div>
        </section>

        {/* 2. Understanding Section */}
        <section className={styles.understandingSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Understanding the Product</span>
            <h2 className={styles.sectionTitle}>What Does "Flameproof" Actually Mean?</h2>
            <p className={styles.sectionIntro}>
              Not just weatherproof — a flameproof (Ex d) enclosure is designed so that if a gas ignites <i>inside</i> the enclosure, the explosion cannot propagate to the surrounding hazardous atmosphere. The housing contains and quenches the flame before it can escape. This is a mandatory requirement in classified hazardous areas.
            </p>

            <div className={styles.splitLayout}>
              <div className={styles.splitVisual}>
                <Image
                  src="/figma_assets_flp/84c2ce4f41ab6dcc9d1dfe231cfabff73741eb6f.png"
                  alt="Flameproof LED Tube Studio View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 584px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className={styles.splitText}>
                <h3>Key Construction Details</h3>
                <p>
                  The luminaire consists of a heavy-duty <strong>die-cast grey iron / LM6 aluminium body</strong>, a thick borosilicate glass or polycarbonate tube enclosing the LED module, and a welded or cast <strong>wire guard cage</strong> protecting the tube from mechanical damage.
                </p>
                <p>
                  All joints between body sections are <strong>flame-path joints</strong> with closely controlled gap dimensions, tested to contain an internal explosion without rupture — the defining feature of Ex d protection.
                </p>
                
                <div className={styles.bulletsList}>
                  {[
                    "Die-cast iron / aluminium alloy body (LM6)",
                    "Thick borosilicate glass tube enclosure",
                    "Welded wire guard for tube protection",
                    "Precision flame-path joints on all openings",
                    "Ex-rated cable gland entries (bottom thread)",
                    "Internal LED module — no external driver box",
                    "Both vertical (pendant) and horizontal wall-mount configurable"
                  ].map((bullet, idx) => (
                    <div key={idx} className={styles.bulletItem}>
                      <div className={styles.bulletDot} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Zone Classification Section */}
        <section className={styles.zonesSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Hazardous Area Classification</span>
            <h2 className={styles.sectionTitle}>Which Zone Is Your Site?</h2>
            <p className={styles.sectionIntro}>
              Hazardous areas are classified by how frequently an explosive atmosphere is present. This product is certified for the most demanding gas and dust zone classes.
            </p>

            <div className={styles.zonesGrid}>
              {zones.map((zone) => (
                <div key={zone.id} className={`${styles.zoneCard} ${styles[zone.id]}`}>
                  <div className={styles.zoneDot} />
                  <h3 className={styles.zoneTitle}>{zone.title}</h3>
                  <p className={styles.zoneSubtitle}>{zone.sub}</p>
                  <p className={styles.zoneDesc}>{zone.desc}</p>
                  <div className={styles.zoneCompat}>
                    ✓ This product is certified
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Why This Product</span>
            <h2 className={styles.sectionTitle}>Built for Where Ordinary Lights Cannot Go</h2>
            <p className={styles.sectionIntro}>
              Every specification decision — from enclosure material to glass tube thickness to wire guard geometry — exists because ordinary luminaires are a direct ignition risk in these environments.
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

        {/* 5. Specifications Table */}
        <section id="specs" className={styles.specsSection}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Technical Data</span>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionIntro}>
              Full technical data sheet. Test certificates and ATEX/IECEx/IS certificates available on request with enquiry.
            </p>

            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <span style={{color: 'white'}}>📄</span>
                <span className={styles.specsHeaderTitle}>Technical Specification Sheet — Flameproof LED Tube Light</span>
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

        {/* 6. Applications Section */}
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
                    <span style={{ color: '#f97316', display: 'flex' }}>{app.icon}</span>
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
