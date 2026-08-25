export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  name: string;
  value: string;
}

export interface AdvantageItem {
  title: string;
  desc: string;
}

export interface ApplicationItem {
  title: string;
  desc: string;
}

export interface StandardItem {
  code: string;
  description: string;
}

export interface ComparisonTable {
  title: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  directAnswer: string;
  entityType: string;
  ogImage?: string;
  brand?: string;
  manufacturer?: string;
  specs?: SpecItem[];
  /**
   * Specs mirrored exactly from the visible product specification table
   * (the per-product page component). When present, this — not `specs` —
   * is what the Product JSON-LD's additionalProperty list is built from,
   * so structured data always matches what a visitor actually sees on
   * the page rather than the separate SEO copy in `specs`.
   */
  visualSpecs?: SpecItem[];
  faqs?: FAQItem[];
  /* AI Citation Content Blocks */
  definition?: string;
  engineeringNotes?: string[];
  advantages?: AdvantageItem[];
  applications?: ApplicationItem[];
  standards?: StandardItem[];
  installationTips?: string[];
  maintenanceTips?: string[];
  comparison?: ComparisonTable;
}


import { PRIMARY_DOMAIN } from "./constants";

export const SEO_DATABASE: Record<string, PageSEO> = {
  home: {
    title: "Electrika INC | Trusted Industrial Electrical Supplier India",
    description: "Authorized B2B distributor of High Mast Poles, Explosion Proof Lights, PCE Plugs & Sockets, Hensel Junction Boxes, and Cable Drums since 2002. Get GST quotes within 24h.",
    keywords: ["Industrial Electrical Products", "High Mast Poles Supplier", "Explosion Proof Lights India", "PCE Plugs Sockets Distributor", "Hensel Junction Boxes Haryana", "B2B Electrical Supply", "Gurugram Sadar Bazar"],
    canonical: `${PRIMARY_DOMAIN}/`,
    entityType: "Organization",
    directAnswer: "Electrika INC is India's leading B2B supplier and channel partner for premium industrial electrical and lighting brands including crompton, Hensel, PCE, Bajaj Electricals, and KEI. Operating out of Sadar Bazar, Gurugram, India since 2002, Electrika INC specializes in bulk distribution of high mast poles, octagonal steel poles, flameproof luminaires, weatherproof distribution boxes, and industrial sockets to infrastructure projects and electrical contractors across India.",
    faqs: [
      {
        question: "What industrial electrical brands does Electrika INC distribute?",
        answer: "Electrika INC is an authorized channel partner and distributor for leading electrical manufacturers including Bajaj Electricals, Hensel Germany, PCE Austria, Crompton Greaves, KEI Cables, Polycab, Utkarsh, and Valmont."
      },
      {
        question: "Does Electrika INC provide test certificates (MTC) for steel poles?",
        answer: "Yes, Electrika INC provides Material Test Certificates (MTC) including tensile strength and hot-dip galvanization reports (IS 4759 standard) for bulk orders of GI octagonal poles and high mast poles."
      },
      {
        question: "What is the typical turnaround time for formal GST quotations?",
        answer: "Our specialized engineering support team provides formal GST-compliant quotations within 24 hours of receiving technical requirements and project specifications."
      },
      {
        question: "Does Electrika INC coordinate pan-India delivery for bulk B2B orders?",
        answer: "Yes, we handle complete freight coordination for bulk shipments across Haryana and all other states in India directly to project sites, ensuring on-schedule delivery."
      }
    ]
  },
  "about-us": {
    title: "About Us | Industrial Electrical Supplier - Electrika INC",
    description: "Learn more about Electrika INC, India's trusted channel partner for premier electrical brands: PCE, Hensel, Crompton Greaves, and Bajaj since 2002.",
    keywords: ["Electrika INC Story", "Gurugram Electrical Supplier History", "Pramod Aggarwal Gurugram", "Authorized Electrical Channel Partner India", "Industrial Distribution Legacy"],
    canonical: `${PRIMARY_DOMAIN}/about-us`,
    entityType: "WebPage",
    directAnswer: "Founded by Pramod Aggarwal, Electrika INC has over 25 years of industry experience supplying certified industrial electrical switchgear, cabling, structural masts, and explosion-proof solutions. Headquartered in Sadar Bazar, Gurugram (NCR), Haryana, the company serves major enterprises such as Maruti Suzuki India Ltd., Honda, L&T, Indian Oil, and Adani Group under a core operating philosophy: 'We Deliver What We Promise.'",
    faqs: [
      {
        question: "Who is the founder of Electrika INC?",
        answer: "Electrika INC was founded by Pramod Aggarwal, who has guided the enterprise to become Gurugram and the NCR region's leading supplier of industrial electrical goods."
      },
      {
        question: "Which major corporate clients trust Electrika INC for industrial supply?",
        answer: "Our major customers include Maruti Suzuki India Ltd., Honda 2 Wheeler, Larsen & Toubro (L&T), Indian Oil Corporation (IOCL), HPCL, Adani Group, DLF Ltd., and Siemens."
      }
    ]
  },
  "high-mast-poles": {
    title: "Industrial High Mast Poles (9m-35m) | Electrika INC",
    description: "Shop 9m to 35m hot-dip galvanized steel high mast poles. Built to IS 875 & IS 2062. Ideal for highways, shipping ports, airports, and sports stadiums.",
    keywords: ["High Mast Poles", "Galvanized Steel Mast 30m", "High Mast Lighting Supplier", "IS 2062 High Mast", "PCD 640mm Mast Pole", "High Mast India"],
    canonical: `${PRIMARY_DOMAIN}/products/high-mast-poles`,
    entityType: "Product",
    brand: "Valmont / Bajaj / Utkarsh",
    manufacturer: "Electrika INC",
    directAnswer: "Industrial High Mast Poles are structural steel columns ranging from 9m to 35m in height. Assembled in polygonal sections, these masts are hot-dip galvanized inside and out to IS 4759 standards to prevent corrosion. They feature a pitch circle diameter (PCD) typically of 640mm and are designed to withstand wind speeds up to 150 km/h under IS 875 Part III regulations, accommodating multi-directional LED floodlight rings for large-area lighting.",
    specs: [
      { name: "Height Range", value: "9 meters to 35 meters" },
      { name: "Material Grade", value: "IS 2062 Grade A / S355 Structural Steel" },
      { name: "Galvanization Standard", value: "Hot-Dip Galvanized to IS 4759 (Minimum 86 microns)" },
      { name: "Cross Section", value: "12-sided or 20-sided polygonal tapered sections" },
      { name: "Wind Speed Resistance", value: "Up to 150 km/h (compliant with IS 875 Part 3)" },
      { name: "Base Flange Diameter", value: "640mm PCD or project-customized flange specifications" }
    ],
    visualSpecs: [
      { name: "Height Range", value: "9 m to 40 m (custom up to 50 m)" },
      { name: "Material", value: "IS 2062 Grade A Mild Steel" },
      { name: "Surface Treatment", value: "Hot-Dip Galvanised (IS 4759), min 86 µm" },
      { name: "Shape", value: "Polygonal (8/12/16 sided) or Conical" },
      { name: "Wall Thickness", value: "4 mm to 10 mm (height dependent)" },
      { name: "Lamp Carriage Type", value: "Fixed / Motorised Lowering" },
      { name: "No. of Lamp Positions", value: "4 / 6 / 8 / 10 / 12 / 16" },
      { name: "Design Wind Speed", value: "Up to 180 km/h (IS 875 Part III)" },
      { name: "Foundation Bolt Circle", value: "Custom per height and soil condition" },
      { name: "Luminaire Compatibility", value: "LED Flood / HPS / MH (E40 / GU10)" },
      { name: "Applicable Standards", value: "IS 2713, IS 4759, IS 875, IS 2062" },
      { name: "Warranty", value: "2 Years (structural), coating as per IS 4759" },
      { name: "Lead Time (standard)", value: "3–4 weeks from drawing approval" }
    ],
    faqs: [
      {
        question: "What are the common applications for 9m to 35m high mast poles?",
        answer: "These structural masts are primarily deployed in high-acreage outdoor areas requiring uniform illumination, such as highway junctions, toll plazas, shipping docks, airport aprons, railway yards, coal yards, and sports complexes."
      },
      {
        question: "Does Electrika INC include foundation hardware with high mast poles?",
        answer: "Yes, we supply complete high-tensile foundation J-bolts, templates, and base fixing hardware custom-designed for the specific mast height and local soil characteristics."
      }
    ],
    definition: "High Mast Poles are tall structural steel columns (9m–40m) used to mount multiple high-power floodlights at elevation for broad-area illumination. Fabricated from IS 2062 Grade A mild steel in tapered polygonal sections, they are hot-dip galvanized inside and out to IS 4759 standards. The top-mounted lamp carriage ring holds 4–16 luminaires and can be raised or lowered via an integrated winch system for ground-level maintenance without cranes or scaffolding.",
    engineeringNotes: [
      "Pole sections are joined using telescopic slip-joint connections welded and inspected per IS 2713 structural weld certification.",
      "Foundation bolt circle diameter (PCD) and bolt size are calculated using soil bearing capacity data specific to the installation site.",
      "All structural welds are ultrasonic or radiographic tested (UT/RT) for critical infrastructure projects on request.",
      "Wall thickness ranges from 4mm (9m poles) to 12mm (40m poles) to manage structural bending moment from wind loads.",
      "Motorised lowering systems use self-locking worm-drive winches that automatically hold the luminaire ring in position if power is lost."
    ],
    advantages: [
      { title: "Single Pole, Wide Coverage", desc: "A single 30m high mast with 12 floodlights can illuminate an area equivalent to 20+ standard street poles, dramatically reducing civil installation costs." },
      { title: "Ground-Level Maintenance", desc: "Integrated lowering mechanism brings the entire lamp ring to ground level in minutes, eliminating the need for aerial work platforms or tower climbers." },
      { title: "25+ Year Service Life", desc: "Hot-dip galvanization to IS 4759 provides corrosion protection for over 25 years in typical Indian climatic conditions." },
      { title: "Customizable Configuration", desc: "Height, number of lamp arms, arm angle, PCD, and base flange configuration can all be engineered to project-specific civil drawings." },
      { title: "Wind Rated to IS 875", desc: "Structural certification to IS 875 Part III ensures safe operation in all Indian wind zones, including cyclone-prone coastal areas." }
    ],
    applications: [
      { title: "National Highways & Expressways", desc: "NHAI and PWD highway interchange illumination, toll plaza approach lighting, and service road safety lighting." },
      { title: "Seaports & Container Terminals", desc: "Port Trust yard lighting, berth illumination, container handling cranes, and shipyard perimeter security lighting." },
      { title: "Civil Airports & Airstrips", desc: "Cargo apron lighting, aircraft parking areas, fuel farm illumination, and perimeter road safety lighting." },
      { title: "Sports Stadiums & Complexes", desc: "Cricket grounds, football arenas, and athletics tracks requiring broadcast-grade uniform illumination above 1500 lux." },
      { title: "Railway Marshalling Yards", desc: "Goods shed operations, hump yard illumination, and locomotive maintenance pit lighting." },
      { title: "Thermal Power Plants", desc: "Coal yard lighting, cooling tower areas, ash handling zones, and plant perimeter surveillance."}  
    ],
    standards: [
      { code: "IS 2713", description: "Indian Standard for structural design and testing of tubular steel poles for street lighting." },
      { code: "IS 2062", description: "Indian Standard specification for hot-rolled medium and high-tensile structural steel." },
      { code: "IS 4759", description: "Indian Standard for hot-dip zinc coatings on structural steel articles; minimum 86 microns required." },
      { code: "IS 875 (Part III)", description: "Indian Standard Code of Practice for design wind loads and speeds for buildings and structures." }
    ],
    installationTips: [
      "Always obtain a geotechnical soil investigation report before finalizing foundation bolt diameter and anchor depth.",
      "Ensure the base flange is installed perfectly level (within ±0.5°) using a precision spirit level before concrete pouring.",
      "All earthing (grounding) conductor connections must be made to the base earth stud before energizing the luminaire circuit.",
      "Apply anti-seize compound to all threaded fasteners on the carriage ring before assembly to prevent galling during future lowering operations.",
      "After installation, conduct a full operational test of the winch lowering system before commissioning to verify rope tracking alignment."
    ],
    maintenanceTips: [
      "Inspect wire rope condition and lubricate with recommended rope grease every 12 months or after every 10 lowering cycles.",
      "Check and tighten all carriage ring anchor bolts after the first monsoon season, as foundation settling may cause micro-movement.",
      "Clean the galvanized pole surface of bird droppings and industrial deposits annually to prevent white rust formation on the zinc coating.",
      "Test the latching mechanism engagement every 6 months by performing a partial lowering and re-latching sequence.",
      "Inspect all luminaire wiring connectors within the carriage ring for signs of water ingress or corrosion every 18 months."
    ],
    comparison: {
      title: "High Mast Poles vs. Standard Street Poles",
      columns: ["Attribute", "High Mast Pole (20m)", "Standard Street Pole (9m)"],
      rows: [
        { label: "Coverage Area", values: ["~4,000 m² per pole", "~400 m² per pole"] },
        { label: "Number of Luminaires", values: ["8–12 floodlights", "1–2 fixtures"] },
        { label: "Maintenance Method", values: ["Ground-level winch lowering", "Aerial work platform (bucket truck)"] },
        { label: "Structural Standard", values: ["IS 2713 + IS 875 Part III", "IS 2713"] },
        { label: "Typical Applications", values: ["Ports, airports, highways", "Roads, pathways, parking"] },
        { label: "Foundation Depth", values: ["3m–5m (engineered)", "0.9m–1.2m (standard)"] }
      ]
    }
  },
  "flag-mast-poles": {
    title: "National Flag Mast Poles (12m-40m) | Electrika INC",
    description: "High-grade hot-dip galvanized GI flag poles for government buildings, monuments, airports & corporate offices. Complete flag hoisting systems.",
    keywords: ["National Flag Mast", "GI Flag Poles", "Flag hoisting mast pole", "Tapered polygonal flag pole", "12m flag mast India"],
    canonical: `${PRIMARY_DOMAIN}/products/flag-mast-poles`,
    entityType: "Product",
    brand: "Utkarsh / Valmont",
    manufacturer: "Electrika INC",
    directAnswer: "National Flag Mast Poles are specialized high-strength galvanized steel poles (typically 12m to 40m high) designed for prestigious monumental flag hoisting. Featuring a tapered multi-sided polygonal design and a hidden internal mechanical winch rope hoist system, these masts ensure smooth flag raising and lowering. Galvanized to IS 4759 standard, they withstand harsh outdoor environments without rusting.",
    specs: [
      { name: "Height Standards", value: "12 m, 15 m, 20 m, 30 m, and custom up to 40 m" },
      { name: "Material", value: "IS 2062 Grade A Steel sheets, multi-sided tapered construction" },
      { name: "Surface Protection", value: "Hot-dip galvanized (minimum 86 microns coating thickness)" },
      { name: "Hoisting Assembly", value: "Internal mechanical winch with stainless steel wire rope (non-corrosive)" },
      { name: "Top Accessories", value: "Double pulley set, gold dome finial, flag clips" }
    ],
    visualSpecs: [
      { name: "Height Range", value: "16 m, 20 m, 25 m, 30 m, 36 m, 40 m, 45 m, 50 m, 60 m (custom)" },
      { name: "Number of Sections", value: "Minimum 3 sections (flanged or socketed joints)" },
      { name: "Material", value: "IS 2062 Grade A/B Mild Steel" },
      { name: "Surface Finish", value: "Hot-Dip Galvanised (IS 4759), minimum 86 µm coating" },
      { name: "Shape", value: "Polygonal (8/12/16 sided) or Conical" },
      { name: "Base Diameter", value: "Varies: 300 mm (16 m) to 900 mm (60 m)" },
      { name: "Wall Thickness", value: "4 mm – 12 mm (height and wind-zone dependent)" },
      { name: "Design Wind Speed", value: "Up to 180 km/h (IS 875 Part III)" },
      { name: "Hoisting System", value: "Electric motor drive, 230V AC, 0.5 HP – 2 HP" },
      { name: "Rope Type", value: "SS304 stainless steel wire rope, 6×19 construction" },
      { name: "Rope Diameter", value: "6 mm – 12 mm (height dependent)" },
      { name: "Aviation Light", value: "Red LED, 10W, 360° visibility, IP66, DGCA compliant" },
      { name: "Flag Size (max)", value: "2×3 ft (16 m) up to 12×8 m (60 m)" },
      { name: "Foundation", value: "Anchor bolt cage supplied; civil design drawing provided" },
      { name: "Applicable Standards", value: "IS 2713, IS 4759, IS 875, IS 2062" },
      { name: "Lead Time", value: "4–6 weeks from drawing approval (custom heights)" }
    ],
    faqs: [
      {
        question: "Are national flag masts compliant with the Flag Code of India?",
        answer: "Yes, our structural flag masts are engineered to support the correct flag dimensions, wind loading proportions, and hoisting mechanisms required under the official Flag Code of India guidelines."
      }
    ],
    definition: "Flag Mast Poles are purpose-built high-strength galvanized steel masts (12m–40m) designed specifically for ceremonial and national flag hoisting. They feature a hidden internal mechanical winch rope hoist system for smooth flag raising and lowering, a stainless steel internal wire rope, and a decorative top finial. Manufactured to the Flag Code of India's structural requirements, they are used at government premises, airports, sports venues, and corporate headquarters.",
    engineeringNotes: [
      "The internal rope hoist system uses anti-tangle guide pulleys to prevent rope crossover during rapid flag hoisting operations.",
      "Top finial and double-pulley assemblies are manufactured in marine-grade stainless steel to prevent corrosion in coastal installations.",
      "The taper ratio of the pole shaft is engineered to provide maximum stiffness at the base while minimizing tip deflection under wind.",
      "Outhaul and inhaul rope tensions are factory-calibrated to prevent flag wrap-around on the pole in gusty conditions."
    ],
    advantages: [
      { title: "Internal Hidden Rope System", desc: "The mechanical hoisting wire rope runs completely inside the pole, giving a clean aesthetic appearance with no external ropes or pulleys visible." },
      { title: "Stainless Steel Rope Longevity", desc: "SS316 wire rope resists corrosion and coastal salt spray for 15+ years without replacement under normal use." },
      { title: "Hot-Dip Galvanized Protection", desc: "Minimum 86-micron zinc coating provides 25+ years of corrosion resistance in high-humidity and coastal environments." },
      { title: "Custom Heights Available", desc: "Standard heights of 12m, 15m, 20m, and 30m are available from stock; custom 40m poles are made to order within 4–6 weeks." }
    ],
    applications: [
      { title: "Government & Institutional Buildings", desc: "Secretariats, collectorate offices, central government premises, and courts requiring national flag hoisting protocols." },
      { title: "International Airports", desc: "Terminal building forecourts, airport boundary flagging, and VVIP protocol areas." },
      { title: "Corporate Headquarters", desc: "IT parks, SEZ campuses, and corporate office complexes with brand and national flag requirements." },
      { title: "Sports Stadiums", desc: "Cricket stadiums, Olympic training centers, and multi-purpose sports complexes requiring official flag mast installations." }
    ],
    standards: [
      { code: "Flag Code of India 2002", description: "Specifies standards for national flag dimensions, material, and hoisting requirements." },
      { code: "IS 2062", description: "Structural steel grade specification for pole fabrication." },
      { code: "IS 4759", description: "Hot-dip galvanizing standard for outdoor structural steel protection." }
    ],
    installationTips: [
      "Position the base hatch door on the leeward (downwind) side for comfortable operator access during flag changes.",
      "Ensure the rope outhaul and inhaul are color-coded and clearly labeled before threading through the internal guide system.",
      "Use a surveyor's plumb bob or laser level to ensure the pole is perfectly vertical before final concrete curing.",
      "Attach the flag snap hooks before raising the pole to simplify commissioning and avoid working at height."
    ],
    maintenanceTips: [
      "Lubricate the top pulley bearings with marine-grade grease every 12 months to prevent squeaking and pulley seizure.",
      "Inspect the internal wire rope for kinks and surface corrosion every 6 months; replace if strand breaks are detected.",
      "Clean the halyard ropes and snap hooks after exposure to heavy rain or coastal salt spray using fresh water rinse.",
      "Apply zinc-rich cold galvanizing compound to any scratches on the pole surface to prevent localised rust formation."
    ]
  },
  "lowering-mechanisms": {
    title: "Winch Lowering Mechanisms for High Masts | Electrika INC",
    description: "Reliable winch-based lamp carriage lowering systems for high mast maintenance. Safe ground-level servicing for floodlights without climbing.",
    keywords: ["High Mast Winch", "Lowering Mechanism", "Winch lamp carriage", "Double drum winch", "Mast maintenance winch system"],
    canonical: `${PRIMARY_DOMAIN}/products/lowering-mechanisms`,
    entityType: "Product",
    brand: "Valmont / Bajaj",
    manufacturer: "Electrika INC",
    directAnswer: "Winch Lowering Mechanisms are mechanical assembly systems integrated inside high mast poles. They consist of a double-drum self-lubricating winch unit, stainless steel wire ropes, and a power tool arrangement that allows the entire top-mounted LED luminaire ring to be lowered to ground level. This system eliminates the need for ladders or high-reach cranes during routine maintenance and lighting replacement.",
    specs: [
      { name: "System Type", value: "Double Drum / Single Drum Self-Looping Winch" },
      { name: "Winch Gear Ratio", value: "53:1 / 48:1 self-locking mechanical gear" },
      { name: "Wire Rope Material", value: "Stainless Steel SS316, 7/19 construction grade" },
      { name: "Safe Working Load (SWL)", value: "350 kg to 850 kg payload capacity" },
      { name: "Operating System", value: "Manual handle or external electrical power tool motor" }
    ],
    visualSpecs: [
      { name: "System Type", value: "Motorised lowering luminaire carriage assembly" },
      { name: "Drive Mechanism", value: "Electric gear motor with wire rope winch" },
      { name: "Motor Rating", value: "0.5 HP – 2 HP (height/load dependent)" },
      { name: "Power Supply", value: "230V / 415V AC, 50 Hz" },
      { name: "Wire Rope", value: "Galvanised steel, 6x19 construction" },
      { name: "Carriage Type", value: "Multi-arm radial head frame, fixed luminaire spacing" },
      { name: "Number of Luminaire Arms", value: "4 / 6 / 8 / 10 / 12 (project specific)" },
      { name: "Guide System", value: "Internal roller guides for stable vertical travel" },
      { name: "Control", value: "Local control panel with up/down push-button operation" },
      { name: "Limit Switches", value: "Upper and lower travel limit switches fitted as standard" },
      { name: "Compatible Pole Height", value: "12 m to 40 m" },
      { name: "Safety Factor (Rope)", value: "Minimum 5:1 on rated carriage load" },
      { name: "Applicable Standards", value: "IS 2713, IS 4759" },
      { name: "Maintenance Interval", value: "Annual rope and motor inspection recommended" }
    ],
    faqs: [
      {
        question: "How does a self-locking winch ensure operator safety?",
        answer: "The winch is engineered with a worm-gear drive system that automatically locks the load in place when the rotational input stops. This prevents accidental free-fall of the heavy luminaire carriage during operation."
      }
    ],
    definition: "High Mast Lowering Mechanisms are integrated mechanical winch systems installed inside the base compartment of high mast poles. They consist of a double-drum or single-drum self-locking winch unit, stainless steel wire ropes, and a power-operated ratchet system that allows the entire luminaire carriage ring (weighing up to 850kg) to be safely lowered from heights of 9m to 40m to ground level for maintenance without requiring aerial platforms, cranes, or pole climbing.",
    engineeringNotes: [
      "The double-drum configuration maintains equal rope tension on both sides of the carriage ring to prevent tilting during lowering operations.",
      "Worm-gear drive provides an irreversible self-locking mechanism — the load cannot backdrive the gear when the operating handle is released.",
      "SS316 grade 7×19 wire rope construction provides optimum flexibility while maintaining a minimum breaking strength of 5× the safe working load.",
      "Rope anchoring points use forged steel rope sockets with wedge-type terminations that grip tighter under increasing load."
    ],
    advantages: [
      { title: "Eliminates Working at Height Risk", desc: "All lamp replacement, cleaning, and electrical servicing is performed at safe ground level, eliminating fall-from-height accidents." },
      { title: "Reduces Maintenance Cost", desc: "No crane hire or aerial work platform required. A single worker can lower and raise the full carriage ring in under 30 minutes." },
      { title: "Self-Locking Safety", desc: "Worm-gear drive irreversibly locks the full carriage load in position the instant the operating handle is released, with no brake pedal required." },
      { title: "Stainless Steel Rope Durability", desc: "SS316 wire rope resists corrosion in coastal, marine, and chemical plant environments for 10+ years under regular use." }
    ],
    applications: [
      { title: "High Mast Road Lighting", desc: "Highway and expressway interchange masts where crane access is restricted and traffic disruption must be minimized." },
      { title: "Port & Shipyard Masts", desc: "Marine environments requiring corrosion-resistant SS rope systems for frequent lamp maintenance on salt-laden columns." },
      { title: "Airport Perimeter Masts", desc: "Airside masts where aerial work platforms cannot operate due to aircraft movement and airspace safety rules." },
      { title: "Industrial Plant Masts", desc: "Chemical plant and refinery masts in Zone 2 areas where cranes cannot be used due to hazardous area restrictions." }
    ],
    standards: [
      { code: "IS 3938", description: "Indian Standard for electric wire rope hoists — applicable for motorised lowering mechanism specifications." },
      { code: "BS EN 12385", description: "European standard for steel wire ropes — safety, manufacture, and maintenance requirements." },
      { code: "IS 875 (Part III)", description: "Wind load standard used to calculate dynamic loads on the luminaire carriage during operation." }
    ],
    installationTips: [
      "Thread the wire rope through the pole's internal guide rings in the exact sequence specified in the assembly drawing to prevent rope cross-over.",
      "Apply drum lubricant to the winch drum and gear box before first operation as per the manufacturer's lubrication schedule.",
      "Set the rope drum end-stop collar to limit lowering travel precisely 300mm above ground level to protect the carriage ring bottom edge.",
      "Conduct an unloaded (empty carriage) trial of the full lowering and raising cycle before installing luminaires onto the ring."
    ],
    maintenanceTips: [
      "Lubricate both wire ropes from drum to carriage connection with wire rope grease every 12 months or after every 10 operational cycles.",
      "Inspect the rope for broken wires, kinks, or bird-caging deformation every 6 months; replace immediately if 5% of wires are broken in any 8-diameter length.",
      "Drain and refill the gearbox lubricating oil every 3 years or after 100 lowering cycles (whichever comes first).",
      "Check and re-tension the drum end-stop collars after every full lowering operation to account for minor rope stretch over time."
    ]
  },
  "gi-octagonal-pole": {
    title: "Galvanized Octagonal Steel Poles (3m-12m) | Electrika INC",
    description: "High-quality hot-dip galvanized GI octagonal poles for street, highway & commercial pathway lighting. Single or double arm options. MTC certified.",
    keywords: ["GI Octagonal Pole", "Galvanized Street Lighting Pole", "8-sided steel pole", "IS 2713 lighting pole", "Single arm octagonal pole"],
    canonical: `${PRIMARY_DOMAIN}/products/gi-octagonal-pole`,
    entityType: "Product",
    brand: "Utkarsh / Valmont / Bajaj",
    manufacturer: "Electrika INC",
    directAnswer: "A Galvanized Octagonal Steel Pole is an 8-sided tapered structural column used for mounting outdoor street lights. Made from premium IS 2062 grade mild steel, these poles are hot-dip galvanized inside and out (IS 4759) to withstand extreme weather. They offer a much higher strength-to-weight ratio than traditional tubular poles and feature an internal lockable hand-hole door for electrical loop-in wiring and MCB connections.",
    specs: [
      { name: "Height Selection", value: "3m, 4m, 5m, 6m, 7m, 8m, 9m, 10m, 11m, 12m" },
      { name: "Galvanization Quality", value: "Minimum 86 microns, Hot-Dip Galvanized complying with IS 4759" },
      { name: "Structural Base Steel", value: "IS 2062 Grade A Structural Steel Plate" },
      { name: "Base Design", value: "Pre-welded plate with standard anchor slot dimensions" },
      { name: "Wiring Access", value: "Integrated hand-hole with flush lockable service cover plate" }
    ],
    visualSpecs: [
      { name: "Height Range", value: "3 m, 4 m, 5 m, 6 m, 7 m, 8 m, 9 m, 10 m, 11 m, 12 m" },
      { name: "Cross-Section", value: "Octagonal (8-sided), tapered" },
      { name: "Material", value: "IS 2062 Grade A Mild Steel" },
      { name: "Surface Finish", value: "Hot-Dip Galvanised (IS 4759), min. 86 µm" },
      { name: "Arm Configuration", value: "Single arm / Double arm (both sides)" },
      { name: "Arm Length", value: "0.5 m – 2 m (project specific)" },
      { name: "Base Plate", value: "Pre-welded with anchor bolt holes, project-specific bolt circle" },
      { name: "Wall Thickness", value: "3 mm – 6 mm (height dependent)" },
      { name: "Door Opening", value: "Hand-hole with lockable cover for cable access" },
      { name: "Design Wind Speed", value: "Up to 150 km/h (IS 875 Part III)" },
      { name: "Foundation Bolts", value: "Supplied as accessory (specify on order)" },
      { name: "Applicable Standards", value: "IS 2713, IS 4759, IS 875, IS 2062" },
      { name: "Test Certificates", value: "Available on bulk order quantities (MTC)" },
      { name: "Lead Time", value: "2–3 weeks ex-factory, subject to order size" }
    ],
    faqs: [
      {
        question: "What is the difference between tubular and octagonal GI poles?",
        answer: "Octagonal poles feature an 8-sided folded geometry which provides superior resistance to high wind pressures and torsional stress while requiring a smaller base diameter. They are also hot-dip galvanized, which requires far less maintenance than painted tubular poles."
      }
    ],
    definition: "GI Octagonal Poles are 8-sided tapered structural steel columns used for street, highway, and area lighting. Cold-rolled from IS 2062 Grade A steel sheet and hot-dip galvanized to IS 4759 (minimum 86 microns), their octagonal geometry provides a superior strength-to-weight ratio versus traditional round tubular poles. Heights range from 3m to 12m with single or double outreach arms for luminaire mounting. An integrated lockable hand-hole at the base provides access for electrical wiring terminations.",
    engineeringNotes: [
      "The octagonal cross-section is formed by press-brake forming a single steel sheet, then seam-welding — eliminating stress concentration points found in multi-piece construction.",
      "Wall thickness is specified per height: 3mm for 3m–5m poles, 3.5mm for 6m–8m, and 4mm+ for 9m–12m to meet IS 2713 bending moment requirements.",
      "The hand-hole cover is reinforced with a pressed steel frame and uses a tamper-proof M6 stainless bolt to prevent unauthorized access.",
      "Outreach arm to pole connection uses a double-lock saddle clamp system to prevent rotational movement under wind-induced vibration."
    ],
    advantages: [
      { title: "Superior Wind Load Resistance", desc: "The 8-sided geometry distributes wind pressure more evenly than round poles, reducing peak stress at the base and improving structural longevity." },
      { title: "25+ Year Corrosion Protection", desc: "Full hot-dip galvanization (inside and outside) to IS 4759 standard requires zero maintenance for over 25 years in most Indian environments." },
      { title: "IS 2713 Structural Certification", desc: "All poles manufactured and tested to the Bureau of Indian Standards specification for street and road lighting poles, accepted by PWD and CPWD." },
      { title: "Integrated Wiring Access", desc: "The lockable hand-hole provides a secure, weather-proof chamber for loop-in wiring terminations and MCB installations at ground level." },
      { title: "Multiple Height Variants", desc: "10 standard heights (3m to 12m) are available from stock with 24-hour dispatch for standard configurations." }
    ],
    applications: [
      { title: "Municipal Road Lighting", desc: "State PWD, CPWD, and municipal corporation road lighting contracts across residential and arterial roads." },
      { title: "Industrial Estate Roads", desc: "Factory internal roads, loading bay areas, and plant perimeter roads in SEZs and industrial zones." },
      { title: "Commercial Parking Areas", desc: "Covered and open parking lots in malls, office complexes, hospitals, and IT parks." },
      { title: "Residential Colonies & Townships", desc: "RERA-compliant residential development internal road lighting and pathway illumination." }
    ],
    standards: [
      { code: "IS 2713", description: "Standard for tubular and polygonal steel poles for street lighting — design, manufacture, and testing." },
      { code: "IS 2062 (Grade A)", description: "Hot-rolled medium tensile structural steel grade used for pole fabrication." },
      { code: "IS 4759", description: "Hot-dip zinc galvanizing standard — minimum 86 microns average coating thickness." },
      { code: "IS 875 (Part III)", description: "Wind load design code for verifying structural adequacy of poles in each Indian wind zone." }
    ],
    installationTips: [
      "Compact the backfill soil in 150mm lifts and water each layer to achieve 95% Proctor compaction for maximum foundation stability.",
      "Install an earth bond wire from the pole base earth stud to the nearest earthing pit before energizing the luminaire circuit.",
      "Apply a thin bead of silicone sealant around the hand-hole gasket joint before closing to prevent water ingress at the sealing face.",
      "Use a torque wrench for all flange base bolts — overtightening can crack the base plate weld; refer to the installation drawing for torque values."
    ],
    maintenanceTips: [
      "Inspect the galvanized surface for white rust (zinc corrosion) annually; treat with zinc-rich spray paint if bare steel is exposed.",
      "Clean the inside of the hand-hole annually, removing insect nests, moisture, and debris that can cause wiring insulation damage.",
      "Check outreach arm clamp bolts for tightness after the first monsoon season as thermal cycling can cause bolt relaxation.",
      "Re-torque foundation bolts every 5 years as part of structural integrity inspection, especially in areas with expansive or shrink-swell clay soils."
    ],
    comparison: {
      title: "GI Octagonal Pole vs. GI Round Tubular Pole",
      columns: ["Attribute", "GI Octagonal Pole", "GI Round Tubular Pole"],
      rows: [
        { label: "Cross Section", values: ["8-sided polygon (tapered)", "Round tube (straight or tapered)"] },
        { label: "Wind Load Resistance", values: ["Higher (geometry distributes load)", "Standard"] },
        { label: "Surface Protection", values: ["Hot-dip galvanized (IS 4759)", "Painted or galvanized"] },
        { label: "Wiring Access", values: ["Lockable hand-hole door", "Open base or bolted cover"] },
        { label: "Applicable Standard", values: ["IS 2713", "IS 2713"] },
        { label: "Maintenance Interval", values: ["25+ years (galvanized)", "5–10 years (if painted)"] }
      ]
    }
  },
  "latching-mast": {
    title: "Latching Mechanism for High Mast Light Rings | Electrika INC",
    description: "Engineered high mast latching mechanisms for secure overhead locking of luminaire rings. Relieves structural strain on SS ropes.",
    keywords: ["High Mast Latching", "Latching Mechanism", "Secure overhead mast lock", "Bajaj high mast latching", "Winch rope safety lock"],
    canonical: `${PRIMARY_DOMAIN}/products/latching-mast`,
    entityType: "Product",
    brand: "Valmont / Bajaj",
    manufacturer: "Electrika INC",
    directAnswer: "A Latching Mast Mechanism is an overhead docking system mounted at the top of a high mast pole. When the luminaire carriage ring is raised to its operating position, the latching mechanism automatically engages, anchoring the carriage directly to the top mast assembly. This mechanical latching transfers the heavy luminaire load onto the mast structure, completely relieving tension on the stainless steel winching wire ropes and preventing catastrophic rope fatigue.",
    specs: [
      { name: "Engagement System", value: "Automatic spring-loaded gravity latching pins" },
      { name: "Load Transfer Capacity", value: "Up to 1000 kg structural carriage weight" },
      { name: "Indicating Mechanism", value: "Visual check flag at ground level or physical feedback" },
      { name: "Material", value: "Cast steel housing, stainless steel internal components (rustproof)" },
      { name: "Safety Standards", value: "Designed for high-vibration wind loading environments" }
    ],
    visualSpecs: [
      { name: "Assembly Type", value: "Highmast Latching Assembly (head frame + luminaire carriage)" },
      { name: "Arm Configuration", value: "3-arm radial, 120° equal spacing (standard)" },
      { name: "Latch Type", value: "Spring-loaded, self-aligning mechanical latch" },
      { name: "Head Frame", value: "Fixed assembly, permanently mounted at pole apex" },
      { name: "Luminaire Carriage", value: "Detachable, travels down for ground-level maintenance" },
      { name: "Arm Joint Type", value: "Reinforced hinge and bracket connection" },
      { name: "Guide Mechanism", value: "Central guide rope with pulley at head frame" },
      { name: "Typical Assembly Weight", value: "Approx. 110-130 kg (3-arm configuration, all components)" },
      { name: "Compatible Pole Height", value: "15 m to 40 m" },
      { name: "Material", value: "Hot-dip galvanised steel components" },
      { name: "Recommended Use Cases", value: "High-traffic, maintenance-critical sites; long-term low-maintenance installations" },
      { name: "Pricing Tier", value: "Premium — higher cost than standard fixed/pin carriage systems" },
      { name: "Maintenance", value: "Annual latch and spring inspection recommended" }
    ],
    faqs: [
      {
        question: "Why is a latching mechanism critical for high mast safety?",
        answer: "Without a latching mechanism, the heavy floodlight ring hangs continuously from the winch ropes. Over time, constant wind oscillation creates immense stress on the wire ropes, leading to failure. The latching mechanism locks the carriage in place, protecting the rope system."
      }
    ],
    definition: "A High Mast Latching Mechanism is a gravity-operated or spring-loaded automatic docking assembly mounted at the apex of a high mast pole. When the luminaire carriage ring is raised to its full operational height, the latching pins automatically engage into matching receiver slots on the carriage, physically anchoring it to the pole structure. This transfers the entire carriage weight (up to 1000kg) from the wire ropes onto the pole body, completely relieving tension load from the winching system.",
    engineeringNotes: [
      "The latching pin engagement is automatic — as the carriage rises, tapered guide cones align the pins perfectly with the receiver holes without manual intervention.",
      "A ground-level visual indicator flag confirms full latching engagement, allowing the operator to verify lock status from the base of the pole.",
      "Cast steel latch housing is hot-dip galvanized to resist corrosion in coastal and industrial environments.",
      "The pin receiver slots are designed with a slight rearward bias angle that causes the carriage to self-center and lock tighter under wind-induced oscillation."
    ],
    advantages: [
      { title: "Extends Wire Rope Service Life", desc: "By eliminating the continuous operational tension load from the ropes, wire rope fatigue failure risk is dramatically reduced, extending rope life by 3–5×." },
      { title: "Automatic Engagement", desc: "The gravity-latch system requires no manual operation at height — pins engage automatically as the carriage reaches the top of travel." },
      { title: "Ground-Level Verification", desc: "Visual indicator flag provides a clear confirmation signal at ground level that the latch has fully engaged before the operator leaves the site." },
      { title: "Handles Full Wind Loading", desc: "The latch takes the full structural moment from wind-induced oscillation, preventing carriage sway that can damage conduit connections." }
    ],
    applications: [
      { title: "New High Mast Installations", desc: "Standard inclusion in all new high mast poles with motorised or manual lowering systems above 16m height." },
      { title: "Retrofit Upgrades", desc: "Retrofit installation on existing masts where wire rope breakage has been observed due to chronic fatigue loading without latching protection." },
      { title: "Coastal & Marine Masts", desc: "Critical on coastal high masts where salt-laden wind gusts create severe oscillation loads on unlatched carriage rings." }
    ],
    standards: [
      { code: "IS 3938", description: "Design and testing requirements for mechanical hoist systems including latching load transfer mechanisms." },
      { code: "IS 875 (Part III)", description: "Wind load standard used to calculate oscillation forces the latch must structurally resist." }
    ],
    installationTips: [
      "Ensure the latch pin assembly is aligned exactly with the receiver socket by performing a slow manual test raise before full-speed motorized commissioning.",
      "Apply never-seize compound to all latch pin shafts before assembly to prevent corrosion-bonding of stainless and cast steel interfaces.",
      "Test the ground indicator flag visibility from both sides of the pole base before finalizing installation to ensure clear operator line-of-sight."
    ],
    maintenanceTips: [
      "Inspect latch pins and receiver sockets for corrosion and deformation every 12 months; re-grease pin shafts with marine-grade lithium grease.",
      "Test the automatic engagement by performing 2–3 full lowering and raising cycles annually and verifying the indicator flag response.",
      "Check the latch housing mounting bolts for tightness every 2 years; replace any bolts showing thread corrosion with new stainless equivalents."
    ]
  },
  "decorated-poles": {
    title: "Decorative Street Lighting Poles & Heritage Posts | Electrika INC",
    description: "Premium heritage-style cast iron & GI decorative lamp posts. Beautiful classic designs for parks, township pathways, and historic developments.",
    keywords: ["Decorative Poles", "Heritage Street Light Pole", "Cast Iron Lamp Post", "Ornate pathways lighting pole", "Classic garden lamp post"],
    canonical: `${PRIMARY_DOMAIN}/products/decorated-poles`,
    entityType: "Product",
    brand: "Bajaj / Ligman / Custom",
    manufacturer: "Electrika INC",
    directAnswer: "Decorative Street Poles are architectural lamp posts designed to provide high-quality lighting while enhancing the aesthetic appeal of a property or city avenue. Fabricated from combinations of steel columns, cast iron decorative base scrolls, and ornate single/double bracket arms, these poles are finished with specialized polyurethane anti-corrosive paint to stand up to outdoor conditions.",
    specs: [
      { name: "Height Options", value: "3m, 4m, 5m, and 6m configurations" },
      { name: "Materials", value: "Galvanized steel pipe core, cast aluminum/cast iron embellishments" },
      { name: "Surface Paint", value: "UV-resistant Polyurethane (PU) paint over zinc chromate primer" },
      { name: "Bracket Arm Layouts", value: "Ornate scroll arms, single, double, or triple light mountings" },
      { name: "Luminaire Fitment", value: "Post-top or pendant hanging lamp brackets" }
    ],
    visualSpecs: [
      { name: "Height Range", value: "3 m, 4 m, 5 m, 6 m, 7 m, 8 m" },
      { name: "Material", value: "Aluminium die-cast (pole shaft and ornamental components)" },
      { name: "Design Options", value: "100+ catalogue designs — classical, colonial, contemporary, themed" },
      { name: "Surface Finish", value: "Polyester powder coating, UV and weather resistant" },
      { name: "Accent Finish", value: "Brass / gold-tone detailing (design dependent)" },
      { name: "Luminaire Compatibility", value: "LED lantern heads, decorative glass/acrylic diffusers" },
      { name: "Base Type", value: "Decorative cast base cover with anchor bolt access" },
      { name: "Mounting", value: "Surface-mount on RCC foundation with anchor bolts" },
      { name: "Bracket Style", value: "Integrated cast scrollwork or straight arm (per design)" },
      { name: "Wind Load Rating", value: "Designed per IS 875 (Part III) for project wind zone" },
      { name: "Cable Entry", value: "Internal cable routing through pole shaft" },
      { name: "Customisation", value: "Custom colour, finish, and bracket variations available" },
      { name: "Lead Time", value: "3–5 weeks depending on design and quantity" }
    ],
    faqs: [
      {
        question: "Where are decorative poles typically specified?",
        answer: "They are widely used in urban landscaping projects, theme parks, golf courses, resort walkways, university campuses, public plazas, and residential township roads."
      }
    ],
    definition: "Decorative Street Poles are aesthetically designed lamp posts that combine structural lighting functionality with architectural visual appeal. Built around a galvanized steel structural core, they are adorned with cast aluminum or cast iron ornamental bases, scroll bracket arms, and decorative shaft collars. Finished with UV-resistant polyurethane (PU) paint over zinc chromate primer, they are available in custom heritage colors such as British Racing Green, Antique Black, and Cream.",
    engineeringNotes: [
      "The core structural steel shaft is hot-dip galvanized before ornamental components are attached, ensuring the load-bearing structure is fully protected from corrosion.",
      "Decorative cast iron base scrolls are sand-cast using high-silicon grey iron for maximum detail fidelity and impact resistance.",
      "The PU paint system is applied in three layers (zinc chromate primer + epoxy mid-coat + PU topcoat) for a minimum 15-year outdoor color retention.",
      "Bracket arm connections use full-penetration butt welds ground flush to the pole surface for a seamless architectural appearance."
    ],
    advantages: [
      { title: "Dual Function", desc: "Provides efficient outdoor lighting while simultaneously enhancing the visual identity and prestige of the project site." },
      { title: "Custom Color Finishes", desc: "Available in any RAL or NCS color specification including Antique Black, Heritage Green, Ivory, and Powder Blue for branding alignment." },
      { title: "Multiple Luminaire Configurations", desc: "Single, double, or triple scroll-arm configurations allow flexibility in lux level design across pathway widths." },
      { title: "Long PU Paint Durability", desc: "3-layer polyurethane paint system resists UV fading, chalking, and peeling for 15+ years in tropical outdoor climates." }
    ],
    applications: [
      { title: "Urban Landscaping & Parks", desc: "Public parks, botanical gardens, heritage walkways, and riverside promenades requiring visually elegant pathway lighting." },
      { title: "Residential Townships", desc: "Premium RERA-registered township internal roads, club entrances, and amenity zone lighting." },
      { title: "Heritage Districts & Smart Cities", desc: "Smart city redevelopment zones and heritage district revitalization projects where street furniture aesthetics are specified." },
      { title: "Hotels, Resorts & Golf Courses", desc: "Luxury hotel driveways, resort pathways, and golf course cart paths requiring low-glare atmospheric lighting." }
    ],
    installationTips: [
      "Handle poles with padded slings during installation to prevent scratching the decorative PU paint finish before completion.",
      "Seal the base plate-to-foundation interface with a polyurethane sealant bead to prevent water pooling around the pole base which can cause rust staining.",
      "Avoid using steel wire pulling tools on the wiring during luminaire installation — use nylon pulling tape to prevent scratch damage to the inner galvanized surface."
    ],
    maintenanceTips: [
      "Wash the pole surface with mild detergent and soft cloth twice yearly; avoid abrasive cleaners that remove the PU topcoat.",
      "Touch up any paint chips or scratches within 3 months of occurrence using the matching RAL color PU paint to prevent underlying metal corrosion.",
      "Inspect ornamental cast iron base scrolls for micro-cracking or paint delamination annually, especially in high-humidity coastal areas."
    ]
  },
  "flp-led-light": {
    title: "Flame-proof LED Tube Lights (Zone 1 & 2) | Electrika INC",
    description: "Heavy-duty explosion-proof LED linear tube fittings (IP66). Certified Ex d IIC T6 Gb for hazardous oil, gas & chemical environments.",
    keywords: ["Flame-proof LED lights", "Explosion Proof LED Tube", "FLP Linear Fitting", "Zone 1 Ex d light", "Hazardous area lighting India"],
    canonical: `${PRIMARY_DOMAIN}/products/flp-led-light`,
    entityType: "Product",
    brand: "Hensel / PCE / FLP Brand",
    manufacturer: "Electrika INC",
    directAnswer: "Flameproof LED Tube Lights are explosion-resistant linear light fixtures certified for Zone 1, 2, 21, and 22 hazardous areas. Built with a high-strength, copper-free die-cast aluminum housing and an impact-resistant toughened borosilicate glass envelope, they prevent any internal electrical spark or gas ignition from escaping and triggering explosions in the surrounding atmosphere.",
    specs: [
      { name: "Hazardous Area Rating", value: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db" },
      { name: "Ingress Protection", value: "IP66 dust-tight and high-pressure jet water resistant" },
      { name: "Body Material", value: "Copper-free die-cast aluminum alloy, epoxy powder coated" },
      { name: "Optical Diffuser", value: "Toughened, thermal shock-resistant borosilicate glass" },
      { name: "Conduit Entry Size", value: "Dual M20 or 3/4\" NPT threaded entry ports" }
    ],
    visualSpecs: [
      { name: "Protection Concept", value: "Flameproof Enclosure (Ex d) — IEC 60079-1" },
      { name: "ATEX / IECEx Classification", value: "Ex d IIB T4 Gb / Ex d IIB T5 Gb (model specific)" },
      { name: "Zone Suitability", value: "Zone 1, Zone 2 (Gas); Zone 21, Zone 22 (Dust)" },
      { name: "IP Rating", value: "IP66" },
      { name: "Power Consumption (LED)", value: "18W, 24W, 36W (replaces 2×18W, 2×28W, 2×36W fluorescent)" },
      { name: "Housing Material", value: "Die-cast iron / LM6 aluminium alloy" },
      { name: "Glass Tube", value: "Heat-resistant borosilicate glass" },
      { name: "Wire Guard", value: "Welded steel wire cage, powder-coated" },
      { name: "Mounting Orientation", value: "Universal (Horizontal / Vertical pendant)" }
    ],
    faqs: [
      {
        question: "What is the difference between flameproof (Ex d) and intrinsically safe (Ex i) lighting?",
        answer: "Flameproof (Ex d) fixtures are designed to contain an internal explosion safely within their heavy-duty housing without allowing the flame path to escape. Intrinsically safe (Ex i) limits the electrical energy to prevent spark ignition entirely, which is rarely possible for high-lumen lighting."
      }
    ],
    definition: "Flameproof LED Tube Lights (FLP LED Lights) are explosion-resistant linear lighting fixtures certified for use in Zone 1, 2, 21, and 22 hazardous areas under the ATEX/IECEx classification system. They feature a heavy-duty copper-free die-cast aluminum housing with precision-machined flat-joint flame paths, a robust toughened borosilicate glass envelope, and a high-efficiency LED driver. The Ex d IIC T6 Gb certification ensures any internal fault, arc, or explosion is fully contained within the fixture without triggering external ignition.",
    engineeringNotes: [
      "The flame path gap (joint between body and cover) is machined to tolerances of ±0.01mm to ensure hot gases cool below the T6 temperature limit (85°C) before escaping.",
      "All threaded conduit entries are provided with certified flameproof plugs — these must not be replaced with standard rubber bungs as this invalidates the Ex certification.",
      "The T6 surface temperature classification limits the maximum external temperature of the fixture to 85°C, protecting against ignition of gases with low auto-ignition temperatures.",
      "The borosilicate glass diffuser is tested to EN 60079-1 impact resistance requirements to withstand accidental tool strikes in industrial environments."
    ],
    advantages: [
      { title: "Zone 1 & 21 Certified", desc: "Certified for the highest-risk continuous and intermittent hazardous area zones, enabling deployment where standard IP-rated lights are a legal ignition hazard." },
      { title: "IEC 60079 Compliant", desc: "Full compliance with the international IECEx and ATEX certification systems enables global project acceptance and insurance approval." },
      { title: "High-Efficiency LED", desc: "Modern LED drivers reduce power consumption by 60–70% versus legacy FLP fluorescent tubes with identical lumen output." },
      { title: "IP66 Rated", desc: "Complete dust-tight and high-pressure jet-water resistant sealing, enabling safe use in wash-down and process areas." },
      { title: "Long 50,000-Hour Life", desc: "LED light source rated for L70 at 50,000 hours eliminates frequent lamp replacement that would require area isolation in hazardous zones." }
    ],
    applications: [
      { title: "Oil Refineries & Petrochemical Plants", desc: "Process unit corridors, pump rooms, valve manifold areas, and flammable liquid storage zones." },
      { title: "Offshore Drilling Platforms", desc: "Wellhead areas, compressor modules, mud pump rooms, and accommodation module emergency exits." },
      { title: "Pharmaceutical Manufacturing", desc: "Solvent recovery areas, granulation rooms, and spray drying zones with volatile organic compound (VOC) atmospheres." },
      { title: "Grain Silos & Flour Mills", desc: "Dust Zone 21/22 classified areas with explosive flour, grain, or starch dust in suspension." },
      { title: "Paint Spray Booths", desc: "Automotive body shops and industrial coating lines with continuous flammable solvent vapour classification." }
    ],
    standards: [
      { code: "IEC 60079-0", description: "General requirements for equipment used in explosive gas atmospheres." },
      { code: "IEC 60079-1", description: "Specific standard for flameproof 'd' enclosures — flame path geometry and gap tolerances." },
      { code: "IEC 60079-31", description: "Protection by 'tb' enclosure for equipment in explosive dust atmospheres (Zone 21/22)." },
      { code: "ATEX Directive 2014/34/EU", description: "European Equipment and Protective Systems directive for explosive atmospheres — CE mark requirement." },
      { code: "IS/IEC 60079 (BIS)", description: "Indian Standard adoption of IECEx requirements, mandatory for PESO-approved installations." }
    ],
    installationTips: [
      "Verify the area's hazardous zone classification (Zone 1, 2, 21, or 22) from the area classification drawing before specifying the correct Ex protection type.",
      "Use only certified Ex-rated flameproof cable glands (Ex e or Ex d) when entering cables into the conduit entry ports — standard IP glands are not compliant.",
      "Never open the fixture in the hazardous zone while the area is live — always isolate power and purge the area before performing maintenance.",
      "Inspect the flame path (lid-to-body machined joint) for damage before re-assembly; any nick or scratch on the flame path surface requires fixture replacement."
    ],
    maintenanceTips: [
      "Clean the glass diffuser surface with a dry cloth only — water and chemical cleaning agents can thermally stress the borosilicate glass.",
      "Inspect threaded conduit entries and flameproof blanking plugs for corrosion or cross-threading every 12 months; replace damaged plugs immediately.",
      "Check all external fasteners (body-to-cover bolts) for corrosion and tightness annually; use calibrated torque wrench to re-torque to manufacturer specification.",
      "Test and record the insulation resistance (IR) of the internal driver wiring every 2 years using a 500V DC megohmmeter."
    ]
  },
  "flp-led-highbay": {
    title: "Flameproof LED High Bay Lights Ex d IIC T6 | Electrika INC",
    description: "High-power flameproof LED high-bay luminaires. IP66 rating, Zone 1 & 21 certified. Engineered for chemical warehouses and oil refineries.",
    keywords: ["Flameproof LED High Bay", "Explosion Proof Highbay Light", "Ex d IIC T6 High Bay", "IP66 Hazardous LED Highbay", "Industrial FLP Lighting"],
    canonical: `${PRIMARY_DOMAIN}/products/flp-led-highbay`,
    entityType: "Product",
    brand: "Electrika / Premium FLP Partners",
    manufacturer: "Electrika INC",
    directAnswer: "A Flameproof LED High Bay Light is a high-lumen, explosion-proof fixture designed for high-ceiling industrial facilities in hazardous environments. It utilizes an integrated finned cooling array for premium heat dissipation, a heavy-duty copper-free cast housing, and Ex d IIC T6 protection. This makes it ideal for petroleum processing lines, chemical silos, and paint spray booths.",
    specs: [
      { name: "Certification Code", value: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db" },
      { name: "Input Operating Voltage", value: "100V - 277V AC, 50Hz/60Hz wide range driver" },
      { name: "Protection Level", value: "IP66 rating (dust-tight, high-pressure washing protection)" },
      { name: "Cooling System", value: "Finned integrated heat sink structure (high-surface convection)" },
      { name: "Light Source Type", value: "High-density COB LED chip with color rendering index CRI > 80" }
    ],
    visualSpecs: [
      { name: "Ex Protection Code", value: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db" },
      { name: "Compliance Testing Standard", value: "IEC 60079-0, IEC 60079-1, EN 60079-31" },
      { name: "Ingress Protection Level", value: "IP66 Dust-tight & High Pressure Water Jet Resistant" },
      { name: "Housing Assembly Material", value: "High-Strength Copper-Free Die-Cast Aluminum Gray" },
      { name: "Optical Window Material", value: "Toughened Prismatic Borosilicate Flameproof Glass" },
      { name: "Input Electrical Operating Range", value: "100V–277V AC, 50Hz/60Hz Functionality" },
      { name: "Conduit Cable Entry Ports", value: "Dual NPT 3/4\" or M20 Openings (1 Pre-Plugged as shown)" },
      { name: "Color Rendering Index (CRI)", value: "> 80 Ra" },
      { name: "Luminaire Lifespan (L70)", value: "> 50,000 Hours Continuous Operating Conditions" }
    ],
    faqs: [
      {
        question: "Are these high-bay lights suitable for paint booths with flammable solvent vapors?",
        answer: "Yes, our flameproof high-bays are fully certified for Zone 1 and Zone 2 gas environments, which includes Class I, Div 1/2 scenarios with organic solvent vapors."
      }
    ],
    definition: "Flameproof LED High Bay Lights are high-lumen explosion-proof luminaires engineered for high-ceiling industrial facilities (6m–20m mounting heights) in classified hazardous atmospheres. Featuring a large integrated aluminum finned heat sink for passive thermal management, a high-density COB LED light source, and a copper-free die-cast aluminum Ex d IIC T6 housing, they replace legacy HID high-pressure sodium and metal halide lamps in oil refineries, chemical warehouses, and pharmaceutical production lines.",
    engineeringNotes: [
      "The circular finned heat sink geometry maximizes natural convection airflow across the fin surface area, maintaining the LED junction temperature below 75°C for optimal lifespan.",
      "COB (Chip-on-Board) LED technology concentrates multiple LED dies onto a single ceramic substrate, achieving higher lumen density versus discrete SMD arrays.",
      "The adjustable heavy-duty mounting bracket provides ±30° tilt adjustment for directing the light beam precisely onto work surfaces.",
      "Internal driver circuitry operates across a 100V–277V wide input range, making it compatible with Indian, European, and American supply systems without modifications."
    ],
    advantages: [
      { title: "High Lumen Output in Hazardous Zones", desc: "Provides the high-intensity illumination (5000–20000 lm) required for safe industrial operations in chemical and petrochemical facilities." },
      { title: "Passive Cooling — No Moving Parts", desc: "The finned heat sink dissipates heat by natural convection with no fans or mechanical parts, eliminating maintenance and failure risk." },
      { title: "70% Energy Savings", desc: "Replaces 400W–1000W HPS or MH high bays with 100W–200W LED equivalents at equal or higher lumen output." },
      { title: "50,000-Hour LED Life", desc: "L70 rated lifetime eliminates the need to enter hazardous areas for lamp replacement for 8–10 years under normal operating schedules." },
      { title: "Wide Voltage Compatibility", desc: "100V–277V AC wide-range driver accepts international power supply voltages with no separate voltage selector or transformer required." }
    ],
    applications: [
      { title: "Oil & Gas Refineries", desc: "Process unit buildings, lube oil treating areas, crude distillation unit platforms, and pipeline pump station rooms." },
      { title: "Chemical Warehouses", desc: "Flammable liquid storage buildings, solvent blending areas, and chemical drum storage zones classified Zone 1 or 2." },
      { title: "Paint Spray Booths", desc: "Automotive body manufacturing spray lines and industrial coating booths with continuous organic solvent vapour atmosphere." },
      { title: "Aerospace Fuelling Facilities", desc: "Aviation fuel storage buildings, hydrant pit servicing areas, and aircraft fuelling pump rooms." },
      { title: "Mining — Underground", desc: "DGMS/CMRS certified applications for firedamp-classified underground coal mine tunnels and headings." }
    ],
    standards: [
      { code: "IEC 60079-0 / IEC 60079-1", description: "General requirements and flameproof enclosure standard for Ex d equipment." },
      { code: "IEC 60079-31", description: "Equipment protection by 'tb' enclosure for combustible dust atmospheres." },
      { code: "IS/IEC 60079 (PESO)", description: "Mandatory Indian certification for all electrical equipment in hazardous areas — issued by PESO after BIS type-test." },
      { code: "ATEX 2014/34/EU", description: "European directive for apparatus and protective systems in explosive atmospheres." }
    ],
    installationTips: [
      "Mount the fixture to a certified flameproof-rated conduit box or junction box — never to a standard surface-mounted backbox.",
      "Ensure cable entries are sealed with approved Ex d or Ex e flameproof cable glands appropriate to the cable outer diameter.",
      "Use the mounting bracket tilt adjustment before final tightening to optimize beam angle onto the target illumination area.",
      "After installation, measure the maintained illuminance (Eav) at working plane level and compare against the lighting design lux calculations."
    ],
    maintenanceTips: [
      "Clean the finned heat sink with compressed air every 6 months in dusty environments to restore full thermal dissipation efficiency.",
      "Inspect the glass lens for cracks or impact damage every 12 months — damaged lenses must be replaced before re-energizing the fixture.",
      "Test the driver output voltage and current annually using a calibrated clamp meter to verify no driver degradation.",
      "Inspect and re-torque the mounting bracket bolts every 18 months to prevent fixture tilt shift under long-term vibration."
    ],
    comparison: {
      title: "FLP LED High Bay vs. Traditional HPS/MH High Bay",
      columns: ["Attribute", "FLP LED High Bay", "HPS / Metal Halide High Bay"],
      rows: [
        { label: "Power Consumption", values: ["100W–200W", "400W–1000W"] },
        { label: "Lumens per Watt", values: [">100 lm/W", "80–100 lm/W (new lamp)"] },
        { label: "Warm-Up Time", values: ["Instant ON (0 seconds)", "3–5 minutes"] },
        { label: "Rated Life (L70)", values: ["50,000 hours", "15,000–24,000 hours"] },
        { label: "Maintenance in Hazardous Zone", values: ["Once per 10 years", "Every 1–2 years"] },
        { label: "Ex Certification", values: ["Ex d IIC T6 Gb (IECEx)", "Available but limited"] }
      ]
    }
  },
  "flood-light": {
    title: "Bajaj LED Flood Lights (50W-400W) B2B Supply | Electrika INC",
    description: "Shop high-lumen Bajaj LED floodlights for industrial yards, stadiums & facade lighting. Energy-efficient outdoor illumination. Quick quotes.",
    keywords: ["Bajaj LED Flood Lights", "Bajaj Industrial Floodlight", "High-power LED flood panel", "IP66 outdoor floodlight", "Bajaj B2B supplier"],
    canonical: `${PRIMARY_DOMAIN}/products/flood-light`,
    entityType: "Product",
    brand: "Bajaj Electricals",
    manufacturer: "Bajaj / Distributed by Electrika INC",
    directAnswer: "Bajaj LED Flood Lights are high-output outdoor luminaires designed for wide-area B2B industrial projects. Built with die-cast aluminum housings and highly efficient multi-chip LED arrays, they deliver excellent lumens per watt. Backed by Bajaj's official manufacturer warranty, they are the industry standard for stadiums, shipyards, railway platforms, and perimeter security.",
    specs: [
      { name: "Power Range", value: "50W, 100W, 150W, 200W, 250W, 300W, and 400W options" },
      { name: "Luminous Efficacy", value: "Up to 120-140 lumens per watt" },
      { name: "Ingress Protection", value: "IP66 rated (dustproof, waterproof silicon gasket seals)" },
      { name: "Surge Protection", value: "10 kV built-in surge protection driver" },
      { name: "Lens Optics", value: "Symmetric / Asymmetric secondary optical distribution lens" }
    ],
    visualSpecs: [
      { name: "Power Range", value: "10W to 500W" },
      { name: "Luminous Efficacy", value: "130–160 lm/W" },
      { name: "Colour Temperature", value: "3000K / 4000K / 5000K / 6500K" },
      { name: "CRI", value: "≥ 80 Ra" },
      { name: "Input Voltage", value: "85–265V AC, 50 Hz" },
      { name: "Power Factor", value: "≥ 0.95" },
      { name: "THD", value: "< 10%" },
      { name: "IP Rating", value: "IP65 / IP66 (model specific)" },
      { name: "IK Rating", value: "IK08 (impact resistant)" },
      { name: "Operating Temperature", value: "-20°C to +55°C" },
      { name: "Housing", value: "Die-cast aluminium, powder coated" },
      { name: "Warranty", value: "5 Years (driver + module)" },
      { name: "Certifications", value: "BIS, CE, RoHS" }
    ],
    faqs: [
      {
        question: "What is the warranty coverage on Bajaj LED Flood Lights?",
        answer: "Bajaj provides an official 2-year or 5-year replacement warranty (depending on the specific industrial product series) handled directly via authorized channels like Electrika INC."
      }
    ],
    definition: "LED Flood Lights are high-output outdoor luminaires designed to illuminate large open areas with a wide, even beam of high-intensity light. Built with die-cast aluminum housing, multi-chip SMD LED arrays, and precision secondary optical lenses, they deliver 130–160 lumens per watt. Bajaj LED flood lights are rated at IP66 for dust and water resistance and include a 10kV surge protector to withstand lightning and grid transients common in Indian industrial environments.",
    engineeringNotes: [
      "Asymmetric secondary optical lenses shape the beam pattern for specific applications — Type II for road lighting, Type III for area floodlighting, and Type V for symmetrical area coverage.",
      "The die-cast ADC12 aluminum housing serves dual duty as both the structural enclosure and the primary heat sink, providing passive LED cooling without a separate heatsink component.",
      "The 10kV surge protection device (SPD) uses a metal oxide varistor (MOV) to clamp transient overvoltages before they reach the LED driver circuitry.",
      "Silicone gasket sealing at the LED chamber and driver compartment interface provides IP66 protection even after repeated thermal cycling."
    ],
    advantages: [
      { title: "60–70% Energy Saving", desc: "Delivers equivalent or superior lux levels to legacy HPS and MH floodlights at 60–70% lower power consumption, with verified ROI within 24–36 months." },
      { title: "5-Year Warranty", desc: "Full fixture warranty covering LED modules, drivers, and housing for 5 years — far exceeding the industry standard of 2 years for outdoor luminaires." },
      { title: "130–160 lm/W Efficacy", desc: "Industry-leading luminous efficacy reduces the fixture count required per installation, lowering both capital and running costs." },
      { title: "BIS & EESL Compliant", desc: "BIS certification and Bureau of Energy Efficiency compliance make these fixtures eligible for government tender and EESL procurement programs." },
      { title: "Instant ON", desc: "LED technology illuminates to full output instantly on power-on, eliminating the 3–5 minute HPS warm-up delay critical for security applications." }
    ],
    applications: [
      { title: "Industrial Yards & Warehouses", desc: "Open-cast yard lighting for steel plants, cement factories, logistics parks, and container storage areas." },
      { title: "Stadium & Sports Ground Floodlighting", desc: "Cricket, football, and athletics facilities requiring high and uniform lux levels for evening play and broadcast." },
      { title: "Façade & Architectural Lighting", desc: "Building uplighting, monument illumination, and bridge accent lighting using RGBW or warm white LED flood versions." },
      { title: "Perimeter Security Lighting", desc: "Factory boundary walls, prison perimeters, and data centre outer zones requiring high-uniformity intrusion-deterrent illumination." }
    ],
    standards: [
      { code: "IS 10322 (Part 5/Sec 3)", description: "Indian Standard for luminaire performance in road and street lighting applications." },
      { code: "BIS (Bureau of Indian Standards)", description: "Mandatory BIS certification for LED luminaires sold in India under the Electronics and IT Goods Quality Control Order." },
      { code: "IEC 60598-1", description: "International standard for luminaire construction, safety, and testing." },
      { code: "IEC 61000-4-5", description: "Surge immunity standard — 10kV level compliance ensures resilience against lightning-induced surges." }
    ],
    installationTips: [
      "Mount flood lights at the correct aiming angle per the photometric lighting design (typically 60°–70° tilt from vertical) to achieve the specified lux pattern on the target surface.",
      "Leave minimum 50mm clearance around the fixture housing sides for adequate natural convection airflow over the heat sink fins.",
      "Always earth the fixture mounting bracket to the local earthing grid — LED driver failures are commonly caused by floating earthing in outdoor installations.",
      "For stadium applications, use a licensed photometric software to verify that CIBSE LG4 uniformity ratios are met before finalizing pole positions and mounting heights."
    ],
    maintenanceTips: [
      "Clean the optical lens surface with a damp cloth every 6 months in industrial dust environments — accumulated surface dust can reduce light output by 15–25%.",
      "Inspect the mounting bracket tilt angle after the first monsoon season, as wind loads can cause micro-rotation of the adjustable bracket over time.",
      "Test each luminaire's maintained illuminance annually using a calibrated lux meter at the working plane; outputs below 70% of initial value indicate LED lumen depreciation.",
      "Check the surge protection device (SPD) integrity after every major lightning event in the area by measuring its clamping voltage."
    ],
    comparison: {
      title: "LED Flood Light vs. High-Pressure Sodium (HPS) Flood Light",
      columns: ["Attribute", "LED Flood Light", "HPS Flood Light"],
      rows: [
        { label: "Efficacy", values: ["130–160 lm/W", "70–100 lm/W"] },
        { label: "Warm-Up Time", values: ["Instant (0 sec)", "3–5 minutes"] },
        { label: "Rated Life", values: ["50,000 hours (L70)", "20,000–24,000 hours"] },
        { label: "Colour Rendering (CRI)", values: [">80 Ra", "20–25 Ra (poor)"] },
        { label: "Surge Protection", values: ["Built-in 10kV SPD", "None (external required)"] },
        { label: "Warranty", values: ["5 Years", "1 Year (typical)"] }
      ]
    }
  },
  "solar-street-light": {
    title: "All-in-One Solar Street Lights (Integrated) | Electrika INC",
    description: "Integrated solar LED street lights. High-efficiency solar panels, LiFePO4 batteries, and smart motion sensors. Zero electricity bills.",
    keywords: ["Solar Street Lights", "Integrated Solar LED Streetlight", "LiFePO4 solar street light", "All in one solar light", "Smart solar street lighting"],
    canonical: `${PRIMARY_DOMAIN}/products/solar-street-light`,
    entityType: "Product",
    brand: "Integrated Solar Solutions",
    manufacturer: "Electrika INC",
    directAnswer: "An All-in-One Solar Street Light is a fully self-contained outdoor luminaire. It integrates a high-efficiency monocrystalline solar panel, long-life Lithium Iron Phosphate (LiFePO4) battery cells, a smart MPPT charge controller, and a high-brightness LED array into a single compact casing. These systems feature automated dusk-to-dawn sensors and PIR motion sensors to optimize battery usage.",
    specs: [
      { name: "Solar Panel Type", value: "Monocrystalline silicon, high efficiency solar conversion" },
      { name: "Internal Battery", value: "Lithium Iron Phosphate (LiFePO4), minimum 2000 life cycles" },
      { name: "Charge Controller", value: "Intelligent Maximum Power Point Tracking (MPPT) controller" },
      { name: "Lighting Modes", value: "Automated dusk-to-dawn, motion sensing dimmer mode (PIR)" },
      { name: "Autonomy Period", value: "2 to 3 consecutive rainy/cloudy days backup" }
    ],
    visualSpecs: [
      { name: "Power Range (Overall)", value: "7W to 175W across the range" },
      { name: "Variant Types", value: "All-in-One, Standalone, Semi-Integrated, Mini High Mast" },
      { name: "Battery Type", value: "LiFePO4 (Lithium Iron Phosphate) — standard across range" },
      { name: "Solar Panel", value: "Monocrystalline, 18%–22% efficiency" },
      { name: "Light Source", value: "SMD / High-Power LED, 130–150 lm/W" },
      { name: "Control", value: "PIR motion sensor + dusk-to-dawn auto on/off (select models)" },
      { name: "Autonomy (Backup)", value: "2–4 cloudy days typical, model dependent" },
      { name: "IP Rating", value: "IP65 (luminaire); IP67 battery compartment (select models)" },
      { name: "Pole Compatibility", value: "Direct pole-top or arm-mount, 3 m–10 m poles" },
      { name: "Charge Controller", value: "Integrated MPPT / PWM controller" },
      { name: "Operating Temperature", value: "-10°C to +55°C" },
      { name: "Warranty", value: "2 Years standard; extended options available" },
      { name: "MNRE / BIS Status", value: "MNRE-approved models available; BIS listed on select SKUs" }
    ],
    faqs: [
      {
        question: "Why is a Lithium Iron Phosphate (LiFePO4) battery preferred for solar street lights?",
        answer: "LiFePO4 batteries offer a significantly higher thermal stability, double the charge cycle lifetime compared to standard lithium-ion batteries, and are much safer under high summer temperatures in India."
      }
    ],
    definition: "All-in-One Solar Street Lights are fully self-contained outdoor luminaires that integrate a monocrystalline photovoltaic solar panel, a long-life Lithium Iron Phosphate (LiFePO4) battery pack, a Maximum Power Point Tracking (MPPT) charge controller, a high-lumen LED lamp, and a PIR motion sensor into a single compact housing. They generate, store, and consume their own electricity with zero grid connection, making them ideal for remote roads, village pathways, and off-grid infrastructure projects.",
    engineeringNotes: [
      "MPPT charge controllers continuously optimize the solar panel operating voltage to extract maximum available current under varying sun angle and cloud cover conditions.",
      "LiFePO4 battery chemistry provides a flat discharge voltage curve, ensuring consistent LED brightness throughout the entire night rather than dimming progressively as battery depletes.",
      "The PIR (Passive Infrared) motion sensor triggers a boost-to-100% brightness mode when motion is detected, reverting to 30–50% dim mode after 30–60 seconds for maximum energy economy.",
      "The all-in-one casing design eliminates external battery boxes and junction boxes, reducing installation time to under 2 hours per pole using standard tools."
    ],
    advantages: [
      { title: "Zero Electricity Bills", desc: "100% solar-powered operation eliminates ongoing electricity costs — after installation, operating cost is virtually zero for the 10+ year product life." },
      { title: "No Grid Infrastructure Required", desc: "Eliminates the need for trenching, laying underground cables, and installing distribution transformers — critical for remote and rural electrification." },
      { title: "LiFePO4 Battery Longevity", desc: "2000+ charge cycles guarantee 7–10 years of reliable battery performance in Indian climatic conditions without replacement." },
      { title: "Smart Motion-Sensing Mode", desc: "PIR sensor reduces battery drain by keeping the light at 30–50% brightness during inactive periods, extending backup to 2–3 cloudy days autonomy." },
      { title: "Rapid Installation", desc: "Pre-assembled, pre-wired all-in-one unit mounts directly to a standard GI pole in under 2 hours with no licensed electrician required." }
    ],
    applications: [
      { title: "Rural Village Roads", desc: "Gram Panchayat road lighting under PMGSY and DDUGJY schemes where grid power availability is unreliable or absent." },
      { title: "Forest Department Roads", desc: "Wildlife sanctuary approach roads, forest range checkposts, and eco-tourism pathways where grid cabling is environmentally restricted." },
      { title: "Border Area Roads", desc: "CPWD and BRO road lighting projects in remote Himalayan and desert border areas with no grid connectivity." },
      { title: "Industrial Estate Perimeters", desc: "SEZ and industrial park boundary security lighting where running trenched cable to perimeter areas is cost-prohibitive." }
    ],
    standards: [
      { code: "IEC 62124", description: "International standard for photovoltaic standalone system design qualification." },
      { code: "IS 16107", description: "Indian Standard for Integrated LED Street Lighting Systems." },
      { code: "MNRE Guidelines", description: "Ministry of New & Renewable Energy specifications for solar street lights under NCEF-funded schemes." },
      { code: "IEC 62133", description: "Safety requirements for portable sealed secondary lithium cells and batteries used in portable applications." }
    ],
    installationTips: [
      "Orient the solar panel facing exactly due south (in Northern India) and tilt at an angle equal to the site latitude (±5°) for maximum annual energy harvest.",
      "Position the PIR motion sensor away from dense tree canopy — falling leaves triggering false motion events can significantly drain the battery overnight.",
      "Commission the system during a clear sunny day; the initial charge cycle typically requires 6–8 hours of full sun to fully charge the factory-depleted battery.",
      "Install the pole so the solar panel has zero shading between 9:00 AM and 3:00 PM solar time — even 10% panel shading can reduce charge by 50% on MPPT systems."
    ],
    maintenanceTips: [
      "Clean the solar panel glass surface with clean water and a soft cloth every 2 months — dust accumulation of just 4mm can reduce power generation by 20%.",
      "Inspect and clean the PIR sensor lens every 6 months; spider webs and insect nests commonly false-trigger the motion mode and drain batteries prematurely.",
      "Check battery State-of-Health (SoH) annually using the manufacturer's app or diagnostic tool; replace battery pack when capacity falls below 70% of rated.",
      "Verify the MPPT controller status indicator LEDs monthly to confirm charging mode is active (typically a solid green LED during daylight)."
    ],
    comparison: {
      title: "Solar Street Light vs. Grid-Connected LED Street Light",
      columns: ["Attribute", "Solar Street Light", "Grid LED Street Light"],
      rows: [
        { label: "Power Source", values: ["Solar panel + battery", "Utility grid"] },
        { label: "Installation Cost", values: ["Higher (panel + battery)", "Lower (luminaire only)"] },
        { label: "Operating Cost", values: ["Zero (post-installation)", "₹50–₹150/month electricity"] },
        { label: "Grid Infrastructure", values: ["Not required", "Requires trenching & cable"] },
        { label: "Rainy Day Backup", values: ["2–3 days (LiFePO4)", "Continuous (grid)"] },
        { label: "Best Use Case", values: ["Remote, off-grid areas", "Urban, grid-connected areas"] }
      ]
    }
  },
  "led-street-light": {
    title: "Industrial LED Street Lights & Highway Luminaires | Electrika INC",
    description: "Shop energy-efficient IP66 street light luminaires for highways, municipal roads & factories. Premium heat dissipation, long lifespan.",
    keywords: ["LED Street lights", "Industrial street luminaire", "Highway lighting fixture", "IP66 street lamp", "LED road lighting India"],
    canonical: `${PRIMARY_DOMAIN}/products/led-street-light`,
    entityType: "Product",
    brand: "Bajaj / Crompton / Surya",
    manufacturer: "Electrika INC",
    directAnswer: "Industrial LED Street Lights are specialized outdoor light fixtures designed for municipal avenues, highways, and factory roads. Built with high-purity die-cast aluminum housings and custom asymmetric glass lenses, they direct light uniformly across roads to eliminate dark spots and glare. An integrated surge protector safeguards the fixture from lightning strikes and grid voltage spikes.",
    specs: [
      { name: "Wattage Selection", value: "30W, 45W, 60W, 90W, 120W, 150W, and 180W" },
      { name: "Power Factor", value: "> 0.95 high efficiency operation" },
      { name: "Housing Quality", value: "ADC12 grade die-cast aluminum with anti-static paint finish" },
      { name: "Ingress Rating", value: "IP66 waterproof rating with high-quality silicon sealant" },
      { name: "Surge Protection", value: "Internal 10kV SPD protection modules" }
    ],
    visualSpecs: [
      { name: "Wattage Range", value: "20W – 350W (across variants)" },
      { name: "System Efficacy", value: "Up to 150 lumens per watt" },
      { name: "Input Voltage", value: "240V AC (270V AC on select variants)" },
      { name: "Colour Temperature (CCT)", value: "5700K" },
      { name: "Housing", value: "Epoxy powder coated, pressure die-cast aluminium" },
      { name: "Secondary Optics", value: "Non-yellowing polycarbonate / toughened glass" },
      { name: "Driver", value: "Potted, with inbuilt surge, voltage & open/short-circuit protection" },
      { name: "Ingress Protection", value: "IP66" },
      { name: "Impact Protection", value: "IK07 / IK08" },
      { name: "Internal Surge Protection", value: "4kV (10kV external SPD provision)" },
      { name: "Total Harmonic Distortion (THD)", value: "< 10%" },
      { name: "Power Factor (PF)", value: "> 0.90 – 0.95" },
      { name: "Mounting", value: "Pole-mount with tilt adjustment; NEMA/ZHAGA adapter provision on select variants" },
      { name: "Pole Diameter Compatibility", value: "38mm – 65mm (variant dependent)" },
      { name: "Smart Control Ready", value: "Compatible with IoT-based lighting management platforms" },
      { name: "Applications", value: "National/State Highways, Expressways, City & Service Roads, Commercial Spaces" }
    ],
    faqs: [
      {
        question: "What does asymmetric light distribution mean for street lights?",
        answer: "Asymmetric optics bend the light output sideways along the road length rather than casting it in a circular shape directly below the pole. This allows for greater spacing between poles while maintaining safe, uniform road illumination."
      }
    ],
    definition: "Industrial LED Street Lights are outdoor roadway luminaires engineered for municipal roads, highways, and factory internal roads. Constructed with ADC12 grade die-cast aluminum housings and high-power SMD LED arrays behind asymmetric glass secondary optics, they project light in a Type II or Type III distribution pattern along the road surface. An integrated 10kV surge protection device (SPD) guards against lightning-induced transients common in Indian monsoon environments. IP66 sealing with silicone gaskets ensures reliable operation in tropical rain and dust.",
    engineeringNotes: [
      "Type II asymmetric distribution projects 60% of luminous flux forward (along the road direction) and 40% backward, optimizing uniformity between poles spaced at 3–4× the mounting height.",
      "The driver circuitry features a 0–10V or DALI dimming interface, enabling integration with smart city street lighting management systems for adaptive dimming.",
      "The heat sink fin geometry is optimized for natural convection on a horizontal pole-mounted surface, unlike high-bay fixtures optimized for vertical ceiling mounting.",
      "Anti-UV polycarbonate or heat-tempered glass lens selection depends on application: glass for maximum lumen output, PC for impact-resistance in vandalism-prone zones."
    ],
    advantages: [
      { title: "Asymmetric Beam for Maximum Road Coverage", desc: "Type II/III asymmetric optics allow poles to be spaced at 3–4× their mounting height, reducing the number of poles required per km by 30–40%." },
      { title: "60–70% Energy Saving", desc: "LED efficacy of >120 lm/W versus 80 lm/W for HPS results in up to 60–70% reduction in electricity consumption on municipal road circuits." },
      { title: "10kV Surge Protection", desc: "Built-in SPD protects the driver from lightning surges, which are a leading cause of street light failures in India during monsoon season." },
      { title: "Smart Dimming Ready", desc: "DALI or 0–10V dimming interface allows integration with central management systems for time-based or occupancy-based dimming, further cutting energy use." }
    ],
    applications: [
      { title: "National & State Highways", desc: "NHAI and state PWD road lighting tenders for carriageway, interchange, and service road illumination." },
      { title: "Smart City Municipal Roads", desc: "Municipal corporation tenders under Smart Cities Mission for energy-efficient LED retrofits of existing sodium lamp road circuits." },
      { title: "Industrial Estate Internal Roads", desc: "Factory road networks, loading zones, and truck access roads in manufacturing plants and warehouses." },
      { title: "Airport & Port Road Access", desc: "Approach roads, service access routes, and perimeter roads at airports and seaports." }
    ],
    standards: [
      { code: "IS 1944", description: "Indian Standard Code of Practice for lighting of roads — specifies lux levels and uniformity ratios for different road categories." },
      { code: "IS 10322 (Part 5/Sec 1)", description: "Indian Standard for road luminaires — photometric and testing requirements." },
      { code: "BIS Certification", description: "Mandatory BIS mark under the Electronics and IT Goods Quality Control Order for LED street lights sold in India." },
      { code: "IEC 61000-4-5", description: "Surge immunity standard requiring 10kV compliance for outdoor luminaires." }
    ],
    installationTips: [
      "Adjust the spigot tilt angle of the luminaire to between 0° and 5° forward tilt for optimal Type II beam projection onto the road surface.",
      "Perform a single-pole photometric verification (lux measurement on road surface at night) before bulk installation to confirm pole spacing matches the design calculations.",
      "Connect a 10kV SPD at the incoming supply DB panel in addition to the built-in fixture SPD for double-level surge protection in high-lightning-risk areas."
    ],
    maintenanceTips: [
      "Clean the optical lens and housing every 6 months using a damp cloth — dust accumulation in industrial areas causes 10–20% light output reduction.",
      "Inspect the luminaire tilt angle and mounting spigot clamp annually; vibration from passing heavy vehicles can cause angular drift over time.",
      "Check the electrical connection at the handhole terminal block annually for corrosion and tightening — loose terminals cause intermittent night-time failures.",
      "Measure maintained lux levels at road level every 3 years; lamp ring replacement is advisable when measured average drops below 70% of initial design value."
    ],
    comparison: {
      title: "LED Street Light vs. High-Pressure Sodium (HPS) Street Light",
      columns: ["Attribute", "LED Street Light", "HPS Street Light"],
      rows: [
        { label: "Power Consumption", values: ["30W–180W", "70W–400W"] },
        { label: "Colour Rendering (CRI)", values: [">80 Ra (white light)", "20–25 Ra (yellow)"] },
        { label: "Efficacy", values: [">120 lm/W", "80–100 lm/W"] },
        { label: "Rated Life", values: ["50,000 hours", "20,000 hours"] },
        { label: "Dimming Capability", values: ["Yes (DALI/0-10V)", "Limited"] },
        { label: "Maintenance Interval", values: ["7–10 years", "2–3 years"] }
      ]
    }
  },
  "pce-plug-socket": {
    title: "PCE Industrial Sockets & Interlocked Outlets | Electrika INC",
    description: "Authorized supply of PCE industrial interlocked socket outlets. IP67 rated, robust mechanical switch interlocking, dust and moisture proof.",
    keywords: ["Industrial Socket Outlets", "PCE Interlocked Socket", "IP67 Industrial Outlet", "PCE Sockets Austria", "Mechanical interlock socket"],
    canonical: `${PRIMARY_DOMAIN}/products/pce-plug-socket`,
    entityType: "Product",
    brand: "PCE Austria",
    manufacturer: "PCE / Distributed by Electrika INC",
    directAnswer: "PCE Industrial Sockets and Interlocked Outlets are heavy-duty electrical connection interfaces manufactured by PCE Austria. They are designed with a mechanical interlocking mechanism that prevents the socket switch from being turned 'ON' unless the matching plug is fully inserted. Likewise, the plug cannot be pulled out while the power is live, providing a spark-free connection in wet, dusty, and demanding industrial sites.",
    specs: [
      { name: "Enclosure Protection", value: "IP67 (completely dust-tight and submersible up to 1 meter)" },
      { name: "Material Quality", value: "Amilan grade high-impact polyamide 6 polymer casing" },
      { name: "Current Offerings", value: "16 Amp, 32 Amp, and 63 Amp configurations" },
      { name: "Voltage Configurations", value: "230V 3-Pin (Blue) / 415V 5-Pin (Red) options" },
      { name: "Contact Pins", value: "Solid brass pins with clean self-cleaning nickel-plating" }
    ],
    visualSpecs: [
      { name: "Brand / Origin", value: "PCE Elektro GmbH, Austria" },
      { name: "Standards", value: "IEC 60309, EN 60309" },
      { name: "Current Ratings", value: "16A, 32A, 63A, 125A" },
      { name: "Voltage Ratings", value: "110V, 230V, 400V, 500V" },
      { name: "Poles", value: "2P+E, 3P+E, 3P+N+E" },
      { name: "Frequency", value: "50 Hz / 60 Hz" },
      { name: "IP Ratings", value: "IP44, IP54, IP67 (model specific)" },
      { name: "Housing", value: "Reinforced thermoplastic (PA66)" },
      { name: "Operating Temp.", value: "-25°C to +40°C" },
      { name: "Colour Coding", value: "IEC 60309 compliant (blue/red/yellow/black)" },
      { name: "Interlocked Version", value: "Available (MAINS before switching)" },
      { name: "Certifications", value: "CE, VDE, ÖVE, SABS" }
    ],
    faqs: [
      {
        question: "Why is a mechanical interlock feature important?",
        answer: "The mechanical interlock prevents user error by locking the plug into the socket before power can flow. This prevents arcs and sparks during insertion and removal, which is a major safety requirement in dusty, damp, or chemical facilities."
      }
    ],
    definition: "PCE Industrial Sockets and Interlocked Outlets are premium-grade electrical connection interfaces manufactured by PCE Elektrotechnik GmbH, Austria, under IEC 60309 (CEE standard). The mechanical interlock prevents the socket from being switched 'ON' unless the matching plug is fully and correctly inserted, and conversely prevents the plug from being withdrawn while the power switch is in the 'ON' position. This dual-safety mechanism eliminates live-disconnect arcing in wet, dusty, and chemically aggressive industrial environments.",
    engineeringNotes: [
      "The interlocking mechanism is a purely mechanical cam-and-lever system requiring no electronic components, ensuring it functions reliably even in power-failure scenarios.",
      "Amilan PA66 thermoplastic enclosure material provides UL94 V-0 flame classification, chemical resistance to industrial oils, and UV stability for outdoor use.",
      "Solid brass contact pins are nickel-plated with a self-wiping contact geometry — each insertion cycle cleans the contact surface, maintaining low contact resistance over 10,000+ mating cycles.",
      "The IP67 rating is achieved with a precision neoprene gasket between the plug and socket faces plus a separate cable entry gland seal on the socket body."
    ],
    advantages: [
      { title: "Spark-Free Live Connections", desc: "The interlock mechanism prevents insertion and withdrawal under live conditions, eliminating arcing that causes pin erosion and fire risk in damp environments." },
      { title: "IP67 Waterproof Rating", desc: "Certified submersible to 1 meter depth for 30 minutes — suitable for outdoor construction sites, wash-down areas, and marine deck installations." },
      { title: "PCE Austria Quality", desc: "Manufactured by PCE GmbH Austria with CE, VDE, and SABS certification; genuine products with full manufacturer documentation available through Electrika INC." },
      { title: "Full Range Availability", desc: "Complete product ecosystem available: plugs, sockets, couplers, panel-mount sockets, extension reels, and interlocked distribution boards across 16A, 32A, and 63A." }
    ],
    applications: [
      { title: "Construction Sites", desc: "Temporary power distribution for tower cranes, hoists, concrete mixers, and site accommodation units." },
      { title: "Marine & Offshore Vessels", desc: "Shore power connection boxes, vessel electrical system connections, and offshore rig portable equipment." },
      { title: "Event & Entertainment", desc: "Stage power distribution, concert rigging systems, outdoor event temporary power feeds." },
      { title: "Mining Operations", desc: "Underground and surface mining machinery connections rated for wet and dusty mine environments." }
    ],
    standards: [
      { code: "IEC 60309-1/2", description: "International standard for plugs, socket-outlets and couplers for industrial purposes — defines dimensions, testing, and colour coding." },
      { code: "EN 60309", description: "European adoption of IEC 60309 — mandatory for CE marking of industrial connectors." },
      { code: "VDE 0623", description: "German electrical equipment safety certification recognized across European industrial markets." },
      { code: "IS 9968 (Part II)", description: "Indian Standard for industrial plugs and sockets, equivalent to IEC 60309." }
    ],
    installationTips: [
      "Always match cable CSA to the socket current rating — use minimum 2.5mm² for 16A, 4mm² for 32A, and 16mm² for 63A connections.",
      "Apply a small amount of silicone grease to the socket cap gasket face every 6 months to maintain a supple, watertight seal.",
      "Check the IEC 60309 colour code before installation: Blue = 230V/50Hz, Red = 400V/50Hz, Yellow = 110V — connecting wrong voltage to a device causes immediate equipment damage."
    ],
    maintenanceTips: [
      "Inspect contact pins for discoloration, pitting, or deformation every 6 months; replace plugs with damaged pins immediately to prevent overheating.",
      "Clean dust and debris from the socket sleeve interior using a dry brush every 3 months in dusty site environments.",
      "Test the interlock mechanism function every 3 months by attempting to insert/withdraw the plug with the switch in ON position — resistance confirms proper operation.",
      "Measure the contact resistance across each pin pair annually using a milliohm meter; values above 5mΩ indicate worn contacts requiring plug replacement."
    ],
    comparison: {
      title: "PCE Interlocked Socket vs. Standard Industrial Socket",
      columns: ["Attribute", "PCE Interlocked Socket", "Standard Industrial Socket"],
      rows: [
        { label: "Live Withdrawal Prevention", values: ["Yes (mechanical interlock)", "No"] },
        { label: "IP Rating", values: ["IP67 (submersible)", "IP44–IP55 (typical)"] },
        { label: "Contact Material", values: ["Nickel-plated solid brass", "Brass (varies by brand)"] },
        { label: "Standard", values: ["IEC 60309", "Varies (often proprietary)"] },
        { label: "Current Range", values: ["16A, 32A, 63A, 125A", "16A–63A (varies)"] },
        { label: "Use Environment", values: ["Wet, dusty, marine, hazardous", "Indoor dry environments"] }
      ]
    }
  },
  "heavy-duty-plug": {
    title: "Heavy-Duty Industrial Plugs (16A/32A/63A/125A) | Electrika INC",
    description: "Premium PCE heavy-duty industrial plugs. High-impact polyamide body, copper-alloy pins, IP67 waterproof rating for extreme sites.",
    keywords: ["Heavy-Duty Industrial Plugs", "PCE 5-pin Plug", "IP67 industrial plug", "PCE 32A plug", "High current industrial plug"],
    canonical: `${PRIMARY_DOMAIN}/products/heavy-duty-plug`,
    entityType: "Product",
    brand: "PCE Austria",
    manufacturer: "PCE / Distributed by Electrika INC",
    directAnswer: "Heavy-Duty Industrial Plugs are premium electrical connectors manufactured by PCE Austria. Made of PA6 polyamide material with solid nickel-plated copper contact pins, they are built to withstand severe impact, chemical exposure, and wet conditions. They are standard equipment on construction sites, mining rigs, and manufacturing lines.",
    specs: [
      { name: "Current Rating Selection", value: "16A, 32A, 63A, and 125A" },
      { name: "Pin Configurations", value: "3-pin (2P+E), 4-pin (3P+E), 5-pin (3P+N+E)" },
      { name: "Waterproof Standard", value: "IP67 (threaded locking ring with neoprene seal)" },
      { name: "Polyamide Quality", value: "Flame retardant, self-extinguishing housing polymer" },
      { name: "Wiring Connection", value: "Standard screw terminals or tool-free Turbo Twist clamping" }
    ],
    visualSpecs: [
      { name: "Current Ratings", value: "250A, 315A, 400A, 500A, 600A" },
      { name: "Voltage Rating", value: "380V / 400V / 415V / 500V (3P+N+E)" },
      { name: "Frequency", value: "50 Hz / 60 Hz" },
      { name: "Number of Poles", value: "3P+E / 3P+N+E (5 poles)" },
      { name: "Contact Material", value: "Copper alloy (brass/bronze), silver-plated tips on selected models" },
      { name: "Body Material", value: "Heavy thermoplastic / die-cast aluminium alloy (model specific)" },
      { name: "IP Rating", value: "IP44 (standard) / IP67 (submersible version)" },
      { name: "Interlocking", value: "Mechanical safety interlock as standard" },
      { name: "Handle", value: "Integrated moulded carrying handle" },
      { name: "Cable Entry", value: "Gland plate for cable OD 35 mm – 80 mm" },
      { name: "Operating Temperature", value: "-25°C to +60°C" },
      { name: "Applicable Standards", value: "IEC 60309, EN 60309" },
      { name: "Colour Code", value: "Red (3P, 400V–500V) / Black (special voltages) per IEC 60309" },
      { name: "Lead Time", value: "Subject to availability — confirm with enquiry" }
    ],
    faqs: [
      {
        question: "Can these plugs withstand outdoor weather exposure?",
        answer: "Yes, our IP67 PCE plugs feature a threaded locking collar and internal gaskets that seal out water and dust, allowing them to remain outdoors in rain and snow safely."
      }
    ],
    definition: "Heavy-Duty Industrial Plugs are rugged, high-current electrical connectors manufactured by PCE Austria to IEC 60309 standards. Available in 16A, 32A, 63A, and 125A ratings with 3-pin (2P+E), 4-pin (3P+E), and 5-pin (3P+N+E) configurations, they are built with flame-retardant PA6 polyamide housings and solid nickel-plated copper contact pins for minimum contact resistance. Rated IP67, they maintain watertight sealing via a precision threaded locking collar and internal neoprene gaskets.",
    engineeringNotes: [
      "The PA6 polyamide housing is self-extinguishing to UL94 V-0 flame classification and rated for continuous operating temperatures from -25°C to +40°C.",
      "Turbo Twist tool-free wire termination (available on select models) uses a spring-clamp mechanism instead of traditional screw terminals, reducing assembly time by 70%.",
      "The threaded locking collar engagement ensures the plug-to-socket connection is mechanically retained even under the pull tension of a suspended flexible cable.",
      "IEC 60309 colour coding (blue, red, yellow, black) encodes operating voltage and frequency into the plug body itself, preventing incorrect voltage connections in multi-supply environments."
    ],
    advantages: [
      { title: "Impact-Resistant PA6 Body", desc: "Glass-fibre reinforced polyamide is virtually unbreakable on construction sites, withstanding hammer blows and vehicle drive-overs that destroy standard plug bodies." },
      { title: "IP67 Watertight Sealing", desc: "Submersible sealing allows use in shipyards, construction site pump areas, and outdoor events in monsoon conditions." },
      { title: "IEC 60309 Colour Coded", desc: "Standardized colour coding prevents costly wrong-voltage connections in multi-supply site environments with 110V, 230V, and 415V circuits." },
      { title: "Full Range from 16A to 125A", desc: "Single-source supply of the complete current range eliminates multiple supplier coordination for projects with mixed load equipment." }
    ],
    applications: [
      { title: "Construction Sites", desc: "Tower cranes, temporary sub-stations, concrete plants, and construction hoist motor connections." },
      { title: "Manufacturing & Process Plants", desc: "Machine tool temporary connections, conveyor drive motors, and compressor power feeds during maintenance periods." },
      { title: "Marine & Offshore", desc: "Vessel-to-shore power connections, offshore platform portable equipment, and shipyard dry-dock power distribution." },
      { title: "Mining Equipment", desc: "Underground drill rig connections, continuous miner power supplies, and surface crushing plant electrical feeds." }
    ],
    standards: [
      { code: "IEC 60309-1/2", description: "Defines the design, testing, and dimensions of industrial plugs and socket-outlets for international interchangeability." },
      { code: "EN 60309", description: "European standard — CE marking requirement for industrial connectors sold in EU markets." },
      { code: "VDE 0623", description: "German electrical safety certification — recognized across European industrial procurement specifications." }
    ],
    installationTips: [
      "Strip cable insulation to exactly the depth marked inside the plug body — over-stripping exposes live conductors to the plug shell, creating a shock hazard.",
      "Tighten the cable retention clamp (strain relief) after wiring to prevent pull-out forces from reaching the terminal connections during cable handling.",
      "Visually inspect the neoprene gasket face on the plug body before use; replace the gasket if any deformation, cracking, or permanent compression set is visible."
    ],
    maintenanceTips: [
      "Inspect contact pins before each use for mechanical damage, discolouration, or deformation — damaged pins transfer high contact resistance which causes overheating.",
      "Clean the inside of the plug body with a dry brush quarterly in dusty environments; compacted dust between pins causes tracking and arcing failures.",
      "Store plugs with a protective IP67 cap over the face when not in use to protect pins from impact damage and oxidation between uses."
    ]
  },
  "125a-plug": {
    title: "PCE 125A Industrial Plug (High Current 5-Pin) | Electrika INC",
    description: "Shop PCE 125A high-current industrial plugs. Features pilot-pin safety contacts, solid copper pins, IP67 waterproof sealing. Fast delivery.",
    keywords: ["125A Industrial Plug", "PCE 125A 5-pin plug", "IP67 125 Amp connector", "High-power B2B industrial plug", "Copper pin 125A plug"],
    canonical: `${PRIMARY_DOMAIN}/products/125a-plug`,
    entityType: "Product",
    brand: "PCE Austria",
    manufacturer: "PCE / Distributed by Electrika INC",
    directAnswer: "The PCE 125A Industrial Plug is a heavy-duty, high-capacity electrical connector designed for high-current industrial equipment. It features solid brass pins with nickel plating for minimal contact resistance and a built-in safety pilot contact pin. This secondary pin acts as an electrical interlock, cutting power before the main power pins separate during disconnection.",
    specs: [
      { name: "Maximum Current Limit", value: "125 Amperes continuous duty" },
      { name: "Pin Count", value: "5-Pin (3P+N+E) three phase layout" },
      { name: "Ingress Code", value: "IP67 waterproof rating with knurled locking ring" },
      { name: "Safety Feature", value: "Integrated pilot contact pin (early-break electrical interlock)" },
      { name: "Cable Clamping", value: "Heavy duty internal cable gland clamp and strain relief boot" }
    ],
    visualSpecs: [
      { name: "Brand / Origin", value: "PCE Elektro GmbH, Austria" },
      { name: "Standards", value: "IEC 60309, EN 60309" },
      { name: "Rated Current", value: "125A" },
      { name: "Voltage Ratings", value: "400V / 500V (3P+N+E)" },
      { name: "Poles", value: "3P+E, 3P+N+E" },
      { name: "Frequency", value: "50 Hz / 60 Hz" },
      { name: "IP Rating", value: "IP44 (splash-proof) / IP65 (dust-tight, water-jet resistant)" },
      { name: "Housing Material", value: "Reinforced thermoplastic (PA66), impact & UV resistant" },
      { name: "Operating Temperature", value: "-25°C to +40°C" },
      { name: "Colour Coding", value: "Red (400V), IEC 60309 compliant" },
      { name: "Contact Material", value: "Brass, silver-plated" },
      { name: "Cable Entry", value: "Suitable for 35–50 mm² cable, screw terminals" },
      { name: "Certifications", value: "CE, VDE, ÖVE, SABS" }
    ],
    faqs: [
      {
        question: "What is the function of the safety pilot pin in a 125A plug?",
        answer: "The pilot pin is shorter than the main power pins. When disconnecting, it breaks contact first, signaling the upstream contactor or breaker to cut power instantly, preventing the main pins from arcing under load."
      }
    ],
    definition: "The PCE 125A Industrial Plug is a high-capacity 5-pin electrical connector designed for three-phase high-current equipment connections. Rated at 125 Amperes continuous duty with a 3P+N+E (five-pin) configuration, it features a safety pilot contact pin that acts as an electrical interlock: during disconnection, the pilot pin breaks contact first, triggering the upstream contactor or circuit breaker to drop out before the main power pins separate, preventing dangerous arcing at 125A.",
    engineeringNotes: [
      "The pilot pin is mechanically 8mm shorter than the main power pins, ensuring it breaks contact before any of the three phase pins during withdrawal.",
      "At 125A continuous duty, the Joule heating at the contact interface requires solid-section brass pins — hollow or plated-over zinc pins are unsuitable at this current level.",
      "The knurled IP67 locking collar requires 1.5 turns to fully engage the socket — partial engagement disables the IP67 rating.",
      "Cable gland strain relief boot is rated for cables up to 35mm² cross-section and 38mm outer diameter to accommodate large-gauge flexible welding cables."
    ],
    advantages: [
      { title: "Pilot Pin Safety Interlock", desc: "Automatically triggers the upstream protective device before main pins separate, eliminating 125A arcing that causes severe burn injuries and equipment damage." },
      { title: "Massive 125A Rating", desc: "Accommodates the highest-power portable industrial equipment including large compressors, welding rectifiers, and mobile substation connections." },
      { title: "IP67 Watertight Construction", desc: "Threaded locking collar with internal neoprene gasket enables use in outdoor, wet, and wash-down environments without degradation." },
      { title: "Solid Brass Contact Pins", desc: "Full-section solid brass pins (not hollow or zinc-plated) withstand the thermal and mechanical demands of high-current industrial connections." }
    ],
    applications: [
      { title: "Temporary Substation Connections", desc: "Connection of mobile transformer units and containerized substations to site distribution panels." },
      { title: "Large Air Compressors", desc: "High-power rotary screw compressor motor connections in construction, mining, and industrial plant environments." },
      { title: "Stage & Events Power", desc: "Festival generator output connections to main distribution panels feeding large-scale event power requirements." },
      { title: "Welding Rectifier Systems", desc: "Multi-operator welding shop primary power supply connections to large DC welding rectifier banks." }
    ],
    standards: [
      { code: "IEC 60309-1/2", description: "Industrial plugs and socket-outlets standard — 125A rating is formally included in Part 2 dimensional specifications." },
      { code: "EN 60309", description: "European equivalent — CE mark requirement." },
      { code: "IEC 60898", description: "Circuit breaker standard relevant for the protective device used with the pilot interlock." }
    ],
    installationTips: [
      "Use crimped (not solid screw) cable lugs on each pin terminal for 35mm² cables — screw-only termination of large flexible conductors creates high-resistance hot spots.",
      "Verify the pilot pin connection goes to the coil of the upstream contactor (not the main circuit) to ensure the interlock function operates correctly.",
      "Apply dielectric silicone grease to the neoprene locking collar gasket before first use to ensure smooth engagement and full IP67 seal compression."
    ],
    maintenanceTips: [
      "Measure contact resistance between each pin and its corresponding socket contact every 6 months using a calibrated milliohm meter; values above 2mΩ indicate replacement is needed.",
      "Inspect pilot pin tip for deformation or burning every 3 months — the pilot pin must be slightly shorter than the main pins for the interlock to function correctly.",
      "Replace the cable entry gland boot if cracking or permanent deformation is observed — a faulty boot allows water ingress at the cable-to-plug interface."
    ]
  },
  "synthetic-cable-drum": {
    title: "Schill Synthetic Rubber Cable Drum Systems | Electrika INC",
    description: "Heavy-duty Schill Germany cable drums with Hensel weatherproof sockets and Siemens MCB protection. Fully customizable length and current.",
    keywords: ["Synthetic Cable Drum Systems", "Schill Cable Drum Germany", "Hensel socket cable drum", "Siemens MCB cable reel", "Heavy duty industrial drum"],
    canonical: `${PRIMARY_DOMAIN}/products/synthetic-cable-drum`,
    entityType: "Product",
    brand: "Schill Germany / Hensel / PCE",
    manufacturer: "Electrika INC (Assembled in India)",
    directAnswer: "Synthetic Rubber Cable Drum Systems are high-capacity portable power distributors built with a premium Schill Germany vulcanized synthetic rubber reel. They are customized with Hensel weatherproof socket configurations, PCE input plugs, and built-in Siemens MCB overload protection, making them ideal for heavy machinery, events, and construction sites.",
    specs: [
      { name: "Reel Material", value: "Unbreakable vulcanized synthetic rubber (excellent insulation)" },
      { name: "Available Reel Sizes", value: "235mm, 310mm, 380mm, and 450mm diameters" },
      { name: "Protective Devices", value: "Built-in Siemens Miniature Circuit Breaker (MCB) with window" },
      { name: "Output Socket Selection", value: "Hensel domestic / PCE industrial 16A or 32A sockets" },
      { name: "Protection Class", value: "IP44 splashproof or IP65 weatherproof assemblies" }
    ],
    faqs: [
      {
        question: "Why is a synthetic rubber drum body preferred over metal or plastic?",
        answer: "Vulcanized synthetic rubber is virtually unbreakable, chemical resistant, and a natural electrical insulator, ensuring maximum user safety in wet, high-impact construction environments."
      }
    ],
    definition: "Schill Synthetic Cable Drum Systems are heavy-duty portable power distribution units custom-assembled by Electrika INC. A premium Schill Germany vulcanized synthetic rubber reel (available in 235mm to 450mm diameters) is assembled with a weatherproof Hensel socket outlet block, a PCE industrial input plug, and a built-in Siemens MCB (Miniature Circuit Breaker) for overload protection. The rubber reel design makes the drum unbreakable, chemically resistant, and self-insulating, making it ideal for construction sites, outdoor events, and heavy industrial applications.",
    engineeringNotes: [
      "Vulcanized synthetic rubber maintains its physical properties across a temperature range of -40°C to +90°C, ensuring the reel remains flexible and non-brittle in winter and non-softening in summer.",
      "The built-in Siemens MCB provides type B, C, or D trip characteristic selection depending on the load type — type B for resistive loads, type C for inductive motors, type D for high-inrush welders.",
      "Cable capacity is limited by the drum's thermal rating — fully wound cable conducts less heat than partially wound cable, requiring derating (typically 66% of open-air cable rating when fully wound).",
      "IP44 (splash-proof) or IP65 (dust-proof/jet-water) protection class depends on the Hensel socket model selected during assembly customization."
    ],
    advantages: [
      { title: "Indestructible Rubber Reel", desc: "Schill's vulcanized rubber reel withstands vehicle drive-overs, concrete impacts, and chemical spills that would crack or shatter metal or plastic drums." },
      { title: "Built-In MCB Overload Protection", desc: "Siemens MCB eliminates the need for a separate distribution panel connection — safe self-contained power distribution in one portable unit." },
      { title: "Customizable Configuration", desc: "Reel size, cable length (10m–50m), cable cross-section (1.5mm²–4mm²), socket type, and MCB rating can all be specified to the project requirement." },
      { title: "Natural Electrical Insulator", desc: "The rubber reel body is a natural dielectric — any cable fault cannot cause the drum body to become live, providing an extra safety layer." }
    ],
    applications: [
      { title: "Construction & Infrastructure Sites", desc: "Temporary power supply for power tools, site lighting, concrete vibrators, and temporary pumps on civil engineering sites." },
      { title: "Events & Entertainment", desc: "Stage power supply distribution, outdoor concerts, film sets, and exhibition equipment power feeds." },
      { title: "Industrial Plant Maintenance", desc: "Portable power for maintenance welding, grinding, and drilling operations during plant shutdowns." },
      { title: "Mining & Quarrying", desc: "Underground and surface mining site power distribution for drills, pumps, and lighting during development work." }
    ],
    standards: [
      { code: "IEC 61242", description: "International standard for cable reels for household and similar purposes." },
      { code: "IS 302 (Part 2/Sec 52)", description: "Indian safety standard for cable reels and extension cord sets." },
      { code: "IEC 60309", description: "Standard for the industrial PCE input plug fitted to the drum." },
      { code: "IEC 60898", description: "Standard for the Siemens MCB used as the drum's built-in overcurrent protection device." }
    ],
    installationTips: [
      "Always fully unwind the cable drum before use under high current loads — partial unwinding causes the innermost cable layers to overheat due to restricted heat dissipation.",
      "The MCB trip current is typically rated at 130% of the cable's rated current — do not bypass or replace the MCB with a higher-rated device without recalculating cable capacity.",
      "Label the drum with maximum allowable cable length and load current, as exceeding either causes insulation overheating not immediately visible during use."
    ],
    maintenanceTips: [
      "Inspect the entire cable length for cuts, abrasions, and insulation damage every 3 months — superficial outer sheath damage exposes the inner conductors to water ingress in wet environments.",
      "Test the MCB trip function quarterly by pressing the test button; a non-tripping MCB requires immediate replacement before further use.",
      "Clean the socket outlet face with a dry cloth monthly and inspect contact openings for debris; blocked contacts cause insertion difficulty and arc damage to pins.",
      "Check the cable-to-plug and cable-to-socket entry glands for signs of oil, grease, or chemical ingress that can degrade the internal insulation."
    ],
    comparison: {
      title: "Schill Rubber Cable Drum vs. Metal Cable Drum",
      columns: ["Attribute", "Schill Rubber Drum", "Metal Cable Drum"],
      rows: [
        { label: "Body Material", values: ["Vulcanized synthetic rubber", "Powder-coated steel"] },
        { label: "Impact Resistance", values: ["Unbreakable (absorbs impact)", "Dents and deforms"] },
        { label: "Electrical Safety", values: ["Non-conductive (dielectric)", "Conductive (earthing required)"] },
        { label: "Chemical Resistance", values: ["Excellent (rubber)", "Moderate (coating dependent)"] },
        { label: "Weight", values: ["Lighter per equivalent size", "Heavier"] },
        { label: "Overload Protection", values: ["Built-in Siemens MCB", "Typically external"] }
      ]
    }
  },
  "ip66-polymer-glands": {
    title: "IP66 Synthetic Polymer Cable Glands | Electrika INC",
    description: "Weatherproof IP66/IP68 synthetic polymer cable glands. Excellent strain relief, vibration proof, and chemical resistant. Wide size range.",
    keywords: ["IP-66 Synthetic polymer Glands", "Weatherproof Cable Gland", "Nylon polymer gland M20", "IP68 cable entry gland", "Vibration proof gland"],
    canonical: `${PRIMARY_DOMAIN}/products/ip66-polymer-glands`,
    entityType: "Product",
    brand: "Hensel / PCE / Premium Brands",
    manufacturer: "Electrika INC",
    directAnswer: "IP66 Synthetic Polymer Cable Glands are cable entry sealing components made of high-quality polyamide PA6. Equipped with internal neoprene gaskets and integrated lamellar strain relief claws, they create a watertight seal around cables entering electrical enclosures, preventing dust and moisture ingress while protecting the cable from tension.",
    specs: [
      { name: "Protection Standards", value: "IP66 / IP68 dust-tight and watertight certification" },
      { name: "Body Polymer", value: "High-grade Polyamide PA6, halogen-free and self-extinguishing" },
      { name: "Thread Standards", value: "Metric (M12 to M63) and PG threads (PG7 to PG48)" },
      { name: "Seal Insert", value: "Chloroprene rubber / Neoprene compression seal ring" },
      { name: "Operating Temp", value: "-30°C to +80°C continuous service" }
    ],
    visualSpecs: [
      { name: "Brand / Origin", value: "AGRO AG, Switzerland" },
      { name: "Product Line", value: "Syntec® Synthetic — Metric" },
      { name: "Housing Material", value: "Synthetic polymer, polyamide" },
      { name: "Sealing Element", value: "Trapezoid-shaped articulated lamellas" },
      { name: "IP Rating", value: "IP66 (dust-tight, powerful jet protection)" },
      { name: "Thread Range", value: "M12×1.5 to M63×1.5 (metric)" },
      { name: "Clamping Range", value: "1.5 mm to 44.0 mm, sub-ranged" },
      { name: "Antikink Nozzle", value: "Optional on M16×1.5 and M20×1.5" },
      { name: "Cable Retention / Strain Relief", value: "Hexagon-profile lamellar gripping" },
      { name: "Test Standard", value: "IEC / EN 62444 — tested on mandrels" },
      { name: "Colour", value: "Light grey / black (RAL 7035 / 9005)" },
      { name: "Certifications", value: "CE, tested in AGRO's certified lab" }
    ],
    faqs: [
      {
        question: "How do polymer glands prevent cables from pulling out?",
        answer: "The gland features dynamic plastic fingers (lamellae) that compress tightly around the outer cable jacket as the dome sealing nut is tightened, providing excellent strain relief."
      }
    ],
    definition: "IP66 Synthetic Polymer Cable Glands are cable entry sealing components manufactured from high-grade Polyamide PA6. They create a watertight, dust-proof seal (IP66/IP68) around electrical cables entering enclosures, distribution boxes, and junction boxes. An internal chloroprene (neoprene) rubber compression ring seals against the cable outer jacket, while a multi-finger strain relief claw clamps onto the cable to transfer mechanical pull loads away from the internal wiring terminations.",
    engineeringNotes: [
      "PA6 polyamide offers a better chemical resistance profile than ABS — specifically resistant to oils, greases, and diesel fuel that cause ABS to swell and crack.",
      "Metric thread ranges from M12 to M63 cover cable outer diameters from 3mm to 38mm — always select a gland size where the cable sits in the middle third of the clamping range for optimum seal.",
      "Halogen-free construction meets the Low Smoke Zero Halogen (LSZH) requirement for cable accessories in underground stations, tunnels, and public buildings.",
      "The IP68 version adds a secondary O-ring behind the primary neoprene seal for permanent submersion applications (e.g., submersible pump motor entry glands)."
    ],
    advantages: [
      { title: "IP66/IP68 Waterproof Sealing", desc: "Provides certifiable dustproof and waterproof protection at every cable entry point, maintaining the overall IP rating of the enclosure system." },
      { title: "Multi-Finger Strain Relief", desc: "The lamella claw system distributes mechanical cable pull force evenly without concentrating stress on any single point of the cable sheath." },
      { title: "PA6 Chemical Resistance", desc: "Superior resistance to industrial oils, diesel, hydraulic fluids, and cleaning agents versus standard ABS or nylon glands." },
      { title: "Wide Size Range", desc: "M12 to M63 metric and PG7 to PG48 PG thread sizes cover virtually every cable diameter from 3mm to 38mm in a single product family." }
    ],
    applications: [
      { title: "Weatherproof Electrical Enclosures", desc: "Cable entry sealing in outdoor distribution boards, motor control centres, and junction boxes to maintain IP65/IP66 ratings." },
      { title: "Industrial Control Panels", desc: "Multi-cable entry sealing in machine control cabinets, automation panels, and VFD enclosures in factory environments." },
      { title: "Hazardous Area Enclosures", desc: "Non-Ex cable entry sealing in Ex e (increased safety) enclosures where the gland itself requires certification for Zone 1/2 use." },
      { title: "Underground & Tunnel Applications", desc: "LSZH-compliant cable entry sealing in underground rail station control rooms, tunnel lighting panels, and metro traction substations." }
    ],
    standards: [
      { code: "IEC 60529", description: "International standard that defines IP (Ingress Protection) rating classifications and test methodology." },
      { code: "EN 50262", description: "European standard for cable glands for electrical installations — dimensional and testing requirements." },
      { code: "UL 514B", description: "UL standard for fittings for cable and conduit entries into electrical enclosures." }
    ],
    installationTips: [
      "Pre-assemble the gland loosely and thread the cable through before final enclosure installation — it is very difficult to thread a multi-core armoured cable through an already-mounted gland.",
      "Tighten the dome nut to the torque specified on the gland body label — hand-tightening is insufficient to achieve the full IP rating compression on the neoprene seal.",
      "Select the gland size so the cable outer diameter is within the mid-range of the gland's clamping range — using an oversized gland with a thin cable will not achieve the stated IP sealing."
    ],
    maintenanceTips: [
      "Inspect all installed glands annually for cracks in the PA6 body, especially in environments with strong UV exposure or ozone-generating equipment nearby.",
      "Re-torque gland dome nuts every 2 years — thermal cycling causes neoprene seal relaxation that allows slow moisture ingress over time.",
      "Replace any gland where the strain-relief fingers have been fully spread open by cable pull — the lamella claw permanently deforms beyond its clamping range once overstressed."
    ],
    comparison: {
      title: "Polymer PA6 Gland vs. Brass Cable Gland",
      columns: ["Attribute", "PA6 Polymer Gland", "Brass Cable Gland"],
      rows: [
        { label: "Material", values: ["Polyamide PA6 (polymer)", "Nickel-plated brass"] },
        { label: "Corrosion Resistance", values: ["Excellent (no rust)", "Good (depends on plating)"] },
        { label: "Chemical Resistance", values: ["Excellent (oils, acids)", "Limited (strong acids)"] },
        { label: "Weight", values: ["Light", "Heavier"] },
        { label: "Electrical Continuity", values: ["Non-conductive", "Conductive (for armoured cable earthing)"] },
        { label: "Typical IP Rating", values: ["IP66 / IP68", "IP68 (metal sealing)"] }
      ]
    }
  },
  "emergency-stop-button": {
    title: "Hensel IP65 Emergency Stop Push Button Boxes | Electrika INC",
    description: "Shop Hensel IP65 rated emergency stop buttons. Impact-resistant polycarbonate enclosure, mushroom head turn-to-release button. Safe machine isolation.",
    keywords: ["Hensel Emergency Stop Boxes", "Hensel EM Stop IP65", "Emergency stop push button box", "Industrial safety button", "Polycarbonate stop box"],
    canonical: `${PRIMARY_DOMAIN}/products/emergency-stop-button`,
    entityType: "Product",
    brand: "Hensel Germany",
    manufacturer: "Hensel / Fitted by Electrika INC",
    directAnswer: "Hensel Emergency Stop Boxes are industrial safety control enclosures. They feature a high-impact polycarbonate housing rated at IP65, fitted with a heavy-duty, red mushroom-head 'Turn-to-Release' latching push button. These boxes are designed for emergency machine shutdown and operator safety in harsh manufacturing settings.",
    specs: [
      { name: "Ingress Protection", value: "IP65 dust-tight and water-resistant" },
      { name: "Polycarbonate Grade", value: "IK08 high impact-resistant, halogen and silicone free" },
      { name: "Button Mech Type", value: "Mushroom head push-to-latch, turn-to-release system" },
      { name: "Contact Blocks", value: "1 Normally Closed (NC) + 1 Normally Open (NO) silver contacts" },
      { name: "Box Dimensioning", value: "Compact wall mount design with metric knockouts" }
    ],
    visualSpecs: [
      { name: "Brand / Origin", value: "Heinrich Hensel GmbH, Germany" },
      { name: "Model Reference", value: "PBS 0101 G8 (as shown)" },
      { name: "Housing Material", value: "High-impact Polycarbonate (PC), self-extinguishing, UV-stabilised" },
      { name: "IP Rating", value: "IP68 (submersible, continuous)" },
      { name: "IK Rating", value: "IK07" },
      { name: "Actuator", value: "Red mushroom-head, turn-to-release, Ø 40 mm" },
      { name: "Contact Action", value: "Positive-opening (direct-open action) per IEC 60947-5-5" },
      { name: "Contact Configuration", value: "1NC (standard); 1NO+1NC (selected models)" },
      { name: "Rated Voltage", value: "Up to 415V AC / 250V DC" },
      { name: "Rated Current", value: "Up to 10A AC / 6A DC" },
      { name: "Operating Temperature", value: "-25°C to +70°C" },
      { name: "Colour", value: "Light grey RAL 7035, red actuator" },
      { name: "Cable Entry", value: "M20 knockouts, four sides" },
      { name: "Housing Dimensions", value: "Approx. 80×80×65 mm" },
      { name: "Applicable Standards", value: "IEC 60947-5-1, IEC 60947-5-5, ISO 13850" },
      { name: "Certifications", value: "CE, VDE" }
    ],
    faqs: [
      {
        question: "What does 'latching mushroom button' mean?",
        answer: "Once pressed, the button mechanically locks (latches) in the depressed 'OFF' position to prevent the machinery from restarting accidentally. The operator must physically twist the red mushroom head to release the lock."
      }
    ],
    definition: "Hensel Emergency Stop Boxes are industrial safety control enclosures designed for machine isolation and emergency shutdown. The IP65-rated high-impact polycarbonate housing protects a heavy-duty IEC 60947-5-5 compliant mushroom-head latching push button. When pressed, the button latches mechanically in the depressed OFF position and can only be released by a deliberate twist action, preventing accidental or unauthorized machine restart. They are used as the primary operator emergency stop station in manufacturing, packaging, and material handling machinery.",
    engineeringNotes: [
      "The IK08 polycarbonate enclosure withstands a 5-joule impact (equivalent to a 500g mass falling 1 meter) without cracking or compromising the ingress seal.",
      "The 'Turn-to-Release' mechanism requires a deliberate 90° rotation of the mushroom head, providing both mechanical release confirmation and an automatic reset-prevention period while the operator assesses the fault.",
      "Silver contact blocks are specified for emergency stop applications as silver's high conductivity and low arc-erosion rate maintains reliable contact resistance over 100,000+ mechanical operations.",
      "All wiring termination knockouts are metric-sized for direct metric cable gland fitting — no need for PG-thread adaptors as commonly required on older metal enclosure designs."
    ],
    advantages: [
      { title: "IEC 60947-5-5 Compliant", desc: "Meets the international standard for emergency stop devices including direct-opening positive break contact block requirement." },
      { title: "IP65 Outdoor Rated", desc: "Sealed polycarbonate housing withstands monsoon rain, high-pressure wash-down, and dusty factory environments without degradation." },
      { title: "Latching Safety", desc: "Turn-to-release mechanism prevents accidental machine restart by keeping the emergency stop latched until an operator consciously releases it." },
      { title: "Hensel Germany Quality", desc: "Manufactured by Hensel Germany, one of Europe's most trusted electrical enclosure and safety device brands, with full CE certification." }
    ],
    applications: [
      { title: "Conveyor & Material Handling Systems", desc: "Emergency stop pull-cord and push-button stations along conveyor lines for immediate belt isolation." },
      { title: "Machine Tool Guard Interlocks", desc: "Door and guard interlock emergency stop stations on CNC machines, press brakes, and industrial robots." },
      { title: "Packaging & Food Processing Lines", desc: "IP65 wash-down rated emergency stop stations on food processing conveyors, filling machines, and packaging lines." },
      { title: "Outdoor Equipment", desc: "Pump stations, compressor sets, and outdoor electrical equipment requiring a weatherproof operator emergency isolation point." }
    ],
    standards: [
      { code: "IEC 60947-5-5", description: "International standard specifically for electrical emergency stop devices — mandatory direct-opening positive break contact requirement." },
      { code: "ISO 13850", description: "Safety of machinery — Emergency stop function — Principles for design and application." },
      { code: "EN 60947-5-1", description: "Low-voltage switchgear — Electromechanical control circuit devices and switching elements." },
      { code: "IEC 60529 (IP65)", description: "Ingress protection standard verifying dust-tight and water-jet resistant sealing of the enclosure." }
    ],
    installationTips: [
      "Install emergency stop buttons at every operator position along a machine — the IEC 60947-5-5 standard requires the stop function to be reachable from each operator location.",
      "Wire the NC (Normally Closed) contact of the button in series with the machine's safety relay coil circuit — this ensures the stop function is fail-safe if the wire breaks.",
      "Mount the box at a height between 0.6m and 1.7m from the floor as specified in ISO 13850 to ensure ergonomic operator reach from a standing position.",
      "Label each emergency stop enclosure with 'EMERGENCY STOP' in red text on a yellow background per ISO 13850 colour requirements."
    ],
    maintenanceTips: [
      "Test the emergency stop function (press and verify machine stops, then twist to release) every week as part of the machine's mandatory safety inspection routine.",
      "Inspect the contact block electrical resistance annually using a milliohm meter — resistance above 1Ω on the NC contact indicates contact erosion and replacement is needed.",
      "Clean the mushroom head actuator button face and surrounding enclosure with a damp cloth monthly in food and chemical processing environments.",
      "Check cable gland tightness and IP65 gasket condition every 6 months in outdoor and wash-down installations."
    ]
  },
  "small-control-station": {
    title: "Small Industrial Control Stations (IP65) | Electrika INC",
    description: "Shop durable small control stations for factory floor safety. IP65 polycarbonate enclosures with custom push buttons and selector switches.",
    keywords: ["Small Control Station", "Industrial push button box", "Polycarbonate control box", "IP65 operator control box", "Factory safety button panel"],
    canonical: `${PRIMARY_DOMAIN}/products/small-control-station`,
    entityType: "Product",
    brand: "Hensel / PCE",
    manufacturer: "Electrika INC",
    directAnswer: "Small Industrial Control Stations are wall-mounted operator stations designed for localized machine control. Assembled in rugged IP65 polycarbonate housings, they can be configured with start-stop push buttons, selector switches, and indicator pilot lights, providing a reliable interface on factory floors.",
    specs: [
      { name: "Enclosure Material", value: "High-grade impact-resistant Polycarbonate" },
      { name: "Protection Class", value: "IP65 dustproof and weatherproof seal" },
      { name: "Operator Options", value: "Flush buttons, key selectors, selector switches, pilot lights" },
      { name: "Wiring Entry", value: "Pre-formed knockouts for metric polymer glands" },
      { name: "Internal Rails", value: "Integrated mounting bosses for clean wiring termination" }
    ],
    visualSpecs: [
      { name: "Enclosure Material", value: "Polycarbonate / Thermoplastic (UV-stabilised, self-extinguishing)" },
      { name: "IP Rating", value: "IP65 (dust-tight + water jet protection)" },
      { name: "IK Rating", value: "IK09 (10 Joule impact resistance)" },
      { name: "Door Options", value: "Transparent (smoked) or Opaque" },
      { name: "Protection Devices", value: "MCB / RCCB — configurable count and rating" },
      { name: "Industrial Sockets", value: "IEC 60309 — blue (230V) and red (415V 3-phase) as required" },
      { name: "Internal Wiring", value: "Factory pre-wired, colour-coded, terminal block connections" },
      { name: "DIN Rail", value: "35 mm DIN rail, pre-installed" },
      { name: "Cable Entry", value: "Bottom/side gland plate, configurable knockouts" },
      { name: "Mounting", value: "Wall-mount or pole-mount bracket (configurable)" },
      { name: "Operating Temperature", value: "-25°C to +60°C" },
      { name: "Colour", value: "Light grey RAL 7035 (standard)" },
      { name: "Brand Reference", value: "Hensel-style modular construction (as shown)" },
      { name: "Lead Time", value: "2–3 weeks depending on configuration" }
    ],
    faqs: [
      {
        question: "Are the buttons customizable for different actions?",
        answer: "Yes, we customize these stations with different colors (green for start, red for stop), selector switches, and key switches to fit your specific machinery requirements."
      }
    ],
    definition: "Small Industrial Control Stations are wall-mounted operator interface units assembled inside compact IP65-rated polycarbonate enclosures. They house combinations of push buttons, selector switches, key switches, and pilot indicator lights used by machine operators to perform START, STOP, FORWARD, REVERSE, SPEED, and MODE selection functions locally at the machine. Assembled by Electrika INC with Hensel enclosures and Schneider Electric or ABB operator elements, they provide reliable and ergonomic operator control interfaces for a wide range of industrial machinery.",
    engineeringNotes: [
      "The polycarbonate enclosure body is moulded as a single seamless unit — there are no screws or joints on the side faces that could allow water entry under long-term wash-down cycles.",
      "Operator push button elements are available in 22mm diameter (standard IEC) for compatibility with Schneider, ABB, and Siemens actuators and contact block modules.",
      "Pilot indicator lights use energy-efficient LED lamp inserts rated for 100,000+ hours, eliminating in-service lamp replacement.",
      "Internal wiring uses numbered DIN rail terminal blocks to enable clean, documented wiring and easy field troubleshooting."
    ],
    advantages: [
      { title: "IP65 Sealed Enclosure", desc: "Polycarbonate body sealed with a peripheral gasket provides IP65 protection against industrial dust and high-pressure water jets during factory wash-down." },
      { title: "Fully Customizable", desc: "Button colors, switch types, pilot light colors, label inserts, and wiring configurations are all specified and assembled to customer requirements." },
      { title: "Compact & Ergonomic", desc: "Small form factor (as compact as 100×100mm) enables mounting directly on machine guards, control desks, and conveyor frames without space constraints." },
      { title: "Schneider / ABB Elements", desc: "Uses market-leading operator element brands ensuring long spares availability and consistent contact block specifications over the machine's lifetime." }
    ],
    applications: [
      { title: "Machine Tool Start-Stop", desc: "Operator start-stop stations on lathes, milling machines, grinding machines, and machining centres." },
      { title: "Conveyor Drive Control", desc: "Local start-stop and speed select buttons for conveyor belt motors at head, tail, and intermediate drive positions." },
      { title: "Fan & Pump Control", desc: "Local stop-start stations for HVAC fans, cooling tower motors, and process pump drives in industrial buildings." },
      { title: "Material Handling Equipment", desc: "Pallet stacker, forklift battery charger, and overhead crane pendant replacement stations." }
    ],
    standards: [
      { code: "IEC 60947-5-1", description: "Low-voltage switchgear standard for electromechanical control circuit devices and switching elements." },
      { code: "IEC 60529 (IP65)", description: "Ingress protection standard for dust-tight, water-jet resistant enclosures." },
      { code: "IEC 61439", description: "Low-voltage switchgear and controlgear assemblies — verification testing requirements." }
    ],
    installationTips: [
      "Mount the station at between 1.0m and 1.4m from the floor for ergonomic use from a standing position per OSHA and ISO 14738 ergonomic guidelines.",
      "Use metric polymer cable glands at each wiring entry knockouts; seal any unused knockouts with blank metric plugs to maintain the IP65 rating.",
      "Label each push button with an engraved (not adhesive) legend plate — adhesive labels deteriorate in 6–12 months in oily and humid factory environments."
    ],
    maintenanceTips: [
      "Test all push button functions and verify all pilot lights are operational every 3 months as part of the machine's routine maintenance schedule.",
      "Clean the operator button surfaces and enclosure face quarterly with a dry cloth in dusty factories — clogged button actuator passages prevent button return.",
      "Inspect contact blocks annually for carbon pitting and silver layer depletion; replace contacts when visible pitting or resistance above 0.5Ω is measured."
    ]
  },
  "mcb-box": {
    title: "IP65 Weatherproof MCB Distribution Boxes | Electrika INC",
    description: "Buy weatherproof IP65 MCB boxes with transparent doors. Polycarbonate body, DIN rail mount. Ideal for outdoor solar & power distribution.",
    keywords: ["Weatherproof MCB box", "IP65 MCB Enclosure", "DIN rail distribution box", "Polycarbonate MCB box", "Outdoor distribution enclosure"],
    canonical: `${PRIMARY_DOMAIN}/products/mcb-box`,
    entityType: "Product",
    brand: "Hensel / PCE / Premium Brands",
    manufacturer: "Electrika INC",
    directAnswer: "Weatherproof MCB Distribution Boxes are surface-mounted enclosures rated at IP65. Built with high-strength polycarbonate and featuring a transparent lockable door, they include internal DIN rails for mounting circuit breakers, surge protectors, and timers in outdoor or damp settings.",
    specs: [
      { name: "Module Capacity", value: "Available in 4, 8, 12, 18, and 24 module widths" },
      { name: "Ingress Code", value: "IP65 rating with neoprene gasket sealing" },
      { name: "Polycarbonate Strength", value: "IK08 impact rating, UV-stabilized polymer" },
      { name: "Cover Access", value: "Transparent hinged window door with lock option" },
      { name: "Internal Mounting", value: "Pre-fitted standard 35mm zinc-plated steel DIN rail" }
    ],
    visualSpecs: [
      { name: "Material", value: "High-impact Polycarbonate (PC), self-extinguishing" },
      { name: "IP Rating", value: "IP65 (dust-tight + water jet); IP66 (powerful water jet)" },
      { name: "IK Rating", value: "IK08 (impact resistant)" },
      { name: "Module Range", value: "3, 4, 6, 8, 9, 12, 18, 24, 36, 48, 54 modules (single & double row)" },
      { name: "DIN Rail", value: "35 mm × 7.5 mm, pre-installed" },
      { name: "Neutral Strip", value: "Optional factory-fitted neutral busbar (specify at order)" },
      { name: "Door Type", value: "Opaque or smoked transparent cover with quarter-turn fastener" },
      { name: "Cable Entries", value: "Knockouts (bottom, sides, top) — metric PG and M-thread sizes" },
      { name: "Colour", value: "Light grey RAL 7035" },
      { name: "Operating Temp.", value: "-25°C to +60°C" },
      { name: "Gland Plate", value: "Detachable gland plate (selected models)" },
      { name: "Applicable Standards", value: "IEC 62208, EN 60670-24" },
      { name: "Certifications", value: "CE, RoHS" },
      { name: "Lead Time", value: "Ex-stock to 2 weeks depending on module size" }
    ],
    faqs: [
      {
        question: "Does the box come pre-fitted with neutral and earth terminals?",
        answer: "Yes, our weatherproof distribution boxes include insulated brass neutral and earth busbar terminals for safe wiring."
      }
    ],
    definition: "Weatherproof MCB Distribution Boxes are surface-mounted electrical enclosures rated at IP65, designed for mounting circuit breakers, residual current devices (RCDs), surge protection devices (SPDs), and timers in outdoor or damp indoor environments. Constructed from UV-stabilized, IK08-rated polycarbonate with a transparent hinged door and a neoprene peripheral gasket, they provide complete protection for the internal DIN rail-mounted equipment from dust, water, and direct sunlight.",
    engineeringNotes: [
      "The transparent hinged door is manufactured from impact-resistant polycarbonate (not standard clear PVC) to maintain optical clarity after years of UV exposure in outdoor installations.",
      "Pre-fitted 35mm zinc-plated steel DIN rail is mounted on integral moulded bosses — the rail can be cut to any length required without affecting the enclosure structure.",
      "The neoprene peripheral gasket is moulded as a one-piece D-profile seal for consistent compression across the entire lid perimeter, eliminating the leak-prone corner joints of flat foam gaskets.",
      "Module width standards: 1 module = 17.5mm (IEC standard) — a 12-module box accommodates 12 single-pole MCBs or 6 double-pole MCBs."
    ],
    advantages: [
      { title: "IP65 Outdoor Protection", desc: "Neoprene-sealed polycarbonate enclosure withstands Indian monsoon rainfall, UV exposure, and airborne dust in outdoor installations for 15+ years." },
      { title: "Transparent Hinged Door", desc: "Transparent door allows reading of MCB trip positions and timer settings without opening the box — reducing the need for full access in damp conditions." },
      { title: "IK08 Impact Rating", desc: "Polycarbonate body rated to IK08 resists physical impact from falling tools, vehicle vibration, and accidental collisions in industrial environments." },
      { title: "Pre-Fitted DIN Rail", desc: "Standard 35mm DIN rail allows direct installation of any IEC-compliant MCB, RCCB, or SPD from any manufacturer without adaptation." }
    ],
    applications: [
      { title: "Solar PV Array String Boxes", desc: "Outdoor string combiner boxes for rooftop and ground-mount solar arrays housing string fuses and surge protectors." },
      { title: "Outdoor Pump & Motor Feeders", desc: "Weatherproof local distribution boards for borewell pumps, irrigation systems, and rooftop HVAC equipment." },
      { title: "Construction Site Sub-Distribution", desc: "Weatherproof temporary sub-distribution boards fed from site transformer outputs to multiple load circuits." },
      { title: "Highway Lighting Control Panels", desc: "Outdoor distribution boards controlling street light photocell circuits and timer switches on highway poles." }
    ],
    standards: [
      { code: "IEC 60439-1", description: "Type-tested and partially type-tested assemblies standard for low-voltage switchgear enclosures." },
      { code: "IEC 60529 (IP65)", description: "Ingress protection standard for dust-tight and water-jet resistant sealing." },
      { code: "IEC 62262 (IK08)", description: "Enclosure mechanical impact protection rating standard." },
      { code: "IS 8828", description: "Indian Standard for miniature circuit breakers (MCBs) installed inside the distribution box." }
    ],
    installationTips: [
      "Install the box with the cable entry knockouts facing downward wherever possible — water follows gravity and downward-facing entry holes prevent pooling at the gland sealing surface.",
      "Apply a bead of silicone sealant around the perimeter of the box backplate where it contacts the wall surface to prevent moisture wicking between the mounting surface and box.",
      "Reserve one spare MCB module space per 6 installed circuits for future load additions — fully-loaded boxes require complete rewiring to add circuits later."
    ],
    maintenanceTips: [
      "Inspect the neoprene lid gasket for compression set or cracking every 2 years; a flattened gasket loses IP65 sealing and allows moisture entry.",
      "Test each MCB's trip function annually by pressing the test button — a non-tripping MCB must be replaced immediately as it provides no overload protection.",
      "Clean the inside of the box annually with a dry compressed air blast to remove accumulated dust and insect debris from DIN rail terminations.",
      "Check all terminal connections for signs of overheating (discoloured insulation, melted plastic) at the annual inspection — overheated terminals indicate undersized conductors or high-resistance connections."
    ],
    comparison: {
      title: "IP65 Polycarbonate MCB Box vs. Standard Sheet Metal Distribution Board",
      columns: ["Attribute", "IP65 Polycarbonate Box", "Sheet Metal DB"],
      rows: [
        { label: "IP Rating", values: ["IP65 (standard)", "IP31 (typical indoor)"] },
        { label: "UV Resistance", values: ["Excellent (UV stabilized)", "Requires painting"] },
        { label: "Impact Rating", values: ["IK08", "IK07 (typical)"] },
        { label: "Weight", values: ["Light", "Heavier"] },
        { label: "Rust Risk", values: ["None (polymer body)", "High (if paint damaged)"] },
        { label: "Best Use", values: ["Outdoor, wet, coastal", "Indoor, dry environments"] }
      ]
    }
  },
  "pbs-control-box": {
    title: "Hensel PBS 0101 G8 Emergency Stop Station | Electrika INC",
    description: "Hensel PBS 0101 G8 emergency stop push button station. IP65 rated, durable polycarbonate casing, yellow safety background. Shop today.",
    keywords: ["Hensel PBS Control Box", "PBS 0101 G8", "Hensel emergency button box", "IP65 push button station", "Safety stop station India"],
    canonical: `${PRIMARY_DOMAIN}/products/pbs-control-box`,
    entityType: "Product",
    brand: "Hensel Germany",
    manufacturer: "Hensel / Distributed by Electrika INC",
    directAnswer: "The Hensel PBS 0101 G8 is a specialized emergency stop push button station. Built with a high-durability polycarbonate housing rated at IP65 and styled with a yellow cover for quick safety identification, it houses a heavy-duty latching red mushroom push button that provides reliable safety isolation.",
    specs: [
      { name: "Product Code", value: "PBS 0101 G8 / Hensel Series" },
      { name: "Protection Standard", value: "IP65 water and dust tight rating" },
      { name: "Visual Identification", value: "Bright yellow lid, red mushroom actuator (safety codes compliant)" },
      { name: "Actuation Latch", value: "Mushroom head twist-to-release mechanical lock" },
      { name: "Electrical rating", value: "AC-15 240V 3A / 415V 1.5A switching duty" }
    ],
    visualSpecs: [
      { name: "Configuration", value: "Fully customizable per project SLD / requirement" },
      { name: "Enclosure Type", value: "Wall-mounted, multi-compartment" },
      { name: "Material", value: "Polycarbonate / mild steel powder-coated (site dependent)" },
      { name: "IP Rating", value: "IP54 / IP65 (configurable)" },
      { name: "Metering", value: "Single or multi-feeder energy meter chambers" },
      { name: "Control Devices", value: "Push buttons, selector switches, emergency stop" },
      { name: "Indication", value: "LED pilot lamps — red, yellow, blue, green" },
      { name: "Protection Devices", value: "MCB / MCCB / RCCB as per load schedule" },
      { name: "Busbar", value: "Copper/aluminium busbar sized to project load" },
      { name: "Cable Entry", value: "Bottom/top gland plate, configurable" },
      { name: "Door", value: "Hinged with viewing window and lock provision" },
      { name: "Operating Temperature", value: "-10°C to +55°C" },
      { name: "Testing", value: "100% factory tested before dispatch" },
      { name: "Lead Time", value: "2–4 weeks depending on configuration complexity" }
    ],
    faqs: [
      {
        question: "What is the industry application of the PBS 0101 G8?",
        answer: "It is widely specified as a local machine isolation switch in factories, packaging yards, conveyor systems, and near hazardous industrial equipment."
      }
    ],
    definition: "The Hensel PBS 0101 G8 is a purpose-built emergency stop push button station manufactured by Hensel Germany. Featuring a high-visibility yellow polycarbonate enclosure lid and a heavy-duty red mushroom-head latching actuator, it is designed for unambiguous emergency identification in factory and outdoor environments. The IP65-rated enclosure and Turn-to-Release latch mechanism meet the requirements of IEC 60947-5-5 for emergency stop devices used in machine safety systems.",
    engineeringNotes: [
      "The PBS 0101 G8 product code designates: PBS = Push Button Station, 0101 = single mushroom button configuration, G8 = Hensel's 8-module enclosure size series.",
      "Yellow lid colour is specified per IEC 60947-5-5 and ISO 13850 which require actuators to be RED on a YELLOW background for universal identification as emergency stop devices.",
      "The AC-15 duty rating (240V 3A / 415V 1.5A) is the standard duty class for inductive load switching — suitable for direct control of contactor coils in 415V motor circuits."
    ],
    advantages: [
      { title: "High Visibility Yellow Design", desc: "ISO 13850-compliant yellow lid and red mushroom actuator ensures immediate visual identification as the emergency stop station in any factory environment." },
      { title: "Hensel Germany Reliability", desc: "Manufactured by Hensel Germany to IEC 60947-5-5 specification with CE certification for machine safety applications across European and Indian markets." },
      { title: "IP65 Weatherproof", desc: "Suitable for installation on outdoor machinery, pump stations, and process equipment where the button must resist rain and dust ingress." },
      { title: "IEC 60947-5-5 Compliant", desc: "Positive break (direct opening) NC contact block ensures fail-safe isolation even if contact welding occurs due to short circuit current." }
    ],
    applications: [
      { title: "Factory Machine Isolation", desc: "Local emergency stop point adjacent to every machine operating station per ISO 13849 safety requirements." },
      { title: "Conveyor Belt Lines", desc: "Intermediate emergency stop stations along conveyor lengths required at regular intervals by factory safety standards." },
      { title: "Outdoor Process Equipment", desc: "IP65 rating enables installation on outdoor pump stations, compressors, and ventilation fans requiring accessible emergency stop." }
    ],
    standards: [
      { code: "IEC 60947-5-5", description: "Emergency stop device standard — direct-opening positive break contact requirement." },
      { code: "ISO 13850", description: "Safety of machinery — Emergency stop function design principles." },
      { code: "IEC 60529 (IP65)", description: "Ingress protection — dust-tight and water-jet resistant sealing."}  
    ],
    installationTips: [
      "Wire the NC contact block in series with the machine's safety relay coil to create a fail-safe stop loop — a broken wire in this series circuit causes the machine to stop, not run.",
      "Verify the button's operating height is between 0.6m and 1.7m per ISO 13850 for ergonomic reach by operators of varying heights."
    ],
    maintenanceTips: [
      "Test the emergency stop function weekly as part of the machine's mandatory pre-shift safety check.",
      "Replace the mushroom button actuator immediately if the turn-to-release feel becomes stiff or the button fails to latch positively on depression.",
      "Inspect the yellow lid and enclosure for UV-induced colour fade or impact damage annually in outdoor installations."
    ]
  },
  "hensel-boxes": {
    title: "Hensel Small Polycarbonate Distribution Boxes | Electrika INC",
    description: "Premium Hensel polycarbonate distribution boxes (IP65/66/67). Extremely robust, acid & alkaline resistant. Ideal for harsh industrial plants.",
    keywords: ["Hensel Boxes", "Hensel Polycarbonate Box", "IP65 Distribution Enclosure", "Hensel Junction Box India", "Acid-resistant junction box"],
    canonical: `${PRIMARY_DOMAIN}/products/hensel-boxes`,
    entityType: "Product",
    brand: "Hensel Germany",
    manufacturer: "Hensel / Distributed by Electrika INC",
    directAnswer: "Hensel Small Distribution Boxes are heavy-duty polycarbonate junction boxes rated up to IP67. Manufactured by Hensel Germany, they are resistant to impact, acids, alkalis, and UV radiation, making them the industry standard for chemical processing plants, fertilizer factories, and coastal infrastructure.",
    specs: [
      { name: "Ingress Ratings", value: "IP65 / IP66 / IP67 options" },
      { name: "Material Composition", value: "High-grade thermoplastic polycarbonate (silicone & halogen free)" },
      { name: "Corrosion Strength", value: "Chemical resistant to acids, lyes, and industrial solvents" },
      { name: "Impact Resistance", value: "IK08 protection rating (high mechanical protection)" },
      { name: "Closure System", value: "Quick-release lid screws made of non-corrosive stainless steel" }
    ],
    visualSpecs: [
      { name: "Brand / Origin", value: "Heinrich Hensel GmbH, Germany" },
      { name: "Standards", value: "IEC 62208, EN 60670" },
      { name: "Material Options", value: "GRP (thermosetting), ASA, Steel" },
      { name: "Size Range", value: "80×80×55 mm to 800×600×300 mm" },
      { name: "IP Rating", value: "IP55 / IP65 / IP66 (model specific)" },
      { name: "IK Rating", value: "IK07 to IK10" },
      { name: "Colour", value: "Light grey RAL 7035 / Other on request" },
      { name: "Gland Knockouts", value: "Multiple sizes, metric and PG" },
      { name: "Door Lock", value: "Key lock / quarter-turn / padlock provision" },
      { name: "Operating Temp.", value: "-35°C to +70°C" },
      { name: "Internal Mounting", value: "DIN rail 35mm / mounting plate" },
      { name: "Certifications", value: "CE, VDE, ATEX (selected models)" }
    ],
    faqs: [
      {
        question: "Can Hensel boxes be used in highly corrosive chemical factories?",
        answer: "Yes, Hensel's high-grade polycarbonate is highly resistant to acids, alkalis, salt water, and chemical fumes, outperforming standard ABS and metal junction boxes."
      }
    ],
    definition: "Hensel Small Distribution Boxes are compact junction boxes and distribution enclosures manufactured by Hensel Germany from premium high-grade thermoplastic polycarbonate. Available in IP65, IP66, and IP67 protection classes, they are chemical-resistant, impact-resistant (IK08), and UV-stabilized for permanent outdoor use. The stainless steel quick-release lid screws, polycarbonate body, and moulded peripheral gasket combine to create an enclosure system used as the industry benchmark in food processing, chemical plants, and coastal industrial installations.",
    engineeringNotes: [
      "High-grade polycarbonate offers 250-times greater impact strength than equivalent-thickness glass, yet allows light transmission through the lid for internal circuit status visibility.",
      "The lid gasket is precision-moulded in elastomeric sealing material to maintain full elastic recovery across the full service temperature range (-35°C to +80°C).",
      "Halogen-free material specification makes Hensel boxes suitable for installation in underground stations, tunnels, and marine vessels where Low Smoke Zero Halogen (LSZH) is mandatory.",
      "Stainless steel lid screws eliminate corrosion-related lid seizure which is the most common maintenance problem with carbon steel-fastened junction boxes."
    ],
    advantages: [
      { title: "IP65/66/67 Variants", desc: "Three IP protection levels available from the same Hensel product family — select IP65 for standard outdoor use, IP67 for water immersion risk environments." },
      { title: "Chemical Resistance", desc: "Polycarbonate body resists dilute acids, alkalis, oils, and most industrial cleaning agents that rapidly corrode painted steel and degrade ABS enclosures." },
      { title: "IK08 Impact Protection", desc: "Withstands the equivalent of a 5-joule mechanical impact — protects wiring from damage caused by accidental tool drops and material handling impacts." },
      { title: "Stainless Steel Fasteners", desc: "Non-corroding stainless steel lid screws ensure easy lid opening even after years of outdoor exposure — eliminating the seized-fastener maintenance problem." }
    ],
    applications: [
      { title: "Chemical & Fertilizer Plants", desc: "Junction boxes in areas exposed to acid vapour, alkali spray, and chemical dust that rapidly degrade standard ABS and metal enclosures." },
      { title: "Coastal Infrastructure", desc: "Electrical connection boxes on sea walls, coastal roads, ports, and offshore support structures in salt-spray environments." },
      { title: "Food Processing & Washdown Areas", desc: "IP67 boxes in food and dairy processing lines where high-pressure hot water wash-down is performed daily on all exposed equipment surfaces." },
      { title: "Mining & Quarrying", desc: "Surface mining machinery connection boxes exposed to rock dust, rain, and heavy machinery vibration and impact." }
    ],
    standards: [
      { code: "IEC 60529 (IP65/66/67)", description: "International ingress protection standard defining dust-tight, water-jet resistant, and submersion-proof sealing levels." },
      { code: "IEC 62262 (IK08)", description: "Mechanical impact protection classification for electrical enclosures and junction boxes." },
      { code: "EN 50102", description: "European standard for degree of protection provided by enclosures against external mechanical impacts." }
    ],
    installationTips: [
      "Select the correct IP class for the installation environment: IP65 for rain and dust, IP66 for strong water jets, IP67 for temporary immersion.",
      "Use only metric PA6 polymer or stainless steel cable glands to maintain the box's IP rating — using standard iron conduit fittings breaks the halogen-free specification.",
      "Apply a thin coat of no-oxide paste on terminal connections inside the box in coastal or high-humidity environments to prevent terminal oxidation over time."
    ],
    maintenanceTips: [
      "Inspect lid gasket for flattening or cracking every 2 years — a permanently compressed gasket loses elastic recovery and allows slow water ingress.",
      "Clean the polycarbonate surfaces with mild soap and water only — solvent-based cleaners (acetone, toluene) cause crazing (surface micro-cracking) of the polycarbonate material.",
      "Tighten lid screws to the specified torque value after every opening; loose screws compress the gasket unevenly and reduce the effective IP rating."
    ],
    comparison: {
      title: "Hensel Polycarbonate Box vs. Standard GI Sheet Metal Box",
      columns: ["Attribute", "Hensel Polycarbonate Box", "GI Sheet Metal Box"],
      rows: [
        { label: "IP Rating", values: ["IP65 / IP66 / IP67", "IP44 (typical)"] },
        { label: "Corrosion Resistance", values: ["Excellent (no rust possible)", "Moderate (rust when paint damaged)"] },
        { label: "Chemical Resistance", values: ["Excellent (PC polymer)", "Poor (paint dissolves)"] },
        { label: "Impact Rating", values: ["IK08", "IK07 (typical)"] },
        { label: "Fasteners", values: ["Stainless steel (no seize)", "Carbon steel (corrodes)"] },
        { label: "Weight", values: ["Light", "Heavier"] }
      ]
    }
  },
  "flp-junction-box": {
    title: "Flameproof Junction Boxes (Zone 1, 2, 21, 22) | Electrika INC",
    description: "Shop certified flameproof FLP junction boxes. Heavy-duty copper-free cast aluminum, IP65 protection. Safe wiring in explosive areas.",
    keywords: ["FLP Junction boxes", "Flameproof Junction Box", "Explosion Proof Junction Box", "Zone 1 Ex d enclosure", "Hazardous area terminal box"],
    canonical: `${PRIMARY_DOMAIN}/products/flp-junction-box`,
    entityType: "Product",
    brand: "Electrika / Certified FLP Manufacturers",
    manufacturer: "Electrika INC",
    directAnswer: "Flameproof (FLP) Junction Boxes are specialized hazardous-area wiring enclosures. Built with thick copper-free cast aluminum walls and machined flat flame-path joints, they contain any internal electrical spark or explosion safely within the box, preventing ignition of external gases or dust in Zone 1, 2, 21, and 22 environments.",
    specs: [
      { name: "Ex Protection Code", value: "Ex d IIC T6 Gb / Ex tb IIIC T80°C Db" },
      { name: "Ingress Protection", value: "IP65 / IP66 rated waterproof housing" },
      { name: "Wall Construction", value: "Thick-walled copper-free die-cast aluminum alloy" },
      { name: "Terminal Options", value: "Fitted with standard DIN terminal blocks (up to 35 sq.mm)" },
      { name: "Cable Entries", value: "Fitted with threaded entries (NPT / Metric) and flameproof plugs" }
    ],
    visualSpecs: [
      { name: "Product", value: "Cat. No. JB/104" },
      { name: "Enclosure", value: "Flame Proof (Ex-d), Gas Group IIA & IIB — as per IS/IEC 60079-1:2007" },
      { name: "Area Classification", value: "Ex db IIA, IIB" },
      { name: "Certification", value: "CIMFR, BIS, PESO" },
      { name: "Size", value: "80mm dia x 40mm depth" },
      { name: "Temperature Class", value: "T5" },
      { name: "Material", value: "Die cast aluminium alloy" },
      { name: "Finish", value: "Epoxy powder coated shade, as per IS:5" },
      { name: "Earthing", value: "1 No. internal & 2 Nos. external" },
      { name: "Hardware", value: "Stainless steel" },
      { name: "Gasket", value: "Neoprene / Silicon 'O' ring endless gasket" },
      { name: "Name Plate", value: "Stainless steel nameplate cum warning plate" },
      { name: "Terminals", value: "Optional: 4-way 15A strip type" },
      { name: "Cable Entry", value: "Up to 4 Nos. M20 / ½\" NPT" }
    ],
    faqs: [
      {
        question: "What is a flame-path joint in an FLP junction box?",
        answer: "The flame-path is a precision-machined gap between the box and the lid. It is designed to cool hot escaping gases from an internal explosion so that by the time they reach the outside, they are below the ignition temperature of the surrounding atmosphere."
      }
    ],
    definition: "Flameproof (FLP) Junction Boxes are explosion-proof wiring enclosures designed for Zone 1, 2, 21, and 22 hazardous area cable interconnections. Constructed from thick-walled copper-free die-cast aluminum alloy with precision-machined flat flame-path joints, they safely contain any internal electrical arc, short circuit, or explosion within the box, preventing the hot gases from escaping at ignition temperature into the surrounding flammable atmosphere. Available with Ex d IIC T6 certification for gas groups IIA, IIB, and IIC (hydrogen) environments.",
    engineeringNotes: [
      "The copper-free aluminum specification is critical for use in acetylene and hydrogen atmospheres — copper alloys with acetylene form explosive copper acetylide compounds.",
      "Flame-path gap length and surface finish are precision-machined to IEC 60079-1 tolerances — gap width <0.1mm for IIC (hydrogen) group, <0.4mm for IIA group.",
      "All threaded conduit entries are supplied with certified Ex d grade flameproof metallic glands or blanking plugs — standard rubber or polymer glands are not compliant.",
      "Internal terminal blocks are rated at full working voltage (up to 690V) with adequate creepage and clearance distances to prevent internal tracking under condensation conditions."
    ],
    advantages: [
      { title: "IEC 60079-1 Type-Tested", desc: "Factory type-tested to the international flameproof enclosure standard, providing globally accepted certification for use in ATEX, IECEx, and PESO-approved hazardous area installations." },
      { title: "All Gas Group Coverage", desc: "Certified for IIC group (hydrogen and acetylene) — the most demanding gas classification — ensuring suitability across all common petrochemical and chemical industry gas environments." },
      { title: "Zero Copper Content", desc: "Copper-free aluminum alloy prevents the formation of explosive copper acetylide compounds in acetylene atmosphere applications." },
      { title: "IP65/IP66 Dual Protection", desc: "Beyond the Ex d flame containment, IP65/66-rated sealing keeps water and dust out of the wiring termination area, preventing insulation degradation." }
    ],
    applications: [
      { title: "Oil & Gas Wellheads", desc: "Instrument junction boxes for wellhead sensors, pressure transmitters, and flow meter wiring in Zone 1 classified upstream oil and gas areas." },
      { title: "Petrochemical Pump Rooms", desc: "Cable junction points in pump room manifolds where explosive petroleum vapour atmospheres are continuously present." },
      { title: "Pharmaceutical Solvent Plants", desc: "Wiring interconnection boxes in IEC Zone 1 classified pharmaceutical API and solvent handling areas." },
      { title: "Coal Mine Electrical Systems", desc: "DGMS-approved underground coal mine wiring junction points in firedamp-classified (methane) headings and panels." }
    ],
    standards: [
      { code: "IEC 60079-0", description: "General requirements for all electrical equipment intended for use in explosive gas atmospheres." },
      { code: "IEC 60079-1", description: "Specific requirements for flameproof 'd' enclosures — flame path geometry, gap tolerances, and testing." },
      { code: "IEC 60079-31", description: "Enclosure protection 'tb' for equipment in combustible dust atmospheres (Zone 21/22)." },
      { code: "PESO Certification", description: "Petroleum and Explosives Safety Organisation — Indian mandatory approval for all Ex electrical equipment." },
      { code: "ATEX 2014/34/EU", description: "European directive for explosive atmosphere apparatus — CE-Ex mark requirement." }
    ],
    installationTips: [
      "Verify the area's gas group (IIA, IIB, or IIC) from the hazardous area classification drawing before selecting the junction box — an IIA-rated box is not permitted in IIC hydrogen atmospheres.",
      "Install only certified Ex d or Ex e metallic cable glands — inserting a non-certified polymer gland invalidates the Ex certification and violates installation standards.",
      "Never re-use or modify the precision-machined lid; any machining or grinding of the flame-path face destroys its certification and must not be done in the field.",
      "Seal all unused conduit entries with certified Ex-rated metallic blanking plugs to the correct torque specification — loose blanking plugs compromise the flame-path integrity."
    ],
    maintenanceTips: [
      "Inspect the flame-path mating surfaces (box rim and lid face) for nicks, corrosion, or contamination every 12 months; resurface or replace if any defects are found.",
      "Check all threaded conduit entry glands and blanking plugs for tightness and corrosion every 12 months; verify each is still certified for the current gas group.",
      "Record all maintenance activities in a dedicated Ex equipment logbook as required by IEC 60079-17 inspection and maintenance standard.",
      "Do not open the box while the hazardous area is live — always follow the facility's hot work or cold work permit procedure before performing internal maintenance."
    ]
  }
};
