import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandResourceCard from "@/components/BrandResourceCard";
import { PRIMARY_DOMAIN } from "@/data/constants";
import {
  COMPANY_DOWNLOADS,
  POLE_BRANDS,
  POLE_RELATED_PRODUCTS,
  PRICE_LIST_BRANDS,
} from "@/data/priceListData";
import styles from "./price-list.module.css";

const PAGE_URL = `${PRIMARY_DOMAIN}/price-list`;
const PAGE_TITLE = "Price List 2026: Polycab, Schneider, Hensel, AKG | Electrika INC";
const PAGE_DESCRIPTION =
  "View or download Electrika INC price lists for Polycab wires and cables, AKG PVC conduits, Hensel junction boxes, Schneider Electric and Halonix lighting (PDF).";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "Electrika INC",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: PRIMARY_DOMAIN },
    { "@type": "ListItem", position: 2, name: "Price List", item: PAGE_URL },
  ],
};

export default function PriceListPage() {
  return (
    <div className={styles.pageWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main>
        <section className={styles.brandSection} aria-labelledby="price-list-heading">
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Price List</li>
            </ol>
          </nav>
          <h1 id="price-list-heading" className={styles.title}>
            Electrika INC Price List 2026
          </h1>
          <p className={styles.intro}>
            View or download the price lists for the brands we supply: Polycab wires and cables,
            AKG PVC conduits and fittings, Hensel junction boxes and enclosures, Schneider Electric
            distribution and wiring products, and Halonix lighting. Each list shows the effective
            date printed in the PDF. Prices are subject to change, so contact Electrika INC in
            Sadar Bazaar, Gurugram for current rates and project quotes.
          </p>
          <div className={styles.brandGrid}>
            {PRICE_LIST_BRANDS.map((brand) => (
              <BrandResourceCard key={brand.name} item={brand} />
            ))}
          </div>
        </section>

        <section className={styles.coverageSection} aria-labelledby="price-list-coverage-heading">
          <h2 id="price-list-coverage-heading" className={styles.coverageTitle}>
            What each price list covers
          </h2>
          <div className={styles.coverageGrid}>
            {PRICE_LIST_BRANDS.map(({ name, file, priceList }) =>
              priceList ? (
                <article key={name} id={priceList.id} className={styles.coverageItem}>
                  <h3 className={styles.coverageBrand}>{name} price list</h3>
                  <p className={styles.coverageMeta}>
                    {priceList.effectiveLabel}
                    {priceList.reference ? ` · ${priceList.reference}` : ""}
                    {` · PDF, ${priceList.fileSize}`}
                  </p>
                  <ul className={styles.categoryList}>
                    {priceList.categories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                  <p className={styles.coverageLinks}>
                    <a href={file} target="_blank" rel="noopener noreferrer">
                      Open the {name} price list PDF
                    </a>
                  </p>
                  {priceList.relatedProducts && (
                    <p className={styles.coverageLinks}>
                      Related products:{" "}
                      {priceList.relatedProducts.map((link, index) => (
                        <React.Fragment key={link.href}>
                          {index > 0 && ", "}
                          <Link href={link.href}>{link.label}</Link>
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </article>
              ) : null,
            )}
          </div>
        </section>

        <section className={styles.downloadSection} aria-labelledby="price-list-downloads-heading">
          <h2 id="price-list-downloads-heading" className={styles.downloadTitle}>
            Download Catalog and profile
          </h2>
          <div className={styles.downloadGrid}>
            {COMPANY_DOWNLOADS.map((item) => (
              <BrandResourceCard key={item.name} item={item} largeText />
            ))}
            {POLE_BRANDS.map((brand) => (
              <BrandResourceCard key={brand.name} item={brand} />
            ))}
          </div>
          <p className={styles.poleLinks}>
            Related products:{" "}
            {POLE_RELATED_PRODUCTS.map((link, index) => (
              <React.Fragment key={link.href}>
                {index > 0 && " · "}
                <Link href={link.href}>{link.label}</Link>
              </React.Fragment>
            ))}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
