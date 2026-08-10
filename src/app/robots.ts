import { MetadataRoute } from "next";
import { PRIMARY_DOMAIN } from "@/data/seoData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/api/",
        "/public/",
        "/*.json$",
      ],
    },
    sitemap: `${PRIMARY_DOMAIN}/sitemap.xml`,
  };
}
