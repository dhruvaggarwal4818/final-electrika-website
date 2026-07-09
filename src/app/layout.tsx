import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Electrika INC",
    default: "Electrika INC | Trusted Industrial Electrical Supplier India",
  },
  description: "B2B supplier of high mast poles, LED lighting, explosion-proof fittings, cables, switchgear & accessories across India since 2002.",
};

import { ViewTransitions } from 'next-view-transitions';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
