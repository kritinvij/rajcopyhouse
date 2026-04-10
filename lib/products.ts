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
      "High-tensile steel wires for precise notebook and book stitching. Smooth, consistent feed for all stitching machines.",
    description:
      "Our premium stitching steel wires are manufactured to exacting standards for notebook and book production. Sourced from top-grade steel, they offer superior tensile strength, consistent diameter, and a smooth surface finish that ensures trouble-free feeding through stitching machinery. Available in multiple gauges to match all standard stitching heads.",
    specs: [
      { label: "Material", value: "High-grade steel" },
      { label: "Finish", value: "Bright / Galvanized" },
      { label: "Gauges", value: "18 SWG, 20 SWG, 22 SWG, 24 SWG, 26 SWG" },
      { label: "Pack", value: "Spool / Bulk rolls" },
      { label: "Supply", value: "Wholesale & Retail" },
    ],
    image: "/images/product-binding-wires-photo.jpeg",
    featured: true,
  },
  {
    slug: "spiral-binding-wires",
    name: "Spiral Binding Wires",
    category: "binding-wires",
    shortDescription:
      "Export-quality metallic spiral wires. High strength, anti-corrosion coating, and premium finish for professional notebooks.",
    description:
      "Our spiral binding wires are export-quality steel spirals trusted by notebook manufacturers across India. Each coil is precision-wound for consistent pitch and diameter, ensuring smooth insertion and a professional finish. The anti-corrosion coating extends product life, making it ideal for all climate zones.",
    specs: [
      { label: "Material", value: "Premium steel - export grade" },
      { label: "Properties", value: "High strength, anti-corrosion, premium finish" },
      { label: "Diameters", value: "3/8\", 1/2\", 5/8\", 3/4\", 1\" and custom" },
      { label: "Pitch", value: "3:1 and 2:1" },
      { label: "Supply", value: "Wholesale & Bulk" },
    ],
    image: "/images/product-duracoil.jpeg",
    featured: true,
  },
  {
    slug: "notebook-covers",
    name: "Ready-Made Notebook Covers",
    category: "covers",
    shortDescription:
      "300+ designs. Premium quality covers with Mazboot, Shine, and Perfect Finishing options for spiral-bound notebooks.",
    description:
      "With over 300 designs in stock, our ready-made notebook covers are the largest selection available from a single supplier in Chawri Bazaar. Available in Mazboot (durable matte), Shine (glossy laminated), and Perfect Finishing variants. Consistent print quality, sharp edges, and bulk availability make these the go-to choice for notebook manufacturers.",
    specs: [
      { label: "Designs", value: "300+ in stock" },
      { label: "Variants", value: "Mazboot / Shine / Perfect Finishing" },
      { label: "Sizes", value: "A4, A5, Legal, and custom" },
      { label: "Compatible", value: "All standard spiral notebook sizes" },
      { label: "Supply", value: "Wholesale" },
    ],
    image: "/images/rch-catalog-overview.jpeg",
    featured: true,
  },
  {
    slug: "black-ledger-sheets",
    name: "Black Ledger Quality Sheets",
    category: "sheets",
    shortDescription:
      "High-GSM black ledger sheets for spiral-bound notebooks. Durable, smooth, and perfect for every notebook format.",
    description:
      "Our Black Ledger Quality Sheets are specifically formulated for spiral-bound notebook production. High GSM ensures the sheets lie flat and resist tearing during binding. The smooth surface accepts ink cleanly, while the consistent thickness delivers a uniform stack height - critical for automated binding lines.",
    specs: [
      { label: "Type", value: "Black ledger / end sheets" },
      { label: "GSM", value: "90 GSM, 100 GSM, 130 GSM" },
      { label: "Surface", value: "Smooth, durable" },
      { label: "Use", value: "Spiral-bound notebooks & stationery" },
      { label: "Supply", value: "Wholesale" },
    ],
    image: "/images/product-black-ledger.jpeg",
    featured: true,
  },
  {
    slug: "ohp-sheets",
    name: "OHP & DHP Sheets",
    category: "sheets",
    shortDescription:
      "Crystal-clear OHP and DHP sheets for notebook front covers. Consistent thickness, no distortion.",
    description:
      "Our OHP and DHP sheets provide the crystal-clear front cover finish that premium notebooks demand. Manufactured to consistent thickness for smooth binding and a distortion-free view of the notebook cover beneath. Suitable for thermal and cold lamination processes and compatible with all standard comb and spiral binders.",
    specs: [
      { label: "Type", value: "Crystal clear OHP / DHP" },
      { label: "Thickness", value: "75 micron, 100 micron, 125 micron" },
      { label: "Sizes", value: "A4, A5, and custom roll widths" },
      { label: "Compatibility", value: "Comb binding, spiral binding, covers" },
      { label: "Supply", value: "Wholesale & Bulk" },
    ],
    image: "/images/product-all-types.jpeg",
    featured: false,
  },
  {
    slug: "shrink-packing-roll",
    name: "Shrink Packing Roll",
    category: "packaging",
    shortDescription:
      "High-quality shrink film rolls for finished notebook packaging. Tight, professional wrap with excellent clarity.",
    description:
      "Our shrink packing rolls provide the final professional touch to notebook packaging. The high-clarity film shrinks uniformly for a tight, tamper-evident wrap. Suitable for all standard heat-shrink tunnel machines, with consistent roll lengths and widths for uninterrupted production runs.",
    specs: [
      { label: "Type", value: "POF heat-shrink film roll" },
      { label: "Thickness", value: "15 micron, 19 micron, 25 micron" },
      { label: "Roll Widths", value: "10\", 12\", 14\", 16\" and custom" },
      { label: "Clarity", value: "High clarity, gloss finish" },
      { label: "Compatibility", value: "All standard shrink tunnel machines" },
      { label: "Supply", value: "Wholesale & Bulk" },
    ],
    image: "/images/rch-four-solutions.jpeg",
    featured: false,
  },
  {
    slug: "writing-paper",
    name: "Writing Paper",
    category: "sheets",
    shortDescription:
      "Quality writing paper for notebook interiors. Consistent GSM, smooth surface, suitable for all pen types.",
    description:
      "Our writing paper is sourced from trusted mills and selected specifically for notebook interior use. Consistent GSM across the roll eliminates weight variance in finished notebooks. The smooth surface works with ballpoint, gel, and fountain pens without feathering or bleed-through.",
    specs: [
      { label: "Type", value: "Maplitho / ruled / plain" },
      { label: "GSM", value: "60 GSM, 70 GSM, 75 GSM, 80 GSM" },
      { label: "Surface", value: "Smooth, pen-friendly, no bleed-through" },
      { label: "Supply", value: "Wholesale by weight / ream" },
    ],
    image: "/images/product-materials-list-white.jpeg",
    featured: false,
  },
  {
    slug: "black-pp-sheets",
    name: "Black PP Sheets",
    category: "sheets",
    shortDescription:
      "Premium black polypropylene sheets for rigid notebook back covers and protective dividers.",
    description:
      "Black PP (polypropylene) sheets are the preferred material for hard back covers and protective inserts in premium spiral notebooks. Rigid yet lightweight, they resist moisture and provide structural support. Available in standard thicknesses compatible with all spiral binding machinery.",
    specs: [
      { label: "Material", value: "Polypropylene (PP)" },
      { label: "Color", value: "Black" },
      { label: "Thickness", value: "0.3 mm, 0.5 mm, 0.7 mm, 1.0 mm" },
      { label: "Use", value: "Back covers, protective dividers" },
      { label: "Supply", value: "Wholesale & Bulk" },
    ],
    image: "/images/product-materials-list-black.jpeg",
    featured: false,
  },
  {
    slug: "complete-raw-material-kit",
    name: "Complete Raw Material Kit",
    category: "complete-kits",
    shortDescription:
      "Everything you need to manufacture notebooks in one order. Spiral wires, stitching wire, covers, sheets, and packaging.",
    description:
      "RCH Total Solutions is your one-stop supplier for all notebook manufacturing raw materials. Our complete kits include spiral binding wires, stitching wires, ready-made covers, ledger sheets, OHP sheets, writing paper, and shrink packaging - all sourced, quality-checked, and delivered together. Simplify your supply chain with a single trusted partner.",
    specs: [
      { label: "Includes", value: "Binding wires, stitching wires, covers, sheets, packaging" },
      { label: "Delivery", value: "All India" },
      { label: "Customization", value: "Mix and match products to your spec" },
      { label: "Supply", value: "Wholesale / B2B" },
    ],
    image: "/images/product-materials-list-gold.jpeg",
    featured: true,
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
