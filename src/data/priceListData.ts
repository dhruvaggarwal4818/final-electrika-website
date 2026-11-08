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
}

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
  },
  {
    name: "Hensel",
    text: "Hensel enclosures and distribution systems for industrial and commercial installations.",
    logo: "/figma_assets/brands/hensel.png",
    logoFit: "cover",
    file: "/downloads/hensel-price-list.pdf",
  },
  {
    name: "AKG",
    text: "AKG PVC conduit pipes, junction boxes and fittings for electrical installations.",
    logo: "/figma_assets/brands/cards/akg.png",
    logoWidth: 61,
    file: "/downloads/akg-conduit-price-list.pdf",
  },
  {
    name: "Schneider Electric",
    text: "Schneider Electric power distribution, protection and control products.",
    logo: "/figma_assets/brands/schneider.png",
    logoBackground: "#00ce4d",
    file: "/downloads/schneider-price-list.pdf",
  },
  {
    name: "Halonix",
    text: "A prominent Indian manufacturer of lighting, smart accessories, switchgear, fans, and electrical products.",
    logo: "/figma_assets/brands/cards/halonix.png",
    logoWidth: 92,
    file: "/downloads/halonix-price-list.pdf",
  },
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
