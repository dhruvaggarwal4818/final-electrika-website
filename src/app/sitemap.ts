import { MetadataRoute } from "next";
import { SEO_DATABASE } from "@/data/seoData";
import { PRIMARY_DOMAIN } from "@/data/constants";
import { PRICE_LIST_BRANDS, PRICE_LIST_PAGE_UPDATED } from "@/data/priceListData";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(SEO_DATABASE);
  
  const pages: MetadataRoute.Sitemap = routes.map((route) => {
    let url = `${PRIMARY_DOMAIN}`;
    if (route !== "home") {
      if (route === "about-us") {
        url = `${PRIMARY_DOMAIN}/about-us`;
      } else {
        url = `${PRIMARY_DOMAIN}/products/${route}`;
      }
    }

    let priority = 0.6;
    if (route === "home") {
      priority = 1.0;
    } else if (route === "about-us") {
      priority = 0.8;
    } else {
      priority = 0.7; // Product pages are high priority in catalog site
    }

    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";
    if (route === "home") {
      changeFrequency = "daily";
    } else if (route === "about-us") {
      changeFrequency = "monthly";
    }

    return {
      url,
      lastModified: new Date("2026-08-03T12:00:00Z"), // Keep standard last modified date
      changeFrequency,
      priority,
    };
  });

  pages.push({
    url: `${PRIMARY_DOMAIN}/price-list`,
    lastModified: new Date(`${PRICE_LIST_PAGE_UPDATED}T12:00:00Z`),
    changeFrequency: "monthly",
    priority: 0.7,
  });

  // Electrika-issued price list PDFs (searchable text). Manufacturers' own PDFs
  // are left out and stay discoverable through the links on /price-list.
  for (const brand of PRICE_LIST_BRANDS) {
    const lastModified = brand.priceList?.sitemapLastModified;
    if (brand.file && lastModified) {
      pages.push({
        url: `${PRIMARY_DOMAIN}${brand.file}`,
        lastModified: new Date(`${lastModified}T12:00:00Z`),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return pages;
}
