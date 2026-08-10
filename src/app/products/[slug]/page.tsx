import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";
import { Metadata } from "next";
import { SEO_DATABASE, PRIMARY_DOMAIN } from "@/data/seoData";
import ProductInfoBlocks from "@/components/ProductInfoBlocks";
import FloodLightPage from "./FloodLight";
import HighMastPolesPage from "./HighMastPoles";
import FlagMastPolesPage from "./FlagMastPoles";
import LoweringMechanismsPage from "./LoweringMechanisms";
import GiOctagonalPolePage from "./GiOctagonalPole";
import LatchingMastPage from "./LatchingMast";
import DecoratedPolesPage from "./DecoratedPoles";
import FlpLedLightPage from "./FlpLedLight";
import SolarStreetLightPage from "./SolarStreetLight";
import StreetLightPage from "./StreetLight";
import PcePlugSocketPage from "./PcePlugSocket";
import HeavyDutyPlugPage from "./HeavyDutyPlug";
import Pce125APlugPage from "./Pce125APlug";
import CableDrumsPage from "./CableDrums";
import EmergencyStopButtonPage from "./EmergencyStopButton";
import SmallControlStationPage from "./SmallControlStation";
import McbBoxPage from "./McbBox";
import HenselBoxesPage from "./HenselBoxes";
import PbsControlBoxPage from "./PbsControlBox";
import FlpJunctionBox from "./FlpJunctionBox";
import LedHighBay from "./LedHighBay";
import PolymerGlandsPage from "./PolymerGlands";

export async function generateStaticParams() {
  return [
    { slug: "high-mast-poles" },
    { slug: "flag-mast-poles" },
    { slug: "lowering-mechanisms" },
    { slug: "gi-octagonal-pole" },
    { slug: "latching-mast" },
    { slug: "decorated-poles" },
    { slug: "flp-led-light" },
    { slug: "solar-street-light" },
    { slug: "led-street-light" },
    { slug: "flp-led-highbay" },
    { slug: "pce-plug-socket" },
    { slug: "heavy-duty-plug" },
    { slug: "125a-plug" },
    { slug: "synthetic-cable-drum" },
    { slug: "emergency-stop-button" },
    { slug: "small-control-station" },
    { slug: "mcb-box" },
    { slug: "pbs-control-box" },
    { slug: "hensel-boxes" },
    { slug: "flp-junction-box" },
    { slug: "flood-light" },
    { slug: "ip66-polymer-glands" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = SEO_DATABASE[slug];

  if (!seo) {
    return {
      title: "Product Under Construction",
      description: "Industrial electrical product specifications under construction at Electrika INC.",
    };
  }

  // Base domain image fallback
  const ogImageUrl = seo.ogImage || `${PRIMARY_DOMAIN}/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `${PRIMARY_DOMAIN}/products/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${PRIMARY_DOMAIN}/products/${slug}`,
      title: seo.title,
      description: seo.description,
      siteName: "Electrika INC",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${seo.title} - Electrika INC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Resolve dynamic schemas
  const seo = SEO_DATABASE[slug];
  let schemasJsonLd: React.ReactNode = null;

  if (seo) {
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": seo.title.split("|")[0].trim(),
      "description": seo.description,
      "brand": {
        "@type": "Brand",
        "name": seo.brand || "Electrika INC"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": seo.manufacturer || "Electrika INC"
      },
      "category": "Industrial Electrical Equipment",
      "image": seo.ogImage || `${PRIMARY_DOMAIN}/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png`,
      "additionalProperty": seo.specs?.map(spec => ({
        "@type": "PropertyValue",
        "name": spec.name,
        "value": spec.value
      })),
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "0",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "0",
          "priceCurrency": "INR",
          "valueAddedTaxIncluded": true
        },
        "offers": [
          {
            "@type": "Offer",
            "url": `${PRIMARY_DOMAIN}/products/${slug}`,
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01"
          }
        ]
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": PRIMARY_DOMAIN
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": `${PRIMARY_DOMAIN}/#products`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seo.title.split("|")[0].trim(),
          "item": `${PRIMARY_DOMAIN}/products/${slug}`
        }
      ]
    };

    const faqSchema = seo.faqs && seo.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": seo.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    schemasJsonLd = (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </>
    );
  }

  let contentComponent = null;

  if (slug === "flp-led-highbay") {
    contentComponent = <LedHighBay />;
  } else if (slug === "flood-light") {
    contentComponent = <FloodLightPage />;
  } else if (slug === "high-mast-poles") {
    contentComponent = <HighMastPolesPage />;
  } else if (slug === "flag-mast-poles") {
    contentComponent = <FlagMastPolesPage />;
  } else if (slug === "lowering-mechanisms") {
    contentComponent = <LoweringMechanismsPage />;
  } else if (slug === "gi-octagonal-pole") {
    contentComponent = <GiOctagonalPolePage />;
  } else if (slug === "latching-mast") {
    contentComponent = <LatchingMastPage />;
  } else if (slug === "decorated-poles") {
    contentComponent = <DecoratedPolesPage />;
  } else if (slug === "flp-led-light") {
    contentComponent = <FlpLedLightPage />;
  } else if (slug === "solar-street-light") {
    contentComponent = <SolarStreetLightPage />;
  } else if (slug === "led-street-light") {
    contentComponent = <StreetLightPage />;
  } else if (slug === "pce-plug-socket") {
    contentComponent = <PcePlugSocketPage />;
  } else if (slug === "heavy-duty-plug") {
    contentComponent = <HeavyDutyPlugPage />;
  } else if (slug === "125a-plug") {
    contentComponent = <Pce125APlugPage />;
  } else if (slug === "synthetic-cable-drum") {
    contentComponent = <CableDrumsPage />;
  } else if (slug === "emergency-stop-button") {
    contentComponent = <EmergencyStopButtonPage />;
  } else if (slug === "small-control-station") {
    contentComponent = <SmallControlStationPage />;
  } else if (slug === "mcb-box") {
    contentComponent = <McbBoxPage />;
  } else if (slug === "hensel-boxes") {
    contentComponent = <HenselBoxesPage />;
  } else if (slug === "pbs-control-box") {
    contentComponent = <PbsControlBoxPage />;
  } else if (slug === "flp-junction-box") {
    contentComponent = <FlpJunctionBox />;
  } else if (slug === "ip66-polymer-glands") {
    contentComponent = <PolymerGlandsPage />;
  } else {
    contentComponent = <FallbackProductPage slug={slug} />;
  }

  return (
    <>
      {schemasJsonLd}
      {contentComponent}
      {/* AI Citation Content Blocks — always before Footer */}
      <ProductInfoBlocks slug={slug} />
      <Footer />
    </>
  );
}

function FlameproofHighBayPage() {
  const specParams = [
    { name: "Ex Protection Code", val: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db", highlight: false },
    { name: "Compliance Testing Standard", val: "IEC 60079-0, IEC 60079-1, EN 60079-31", highlight: false },
    { name: "Ingress Protection Level", val: "IP66 Dust-tight & High Pressure Water Jet Resistant", highlight: true },
    { name: "Housing Assembly Material", val: "High-Strength Copper-Free Die-Cast Aluminum Gray", highlight: false },
    { name: "Optical Window Material", val: "Toughened Prismatic Borosilicate Flameproof Glass", highlight: false },
    { name: "Input Electrical Operating Range", val: "100V–277V AC, 50Hz/60Hz Functionality", highlight: false },
    { name: "Conduit Cable Entry Ports", val: "Dual NPT 3/4\" or M20 Openings (1 Pre-Plugged as shown)", highlight: false },
    { name: "Color Rendering Index (CRI)", val: "> 80 Ra", highlight: false },
    { name: "Luminaire Lifespan (L70)", val: "> 50,000 Hours Continuous Operating Conditions", highlight: false }
  ];

  const appCards = [
    { title: "Oil & Gas Refineries", desc: "Process units, pump rooms, valve manifold areas, tank farm walkways", icon: "🛢️" },
    { title: "Offshore Platforms", desc: "Deck lighting, wellhead areas, compressor modules, accommodation exits", icon: "⚓" },
    { title: "Chemical Plants", desc: "Solvent handling, reaction areas, storage zones for flammable liquids", icon: "🧪" },
    { title: "Flour Mills & Silos", desc: "Dust Zone 21/22 classified areas — explosive flour/grain dust atmosphere", icon: "🌾" },
    { title: "Paint Spray Booths", desc: "Automotive and industrial paint shops with solvent vapour hazard", icon: "🚗" },
    { title: "Mining — DGMS Zones", desc: "Underground coal mines, firedamp zones — DGMS certified applications", icon: "⛏️" }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main className={styles.mainContent}>
        {/* 1. Warning Compliance Banner */}
        <div className={styles.warningStrip}>
          <div className={styles.warningInner}>
            <span className={styles.warningIcon}>⚠️</span>
            <p className={styles.warningText}>
              <strong className={styles.warningHighlight}>Certified for Hazardous Area Environments</strong>
              {" · Zone 1 & 2 (Flammable Gas/Vapor Protection) · Zone 21 & 22 (Combustible Dust Protection) · Ex d IIC T6 Gb compliant enclosure built for rigorous industrial settings."}
            </p>
          </div>
        </div>

        {/* 2. Product Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>Heavy-Duty Flameproof Luminaire</span>
                <h1 className={styles.heroTitle}>
                  Flameproof High-Bay <br />
                  <span className={styles.orangeText}>LED Light</span>
                </h1>
                <p className={styles.heroDesc}>
                  High-efficiency explosion-proof lighting engineered specifically for high-ceiling architectural structures and challenging industrial processing areas. Features an advanced finned integrated heat sink for maximum thermal dissipation, a durable protective adjustable mounting bracket, and a rugged gas/dust explosion-proof die-cast housing.
                </p>

                <div className={styles.metaGrid}>
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
                  <a href="#enquiry-form" className={styles.btnPrimary}>
                    Request Quotation →
                  </a>
                  <a href="#specifications" className={styles.btnSecondary}>
                    Technical Specifications
                  </a>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/figma_assets/2e43797c478614345d71a3076eb9038170a64d78.png"
                    alt="Flameproof High-Bay LED Light Enclosure Detail Showing Finned Cooling Array and Entry Ports"
                    fill
                    sizes="(max-width: 1024px) 100vw, 570px"
                    className={styles.heroImage} style={{ viewTransitionName: 'product-image-flp-led-highbay' }}
                    priority
                  />
                  <div className={styles.tagPremium}>Premium Quality</div>
                  <div className={styles.tagZone}>⚠ Zone 1, 2, 21, 22</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Performance Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Core Performance Engineering</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              Our Flameproof High-Bay LED Light represents the pinnacle of hazardous-area optical engineering. Designed to replace power-hungry HID lamps in petrochemical refineries, pharmaceutical lines, paint booths, and marine environments, this luminaire delivers reliable illumination while preventing internal ignition from escaping into the surrounding atmosphere.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚙️</div>
                <h3 className={styles.featureTitle}>Finned Thermal Management</h3>
                <p className={styles.featureDesc}>
                  The high-surface-area circular cooling fin structure optimizes natural convection, ensuring cool operation for sensitive internal circuitry.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3 className={styles.featureTitle}>Explosion-Proof Entry Ports</h3>
                <p className={styles.featureDesc}>
                  Equipped with precise threaded conduit entries and flameproof plugs to securely seal electrical wiring fields against ignition blowouts.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>👁️</div>
                <h3 className={styles.featureTitle}>High-Density COB Optics</h3>
                <p className={styles.featureDesc}>
                  Concentrated central optics with a micro-textured patterned lens offer glare-controlled, uniform downlighting for high-clearance structures.
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚓</div>
                <h3 className={styles.featureTitle}>Heavy-Duty Mount Bracket</h3>
                <p className={styles.featureDesc}>
                  Thick-gauge steel structural handle features dual-axis locking bolt points for secure overhead hanging, wall, or ceiling mounting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Safety & Compliance */}
        <section className={styles.complianceSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Hazardous Area Safety Compliance</h2>
            <div className={styles.accentLine}></div>
            <p className={styles.sectionIntro}>
              This high-bay light fixture is strictly manufactured and type-tested to operate safely in environments where explosive properties are continuously, periodically, or intermittently present.
            </p>

            <div className={styles.zonesGrid}>
              <div className={`${styles.zoneCard} ${styles.zoneRed}`}>
                <div className={styles.zoneHeader}>
                  <span className={styles.zoneDot}></span>
                  <span className={styles.zoneName}>Zone 1</span>
                </div>
                <span className={styles.zoneSub}>Gas / Vapor</span>
                <p className={styles.zoneDesc}>
                  Areas where explosive gas atmospheres are likely to occur in normal operation intermittently.
                </p>
                <span className={styles.zoneStatus}>Fully Certified</span>
              </div>

              <div className={`${styles.zoneCard} ${styles.zoneOrange}`}>
                <div className={styles.zoneHeader}>
                  <span className={styles.zoneDot}></span>
                  <span className={styles.zoneName}>Zone 2</span>
                </div>
                <span className={styles.zoneSub}>Gas / Vapor</span>
                <p className={styles.zoneDesc}>
                  Areas where explosive gas atmospheres are not likely to occur, or persist for only a short period.
                </p>
                <span className={styles.zoneStatus}>Fully Certified</span>
              </div>

              <div className={`${styles.zoneCard} ${styles.zoneYellow}`}>
                <div className={styles.zoneHeader}>
                  <span className={styles.zoneDot}></span>
                  <span className={styles.zoneName}>Zone 21</span>
                </div>
                <span className={styles.zoneSub}>Dust / Powder</span>
                <p className={styles.zoneDesc}>
                  Environments where combustible dust clouds are expected to occur occasionally in normal operations.
                </p>
                <span className={styles.zoneStatus}>Fully Certified</span>
              </div>

              <div className={`${styles.zoneCard} ${styles.zoneGreen}`}>
                <div className={styles.zoneHeader}>
                  <span className={styles.zoneDot}></span>
                  <span className={styles.zoneName}>Zone 22</span>
                </div>
                <span className={styles.zoneSub}>Dust / Powder</span>
                <p className={styles.zoneDesc}>
                  Environments where combustible dust layers or clouds are rare and disappear quickly.
                </p>
                <span className={styles.zoneStatus}>Fully Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Design & Sidebar Section */}
        <section className={styles.advantagesSection}>
          <div className={styles.container}>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantagesContent}>
                <h2 className={styles.sectionTitle}>Design & Material Advantages</h2>
                <div className={styles.accentLine}></div>

                <div className={styles.advantageBlock}>
                  <h3 className={styles.advantageTitle}>Die-Cast Aluminum Enclosure</h3>
                  <p className={styles.advantageDesc}>
                    Manufactured using premium copper-free die-cast aluminum alloys, the main structural hub offers immense structural integrity capable of withstanding high internal explosion pressures without deformation. The structural components are treated with a corrosion-resistant epoxy electrostatic powder coating.
                  </p>
                </div>

                <div className={styles.advantageBlock}>
                  <h3 className={styles.advantageTitle}>Dual Conduit Configuration</h3>
                  <p className={styles.advantageDesc}>
                    As clearly shown in the profile image, the top terminal junction features side-by-side specialized access entries. One port is outfitted with a heavy-duty hexagonal internal wrench drive flameproof blanking plug, while the adjacent open port provides clean access for threaded explosion-proof glands or cable sealing systems.
                  </p>
                </div>

                <div className={styles.advantageBlock}>
                  <h3 className={styles.advantageTitle}>Advanced Optics & Lens Design</h3>
                  <p className={styles.advantageDesc}>
                    The fixture utilizes high-transmittance, impact-resistant borosilicate glass with a specialized internal prismatic grid array. This maximizes lumen throughput from the high-power COB chip while ensuring the outer surface maintains a strict T6 thermal threshold below 85°C.
                  </p>
                </div>
              </div>

              <div className={styles.advantagesSidebar}>
                <h3 className={styles.sidebarTitle}>Key Application Checklist</h3>
                <p className={styles.sidebarIntro}>
                  Ideal for extreme facilities that demand continuous high-lumen reliability alongside zero sparks propagation:
                </p>
                <ul className={styles.sidebarList}>
                  <li>Oil & Gas Onshore and Offshore Rigs</li>
                  <li>Chemical & Distillery Process Plants</li>
                  <li>Grain Silos, Flour Mills & Sugar Packaging</li>
                  <li>Automotive Spray Paint Booth bays</li>
                  <li>Aerospace Fueling Hangars</li>
                  <li>Marine Engine Rooms & Cargo Holds</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Technical Specifications Table */}
        <section id="specifications" className={styles.specsSection}>
          <div className={styles.container}>
            <div className={styles.specsTableWrapper}>
              <div className={styles.specsHeader}>
                <h3>Technical Specifications</h3>
              </div>
              <table className={styles.specsTable}>
                <thead>
                  <tr>
                    <th>Specification Parameter</th>
                    <th>Standard Rating Details</th>
                  </tr>
                </thead>
                <tbody>
                  {specParams.map((param, index) => (
                    <tr key={index} className={index % 2 === 1 ? styles.altRow : ""}>
                      <td className={styles.paramName}>{param.name}</td>
                      <td className={param.highlight ? styles.paramValHighlight : styles.paramVal}>
                        {param.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 7. Mandated Applications Grid */}
        <section className={styles.mandatedSection}>
          <div className={styles.container}>
            <div className={styles.mandatedHeader}>
              <span className={styles.mandatedEyebrow}>Hazardous Area Applications</span>
              <h2 className={styles.mandatedTitle}>Where This Luminaire Is Mandated</h2>
              <p className={styles.mandatedSubtitle}>
                Standard LED or fluorescent fixtures are a legal ignition hazard in these locations. Flameproof certification is a regulatory requirement, not an option.
              </p>
            </div>

            <div className={styles.appsGrid}>
              {appCards.map((app, index) => (
                <div key={index} className={styles.appCard}>
                  <div className={styles.appIconWrapper}>
                    <span className={styles.appIcon}>{app.icon}</span>
                  </div>
                  <h4 className={styles.appTitle}>{app.title}</h4>
                  <p className={styles.appDesc}>{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

function FallbackProductPage({ slug }: { slug: string }) {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.fallbackContent}>
        <div className={styles.container}>
          <h1>Product: {slug}</h1>
          <p>This product page is currently under construction. Please check back later or contact us directly for catalog specifications.</p>
          <Link href="/#products" className={styles.backBtn}>
            ← Back to Products
          </Link>
        </div>
      </main>
    </div>
  );
}
