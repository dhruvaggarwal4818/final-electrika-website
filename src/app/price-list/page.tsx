import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandResourceCard from "@/components/BrandResourceCard";
import { PRIMARY_DOMAIN } from "@/data/constants";
import { COMPANY_DOWNLOADS, POLE_BRANDS, PRICE_LIST_BRANDS } from "@/data/priceListData";
import styles from "./price-list.module.css";

const PAGE_TITLE = "Price List | Electrika INC";
const PAGE_DESCRIPTION =
  "Explore price lists for the trusted brands Electrika INC supplies, and download our company profile and product catalog.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${PRIMARY_DOMAIN}/price-list`,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${PRIMARY_DOMAIN}/price-list`,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "Electrika INC",
  },
};

export default function PriceListPage() {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        <section className={styles.brandSection} aria-labelledby="price-list-heading">
          <h1 id="price-list-heading" className={styles.title}>
            Our Pricing Structure Across Brands
          </h1>
          <p className={styles.intro}>
            Explore our price lists for the trusted brands we supply, covering poles, lighting, enclosures, connectors and cabling for industrial, commercial and infrastructure projects.
          </p>
          <div className={styles.brandGrid}>
            {PRICE_LIST_BRANDS.map((brand) => (
              <BrandResourceCard key={brand.name} item={brand} />
            ))}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
