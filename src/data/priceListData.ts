export interface RelatedLink {
  label: string;
  href: string;
}

/**
 * Facts printed in a brand's price list PDF. Fill these in only from the PDF
 * itself: they are shown on /price-list and used in the sitemap.
 */
export interface PriceListDetails {
  /** Anchor id for the brand's section on /price-list. */
  id: string;
  /** Effective date as printed in the PDF, e.g. "W.E.F. 21 October 2026". */
  effectiveLabel: string;
  /** Reference / list number as printed in the PDF. */
  reference?: string;
  /** Product groups listed in the PDF. */
  categories: string[];
  /** Size of the PDF file, shown next to the download button. */
  fileSize: string;
  /** File name used when the visitor downloads the PDF. */
  downloadName: string;
  /** Existing product pages on this site for the same product types. */
  relatedProducts?: RelatedLink[];
  /**
   * List the PDF in the sitemap. Only for Electrika-issued lists with
   * searchable text; manufacturers' own PDFs are linked from the page instead.
   */
  sitemapLastModified?: string;
}

export interface BrandResource {
  name: string;
  text: string;
  logo: string;
  /** Use "cover" for logos that have their own solid background colour. */
  logoFit?: "contain" | "cover";
  /** Fills the space around a logo that has its own solid background colour. */
  logoBackground?: string;
  /** Logo width as a % of its box, for logos trimmed of blank edges. Keeps brands visually even. */
  logoWidth?: number;
  /**
   * Path to the PDF inside /public. Leave empty until a list is approved for
   * publishing: the button then asks visitors to request it by enquiry.
   */
  file?: string;
  /** Button text for a linked file that isn't a price list, e.g. "View Catalog". */
  fileLabel?: string;
  /** Set for files that should save to the visitor's device. */
  downloadName?: string;
  /** Price list facts. When set, the card shows View PDF and Download PDF buttons. */
  priceList?: PriceListDetails;
}

/** Date the /price-list page content was last changed. Used in the sitemap. */
export const PRICE_LIST_PAGE_UPDATED = "2026-11-10";

export const COMPANY_DOWNLOADS: BrandResource[] = [
  {
    name: "Electrika INC company profile",
    text: "Click here to download company profile",
    logo: "/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png",
    file: "/downloads/electrika-company-profile.pdf",
    downloadName: "Electrika-Company-Profile.pdf",
  },
  {
    name: "Electrika INC product catalog",
    text: "Click here to download company catalog",
    logo: "/figma_assets/83aff0eccbfacd16febf59ee2f64864f1b9a4a0c.png",
    file: "/downloads/electrika-product-catalog.pdf",
    downloadName: "Electrika-Product-Catalog.pdf",
  },
];

export const PRICE_LIST_BRANDS: BrandResource[] = [
  {
    name: "Polycab",
    text: "Polycab wires, cables and electrical products for power distribution and industrial installations.",
    logo: "/figma_assets/brands/cards/polycab.png",
    logoWidth: 92,
    file: "/downloads/polycab-price-list.pdf",
    priceList: {
      id: "polycab",
      effectiveLabel: "W.E.F. 21 October 2026",
      reference: "LDC LP No. 06/2026-27",
      categories: [
        "Project wires (200-300 m)",
        "FR PVC single core and multicore flexible cables",
        "FRLS single core and multicore flexible cables",
        "FRLS multicore flexible cables (7 to 24 core)",
        "Welding cables",
        "Single core XLPE cables (unarmoured and armoured)",
        "Solar cables",
        "Steel braided cables",
        "BMS cables",
        "Braided cables",
        "Festoon cables",
        "Aluminium service wires",
        "Uninyvin cables",
      ],
      fileSize: "6.5 MB",
      downloadName: "Electrika-Polycab-Price-List-2026-27.pdf",
      sitemapLastModified: "2026-11-08",
    },
  },
  {
    name: "Hensel",
    text: "Hensel enclosures and distribution systems for industrial and commercial installations.",
    logo: "/figma_assets/brands/hensel.png",
    logoFit: "cover",
    file: "/downloads/hensel-price-list.pdf",
    priceList: {
      id: "hensel",
      effectiveLabel: "W.E.F. 01 June 2026",
      categories: [
        "Cable junction boxes (IP 65, IP 66 and IP 66/67)",
        "KX series junction boxes for Ex zone 2 and 22",
        "Cable entry systems",
        "Quick build enclosures (IP 66)",
        "Small type distribution boards",
        "Distributors (IP 65)",
        "Rubber cable drums",
        "High current plug sockets (160A to 600A)",
        "Insulated plug sockets (IP 44 / IP 67)",
        "Syntec threaded cable glands",
      ],
      fileSize: "8.5 MB",
      downloadName: "Hensel-Price-List-2026.pdf",
      relatedProducts: [{ label: "Hensel distribution boxes", href: "/products/hensel-boxes" }],
    },
  },
  {
    name: "AKG",
    text: "AKG PVC conduit pipes, junction boxes and fittings for electrical installations.",
    logo: "/figma_assets/brands/cards/akg.png",
    logoWidth: 61,
    file: "/downloads/akg-conduit-price-list.pdf",
    priceList: {
      id: "akg",
      effectiveLabel: "Dated 22 October 2026",
      reference: "Price List PL/007/26-27",
      categories: [
        "PVC conduit pipes, regular series (LMS, MMS, HMS)",
        "Special non-ISI conduit pipes",
        "LHSFT / FRLS conduit pipes",
        "Circular junction boxes (surface and deep)",
        "Rigid PVC conduit accessories: bends, couplers, adaptors, saddles, solvent",
      ],
      fileSize: "2.3 MB",
      downloadName: "Electrika-AKG-Conduit-Price-List-2026-27.pdf",
      sitemapLastModified: "2026-11-08",
    },
  },
  {
    name: "Schneider Electric",
    text: "Schneider Electric power distribution, protection and control products.",
    logo: "/figma_assets/brands/schneider.png",
    logoBackground: "#00ce4d",
    file: "/downloads/schneider-price-list.pdf",
    priceList: {
      id: "schneider-electric",
      effectiveLabel: "W.E.F. 15 August 2026",
      categories: [
        "Acti 9 miniature circuit breakers (MCBs)",
        "Residual current devices (RCDs)",
        "Arc fault detection devices (AFDD)",
        "Surge protection devices",
        "Acti 9 distribution boards",
        "Isobar distribution system",
        "Timers and time switches",
        "Kaedra enclosures",
        "Industrial plugs and sockets (IP44 / IP67, IP56 / IP66)",
        "Wiring devices and switches",
        "Occupancy sensors",
      ],
      fileSize: "11.5 MB",
      downloadName: "Schneider-Electric-Price-List-2026.pdf",
      relatedProducts: [{ label: "IP65 MCB distribution boxes", href: "/products/mcb-box" }],
    },
  },
  {
    name: "Halonix",
    text: "A prominent Indian manufacturer of lighting, smart accessories, switchgear, fans, and electrical products.",
    logo: "/figma_assets/brands/cards/halonix.png",
    logoWidth: 92,
    file: "/downloads/halonix-price-list.pdf",
    priceList: {
      id: "halonix",
      effectiveLabel: "W.E.F. April 2025",
      categories: [
        "LED flat panels",
        "LED downlighters",
        "LED linear lights",
        "LED tube lights and battens",
        "LED industrial luminaires",
        "LED street lights",
        "LED flood lights",
        "LED landscape lights",
        "Decorative poles",
        "LED solar street lights",
        "LED smart lights",
      ],
      fileSize: "9.9 MB",
      downloadName: "Halonix-Price-List.pdf",
      relatedProducts: [
        { label: "LED street lights", href: "/products/led-street-light" },
        { label: "LED flood lights", href: "/products/flood-light" },
        { label: "Solar street lights", href: "/products/solar-street-light" },
        { label: "Decorative street poles", href: "/products/decorated-poles" },
      ],
    },
  },
];

/** Product pages related to the pole manufacturers' catalogs. */
export const POLE_RELATED_PRODUCTS: RelatedLink[] = [
  { label: "High mast poles", href: "/products/high-mast-poles" },
  { label: "Flag mast poles", href: "/products/flag-mast-poles" },
  { label: "GI octagonal poles", href: "/products/gi-octagonal-pole" },
  { label: "Decorative street poles", href: "/products/decorated-poles" },
];

export const POLE_BRANDS: BrandResource[] = [
  {
    name: "Valmont",
    text: "A premier manufacturer and supplier of infrastructure poles in India.",
    logo: "/figma_assets/brands/cards/valmont.png",
    logoWidth: 92,
    file: "/downloads/valmont-catalog.pdf",
    fileLabel: "View Catalog",
  },
  {
    name: "Bajaj",
    text: "Leading Indian manufacturer of advanced, hot-dip galvanized octagonal poles and high mast lighting systems.",
    logo: "/figma_assets/brands/cards/bajaj.png",
    logoWidth: 51,
    file: "/downloads/bajaj-catalog.pdf",
    fileLabel: "View Catalog",
  },
  {
    name: "Transrail",
    text: "Global EPC player specializing in heavy-duty monopoles and stadium lighting masts.",
    logo: "/figma_assets/brands/cards/transrail.png",
    logoWidth: 73,
    file: "/downloads/transrail-catalog.pdf",
    fileLabel: "View Catalog",
  },
  {
    name: "Hira RR Ispat",
    text: "Hira Group unit producing integrated steel conical poles and power network masts.",
    logo: "/figma_assets/brands/cards/hira.png",
    logoWidth: 66,
    file: "/downloads/hira-rr-ispat-catalog.pdf",
    fileLabel: "View Catalog",
  },
  {
    name: "Utkarsh",
    text: "Infrastructure giant trusted for highly durable steel tubular poles and storm-resistant masts.",
    logo: "/figma_assets/brands/cards/utkarsh.png",
    logoWidth: 68,
    file: "/downloads/utkarsh-catalog.pdf",
    fileLabel: "View Catalog",
  },
];
