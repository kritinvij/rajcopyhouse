import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About",
  description: "40+ years supplying premium notebook manufacturing raw materials from Chawri Bazaar, Delhi. Meet Manoj Sachdeva and the RCH story.",
};

const subBrands = [
  {
    name: "Duracoil",
    tagline: "Premium Metal Spiral",
    description: "Export-quality steel spiral wires. Rust and corrosion resistant coating. Precision wound for bulk notebook production lines.",
    gradient: "from-blue-950 to-slate-900",
    accent: "text-blue-400",
  },
  {
    name: "SteelBind",
    tagline: "Ready to Use Metallic Spiral",
    description: "Strong, rust-free metallic spirals ready for direct insertion. Precision binding for professional finish on every notebook.",
    gradient: "from-slate-800 to-slate-950",
    accent: "text-slate-300",
  },
  {
    name: "Clear Bind",
    tagline: "Crystal Clear OHP Sheets",
    description: "Optically clear OHP and DHP front cover sheets. Flat, dimensionally stable, distortion-free across every roll.",
    gradient: "from-teal-950 to-slate-900",
    accent: "text-teal-400",
  },
  {
    name: "Pack Bind",
    tagline: "Shrink Packing Rolls",
    description: "High-clarity shrink film for professional notebook packaging. Conforms tightly without bubbling for a shelf-ready finish.",
    gradient: "from-emerald-950 to-slate-900",
    accent: "text-emerald-400",
  },
  {
    name: "Stitch Bind",
    tagline: "High-Tensile Stitching Wire",
    description: "Smooth, consistent wire feed through all stitching heads. Verified gauge every batch. Zero jams, zero rework.",
    gradient: "from-amber-950 to-slate-900",
    accent: "text-amber-400",
  },
];

const values = [
  {
    title: "Verified Quality",
    description: "Wire gauge tolerance held to within standard SWG. Sheet GSM verified per batch. Every product leaving our warehouse meets the demands of professional notebook production lines.",
  },
  {
    title: "Same-Day Dispatch",
    description: "Orders confirmed before 2 PM ship the same day from Chawri Bazaar. Consistent wire diameters and verified sheet weights mean your line runs without interruption.",
  },
  {
    title: "GST Invoice on Every Order",
    description: "Full GST-compliant invoices provided with every shipment - essential for manufacturers claiming input tax credit. 40+ years, zero compromise on documentation.",
  },
];

const productLines = [
  { name: "Steel Spiral Wires", description: "Gauge-verified spiral binding wires in multiple diameters - consistent coil-to-coil for uninterrupted machine runs." },
  { name: "Stitching Steel Wires", description: "High-tensile stitching wires that feed cleanly through stitching heads - no jamming, no rework." },
  { name: "OHP and DHP Sheets", description: "Optically clear OHP and DHP sheets for front covers - flat, dimensionally stable, consistent in every roll." },
  { name: "Shrink Packing Rolls", description: "High-clarity shrink film that conforms tightly without bubbling - finished packs look shelf-ready." },
  { name: "Notebook Covers", description: "300+ designs across Mazboot, Shine, and Perfect Finishing - from school notebooks to premium corporate diaries." },
  { name: "Complete Raw Material Range", description: "Ledger sheets, writing paper, PP sheets, and bundled kits covering every input from raw paper to finished pack." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-800 px-4 py-16 sm:px-6">
        <div className="hero-dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">About Raj Copy House</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A 40+ year legacy of supplying notebook manufacturers across India
              with the raw materials that keep their production lines running.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                From Chawri Bazaar to Every Corner of India
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-600">
                <p>
                  Raj Copy House started in Chawri Bazaar with one conviction: the
                  manufacturers building India&apos;s notebooks deserve a supplier who
                  never makes them chase stock or question quality. Four decades later,
                  nothing about that has changed.
                </p>
                <p>
                  What started as a focused binding wire operation now covers every input
                  a notebook line needs - spiral wires, stitching wires, OHP and DHP
                  sheets, shrink packing rolls, 300+ cover designs, ledger sheets, writing
                  paper, and complete kits. One supplier, one call, everything confirmed.
                </p>
                <p>
                  One trillion notebook covers. Hundreds of manufacturers across India.
                  The number is staggering, but what it really represents is 40 years of
                  orders placed, fulfilled, and reordered - because manufacturers came back.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900 p-8 text-white">
              <div className="mb-3 text-5xl font-bold text-teal-400">1 Trillion+</div>
              <div className="mb-6 text-lg text-slate-300">
                Notebook covers supplied across manufacturers in 40+ years.
              </div>
              <div className="pt-6">
                <div className="font-semibold text-white">Manoj Sachdeva</div>
                <div className="text-sm text-slate-400">Proprietor, Raj Copy House</div>
                <div className="mt-3 text-sm leading-relaxed text-slate-300">
                  &ldquo;Our business runs on relationships. Every manufacturer we supply
                  knows they can call us directly and get an answer.&rdquo;
                </div>
                <a href="tel:+919810035108" className="mt-4 inline-block text-sm font-medium text-teal-400 hover:underline">
                  +91 98100 35108
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 80}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-2 text-lg font-bold text-teal-700">{v.title}</div>
                  <p className="text-sm leading-relaxed text-slate-500">{v.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">What We Supply</h2>
          <p className="mb-10 text-slate-500">
            All product ranges available at wholesale quantities. Multiple grades and specifications per category.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productLines.map((line) => (
              <div key={line.name} className="rounded-2xl bg-stone-50 p-5">
                <div className="mb-1 font-semibold text-slate-800">{line.name}</div>
                <p className="text-sm leading-relaxed text-slate-500">{line.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-brands */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Brands</h2>
              <p className="mt-2 text-slate-400">
                Each product line under a distinct brand - built for specific manufacturing needs.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subBrands.map((brand, i) => (
              <AnimateIn key={brand.name} delay={i * 70}>
                <div className={`rounded-2xl bg-gradient-to-br ${brand.gradient} p-6 border border-white/5`}>
                  <div className={`text-xl font-bold ${brand.accent}`}>{brand.name}</div>
                  <div className="mt-0.5 text-xs font-medium uppercase tracking-widest text-slate-500">
                    {brand.tagline}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{brand.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-600 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-white">Talk to Us Directly</h2>
          <p className="mt-2 text-teal-100">No forms, no waiting. Reach Manoj Sachdeva on call or WhatsApp.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919810035108"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-teal-700 shadow-md transition-all hover:shadow-lg"
            >
              WhatsApp: +91 98100 35108
            </a>
            <a
              href="tel:+919810035108"
              className="rounded-xl border-2 border-white/60 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
