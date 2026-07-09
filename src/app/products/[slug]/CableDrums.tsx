"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./cable-drums.module.css";

export default function CableDrumsPage() {
  const sizes = [
    { dia: 235, capacity: "~20–30m", current: "16A", sockets: "2–4 Nos", weight: "~3.5 kg", use: "Light Duty" },
    { dia: 310, capacity: "~40–50m", current: "16–32A", sockets: "2–4 Nos", weight: "~5.5 kg", use: "Medium Duty" },
    { dia: 380, capacity: "~60–80m", current: "32A", sockets: "4–6 Nos", weight: "~8 kg", use: "Heavy Duty" },
    { dia: 450, capacity: "~100–120m", current: "32–63A", sockets: "4–8 Nos", weight: "~12 kg", use: "Industrial" }
  ];

  const customizations = [
    {
      cat: "🔌 Socket & Connector Options",
      opts: [
        { icon: "🟡", title: "Indian 5-Pin Sockets (230V)", desc: "Hensel-grade weatherproof sockets — 2, 4, or 6 nos as required. 6A / 16A rating." },
        { icon: "🔵", title: "PCE Blue Socket (230V Single Phase)", desc: "IEC 60309 industrial socket — 16A or 32A, 3-pin (2P+E). Blue color coding." },
        { icon: "🔴", title: "PCE Red Socket (415V Three Phase)", desc: "IEC 60309 industrial socket — 16A or 32A, 5-pin (3P+N+E). Red color coding." },
        { icon: "⚡", title: "Siemens MCB Protection", desc: "Built-in Siemens miniature circuit breaker — 16A or 32A, mounted inside protective cover on drum face." }
      ]
    },
    {
      cat: "📐 Cable & Body Options",
      opts: [
        { icon: "📏", title: "Cable Length", desc: "10m / 20m / 30m / 50m or custom. 3-core or 5-core as per requirement." },
        { icon: "⚡", title: "Cable Cross Section", desc: "1.5 sq.mm / 2.5 sq.mm / 4 sq.mm — matched to current rating and cable length." },
        { icon: "🏭", title: "Input Connector Type", desc: "PCE plug (blue/red), bare wire termination, or direct panel wiring as required." },
        { icon: "🔒", title: "Thermal Overload Protection", desc: "Thermal cut-out available on request for protection during coiled cable operation." }
      ]
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>

        {/* HERO SECTION */}
        <section className={styles.heroSection} style={{ padding: '0 10px', marginTop: '10px' }}>
          <div className={styles.heroContainer} style={{ position: 'relative', overflow: 'hidden', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '80px', gap: 0 }}>
            <Image
              src="/figma_assets_93_1452/44a31d01d09fba0bcf8c665802ee490745213221.png"
              alt="Synthetic cable drums background"
              fill
              className={styles.heroBgImg}
              style={{ objectFit: "cover", opacity: 0.3 }}
              priority
            />
            <div className={styles.heroContent} style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%' }}>
              <span className={styles.heroBadge}>
                Industrial Grade
              </span>
              <h1 className={styles.heroTitle}>
                Synthetic Rubber Cable Drum <br />
                <span className={styles.orangeText}>Customizable</span>
              </h1>
              <p className={styles.heroDesc} style={{ color: "#aab0c0", fontSize: '15px' }}>
                Schill drum body with Hensel-grade weatherproof sockets, PCE industrial connectors (blue 230V / red 415V), and Siemens MCB protection — built for construction sites, events, and industrial installations.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT GALLERY / SHOWCASE */}
        <section className={styles.featuresSection} style={{ backgroundColor: "#f5f7fa" }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Product Gallery</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Schill Cable Drum — Hensel Fitted</h2>
            <p className={styles.sectionIntro} style={{ color: '#888' }}>
              Actual product photos from our stock. Available in 4 diameter sizes with custom socket & connector configurations.
            </p>
            
            <div style={{ display: "flex", gap: "30px", marginTop: "40px", flexWrap: "wrap" }}>
              {/* Left Images */}
              <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", borderRadius: "20px", overflow: "hidden", border: "1px solid #e2e8f0", height: "321px", backgroundColor: "#fff" }}>
                  <div style={{ flex: 1, position: "relative", borderRight: "1px solid #e2e8f0" }}>
                    <Image src="/figma_assets_93_1452/0c2342ac833b46667c430abf317962e9f617cd31.png" alt="Cable Drum Front" fill style={{ objectFit: "cover", transform: "rotate(90deg)" }} />
                  </div>
                  <div style={{ flex: 1, position: "relative" }}>
                    <Image src="/figma_assets_93_1452/c149188bc8a9f110341ddcccc98255acaaa5832b.png" alt="Cable Drum Sockets" fill style={{ objectFit: "cover", transform: "rotate(90deg)" }} />
                  </div>
                </div>
                <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #e2e8f0", height: "276px", position: "relative", backgroundColor: "#fff" }}>
                  <Image src="/figma_assets_93_1452/679a4f313d85e30c2b479fa0c862ec51332820f5.png" alt="Rear view" fill style={{ objectFit: "cover" }} />
                </div>
              </div>
              
              {/* Right Info Box */}
              <div style={{ flex: "1 1 500px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "40px", display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                  <span style={{ display: "inline-block", background: "rgba(0,180,216,0.1)", border: "1px solid rgba(0,180,216,0.25)", color: "#00b4d8", fontSize: "12px", fontWeight: "bold", padding: "6px 14px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "20px", alignSelf: 'flex-start' }}>🇩🇪 Made in Germany</span>
                  <h3 style={{ fontSize: "28px", color: "#0d1b2a", marginBottom: "15px", fontWeight: 'bold' }}>Synthetic Rubber Cable Drum<br/>(Customizable)</h3>
                  <p style={{ color: "#8fa3b1", fontSize: "14px", lineHeight: "1.7", marginBottom: "30px" }}>
                    Schill drum body with Hensel-grade weatherproof sockets, PCE industrial connectors (blue 230V / red 415V), and Siemens MCB protection — built for construction sites, events, and industrial installations.
                  </p>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {["235 – 450mm Dia", "IP44 / IP65", "Hensel Sockets", "PCE Connectors", "Siemens MCB", "Synthetic Rubber"].map((tag, idx) => (
                      <span key={idx} style={{ background: "#f5f7fa", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", fontWeight: "600", color: "#0d1b2a", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ width: 8, height: 8, borderRadius: "50%", background: idx % 2 === 0 ? "#00b4d8" : "#f97316" }}></span> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: "#101a2c", borderRadius: "20px", padding: "30px", color: "#fff", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>Custom Configuration Available</h4>
                  <p style={{ color: "#aab0c0", fontSize: "13px", marginBottom: "25px" }}>Choose your drum size, number of sockets (230V / 415V), PCE rating (16A / 32A), cable length, and MCB rating. We build to your spec.</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <button style={{ background: "#f97316", color: "#fff", border: "none", borderRadius: "8px", padding: "14px", fontWeight: "bold", fontSize: "14px", cursor: "pointer" }}>📋 Request Custom Quote</button>
                    <button style={{ background: "transparent", border: "1px solid rgba(0,180,216,0.4)", color: "#00b4d8", borderRadius: "8px", padding: "14px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>💬 WhatsApp for Spec Sheet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIZES */}
        <section className={styles.featuresSection} style={{ backgroundColor: "#f5f7fa", paddingTop: 0 }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Available Sizes</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>4 Diameter Options</h2>
            <p className={styles.sectionIntro} style={{ color: '#888' }}>Select the drum size based on cable capacity and portability requirement.</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "40px" }}>
              {sizes.map((s, i) => (
                <div key={i} style={{ backgroundColor: '#fff', borderRadius: "20px", overflow: "hidden", position: "relative", border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: "4px", background: "#f97316", width: "100%", position: "absolute", top: 0, left: 0 }}></div>
                  <div style={{ padding: "30px", flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ textAlign: "center", marginBottom: "24px" }}>
                      <span style={{ fontSize: "32px", fontWeight: "bold", color: "#101820" }}>{s.dia}</span>
                      <span style={{ fontSize: "18px", fontWeight: "600", color: "#101820" }}> mm</span>
                      <div style={{ fontSize: "14px", color: "#888", marginTop: '4px' }}>Diameter</div>
                    </div>
                    
                    <div style={{ borderTop: "1px solid #f0f4f8", flex: 1 }}>
                      {[
                        { label: "Cable Capacity", val: s.capacity },
                        { label: "Max Current", val: s.current },
                        { label: "Sockets", val: s.sockets },
                        { label: "Weight", val: s.weight },
                        { label: "Use", val: s.use },
                      ].map((spec, idx) => (
                        <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #f0f4f8", fontSize: "13px" }}>
                          <span style={{ color: "#888" }}>{spec.label}</span>
                          <span style={{ color: "#101820", fontWeight: "600" }}>{spec.val}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button style={{ background: "#f5f7fa", border: "1px solid #e2e8f0", width: "100%", padding: "12px", borderRadius: "8px", marginTop: "24px", fontWeight: "bold", fontSize: "13px", color: "#101820", cursor: "pointer", transition: 'all 0.2s' }}>Get Quote →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION OPTIONS */}
        <section className={styles.featuresSection} style={{ backgroundColor: "#f5f7fa", paddingTop: 0 }}>
          <div className={styles.container}>
            <span className={styles.sectionEyebrow}>Customization</span>
            <h2 className={styles.sectionTitle} style={{ fontSize: '40px', color: '#101820', marginBottom: '24px' }}>Build Your Configuration</h2>
            <p className={styles.sectionIntro} style={{ color: '#888' }}>Every drum is assembled to order — pick your exact combination below.</p>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "40px", marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px" }}>
              {customizations.map((cat, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#101820", marginBottom: "24px" }}>{cat.cat}</h3>
                  {cat.opts.map((opt, j) => (
                    <div key={j} style={{ display: "flex", gap: "16px", paddingBottom: "16px", marginBottom: "16px", borderBottom: j === cat.opts.length - 1 ? "none" : "1px solid #f0f4f8" }}>
                      <div style={{ background: "#f5f7fa", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                        {opt.icon}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "14px", fontWeight: "bold", color: "#101820", marginBottom: "6px" }}>{opt.title}</h4>
                        <p style={{ fontSize: "13px", color: "#888", lineHeight: "1.6" }}>{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK FEATURES STRIP */}
        <section style={{ background: "#f5f7fa", paddingBottom: "80px" }}>
          <div className={styles.container}>
            <div style={{ background: "#101a2c", borderRadius: "20px", padding: "50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
              <div>
                <div style={{ marginBottom: "16px", height: "36px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="Germany Flag" style={{ height: "24px", width: "auto", borderRadius: "2px" }} />
                </div>
                <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>Schill Germany</h4>
                <p style={{ color: "#aab0c0", fontSize: "13px", lineHeight: '1.6' }}>Drum body made in Germany — robust synthetic rubber construction for industrial use.</p>
              </div>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>🛡️</div>
                <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>IP44 Rated</h4>
                <p style={{ color: "#aab0c0", fontSize: "13px", lineHeight: '1.6' }}>Splash-proof enclosure — safe for outdoor construction and events.</p>
              </div>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>⚡</div>
                <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>Siemens MCB</h4>
                <p style={{ color: "#aab0c0", fontSize: "13px", lineHeight: '1.6' }}>Built-in Siemens circuit breaker for overload and short circuit protection.</p>
              </div>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>🔌</div>
                <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>PCE + Hensel</h4>
                <p style={{ color: "#aab0c0", fontSize: "13px", lineHeight: '1.6' }}>Premium branded connectors and sockets — not generic Chinese fittings.</p>
              </div>
              <div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>🛠️</div>
                <h4 style={{ color: "#fff", fontSize: "16px", fontWeight: "bold", marginBottom: "12px" }}>Built to Order</h4>
                <p style={{ color: "#aab0c0", fontSize: "13px", lineHeight: '1.6' }}>Every unit assembled to your exact configuration. Lead time 5–7 working days.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
