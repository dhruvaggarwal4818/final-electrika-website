export interface ProductItem {
  name: string;
  desc: string;
  src: string;
  slug?: string;
  badge?: string;
}

export interface Category {
  title: string;
  tag: string;
  isOrangeTag: boolean;
  products: ProductItem[];
}

export const PRODUCT_CATEGORIES: Category[] = [
  {
    title: "🏗️ High Mast Poles & Flag Masts",
    tag: "INFRASTRUCTURE",
    isOrangeTag: false,
    products: [
      {
        name: "National Flag Mast Poles",
        desc: "High-grade GI flag poles for govt buildings, monuments & public spaces",
        src: "/figma_assets/3ddf7ebdff7c3954be1dc92b42122d365b22a8f6.png",
        slug: "flag-mast-poles",
      },
      {
        name: "Industrial High Mast Poles",
        desc: "9m–35m GI poles, PCD 640mm — highways, ports, stadiums",
        src: "/figma_assets/f4e60f5298204c68e69fff5b1424a502a63a1051.png",
        slug: "high-mast-poles",
      },
      {
        name: "Lowering Mechanisms",
        desc: "Winch-based lamp carriage systems for high mast maintenance",
        src: "/figma_assets/54a2a4482bdbc8690f591e6d0d925819fc3f0e04.png",
        slug: "lowering-mechanisms",
      },
      {
        name: "GI octagonal pole",
        desc: "Premium GI octagonal poles designed for reliable street and area lighting.",
        src: "/figma_assets/feb1da7b3af51ff25e5a077f3581a4bba907eed4.png",
        slug: "gi-octagonal-pole",
      },
      {
        name: "Letching Mast Mechanism",
        desc: "Robust latching mechanism delivering dependable operation for high mast installations.",
        src: "/figma_assets/c6132d94069938a8917c09486e4162e364875cf3.png",
        slug: "latching-mast",
      },
      {
        name: "Decorative Street Poles",
        desc: "Heritage-style lamp posts for parks, campuses & heritage projects",
        src: "/figma_assets/431b524a2c63f8f6f53d0fc332626bb2f90c136b.png",
        slug: "decorated-poles",
      },
    ],
  },
  {
    title: "💡 Lighting Solutions",
    tag: "LED & SOLAR",
    isOrangeTag: true,
    products: [
      {
        name: "Flame-proof LED lights",
        desc: "IP65-rated tube fittings for hazardous industrial environments",
        src: "/figma_assets/e22a57039a95669074b53ee015fbe42d548adebd.png",
        badge: "EXPLOSION PROOF",
        slug: "flp-led-light",
      },
      {
        name: "Flameproof LED High Bay",
        desc: "COB LED high bay lights for warehouses & factory floors",
        src: "/figma_assets/2e43797c478614345d71a3076eb9038170a64d78.png",
        slug: "flp-led-highbay",
      },
      {
        name: "Bajaj LED Flood Lights",
        desc: "Multi-chip LED flood panels for outdoor & industrial use",
        src: "/figma_assets/e3dbb7d1a18cf613cd9d92ba21670648d6d28626.png",
        badge: "BAJAJ",
        slug: "flood-light",
      },

      {
        name: "Solar Street Lights",
        desc: "All-in-one solar LED street lights with motion sensor",
        src: "/figma_assets/9d14c61ebab19b9383651fca7db1955eafc6ded3.png",
        badge: "SOLAR",
        slug: "solar-street-light",
      },
      {
        name: "LED Street lights",
        desc: "Everyday use street lights for highways and roads",
        src: "/figma_assets/b0376d1f7f9ec104d2d7685e590e7a941912e3ad.png",
        slug: "led-street-light",
      },
    ],
  },
  {
    title: "🔌 Industrial Connectors & Switchgear",
    tag: "PCE",
    isOrangeTag: false,
    products: [
      {
        name: "Industrial Socket Outlets",
        desc: "IP67 rated PCE interlocked socket with MCB — site power distribution",
        src: "/figma_assets/a759c8e2da726515a936359fa97d9bb4969979f7.png",
        badge: "PCE",
        slug: "pce-plug-socket",
      },
      {
        name: "Heavy-Duty Industrial Plugs",
        desc: "5-pin 125A industrial plugs for high-current applications",
        src: "/figma_assets/7089c850138ccab4e1da1274f1caae814b0dd8e8.png",
        slug: "heavy-duty-plug",
      },
      {
        name: "125A Industrial Plug",
        desc: "Copper-pin heavy duty 3P+E plug — rated for demanding environments",
        src: "/figma_assets/b13db10ff46cf41ffde2dcbe1d330de37d21da56.png",
        slug: "125a-plug",
      },
      {
        name: "Synthetic Cable Drum Systems",
        desc: "heavy duty cable drum made of synthetic rubber for heavy machine handling",
        src: "/figma_assets/b436b4c926d11fa9ad8f685b3e1f08f4d126e263.png",
        slug: "synthetic-cable-drum",
      },
    ],
  },
  {
    title: "📦 Junction Boxes & Control Stations",
    tag: "HENSEL",
    isOrangeTag: false,
    products: [
      {
        name: "Hensel Emergency Stop Boxes",
        desc: "IP65 push-button enclosures — EM STOP for industrial machinery",
        src: "/figma_assets/b88d43a176720ae6394d27a20884f48f294c9196.png",
        badge: "HENSEL",
        slug: "emergency-stop-button",
      },
      {
        name: "Small Control Station — In Use",
        desc: "Operator-friendly control stations for factory floor safety systems",
        src: "/figma_assets/19e9d8e719af1fa9421c135779b56745f03218a1.png",
        slug: "small-control-station",
      },
      {
        name: "Weatherproof MCB box",
        desc: "IP-65/66 Weatherproof junction box for outdoor installation",
        src: "/figma_assets/b6ebf579d1b10aab4cac1d355b88a4c40cf8f597.png",
        badge: "IP65",
        slug: "mcb-box",
      },
      {
        name: "Hensel PBS Control Box",
        desc: "PBS 0101 G8 — IP65 rated emergency stop push button station",
        src: "/figma_assets/48f70ad4fcc5e62446b858044a536f5b11c51369.png",
        badge: "IP65",
        slug: "pbs-control-box",
      },
      {
        name: "IP 65/66/67 Small distribution box",
        desc: "Durable IP65 polycarbonate junction box for reliable indoor and outdoor protection.",
        src: "/figma_assets/a79aac414795ca965aabd73027a93fe8172d58d6.png",
        badge: "IP65",
        slug: "hensel-boxes",
      },
      {
        name: "FLP Junction boxes",
        desc: "FLP boxes for various types of water, fire and chemical protection.",
        src: "/figma_assets/c35db40ec439723114af71e6ecc2d240381e199c.png",
        badge: "IP65",
        slug: "flp-junction-box",
      },
    ],
  },
];
