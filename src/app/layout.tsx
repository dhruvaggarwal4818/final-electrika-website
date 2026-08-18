import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import ErrorSilencer from "@/components/ErrorSilencer";
import { PRIMARY_DOMAIN } from "@/data/constants";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_DOMAIN),
  title: {
    template: "%s | Electrika INC",
    default: "Electrika INC | Trusted Industrial Electrical Supplier India",
  },
  description: "Authorized B2B distributor of High Mast Poles, Explosion Proof Lights, PCE Plugs & Sockets, Hensel Junction Boxes, and Cable Drums since 2002. Get GST quotes within 24h.",
  keywords: ["Industrial Electrical Products", "High Mast Poles Supplier", "Explosion Proof Lights India", "PCE Plugs Sockets Distributor", "Hensel Junction Boxes Haryana", "B2B Electrical Supply", "Gurugram Sadar Bazar"],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: PRIMARY_DOMAIN,
    title: "Electrika INC | Trusted B2B Industrial Electrical Supplier India",
    description: "Authorized channel partner and supplier of High Mast Poles, Explosion Proof Lights, PCE Plugs & Sockets, Hensel Junction Boxes, and Cable Drums since 2002.",
    siteName: "Electrika INC",
    images: [
      {
        url: "/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png",
        width: 1200,
        height: 630,
        alt: "Electrika INC - Industrial Electrical Products & Infrastructure Supply Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrika INC | Trusted B2B Industrial Electrical Supplier India",
    description: "Authorized channel partner and supplier of High Mast Poles, Explosion Proof Lights, PCE Plugs & Sockets, Hensel Junction Boxes, and Cable Drums since 2002.",
    images: ["/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${PRIMARY_DOMAIN}/manifest.json`,
  other: {
    "google-site-verification": "googlecaed6833c4f37aa3",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PZ8DP0FGVH"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PZ8DP0FGVH', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </head>
        <body>
          <ErrorSilencer />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
