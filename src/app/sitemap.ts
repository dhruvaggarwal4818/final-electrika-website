import { MetadataRoute } from "next";
import { SEO_DATABASE, PRIMARY_DOMAIN } from "@/data/seoData";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(SEO_DATABASE);
  
  return routes.map((route) => {
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
}
