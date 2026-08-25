import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./product.module.css";
import { Metadata } from "next";
import { SEO_DATABASE } from "@/data/seoData";
import { PRIMARY_DOMAIN } from "@/data/constants";
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
    // seo.title already ends in "| Electrika INC"; using `absolute` here
    // stops the root layout's "%s | Electrika INC" title template from
    // appending the suffix a second time.
    title: { absolute: seo.title },
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
      "additionalProperty": (seo.visualSpecs || seo.specs)?.map(spec => ({
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
