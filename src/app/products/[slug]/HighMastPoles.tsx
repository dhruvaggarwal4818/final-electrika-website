import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./high-mast-poles.module.css";

export default function HighMastPolesPage() {
  const specParams = [
    { name: "Material", val: "IS 2062 Grade A Mild Steel", highlight: false },
    { name: "Surface Treatment", val: "Hot-Dip Galvanised (IS 4759), min 86 µm", highlight: false },
    { name: "Height Range", val: "9 m to 40 m (custom up to 50 m)", highlight: false },
    { name: "Shape", val: "Polygonal (8/12/16 sided) or Conical", highlight: false },
    { name: "Wall Thickness", val: "4 mm to 10 mm (height dependent)", highlight: false },
    { name: "Lamp Carriage Type", val: "Fixed / Motorised Lowering", highlight: false },
    { name: "No. of Lamp Positions", val: "4 / 6 / 8 / 10 / 12 / 16", highlight: false },
    { name: "Design Wind Speed", val: "Up to 180 km/h (IS 875 Part III)", highlight: false },
    { name: "Foundation Bolt Circle", val: "Custom per height and soil condition", highlight: false },
    { name: "Luminaire Compatibility", val: "LED Flood / HPS / MH (E40 / GU10)", highlight: false },
    { name: "Applicable Standards", val: "IS 2713, IS 4759, IS 875, IS 2062", highlight: false },
    { name: "Warranty", val: "2 Years (structural), coating as per IS 4759", highlight: false },
    { name: "Lead Time (standard)", val: "3–4 weeks from drawing approval", highlight: false },
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
                <div className={styles.heroBadge}>High Mast Poles</div>
                <h1 className={styles.heroTitle}>
                  Industrial-Grade <br />
                  <span className={styles.orangeText}>High Mast Poles</span>
                </h1>
                <p className={styles.heroDesc}>
                  Engineered for highways, airports, ports, and large industrial areas. Our high mast poles deliver uniform illumination across wide areas with minimal maintenance over decades of use.
                </p>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <div className={styles.metaVal}>9–40m</div>
                    <div className={styles.metaLabel}>Height Range</div>
                  </div>
                  <div className={styles.metaItem}>
                    <div className={styles.metaVal}>IS 2713</div>
                    <div className={styles.metaLabel}>Certified</div>
                  </div>
                  <div className={styles.metaItem}>
                    <div className={styles.metaVal}>25+ yr</div>
                    <div className={styles.metaLabel}>Lifespan</div>
                  </div>
                  <div className={styles.metaItem}>
                    <div className={styles.metaVal}>24hr</div>
                    <div className={styles.metaLabel}>Quote TAT</div>
                  </div>
                </div>
                <div className={styles.heroActions}>
                  <a href="#contact" className={styles.btnPrimary}>
                    Request Quotation →
                  </a>
                  <a href="#specs" className={styles.btnSecondary}>
                    View Specifications
                  </a>
                </div>
              </div>
              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets/high_mast_hero.png"
                    alt="High Mast Poles Hero Image"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage}
                    priority
                  />
                  <div className={styles.tagPremium}>In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Features / Why Choose Us */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrow}>Why Choose Us</div>
            <h2 className={styles.sectionTitle}>Built for the Toughest Environments</h2>
            <p className={styles.sectionDesc}>
              Manufactured with hot-dip galvanised mild steel and engineered to withstand wind speeds of up to 180 km/h and seismic zones IV.
            </p>
            
            <div className={styles.featuresGrid}>
              {[
                { title: "Hot-Dip Galvanised", desc: "Full zinc coating to IS 4759 standard, providing 25+ years of corrosion protection in harsh outdoor environments.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                { title: "Motorised Lowering", desc: "Optional electric winch system lowers the lamp carriage to ground level for tool-free lamp replacement and maintenance.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg> },
                { title: "Wind-Load Rated", desc: "Structural design certifies safe operation in wind zones up to 180 km/h, tested per IS 875 (Part III) standards.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 21A10 10 0 1 0 3 11"/></svg> },
                { title: "IS 2713 Certified", desc: "All poles manufactured and tested to Bureau of Indian Standards specification for street and road lighting poles.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> },
                { title: "Custom Fabrication", desc: "Bespoke heights, arm configurations, and foundation bolt patterns manufactured to project-specific drawings.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
                { title: "Pan-India Delivery", desc: "Logistics network covering government infrastructure projects, EPC contractors, and industrial clients across all states.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
              ].map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIconBox}>
                    <span style={{ color: '#f97316', display: 'flex' }}>{f.icon}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Variants Grid */}
        <section className={styles.variantsSection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrowCenter}>Available Models</div>
            <h2 className={styles.sectionTitleCenter}>Select the Right Height</h2>
            <p className={styles.sectionDescCenter}>
              Standard heights available from stock. Non-standard heights and custom configurations on order with 3–4 week lead time.
            </p>

            <div className={styles.variantsGrid}>
              {[
                { badge: "Standard", height: "9", desc: "Entry Level", detail: "Suitable for small intersections, parking areas, residential colonies. 4–6 lamp positions." },
                { badge: "Standard", height: "12", desc: "Mid Range", detail: "Ideal for arterial roads, bus depots, industrial yards. 4–8 lamp positions." },
                { badge: "Most Efficient", height: "16", desc: "Standard High Mast", detail: "Highway interchanges, toll plazas, container yards. 8–12 lamp positions with motorised lowering." },
                { badge: "Most Popular", height: "20", desc: "Medium High Mast", detail: "Highway interchanges, toll plazas, container yards. 8–12 lamp positions with motorised lowering." },
                { badge: "Heavy Duty", height: "30", desc: "Tall Mast", detail: "Ports, airports, large stadiums. 12–16 lamp positions; reinforced foundation required." },
                { badge: "Extreme", height: "40", desc: "Ultra High Mast", detail: "Expressway interchanges, large airports. Custom engineering; project basis only." }
              ].map((v, i) => (
                <div key={i} className={styles.variantCard}>
                  <div className={styles.variantHeader}>
                    <span className={styles.variantBadge}>{v.badge}</span>
                  </div>
                  <div className={styles.variantTitleBox}>
                    <span className={styles.variantHeight}>{v.height}</span>
                    <span className={styles.variantUnit}>m</span>
                  </div>
                  <h4 className={styles.variantDesc}>{v.desc}</h4>
                  <p className={styles.variantDetail}>{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Specifications */}
        <section id="specs" className={styles.specsSection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrow}>Technical Data</div>
            <h2 className={styles.sectionTitle}>Product Specifications</h2>
            <p className={styles.sectionDesc}>
              All technical data for our standard IS 2713-compliant high mast pole range. Custom specs available on request.
            </p>
            
            <div className={styles.specsWrapper}>
              <div className={styles.specsHeader}>
                <h3 className={styles.specsSheetTitle}>Technical Specification Sheet</h3>
              </div>
              <div className={styles.tableWrapper}>
                <table className={styles.specsTable}>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specParams.map((row, idx) => (
                      <tr key={idx} className={row.highlight ? styles.rowHighlight : ""}>
                        <td>{row.name}</td>
                        <td className={styles.specVal}>{row.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Image Gallery */}
        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrow}>Image Gallery</div>
            <h2 className={styles.sectionTitle}>Professional product views</h2>
            
            <div className={styles.galleryGrid}>
              {[
                "/figma_assets/high_mast_gallery_1.png",
                "/figma_assets/high_mast_gallery_2.png",
                "/figma_assets/high_mast_gallery_3.png",
                "/figma_assets/high_mast_gallery_4.png",
              ].map((imgSrc, i) => (
                <div key={i} className={styles.galleryItem}>
                  <Image
                    src={imgSrc}
                    alt={`High Mast Pole Gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Use Cases */}
        <section className={styles.appsSection}>
          <div className={styles.container}>
            <div className={styles.sectionEyebrow}>Use Cases</div>
            <h2 className={styles.sectionTitle}>Where This Product Is Used</h2>
            <p className={styles.sectionDesc}>
              Trusted across critical infrastructure and industrial projects throughout India.
            </p>
            
            <div className={styles.appsGrid}>
              {[
                { title: "Highways & Expressways", desc: "NHAI, state highway projects, toll plazas, interchanges", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 22h16"/><path d="M4 18h16"/><path d="M14 2h-4l-4 16h12z"/></svg> },
                { title: "Ports & Shipyards", desc: "Container yards, berth areas, industrial port zones", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg> },
                { title: "Airports", desc: "Perimeter roads, cargo areas, aircraft parking aprons", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5 6 7.8 4 9l7 4.5-3.5 3.5-3-1-2 2 4 2 2 4 2-2-1-3 3.5-3.5 4.5 7 1.2-2-1.7-8.5z"/></svg> },
                { title: "Industrial Estates", desc: "Manufacturing plants, SEZs, large logistics parks", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg> },
                { title: "Sports Stadiums", desc: "Cricket grounds, football arenas, multi-purpose sports complexes", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M4 8h16"/><path d="M4 16h16"/><path d="M12 2v20"/></svg> },
                { title: "Railway Yards", desc: "Marshalling yards, goods sheds, maintenance depots", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><path d="M8 15h0"/><path d="M16 15h0"/></svg> }
              ].map((a, i) => (
                <div key={i} className={styles.appCard}>
                  <div className={styles.appCardIconBox}>
                    <span style={{ color: '#f97316', display: 'flex' }}>{a.icon}</span>
                  </div>
                  <h4 className={styles.appCardTitle}>{a.title}</h4>
                  <p className={styles.appCardDesc}>{a.desc}</p>
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
