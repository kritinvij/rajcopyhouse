import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categoryLabels, type ProductCategory } from "@/lib/products";

const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "1 Trillion+", label: "Notebook Covers Sold" },
  { value: "300+", label: "Cover Designs" },
  { value: "Pan India", label: "Delivery" },
];

const categories: { category: ProductCategory; label: string; description: string; icon: string }[] = [
  {
    category: "binding-wires",
    label: "Binding & Stitching Wires",
    description: "Steel Bind, Duracoil spirals, and Stitch Bind wires for every machine.",
    icon: "🔩",
  },
  {
    category: "covers",
    label: "Notebook Covers",
    description: "300+ ready-made designs. Mazboot, Shine, and Perfect Finishing variants.",
    icon: "📓",
  },
  {
    category: "sheets",
    label: "Ledger & Quality Sheets",
    description: "Black ledger sheets, OHP sheets, PP sheets, and writing paper.",
    icon: "📄",
  },
  {
    category: "packaging",
    label: "Shrink & Packing Materials",
    description: "Pack Bind shrink rolls for clean, professional notebook packaging.",
    icon: "📦",
  },
  {
    category: "complete-kits",
    label: "Complete Raw Material Kits",
    description: "Everything for notebook manufacturing in a single order.",
    icon: "🏭",
  },
];

const whyPoints = [
  {
    title: "Premium Quality",
    body: "Every product is sourced and quality-checked to meet the demands of professional notebook manufacturers.",
    icon: "✦",
  },
  {
    title: "One-Stop Supplier",
    body: "From binding wires to shrink rolls — all notebook raw materials available from a single trusted source.",
    icon: "⊕",
  },
  {
    title: "All India Delivery",
    body: "Reliable bulk delivery to notebook manufacturers across every state. Fast dispatch from Chawri Bazaar.",
    icon: "⟡",
  },
  {
    title: "Wholesale Pricing",
    body: "Competitive wholesale rates with bulk pricing tiers. Call or WhatsApp us with your requirements.",
    icon: "◈",
  },
];

const subBrands = [
  { name: "Steel Bind", tagline: "Metallic Spiral Wires", color: "bg-slate-100" },
  { name: "Duracoil", tagline: "Export Quality Spirals", color: "bg-blue-50" },
  { name: "Stitch Bind", tagline: "Stitching Steel Wires", color: "bg-amber-50" },
  { name: "Clear Bind", tagline: "OHP Sheets", color: "bg-sky-50" },
  { name: "Pack Bind", tagline: "Shrink Packing Rolls", color: "bg-green-50" },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="mb-4 inline-block rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              Trusted by notebook manufacturers across India
            </div>
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Complete Notebook{" "}
              <span className="text-amber-400">Manufacturing</span> Solutions
            </h1>
            <p className="mb-1 text-base text-slate-400 italic">
              नोटबुक उद्योग का सम्पूर्ण समाधान
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              40+ years supplying premium raw materials from Chawri Bazaar, Delhi.
              Binding wires, notebook covers, ledger sheets, shrink rolls and more —
              all in one place, delivered across India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-amber-600"
              >
                <WhatsAppIcon />
                WhatsApp for a Quote
              </a>
              <a
                href="tel:+919810035108"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-400 hover:bg-slate-800"
              >
                <PhoneIcon />
                Call: +91 98100 35108
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 lg:grid-cols-4 lg:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <div className="text-2xl font-bold text-blue-950 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Products
            </h2>
            <p className="mt-2 text-slate-500">
              Everything you need for notebook manufacturing, from one supplier.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.category}
                href={`/products?category=${cat.category}`}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-900">
                    {cat.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {cat.description}
                  </p>
                </div>
                <span className="mt-auto text-xs font-medium text-blue-700 group-hover:underline">
                  View products &rarr;
                </span>
              </Link>
            ))}
            {/* All products card */}
            <Link
              href="/products"
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-center transition-all hover:border-blue-300 hover:bg-blue-50"
            >
              <span className="text-2xl">📋</span>
              <span className="font-semibold text-slate-700 group-hover:text-blue-900">
                View Full Catalog
              </span>
              <span className="text-xs text-slate-400">All products &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Featured Products
              </h2>
              <p className="mt-2 text-slate-500">
                Our most popular raw materials for notebook manufacturers.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    {product.brand && (
                      <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wide text-amber-600">
                        {product.brand}
                      </span>
                    )}
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-900">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <span className="mt-3 inline-block text-xs font-medium text-blue-700 group-hover:underline">
                      View details &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why RCH */}
      <section className="bg-blue-950 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Why Choose RCH?
            </h2>
            <p className="mt-2 text-blue-300">
              गुणवत्ता - निरंतरता - विश्वसनीयता
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-blue-800 bg-blue-900/40 p-6"
              >
                <div className="mb-3 text-xl text-amber-400">{point.icon}</div>
                <h3 className="mb-2 font-semibold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-blue-200">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Our Brands
            </h2>
            <p className="mt-2 text-slate-500">
              One house, five specialized product lines.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {subBrands.map((brand) => (
              <div
                key={brand.name}
                className={`rounded-2xl ${brand.color} border border-slate-200 px-6 py-4 text-center`}
              >
                <div className="font-bold text-slate-800">{brand.name}</div>
                <div className="mt-0.5 text-xs text-slate-500">{brand.tagline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-500 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Place a Bulk Order?
          </h2>
          <p className="mt-2 text-amber-100">
            Reach us directly on WhatsApp or call for immediate assistance.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919810035108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-amber-600 shadow-md transition-all hover:shadow-lg"
            >
              <WhatsAppIcon className="text-green-600" />
              WhatsApp: +91 98100 35108
            </a>
            <a
              href="tel:+919810035108"
              className="flex items-center gap-2 rounded-xl border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>
          <p className="mt-4 text-xs text-amber-200">
            Proprietor: Manoj Sachdeva &nbsp;|&nbsp; Chawri Bazaar, Delhi - 110006
          </p>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
