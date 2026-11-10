import { MetadataRoute } from "next";
import { PRIMARY_DOMAIN } from "@/data/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /_next/ is deliberately not blocked: Google needs /_next/static (CSS, JS)
      // to render pages and /_next/image to see and index product images.
      disallow: [
        "/api/",
        "/public/",
        "/*.json$",
      ],
    },
    sitemap: `${PRIMARY_DOMAIN}/sitemap.xml`,
  };
}
