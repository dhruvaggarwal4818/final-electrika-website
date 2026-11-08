import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as TransitionLink } from 'next-view-transitions';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Counter from "@/components/Counter";
import styles from "./page.module.css";
import { SEO_DATABASE } from "@/data/seoData";
import { PRIMARY_DOMAIN } from "@/data/constants";

// Brand logos carried. Files are trimmed to the logo itself, and sizes give each
// roughly the same visual area, so wide logos are longer and tall ones narrower.
const BRANDS = [
  { name: "AKG", src: "/figma_assets/brands/strip/akg.png", width: 114, height: 39 },
  { name: "Schneider Electric", src: "/figma_assets/brands/strip/schneider.png", width: 122, height: 36 },
  { name: "Polycab", src: "/figma_assets/brands/strip/polycab.png", width: 124, height: 36 },
  { name: "Halonix", src: "/figma_assets/brands/strip/halonix.png", width: 165, height: 26 },
  { name: "Transrail", src: "/figma_assets/brands/strip/transrail.png", width: 115, height: 38 },
  { name: "Valmont", src: "/figma_assets/brands/strip/valmont.png", width: 162, height: 27 },
  { name: "Utkarsh", src: "/figma_assets/brands/strip/utkarsh.png", width: 106, height: 41 },
  { name: "Hira RR Ispat", src: "/figma_assets/brands/strip/hira.png", width: 101, height: 44 },
  { name: "Bajaj", src: "/figma_assets/brands/strip/bajaj.png", width: 74, height: 52 },
  { name: "Surya Roshni", src: "/figma_assets/brands/strip/surya.png", width: 141, height: 31 },
  { name: "Hensel", src: "/figma_assets/brands/strip/hensel.png", width: 130, height: 34 },
  { name: "PCE", src: "/figma_assets/brands/strip/pce.png", width: 35, height: 52 },
];

import { PRODUCT_CATEGORIES } from "@/data/productsData";
import { COMPANY_DOWNLOADS } from "@/data/priceListData";
import BrandResourceCard from "@/components/BrandResourceCard";
import ScrollReveal from "@/components/ScrollReveal";

// Fade up as they scroll into view. Product rows animate as a whole because
// their cards can scroll sideways on smaller screens.
const REVEAL_SELECTORS = [
  styles.heroBadge,
  styles.heroTitle,
  styles.heroSubtitle,
  styles.heroButtons,
  styles.heroTrust,
  styles.heroVisual,
  styles.brandsContainer,
  styles.downloadPanel,
  styles.sectionHeader,
  styles.sectionHeaderCentered,
  styles.featureCard,
  styles.aboutVisual,
  styles.aboutContent,
  styles.categorySection,
  styles.projectCard,
  styles.clientsGrid,
  styles.processStep,
  styles.statCard,
  styles.testimonialCard,
].map((className) => `.${className}`);

// Project Gallery
const PROJECTS = [
  { name: "Industrial Installation", src: "/figma_assets/projects_industrial.jpg" },
  { name: "Warehouse Lighting", src: "/figma_assets/projects_warehouse.jpg" },
  { name: "Switchgear & Connectors", src: "/figma_assets/projects_switchgear.jpg" },
];

// Client Logos (Trusted By). Trimmed files, sized to roughly the same visual area.
const CLIENTS = [
  { name: "Taj", src: "/figma_assets/brands/clients/taj.png", width: 66, height: 58 },
  { name: "Hyundai", src: "/figma_assets/brands/clients/hyundai.png", width: 82, height: 46 },
  { name: "Taiki-Sha", src: "/figma_assets/brands/clients/taiki-sha.png", width: 121, height: 31 },
  { name: "Suzuki", src: "/figma_assets/brands/clients/suzuki.png", width: 75, height: 50 },
  { name: "Honda", src: "/figma_assets/brands/clients/honda.png", width: 69, height: 55 },
  { name: "Bharat Petroleum", src: "/figma_assets/brands/clients/bharat-petroleum.png", width: 52, height: 60 },
  { name: "DLF", src: "/figma_assets/brands/clients/dlf.png", width: 94, height: 40 },
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
  const homeSEO = SEO_DATABASE.home;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Electrika INC",
    "alternateName": "Electrika INC India",
    "url": PRIMARY_DOMAIN,
    "logo": `${PRIMARY_DOMAIN}/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9971499542",
      "contactType": "sales support",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://instagram.com/electrikainc",
      "https://linkedin.com/company/electrika-inc"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Electrika INC",
    "image": `${PRIMARY_DOMAIN}/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png`,
    "telephone": "+91 9971499542",
    "email": "Electrikainc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "L-03 Radha Palace, Gurudwara Road, Sadar bazaar",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4582633",
      "longitude": "77.02649"
    },
    "url": PRIMARY_DOMAIN,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Electrika INC",
    "url": PRIMARY_DOMAIN,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${PRIMARY_DOMAIN}/#products?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeSEO.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Header (Navigation) */}
      <Header />

      {/* Main Page Content */}
      <main>
        {/* 2. Hero Section */}
        <section className={styles.heroSection} aria-label="Hero Introduction">
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
                    <span className={styles.trustTextStrong}>1000+ Projects</span> delivered across India
                  </p>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.imageCard}>
                  <Image
                    src="/figma_assets/new_hero_image.jpg"
                    alt="Electrika INC Industrial Electrical Infrastructure Supply - High Mast Light Poles, Explosion Proof Fittings, and PCE Sockets"
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

        {/* Company downloads */}
        <section className={styles.downloadSection} aria-labelledby="downloads-heading">
          <div className={styles.downloadPanel}>
            <h2 id="downloads-heading" className={styles.sectionTitle}>Download Catalog and profile</h2>
            <div className={styles.downloadDivider}></div>
            <div className={styles.downloadGrid}>
              {COMPANY_DOWNLOADS.map((item) => (
                <BrandResourceCard key={item.name} item={item} largeText />
              ))}
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
                  src="/figma_assets/new_about_image_v2.jpg"
                  alt="Professional Electrical Engineer Assembling and Inspecting an Industrial High Mast Light System in India"
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
                            style={{ viewTransitionName: prod.slug ? `product-image-${prod.slug}` : 'none', objectPosition: prod.imagePosition }}
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
                      width={client.width}
                      height={client.height}
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
                <span className={styles.statValue}>
                  <Counter target={25} suffix="+" />
                </span>
                <span className={styles.statLabel}>Years in Industry</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>
                  <Counter target={1000} suffix="+" />
                </span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>
                  <Counter target={15} suffix="+" />
                </span>
                <span className={styles.statLabel}>Premium Brands</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>
                  <Counter target={98} suffix="%" />
                </span>
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

      <ScrollReveal selectors={REVEAL_SELECTORS} />
    </div>
  );
}
