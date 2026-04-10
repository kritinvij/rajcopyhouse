export type ProductCategory =
  | "binding-wires"
  | "covers"
  | "sheets"
  | "packaging"
  | "complete-kits";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  image: string;
  images?: string[];
  featured: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  "binding-wires": "Binding & Stitching Wires",
  covers: "Notebook Covers",
  sheets: "Ledger & Quality Sheets",
  packaging: "Shrink & Packing Materials",
  "complete-kits": "Complete Raw Material Kits",
};

export const products: Product[] = [
  {
    slug: "stitching-steel-wires",
    name: "Stitching Steel Wires",
    category: "binding-wires",
    shortDescription:
      "Gauge-verified high-tensile steel for saddle and flat stitching machines. Tight SWG tolerance batch-to-batch - smooth, jam-free feed through all standard stitching heads.",
    description:
      "Wire breaks and feed jams are the two biggest causes of stitching line downtime - both trace back to inconsistent gauge or surface quality. Our stitching wires are held to a tight SWG tolerance with a smooth, burr-free surface that feeds cleanly through every standard stitching head without producing machine debris. Galvanized or bright finish resists corrosion during storage. Same spec every spool - your stitching heads run without constant readjustment between rolls.",
    specs: [
      { label: "Material", value: "High-grade steel" },
      { label: "Finish", value: "Bright / Galvanized" },
      { label: "Gauges", value: "18 SWG, 20 SWG, 22 SWG, 24 SWG, 26 SWG" },
      { label: "Pack", value: "Spool (5 kg / 10 kg) or bulk rolls - MOQ 50 kg per gauge" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/product-binding-wires-photo.jpeg",
    images: ["/images/stitching-wire-spool.jpeg", "/images/stitching-wire-dark.jpeg"],
    featured: true,
  },
  {
    slug: "spiral-binding-wires",
    name: "Spiral Binding Wires",
    category: "binding-wires",
    shortDescription:
      "Precision-wound export-grade Duracoil steel spirals. Consistent pitch and diameter for smooth insertion on automatic binding machines. Anti-corrosion lacquer finish.",
    description:
      "Spiral wire consistency determines your line speed. Variable pitch or diameter stalls automatic inserters and adds hidden labour cost per batch. Our Duracoil export-grade spirals are precision-wound to a tight pitch tolerance - automatic binding heads insert without mid-run adjustment. The anti-corrosion lacquer gives a clean gloss finish and protects coils during warehouse storage in all climates. Available in all standard diameters and both 3:1 pitch (up to 125 sheets) and 2:1 pitch (125+ sheets).",
    specs: [
      { label: "Material", value: "Premium steel - export grade" },
      { label: "Properties", value: "Tensile strength: high; Coating: anti-corrosion lacquer; Colors: Black, Silver, White" },
      { label: "Diameters", value: "3/8\", 1/2\", 5/8\", 3/4\", 1\" and custom" },
      { label: "Pitch", value: "3:1 and 2:1" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/product-duracoil.jpeg",
    images: ["/images/steelbind-spiral-photo.jpeg", "/images/brands-steelbind-duracoil.jpeg"],
    featured: true,
  },
  {
    slug: "notebook-covers",
    name: "Ready-Made Notebook Covers",
    category: "covers",
    shortDescription:
      "300+ designs in stock at Chawri Bazaar - same-day pickup or next-day dispatch. Mazboot (1000 GSM matte), Shine (1000 GSM gloss), Perfect Finishing (1200 GSM soft-touch).",
    description:
      "The largest in-stock cover selection in Old Delhi - 300+ designs available immediately for pickup or dispatch. Mazboot (1000 GSM, durable matte lamination) is built for school notebooks that see daily rough use without peeling. Shine (1000 GSM, gloss lamination) gives the retail-ready look used in stationery shops. Perfect Finishing (1200 GSM, soft-touch lamination) is the premium grade for corporate diaries and branded notebooks. All covers are sharp-cut, print-consistent across the stack, and sized for immediate spiral binding.",
    specs: [
      { label: "Designs", value: "300+ in stock" },
      { label: "Variants", value: "Mazboot (1000 gsm, matte) / Shine (1000 gsm, gloss) / Perfect Finishing (1200 gsm, soft-touch)" },
      { label: "Sizes", value: "A4, A5, Legal, and custom" },
      { label: "Compatible", value: "All standard spiral notebook sizes" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/rch-catalog-overview.jpeg",
    images: ["/images/notebook-covers-designs.jpeg"],
    featured: true,
  },
  {
    slug: "black-ledger-sheets",
    name: "Black Ledger Quality Sheets",
    category: "sheets",
    shortDescription:
      "Black end-sheets for spiral notebooks. 90-130 GSM options. Consistent caliper ensures uniform stack height on automated binding lines - no page misalignment, no jams.",
    description:
      "Black ledger sheets are the end-sheets in spiral notebooks - positioned first and last, they determine how the book lies flat and opens. The right GSM matters: 90 GSM works for school exercise books; 100-130 GSM is specified for A4 notebooks and premium diaries where rigidity is required. Our sheets are manufactured to a consistent caliper across the ream - critical on automated binding lines where variable thickness causes page misalignment and machinery jams. Smooth surface, good ink holdout.",
    specs: [
      { label: "Type", value: "Black ledger / end sheets" },
      { label: "GSM", value: "90 GSM, 100 GSM, 130 GSM" },
      { label: "Surface", value: "Smooth, durable" },
      { label: "Use", value: "Spiral-bound notebooks & stationery" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/product-black-ledger.jpeg",
    images: ["/images/black-ledger-light.jpeg", "/images/black-ledger-dark.jpeg"],
    featured: true,
  },
  {
    slug: "ohp-sheets",
    name: "OHP & DHP Sheets",
    category: "sheets",
    shortDescription:
      "Crystal-clear front cover sheets for spiral notebooks. OHP (75-100 micron, standard) for school and office notebooks. DHP (100-125 micron, stiffer) for premium diaries.",
    description:
      "OHP sheets give spiral notebooks that signature crystal-clear front window over the printed cover. Standard OHP (75-100 micron) is the industry default for school exercise books and office pads - clear, flexible, and cost-effective. DHP (Double Hard Polypropylene, 100-125 micron) is a stiffer grade that holds its shape on premium diaries and won't curl in heat or soften under daily handling pressure. Both grades are manufactured to consistent caliper for clean passage through punching and binding machinery, with zero distortion of the cover design beneath.",
    specs: [
      { label: "Type", value: "Crystal clear OHP / DHP (Double Hard Polypropylene)" },
      { label: "Thickness", value: "75 micron, 100 micron, 125 micron" },
      { label: "Sizes", value: "A4, A5, and custom roll widths" },
      { label: "Compatible punch", value: "21-hole (A4), 19-hole (A5), 34-hole (A4 comb)" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/pexels-ohp-sheets.jpeg",
    images: ["/images/product-all-types.jpeg"],
    featured: false,
  },
  {
    slug: "shrink-packing-roll",
    name: "Shrink Packing Roll",
    category: "packaging",
    shortDescription:
      "POF (Polyolefin) heat-shrink film rolls for finished notebook packaging. Uniform shrink, no burn marks, high clarity. Compatible with all standard heat-shrink tunnel machines.",
    description:
      "POF (Polyolefin) film is the industry standard for notebook shrink packaging - it shrinks more uniformly than PVC and produces a cleaner, tighter wrap without burn marks at the seals. Our rolls are manufactured to consistent width and caliper so your tunnel temperature and speed settings don't need adjustment between rolls. The high-clarity gloss finish shows the notebook cover and barcode clearly through the wrap. Consistent roll lengths for uninterrupted production runs with predictable changeover intervals.",
    specs: [
      { label: "Type", value: "POF heat-shrink film roll" },
      { label: "Thickness", value: "15 micron, 19 micron, 25 micron" },
      { label: "Roll Widths", value: "10\", 12\", 14\", 16\" and custom" },
      { label: "Clarity", value: "High clarity, gloss finish" },
      { label: "Compatibility", value: "All standard shrink tunnel machines" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/pexels-shrink-film.jpeg",
    images: ["/images/rch-four-solutions.jpeg", "/images/shrink-packing-roll-2.jpeg"],
    featured: false,
  },
  {
    slug: "writing-paper",
    name: "Writing Paper",
    category: "sheets",
    shortDescription:
      "Maplitho and bond paper for notebook interiors. 60-80 GSM. Smooth surface, no feathering or bleed-through with ballpoint, gel, or fountain pens.",
    description:
      "Our writing paper is sourced from established Indian mills and selected specifically for notebook interior use. Consistent GSM across the ream eliminates weight variance in finished notebooks - critical when selling by count, not by weight. The smooth maplitho surface accepts ruling print lines sharply and handles ballpoint, gel, and fountain pen inks without feathering or bleed-through. Available plain or with standard ruling (single-line, double-line) in A4 and A5 sizes.",
    specs: [
      { label: "Grade", value: "Maplitho / Bond" },
      { label: "Format", value: "Plain / Single-ruled / Double-ruled" },
      { label: "GSM", value: "60 GSM, 70 GSM, 75 GSM, 80 GSM" },
      { label: "Sizes", value: "A4 (21x29.7 cm), A5, and cut-to-order" },
      { label: "Surface", value: "Smooth, pen-friendly, no bleed-through" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/pexels-writing-paper.jpeg",
    images: ["/images/product-materials-list-white.jpeg"],
    featured: false,
  },
  {
    slug: "black-pp-sheets",
    name: "Black PP Sheets",
    category: "sheets",
    shortDescription:
      "Virgin PP back cover boards for spiral notebooks. 0.3-1.0mm, moisture-resistant, lightweight. Won't warp on damp surfaces - standard spec for A4 and A5 notebook manufacturing.",
    description:
      "Black PP (polypropylene) sheets are the structural back cover in premium spiral notebooks. PP is preferred over cardboard back covers because it is moisture-resistant and dimensionally stable - notebooks left on damp surfaces don't warp. Lightweight compared to equivalent-strength board, it keeps finished notebook weight down. Available from 0.3mm (flexible, for A6 pocket notebooks) to 1.0mm (rigid, for A4 office notebooks). All sheets are virgin polypropylene for consistent mechanical properties and clean-cut edges without delamination.",
    specs: [
      { label: "Material", value: "Virgin polypropylene (PP), moisture-resistant" },
      { label: "Color", value: "Black" },
      { label: "Thickness", value: "0.3 mm, 0.5 mm, 0.7 mm, 1.0 mm" },
      { label: "Use", value: "Back covers, protective dividers" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/pexels-black-pp-sheets.jpeg",
    images: ["/images/product-materials-list-black.jpeg"],
    featured: false,
  },
  {
    slug: "complete-raw-material-kit",
    name: "Complete Raw Material Kit",
    category: "complete-kits",
    shortDescription:
      "All notebook manufacturing inputs in one order - wires, covers, sheets, OHP, shrink packing. One supplier, one invoice, one dispatch. Same-day from Delhi.",
    description:
      "Raj Copy House is your one-stop supplier for all notebook manufacturing raw materials. Our complete kits include spiral binding wires, stitching wires, ready-made covers, ledger sheets, OHP sheets, writing paper, and shrink packaging - all sourced, quality-checked, and delivered together. One supplier, one invoice, one point of contact.",
    specs: [
      { label: "Includes", value: "Binding wires, stitching wires, covers, sheets, packaging" },
      { label: "Delivery", value: "All India via road/courier - lead time 3-7 business days; same-day dispatch available for Delhi pickup" },
      { label: "Customization", value: "Custom kits quoted per specification - contact us with your production volume and product list" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/pexels-stationery-kit.jpeg",
    images: ["/images/product-materials-list-gold.jpeg", "/images/rch-total-solutions-overview.jpeg"],
    featured: true,
  },
  {
    slug: "plastic-spiral-rings",
    name: "Plastic Spiral Rings",
    category: "binding-wires",
    shortDescription:
      "Flexible PVC spiral rings for school and office notebooks. 4:1 pitch, 8-25mm diameters. Available in Black, White, Red, Blue. Suitable for manual and automatic insertion.",
    description:
      "Our plastic spiral rings are the go-to binding solution for lightweight school notebooks and office stationery. Made from high-quality flexible PVC, they insert cleanly and hold pages securely without cracking under normal use. Available in a full range of diameters to suit every notebook size, from A6 pocket notebooks to A4 office pads. Custom color orders accepted on bulk quantities.",
    specs: [
      { label: "Material", value: "Flexible PVC / polypropylene" },
      { label: "Diameters", value: "8mm, 10mm, 12mm, 14mm, 16mm, 20mm, 25mm" },
      { label: "Colors", value: "Black, White, Red, Blue - custom on bulk" },
      { label: "Pitch", value: "4:1" },
      { label: "Pack", value: "Per box (quantity varies by diameter) - MOQ 5 boxes per size" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/plastic-spiral-coil.jpeg",
    images: ["/images/plastic-spiral-sizes.jpeg"],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

// Cross-sell: what manufacturers typically order alongside each product
const crossSellMap: Record<string, string[]> = {
  "stitching-steel-wires":   ["notebook-covers", "shrink-packing-roll", "spiral-binding-wires"],
  "spiral-binding-wires":    ["notebook-covers", "ohp-sheets", "black-ledger-sheets"],
  "notebook-covers":         ["spiral-binding-wires", "ohp-sheets", "shrink-packing-roll"],
  "black-ledger-sheets":     ["spiral-binding-wires", "notebook-covers", "ohp-sheets"],
  "ohp-sheets":              ["notebook-covers", "spiral-binding-wires", "black-pp-sheets"],
  "shrink-packing-roll":     ["notebook-covers", "stitching-steel-wires", "spiral-binding-wires"],
  "writing-paper":           ["notebook-covers", "stitching-steel-wires", "shrink-packing-roll"],
  "black-pp-sheets":         ["spiral-binding-wires", "ohp-sheets", "notebook-covers"],
  "plastic-spiral-rings":    ["notebook-covers", "black-pp-sheets", "ohp-sheets"],
  "complete-raw-material-kit": ["stitching-steel-wires", "spiral-binding-wires", "shrink-packing-roll"],
};

export function getCrossSells(slug: string): Product[] {
  const slugs = crossSellMap[slug] ?? [];
  return slugs.map((s) => products.find((p) => p.slug === s)).filter(Boolean) as Product[];
}
