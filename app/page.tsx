import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, categoryLabels, type ProductCategory } from "@/lib/products";
import AnimateIn from "@/components/AnimateIn";

const stats = [
  { value: "40+", label: "Years in Business" },
  { value: "1 Trillion+", label: "Covers Supplied Across India" },
  { value: "300+", label: "Cover Designs" },
  { value: "Pan India", label: "Delivery" },
];

const categories: { category: ProductCategory; label: string; description: string }[] = [
  {
    category: "binding-wires",
    label: "Binding & Stitching Wires",
    description: "Steel spiral wires and stitching wires for every machine type and production scale.",
  },
  {
    category: "covers",
    label: "Notebook Covers",
    description: "300+ ready-made designs in multiple finish options. Consistent print quality, bulk availability.",
  },
  {
    category: "sheets",
    label: "Ledger & Quality Sheets",
    description: "Black ledger sheets, OHP sheets, PP sheets, and writing paper in all GSM options.",
  },
  {
    category: "packaging",
    label: "Shrink & Packing Materials",
    description: "High-clarity shrink rolls for clean, professional notebook packaging.",
  },
  {
    category: "complete-kits",
    label: "Complete Raw Material Kits",
    description: "Everything for notebook manufacturing in a single order from one trusted supplier.",
  },
];

const whyPoints = [
  {
    title: "Premium Quality",
    body: "Every product is sourced and quality-checked to meet the demands of professional notebook manufacturers.",
  },
  {
    title: "One-Stop Supplier",
    body: "From binding wires to shrink rolls, all notebook raw materials available from a single source.",
  },
  {
    title: "All India Delivery",
    body: "Reliable bulk delivery to manufacturers across every state. Fast dispatch from Chawri Bazaar, Delhi.",
  },
  {
    title: "GST Invoice on Every Order",
    body: "Full GST-compliant invoices with every shipment. Claim your input tax credit without chasing paperwork.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero - flush with dark navbar */}
      <section className="bg-slate-800 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="mb-5 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
              Trusted by notebook manufacturers across India
            </div>
            <h1 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              40 Years. Delhi.<br />
              <span className="text-teal-400">Every Raw Material</span> You Need.
            </h1>
            <p className="mb-1 text-sm italic text-slate-500">
              नोटबुक उद्योग का सम्पूर्ण समाधान
            </p>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              40+ years supplying premium raw materials from Chawri Bazaar, Delhi.
              Binding wires, notebook covers, ledger sheets, shrink rolls and more,
              all in one place, delivered across India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon />
                WhatsApp for a Quote
              </a>
              <a
                href="tel:+919810035108"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-slate-900"
              >
                <PhoneIcon />
                Call: +91 98100 35108
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-stone-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Our Products</h2>
            <p className="mt-2 text-slate-500">Everything you need for notebook manufacturing, from one supplier.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <AnimateIn key={cat.category} delay={i * 60}>
                <Link
                  href={`/products?category=${cat.category}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-700">{cat.label}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-500">{cat.description}</p>
                  <span className="text-xs font-medium text-teal-600 group-hover:underline">View products &rarr;</span>
                </Link>
              </AnimateIn>
            ))}
            <AnimateIn delay={categories.length * 60}>
              <Link
                href="/products"
                className="group flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="font-semibold text-slate-700 group-hover:text-teal-700">View Full Catalog</span>
                <span className="text-xs text-slate-400">All products &rarr;</span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
              <p className="mt-2 text-slate-500">Our most popular raw materials for notebook manufacturers.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
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
                    <h3 className="font-semibold text-slate-900 group-hover:text-teal-700">{product.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <span className="mt-3 inline-block text-xs font-medium text-teal-600 group-hover:underline">
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
      <section className="bg-slate-800 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white">Why Choose RCH?</h2>
            <p className="mt-2 text-slate-400">गुणवत्ता - निरंतरता - विश्वसनीयता</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-slate-800/50 p-6">
                <h3 className="mb-2 font-semibold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-teal-600 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Place a Bulk Order?</h2>
          <p className="mt-2 text-teal-100">Reach us directly on WhatsApp or call for immediate assistance.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919810035108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-700 shadow-md transition-all hover:shadow-lg"
            >
              <WhatsAppIcon className="text-green-600" />
              WhatsApp: +91 98100 35108
            </a>
            <a
              href="tel:+919810035108"
              className="flex items-center gap-2 rounded-xl border-2 border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>
          <p className="mt-4 text-xs text-teal-200">
            Proprietor: Manoj Sachdeva &nbsp;|&nbsp; Chawri Bazaar, Delhi - 110006
          </p>
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
