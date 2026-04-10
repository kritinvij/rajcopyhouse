import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "40+ years supplying premium notebook manufacturing raw materials from Chawri Bazaar, Delhi. Meet Manoj Sachdeva and the RCH story.",
};

const values = [
  {
    title: "Quality",
    description:
      "Every product leaving our warehouse is inspected to ensure it meets the demands of professional notebook production lines.",
  },
  {
    title: "Consistency",
    description:
      "Uniform wire diameters, consistent sheet weights, stable supply — so your production runs never stop because of material variance.",
  },
  {
    title: "Commitment",
    description:
      "40+ years of showing up for manufacturers across India. We treat your supply chain as our responsibility.",
  },
];

const brands = [
  {
    name: "Steel Bind",
    product: "Metallic Spiral Wires",
    description: "Premium metallic spiral binding wires for professional notebooks.",
  },
  {
    name: "Duracoil",
    product: "Export Quality Steel Spirals",
    description: "Export-grade anti-corrosion steel spirals. High strength, premium finish.",
  },
  {
    name: "Stitch Bind",
    product: "Stitching Steel Wires",
    description: "High-tensile stitching wires engineered for smooth, consistent machine feed.",
  },
  {
    name: "Clear Bind",
    product: "OHP & DHP Sheets",
    description: "Crystal-clear sheets for notebook front covers and binding applications.",
  },
  {
    name: "Pack Bind",
    product: "Shrink Packing Rolls",
    description: "High-clarity shrink film for clean, professional notebook packaging.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              About Raj Copy House
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A 40+ year legacy of supplying notebook manufacturers across India
              with the raw materials that keep their production lines running.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                From Chawri Bazaar to Every Corner of India
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-slate-600">
                <p>
                  Raj Copy House was built on a single premise: notebook manufacturers
                  deserve a reliable, quality-first supplier they can count on. From
                  our base in Chawri Bazaar — the heart of Delhi&apos;s stationery trade —
                  we have been delivering that promise for over four decades.
                </p>
                <p>
                  What started as a focused binding wire supplier has grown into a
                  complete notebook manufacturing solutions house. Today, RCH Total
                  Solutions carries binding wires, stitching wires, spiral coils,
                  ready-made notebook covers, ledger sheets, OHP sheets, shrink packing
                  rolls, writing paper, and complete raw material kits — all under one roof.
                </p>
                <p>
                  Over one trillion notebook covers sold. Hundreds of manufacturers
                  supplied across India. That is not a claim — it is a track record built
                  one order at a time over 40 years.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-blue-950 p-8 text-white">
              <div className="mb-6 text-4xl font-bold text-amber-400">
                1 Trillion+
              </div>
              <div className="mb-6 text-lg text-blue-200">
                Notebook covers sold in the last 40 years.
              </div>
              <div className="border-t border-blue-800 pt-6">
                <div className="font-semibold text-white">Manoj Sachdeva</div>
                <div className="text-sm text-blue-300">Proprietor, Raj Copy House</div>
                <div className="mt-3 text-sm leading-relaxed text-blue-200">
                  &ldquo;Our business runs on relationships. Every manufacturer we supply
                  knows they can call us directly — and get an answer.&rdquo;
                </div>
                <a
                  href="tel:+919810035108"
                  className="mt-4 inline-block text-sm font-medium text-amber-400 hover:underline"
                >
                  +91 98100 35108
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-2 text-lg font-bold text-blue-900">{v.title}</div>
                <p className="text-sm leading-relaxed text-slate-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Product Brands
          </h2>
          <p className="mb-10 text-center text-slate-500">
            One house. Five specialized brands. All manufactured to the RCH standard.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="mb-1 font-bold text-blue-950">{brand.name}</div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                  {brand.product}
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-amber-500 px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Talk to Us Directly
          </h2>
          <p className="mt-2 text-amber-100">
            No forms, no waiting. Reach Manoj Sachdeva on call or WhatsApp.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/919810035108"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-amber-600 shadow-md transition-all hover:shadow-lg"
            >
              WhatsApp: +91 98100 35108
            </a>
            <a
              href="tel:+919810035108"
              className="rounded-xl border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
