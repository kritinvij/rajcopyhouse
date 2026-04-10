import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "40+ years supplying premium notebook manufacturing raw materials from Chawri Bazaar, Delhi. Meet Manoj Sachdeva and the RCH story.",
};

const values = [
  {
    title: "Quality",
    description: "Every product leaving our warehouse is inspected to ensure it meets the demands of professional notebook production lines.",
  },
  {
    title: "Consistency",
    description: "Uniform wire diameters, consistent sheet weights, stable supply - so your production runs never stop because of material variance.",
  },
  {
    title: "Commitment",
    description: "40+ years of showing up for manufacturers across India. We treat your supply chain as our responsibility.",
  },
];

const productLines = [
  { name: "Steel Spiral Wires", description: "Premium metallic spiral binding wires for professional notebooks." },
  { name: "Stitching Steel Wires", description: "High-tensile stitching wires engineered for smooth, consistent machine feed." },
  { name: "OHP and DHP Sheets", description: "Crystal-clear sheets for notebook front covers and binding applications." },
  { name: "Shrink Packing Rolls", description: "High-clarity shrink film for clean, professional notebook packaging." },
  { name: "Notebook Covers", description: "300+ designs in Mazboot, Shine, and Perfect Finishing variants." },
  { name: "Complete Raw Material Range", description: "Ledger sheets, writing paper, PP sheets, and full manufacturing kits." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
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
                  Raj Copy House was built on a single premise: notebook manufacturers
                  deserve a reliable, quality-first supplier they can count on. From
                  our base in Chawri Bazaar, the heart of Delhi&apos;s stationery trade,
                  we have been delivering that promise for over four decades.
                </p>
                <p>
                  What started as a focused binding wire supplier has grown into a
                  complete notebook manufacturing solutions house. Today, RCH Total
                  Solutions carries binding wires, stitching wires, spiral coils,
                  ready-made notebook covers, ledger sheets, OHP sheets, shrink packing
                  rolls, writing paper, and complete raw material kits, all under one roof.
                </p>
                <p>
                  Over one trillion notebook covers sold. Hundreds of manufacturers
                  supplied across India. That is not a claim - it is a track record built
                  one order at a time over 40 years.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900 p-8 text-white">
              <div className="mb-3 text-5xl font-bold text-teal-400">1 Trillion+</div>
              <div className="mb-6 text-lg text-slate-300">
                Notebook covers sold in the last 40 years.
              </div>
              <div className="border-t border-slate-700 pt-6">
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
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-2 text-lg font-bold text-teal-700">{v.title}</div>
                <p className="text-sm leading-relaxed text-slate-500">{v.description}</p>
              </div>
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
