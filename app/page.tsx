import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categoryLabels, type ProductCategory } from "@/lib/products";
import AnimateIn from "@/components/AnimateIn";

const stats = [
  { value: "40+", label: "Years Supplying Manufacturers" },
  { value: "1 Trillion+", label: "Covers Shipped" },
  { value: "300+", label: "Ready-Made Cover Designs" },
  { value: "Pan India", label: "Delivery Coverage" },
];

const categories: {
  category: ProductCategory;
  label: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    category: "binding-wires",
    label: "Binding & Stitching Wires",
    description:
      "Spiral and stitching wires compatible with all major machine types. Available in bulk quantities for uninterrupted production runs.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    category: "covers",
    label: "Notebook Covers",
    description:
      "300+ in-stock designs across matte, gloss, and specialty finishes. Consistent colour and print quality across large runs.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    category: "sheets",
    label: "Ledger & Quality Sheets",
    description:
      "Black ledger, OHP, PP sheets, and writing paper across all GSM grades. Sourced for consistent thickness and ink absorption.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    category: "packaging",
    label: "Shrink & Packing Materials",
    description:
      "High-clarity shrink rolls sized for standard notebook dimensions. Clean seal, shelf-ready finish.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    category: "complete-kits",
    label: "Complete Raw Material Kits",
    description:
      "Wires, covers, sheets, and shrink rolls in a single sourced order. Fewer vendors, one GST invoice, faster procurement.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
];

const whyPoints = [
  {
    title: "Premium Quality",
    body: "Materials are checked for consistency before dispatch - same spec batch to batch, so your line doesn't stop for rejects.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "One-Stop Supplier",
    body: "Wires, covers, sheets, shrink rolls - everything under one account, one invoice, one point of contact.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "All India Delivery",
    body: "Same or next-day dispatch from Chawri Bazaar. Delivered to manufacturers across every state.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "GST Invoice on Every Order",
    body: "Every order ships with a full GST-compliant invoice. Input tax credit, no follow-ups needed.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-800 px-4 pt-16 sm:px-6 sm:pt-24">
        {/* dot grid */}
        <div className="hero-dot-grid pointer-events-none absolute inset-0" />
        {/* glow blobs */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl pb-24 sm:pb-32">
          <div className="max-w-2xl">
            <div className="animate-fade-in-down mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Trusted by notebook manufacturers across India
            </div>
            <h1 className="animate-fade-in-up mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}>
              One Supplier.<br />
              <span className="text-teal-400">Everything You</span> Need.
            </h1>
            <p className="mb-1 text-sm italic text-slate-500" style={{ animationDelay: "160ms" }}>
              नोटबुक उद्योग का सम्पूर्ण समाधान
            </p>
            <p className="animate-fade-in-up mt-5 text-lg leading-relaxed text-slate-300"
              style={{ animationDelay: "200ms" }}>
              Since 1984, Raj Copy House has supplied binding wires, notebook covers,
              ledger sheets, shrink rolls, and more to manufacturers across India.
              One order. One invoice. Pan India delivery from Chawri Bazaar, Delhi.
            </p>
            <div className="animate-fade-in-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}>
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400 hover:shadow-teal-400/30"
              >
                <WhatsAppIcon />
                WhatsApp for a Quote
              </a>
              <a
                href="tel:+919810035108"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-400 hover:text-white"
              >
                <PhoneIcon />
                Call: +91 98100 35108
              </a>
            </div>
          </div>
        </div>

        {/* wave into stats */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 72" className="block w-full" preserveAspectRatio="none">
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-teal-700 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-slate-400">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Lines Navigator ───────────────── */}
      <section className="border-y border-slate-100 bg-white px-4 py-0 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="grid divide-y divide-slate-100 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
              {categories.map((cat, i) => (
                <Link
                  key={cat.category}
                  href={`/products?category=${cat.category}`}
                  className="group flex flex-col gap-2.5 px-0 py-6 transition-colors sm:px-6 sm:first:pl-0 sm:last:pr-0 hover:bg-transparent"
                >
                  <span className="font-mono text-xs text-slate-300">0{i + 1}</span>
                  <div className="flex h-8 w-8 items-center justify-center text-teal-500 transition-transform duration-200 group-hover:scale-110">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-teal-700 leading-snug">
                    {cat.label}
                  </span>
                  <span className="text-xs text-slate-400 transition-all group-hover:text-teal-500 group-hover:translate-x-0.5 inline-block">
                    View &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────── */}
      {featured.length > 0 && (
        <section className="bg-stone-50 px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
                  <p className="mt-1.5 text-slate-500">Most popular raw materials for notebook manufacturers.</p>
                </div>
                <Link
                  href="/products"
                  className="hidden text-sm font-medium text-teal-600 transition-colors hover:text-teal-800 sm:block"
                >
                  All products &rarr;
                </Link>
              </div>
            </AnimateIn>

            {/* Hero card - first featured product */}
            {featured[0] && (
              <AnimateIn>
                <div className="group mb-5 overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="grid lg:grid-cols-2">
                    <Link
                      href={`/products/${featured[0].slug}`}
                      className="relative block aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-auto lg:min-h-[320px]"
                    >
                      <Image
                        src={featured[0].image}
                        alt={featured[0].name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </Link>
                    <div className="flex flex-col justify-center p-8 lg:p-10">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                        {categoryLabels[featured[0].category]}
                      </span>
                      <Link href={`/products/${featured[0].slug}`}>
                        <h3 className="mt-2 text-2xl font-bold text-slate-900 transition-colors hover:text-teal-700 lg:text-3xl">
                          {featured[0].name}
                        </h3>
                      </Link>
                      <p className="mt-3 text-base leading-relaxed text-slate-500">
                        {featured[0].shortDescription}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {featured[0].specs.slice(0, 2).map((spec) => (
                          <span
                            key={spec.label}
                            className="rounded-md border border-slate-100 bg-stone-50 px-2.5 py-1 text-xs text-slate-500"
                          >
                            <span className="font-semibold text-slate-700">{spec.label}:</span>{" "}
                            {spec.value.length > 30 ? spec.value.slice(0, 30) + "…" : spec.value}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex gap-3">
                        <a
                          href={`https://wa.me/919810035108?text=${encodeURIComponent(`Hi, I need ${featured[0].name} for a bulk order. Please share pricing.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
                        >
                          WhatsApp for Price
                        </a>
                        <Link
                          href={`/products/${featured[0].slug}`}
                          className="flex items-center text-sm font-medium text-slate-500 transition-colors hover:text-teal-600"
                        >
                          View details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            )}

            {/* Remaining featured products */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.slice(1).map((product, i) => (
                <AnimateIn key={product.slug} delay={i * 60}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                        {categoryLabels[product.category]}
                      </span>
                      <h3 className="mt-1 font-semibold text-slate-900 transition-colors group-hover:text-teal-700">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
                        {product.shortDescription}
                      </p>
                      <span className="mt-3 inline-block text-xs font-medium text-teal-600 transition-all group-hover:translate-x-0.5 group-hover:underline">
                        View details &rarr;
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/products" className="block rounded-xl border border-slate-200 py-3 text-center text-sm font-medium text-slate-600 hover:border-teal-200 hover:text-teal-700">
                Browse all products &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

            {/* ── Why RCH ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-800 px-4 py-20 sm:px-6 sm:py-24">
        {/* wave top - bites into section from white above */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" className="block w-full" preserveAspectRatio="none">
            <path d="M0,32 C240,0 480,64 720,32 C960,0 1200,64 1440,32 L1440,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        {/* dot grid */}
        <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-60" />
        {/* glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <AnimateIn>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-white">Why Choose RCH?</h2>
              <p className="mt-2 text-slate-400">गुणवत्ता - निरंतरता - विश्वसनीयता</p>
            </div>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyPoints.map((point, i) => (
              <AnimateIn key={point.title} delay={i * 80}>
                <div className="group flex gap-4 rounded-2xl border border-slate-600/40 bg-slate-700/50 p-6 transition-all duration-300 hover:border-teal-500/40 hover:bg-slate-700">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 transition-colors group-hover:bg-teal-500/20">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-white">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{point.body}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-teal-600 px-4 pb-14 pt-16 sm:px-6 sm:pt-20">
        {/* diagonal cut from slate-800 */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 56" className="block w-full" preserveAspectRatio="none">
            <path d="M0,0 L1440,56 L1440,0 Z" fill="#1e293b" />
          </svg>
        </div>
        {/* radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Place Your Order Today.</h2>
            <p className="mt-2 text-teal-100">WhatsApp your list or call - we&apos;ll confirm availability and pricing within the hour.</p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-700 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <WhatsAppIcon className="text-green-600" />
                WhatsApp: +91 98100 35108
              </a>
              <a
                href="tel:+919810035108"
                className="flex items-center gap-2 rounded-xl border-2 border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                <PhoneIcon />
                Call Now
              </a>
            </div>
            <p className="mt-5 text-xs text-teal-200">
              Proprietor: Manoj Sachdeva &nbsp;|&nbsp; Chawri Bazaar, Delhi - 110006
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`h-5 w-5 shrink-0 ${className}`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
