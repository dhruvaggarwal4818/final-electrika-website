"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as TransitionLink } from 'next-view-transitions';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

// Brand logos carried
const BRANDS = [
  { name: "Bajaj", src: "/figma_assets/701133d47720789b84569e9d18059437cf8ef79a.png", width: 125, height: 63 },
  { name: "Surya Roshni", src: "/figma_assets/c996060d11d90ebd9268c794033e78653888594b.png", width: 143, height: 114 },
  { name: "Hensel", src: "/figma_assets/9c9f57c31fe627dd6c0ef9f6b76bf4d62508f1b7.png", width: 131, height: 53 },
  { name: "PCE", src: "/figma_assets/ce67be05bd9881eec2a16dd080e90b0e13ce81d5.png", width: 114, height: 73 },
  { name: "Transrail", src: "/figma_assets/8cfde7f4ef8bdfca0273e4e8f6098411e02772d0.png", width: 95, height: 32 },
  { name: "Valmont", src: "/figma_assets/5d7ec0206edeb913077c94813a8d54fd3180fd94.png", width: 121, height: 50 },
  { name: "Utkarsh", src: "/figma_assets/2a6b008c3461d0be1bad353e5f6514ccda6e6060.png", width: 107, height: 41 },
  { name: "Hira RR Ispat", src: "/figma_assets/5d10b21ff7e99a932938483c934b6d7cc29e8e0f.png", width: 123, height: 74 },
  { name: "Bajaj Secondary", src: "/figma_assets/3314c5863ad94a5674095fe86b2c43ea0d8c6784.png", width: 64, height: 46 },
  { name: "Surya Roshni Secondary", src: "/figma_assets/84c18ec8b33e02297d337cac0c3210ce0bb26434.png", width: 121, height: 27 },
  { name: "Hensel Secondary", src: "/figma_assets/b30f0cf57c67fecd475e35aa16d8dd3d7442b5f4.png", width: 124, height: 111 },
  { name: "PCE Secondary", src: "/figma_assets/da9b196635716ec04c7f237c4d82a28ddf3584c7.png", width: 88, height: 70 },
];

import { PRODUCT_CATEGORIES } from "@/data/productsData";

// Project Gallery
const PROJECTS = [
  { name: "Switchgear & Connectors", src: "/figma_assets/projects_switchgear.jpg" },
  { name: "Warehouse Lighting", src: "/figma_assets/projects_warehouse.jpg" },
  { name: "Industrial Installation", src: "/figma_assets/projects_industrial.jpg" },
];

// Client Logos (Trusted By)
const CLIENTS = [
  { name: "Transrail", src: "/figma_assets/2b7750f9baf8675ba961acb5d67ce5a2870b75f6.png" },
  { name: "Valmont Industries", src: "/figma_assets/07c4a1d3663cc2a32d396a2b8960377d5c1110b2.png" },
  { name: "Utkarsh", src: "/figma_assets/eb5ebfdf6b96b5ff016dbd41e0350e8f7c98f2f2.png" },
  { name: "Hira RR Ispat", src: "/figma_assets/2ad8d84caacaaaa9ac72e38553fe235d6c8b5a25.png" },
  { name: "Bajaj Logo", src: "/figma_assets/a51a81e643c4cb49bbab7edf950baf43a1c51454.png" },
  { name: "Bajaj Electricals", src: "/figma_assets/58e7e62c2b7de08b4967543e004fcf842bffc6c8.png" },
  { name: "Bajaj Projects", src: "/figma_assets/981b1d95f66b1371800c51e3904fc229060e5676.png" },
];

// Testimonials
const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote: '"Supplied 30+ high mast poles for our highway project on schedule. Quality was exactly as specified — full documentation provided."',
    authorInitials: "RK",
    authorName: "Rajesh Kumar",
    authorTitle: "Civil Contractor, Haryana PWD",
    avatarBg: "#1a9fd8",
  },
  {
    stars: "★★★★★",
    quote: '"Best pricing on PCE industrial connectors. Their team helped us select the right IP-rated fittings for our plant. Very professional."',
    authorInitials: "AS",
    authorName: "Amit Sharma",
    authorTitle: "Purchase Manager, Industrial Plant",
    avatarBg: "#e8933a",
  },
  {
    stars: "★★★★★",
    quote: '"Quick quotation, helped us pick the right Hensel junction boxes for our hazardous area. Responsive and technically sound team."',
    authorInitials: "PV",
    authorName: "Priya Verma",
    authorTitle: "Facility Manager, Logistics Park",
    avatarBg: "#374151",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("dark");
    }
  };

  return (
    <div className={`${styles.pageWrapper} ${darkMode ? "dark-mode-active" : ""}`}>
      {/* 1. Header (Navigation) */}
      <Header />

      {/* Main Page Content */}
      <main>
        {/* 2. Hero Section */}
        <section className={styles.heroSection} aria-label="Hero Introduction">
          {/* Aesthetic Theme Toggle (Moon symbol) */}
          <button 
            onClick={toggleDarkMode}
            className={styles.themeToggle}
            aria-label="Toggle Theme"
          >
            <span className="text-[20px] font-bold">{darkMode ? "☀️" : "🌙"}</span>
          </button>

          <div className={styles.heroInner}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                <div className={styles.heroBadge}>
                  <span className={styles.badgeDot}></span>
                  <span className={styles.badgeText}>INDIA&apos;S TRUSTED ELECTRICAL SUPPLIER</span>
                </div>
                <h1 className={styles.heroTitle}>
                  Power Your <br />
                  <span className={styles.gradientBlueOrange}>Industrial</span> <br />
                  <span className={styles.gradientOrangeRed}>Projects</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  High mast poles, LED lighting, explosion-proof fittings, cables, switchgear &amp; accessories — for contractors, industries and government projects.
                </p>
                <div className={styles.heroButtons}>
                  <a href="#enquiry-form" className={styles.btnPrimary}>
                    Get a Quote
                  </a>
                  <a href="#products" className={styles.btnOutline}>
                    Explore Products
                  </a>
                </div>
                <div className={styles.heroTrust}>
                  <div className={styles.avatars}>
                    <div className={styles.avatar} style={{ backgroundColor: "#1a9fd8" }}>RK</div>
                    <div className={styles.avatar} style={{ backgroundColor: "#e8933a" }}>AS</div>
                    <div className={styles.avatar} style={{ backgroundColor: "#374151" }}>PM</div>
                  </div>
                  <p className={styles.trustText}>
                    <span className={styles.trustTextStrong}>500+ Projects</span> delivered across India
                  </p>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.imageCard}>
                  <Image
                    src="/figma_assets/new_hero_image.jpg"
                    alt="Industrial Electrical Background"
                    fill
                    priority
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Brands Carried Strip */}
        <section className={styles.brandsSection} aria-label="Brands we carry">
          <div className={`${styles.container} ${styles.brandsContainer}`}>
            <p className={styles.brandsTitle}>BRANDS WE CARRY</p>
            <div className={styles.brandsGrid}>
              {React.createElement(
                'marquee',
                {
                  behavior: 'scroll',
                  direction: 'left',
                  scrollamount: '6',
                  style: { width: '100%' }
                },
                React.createElement(
                  'div',
                  { style: { display: 'flex', gap: '50px', alignItems: 'center' } },
                  [...BRANDS, ...BRANDS, ...BRANDS].map((brand, idx) => (
                    <div key={idx} className={styles.brandCard}>
                      <Image
                        src={brand.src}
                        alt={`${brand.name} logo`}
                        width={brand.width}
                        height={brand.height}
                        className={styles.brandImage}
                      />
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us (Features) Section */}
        <section className={styles.featuresSection} aria-labelledby="features-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.sectionEyebrow}>Why Choose Us</p>
              <h2 id="features-heading" className={styles.sectionTitle}>Built for Industrial Buyers</h2>
              <div className={styles.accentLineCentered}></div>
            </div>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3 className={styles.featureTitle}>Genuine Products Only</h3>
                <p className={styles.featureDesc}>
                  Authorized supply chain with full documentation, proper bills, and same-day GST invoice. Zero grey market products — ever.
                </p>
              </div>

              <div className={`${styles.featureCard} ${styles.featureCardAlt}`}>
                <div className={styles.featureIcon}>🚚</div>
                <h3 className={styles.featureTitle}>Pan-India Fast Delivery</h3>
                <p className={styles.featureDesc}>
                  Timely freight coordination for bulk orders — from Haryana to any project site across India, delivered on schedule.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔧</div>
                <h3 className={styles.featureTitle}>Technical Guidance</h3>
                <p className={styles.featureDesc}>
                  Expert product selection support for poles, panels, cables, and explosion-proof fittings tailored to your exact project specs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. About Us Section */}
        <section className={styles.aboutSection} aria-labelledby="about-heading">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutVisual}>
                <Image
                  src="/figma_assets/new_about_image.png"
                  alt="Engineer working with High Mast Light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 890px"
                  className={styles.aboutImage}
                />
                <span className={styles.aboutBadge}>MAKE IN INDIA</span>
              </div>

              <div className={styles.aboutContent}>
                <p className={styles.sectionEyebrow}>About Electrika INC</p>
                <h2 id="about-heading" className={styles.sectionTitle}>
                  Your One-Stop <br />
                  Electrical Supply Partner
                </h2>
                <div className={styles.accentLine}></div>
                <p className={styles.aboutDesc}>
                  From a single street light to full-scale infrastructure supply — we deliver with reliability. Transparent pricing, proper documentation, and on-time delivery every time.
                </p>

                <div className={styles.checkList}>
                  <div className={styles.checkItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <div className={styles.checkText}>
                      <span className={styles.checkTitle}>Bulk Order Specialists</span>
                      <span className={styles.checkDesc}>Scaled pricing for large contractor and government orders</span>
                    </div>
                  </div>

                  <div className={styles.checkItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <div className={styles.checkText}>
                      <span className={styles.checkTitle}>Transparent GST Pricing</span>
                      <span className={styles.checkDesc}>Formal quotations — no hidden costs ever</span>
                    </div>
                  </div>

                  <div className={styles.checkItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <div className={styles.checkText}>
                      <span className={styles.checkTitle}>25+ Years Industry Trust</span>
                      <span className={styles.checkDesc}>Serving electrical contractors across Haryana &amp; beyond</span>
                    </div>
                  </div>

                  <div className={styles.checkItem}>
                    <div className={styles.checkIcon}>✓</div>
                    <div className={styles.checkText}>
                      <span className={styles.checkTitle}>Explosion-Proof &amp; IP-Rated Products</span>
                      <span className={styles.checkDesc}>Hazardous area solutions from PCE &amp; Hensel brands</span>
                    </div>
                  </div>
                </div>

                <Link href="/about-us" className={styles.aboutCtaBtn}>
                  Learn More About Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Product Catalogue */}
        <section id="products" className={styles.productsSection} aria-labelledby="products-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Product Catalogue</p>
              <h2 id="products-heading" className={styles.sectionTitle}>What We Supply</h2>
              <div className={styles.accentLine}></div>
              <p className={styles.sectionSubtitle}>
                Industrial-grade products across 4 categories — from poles to explosion-proof accessories.
              </p>
            </div>

            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div key={idx} className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  <span className={cat.isOrangeTag ? `${styles.categoryTag} ${styles.categoryTagOrange}` : styles.categoryTag}>
                    {cat.tag}
                  </span>
                </div>

                <div className={styles.productGrid}>
                  {cat.products.map((prod, prodIdx) => (
                    <div key={prodIdx} className={styles.productCardWrapper}>
                      <TransitionLink
                        href={prod.slug ? `/products/${prod.slug}` : "#enquiry-form"}
                        className={styles.productCard}
                        style={{ textDecoration: "none" }}
                      >
                        <div className={styles.productImageWrapper}>
                          <Image
                            src={prod.src}
                            alt={prod.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 250px"
                            className={styles.productCardImage}
                            style={{ viewTransitionName: prod.slug ? `product-image-${prod.slug}` : 'none' }}
                          />
                          {prod.badge && (
                            <span className={styles.productBadge}>{prod.badge}</span>
                          )}
                        </div>
                        <div className={styles.productBody}>
                          <h4 className={styles.productCardTitle}>{prod.name}</h4>
                          <p className={styles.productCardDesc}>{prod.desc}</p>
                          <span className={styles.productCardLink}>
                            View specs →
                          </span>
                        </div>
                      </TransitionLink>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Infield Projects Gallery */}
        <section id="projects" className={styles.projectsSection} aria-label="Infield projects gallery">
          <div className={styles.projectsWrapper}>
            <div className={styles.projectsGrid}>
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className={styles.projectCard}>
                  <Image
                    src={proj.src}
                    alt={proj.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className={styles.projectImage}
                  />
                  <div className={styles.projectOverlay}></div>
                  <span className={styles.projectText}>{proj.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Trusted Clients Logo Grid */}
        <section className={styles.clientsSection} aria-labelledby="clients-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.sectionEyebrow}>Trusted By</p>
              <h2 id="clients-heading" className={styles.sectionTitle}>Our Clients &amp; Partners</h2>
              <div className={styles.accentLineCentered}></div>
            </div>

            <div className={styles.clientsGrid}>
              {CLIENTS.map((client, idx) => (
                <div key={idx} className={styles.clientCard}>
                  <div className={styles.clientLogoWrapper}>
                    <Image
                      src={client.src}
                      alt={`${client.name} logo`}
                      fill
                      sizes="120px"
                      className={styles.clientLogo}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. How It Works Section */}
        <section className={styles.processSection} aria-labelledby="process-heading">
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.sectionEyebrow}>How It Works</p>
              <h2 id="process-heading" className={styles.sectionTitle} style={{ color: "#ffffff" }}>
                Simple 3-Step Ordering
              </h2>
              <div className={styles.accentLineCentered}></div>
              <p className={styles.sectionSubtitle} style={{ color: "#f0f2f5" }}>
                From enquiry to delivery — fast, documented, and reliable.
              </p>
            </div>

            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <h3 className={styles.stepTitle}>Share Your Requirement</h3>
                <p className={styles.stepDescription}>
                  Product, quantity &amp; location — via WhatsApp, call, or the enquiry form below.
                </p>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <h3 className={styles.stepTitle}>Receive Formal Quotation</h3>
                <p className={styles.stepDescription}>
                  GST quotation with specs, pricing &amp; delivery timeline within 24 hours.
                </p>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <h3 className={styles.stepTitle}>Confirm &amp; Get Delivered</h3>
                <p className={styles.stepDescription}>
                  Order confirmed — we dispatch with freight coordination to your project site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Stats Row Section */}
        <section className={styles.statsSection} aria-label="Key business metrics">
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>25+</span>
                <span className={styles.statLabel}>Years in Industry</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Premium Brands</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Testimonials Section */}
        <section className={styles.testimonialsSection} aria-label="Customer reviews">
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <p className={styles.sectionEyebrow}>Client Reviews</p>
              <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
              <div className={styles.accentLineCentered}></div>
            </div>

            <div className={styles.testimonialsGrid}>
              {TESTIMONIALS.map((testi, idx) => (
                <div key={idx} className={styles.testimonialCard}>
                  <div className={styles.stars}>{testi.stars}</div>
                  <p className={styles.quote}>{testi.quote}</p>
                  <div className={styles.author}>
                    <div className={styles.avatarWrapper}>
                      <div className={styles.testimonialAvatar} style={{ backgroundColor: testi.avatarBg }}>
                        {testi.authorInitials}
                      </div>
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{testi.authorName}</span>
                      <span className={styles.authorTitle}>{testi.authorTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 12. Footer (includes CTA banner and Enquiry form) */}
      <Footer />
    </div>
  );
}
