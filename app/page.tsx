import { Suspense } from "react";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import ProductsCatalog from "./products/ProductsCatalog";

type Stat =
  | { display: string; countTo: number; suffix: string; label: string }
  | { display: string; label: string };

const stats: Stat[] = [
  { display: "40+", countTo: 40, suffix: "+", label: "Years Supplying Manufacturers" },
  { display: "1T+", label: "Covers Shipped" },
  { display: "300+", countTo: 300, suffix: "+", label: "Ready-Made Cover Designs" },
  { display: "Pan India", label: "Delivery Coverage" },
];

const marqueeItems = [
  "40+ Years in Business",
  "300+ Cover Designs In Stock",
  "Same-Day Dispatch from Delhi",
  "Pan India Delivery",
  "GST Invoice on Every Order",
  "Wholesale Only · B2B",
  "Spiral Wires · Stitching Wires · OHP Sheets · PP Boards",
  "Notebook Covers · Writing Paper · Shrink Packing",
  "Call Manoj Sachdeva Directly",
  "Gauge-Verified Every Batch",
];

const testimonials = [
  {
    quote:
      "We run 3 stitching machines all day. Used to get wire breaks twice a week from our old supplier. Switched to RCH 5 years ago - we have had maybe 4 breaks total since. Same SWG every spool, every time.",
    author: "Ramesh Bindery Works",
    role: "Notebook Manufacturer, Meerut UP",
  },
  {
    quote:
      "Ordered 500 A4 Shine covers on a Tuesday evening. They were ready for pickup by Wednesday morning. No other supplier in Old Delhi keeps this kind of ready stock across 300+ designs.",
    author: "Sharma Stationery",
    role: "Wholesaler, Sadar Bazaar Delhi",
  },
  {
    quote:
      "I place one order. I get wire, covers, OHP sheets, shrink film - all on one GST invoice. Saves my accountant 5 different supplier entries every month. Input tax credit comes through cleanly every quarter.",
    author: "Northern Notebook Co.",
    role: "Manufacturer, Ludhiana Punjab",
  },
  {
    quote:
      "The Duracoil spirals run clean through our binding machine. Bought from two other suppliers before - coils were always 0.5mm off and kept jamming the inserter. Have not had that problem once since switching.",
    author: "Shree Shyam Stationers",
    role: "Spiral Notebook Manufacturer, Jaipur Rajasthan",
  },
  {
    quote:
      "We are in Surat, not Delhi. Manoj confirms the order by noon and it ships same evening from Chawri Bazaar. Material reaches us in 3-4 days. Never had a short shipment or wrong item in two years.",
    author: "Priya Paper Industries",
    role: "Notebook Manufacturer, Surat Gujarat",
  },
  {
    quote:
      "The DHP sheets hold flat even in Bangalore's humidity. We tried three other brands - all curled. RCH DHP is the only grade that stays dimensionally stable and feeds through the punch without jamming.",
    author: "Anand Paper Mart",
    role: "Stationery Wholesaler, Bengaluru Karnataka",
  },
];


const whyPoints = [
  {
    title: "Gauge-Verified Every Batch",
    body: "Wire SWG and sheet GSM verified before dispatch - same gauge, same caliper, same weight every batch. No line stoppages for reject spools or underweight reams.",
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

const orderSteps = [
  {
    step: "01",
    title: "Send Your List",
    body: "WhatsApp your product list or spec sheet - quantities, gauges, and delivery location.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Get Pricing in 2 Hours",
    body: "We confirm stock and pricing during business hours. No receptionist, no callback - Manoj answers directly.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Same-Day Dispatch",
    body: "Orders confirmed before 2 PM ship same day from Chawri Bazaar. Delivered pan India in 3-7 days.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-800 px-4 pt-16 sm:px-6 sm:pt-24">
        <div className="hero-dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 left-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl pb-24 sm:pb-32">
          <div className="max-w-2xl">
            <div className="animate-fade-in-down mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Trusted by notebook manufacturers across India
            </div>
            <h1
              className="animate-fade-in-up mb-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              One Supplier.<br />
              <span className="text-teal-400">Everything You</span> Need.
            </h1>
            <p className="mb-1 text-sm italic text-slate-500" style={{ animationDelay: "160ms" }}>
              नोटबुक उद्योग का सम्पूर्ण समाधान
            </p>
            <p
              className="animate-fade-in-up mt-5 text-lg leading-relaxed text-slate-300"
              style={{ animationDelay: "200ms" }}
            >
              Spiral wires, stitching wires, OHP sheets, 300+ notebook covers,
              shrink packing rolls, writing paper, PP boards - all in stock.
              One order, one invoice, dispatched same day from Chawri Bazaar, Delhi.
            </p>
            <div
              className="animate-fade-in-up mt-8 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "320ms" }}
            >
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
                    {"countTo" in stat ? (
                      <CountUp to={stat.countTo} suffix={stat.suffix} />
                    ) : (
                      stat.display
                    )}
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-slate-400">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Order ─────────────────────────── */}
      <section className="bg-stone-50 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to Order</h2>
              <p className="mt-2 text-slate-500">
                Confirm stock, get pricing, and dispatch - all in under 24 hours.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-5 sm:grid-cols-3">
            {orderSteps.map((s, i) => (
              <AnimateIn key={s.step} delay={i * 80}>
                <div className="relative rounded-2xl bg-white p-6 shadow-sm">
                  <span className="font-mono text-5xl font-bold text-slate-100 select-none">
                    {s.step}
                  </span>
                  <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    {s.icon}
                  </div>
                  <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
              >
                <WhatsAppIcon />
                Start an Order on WhatsApp
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>


      {/* ── All Products ─────────────────────────── */}
      <section className="bg-stone-50 px-4 pb-2 pt-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Our Products</h2>
            <p className="mt-1.5 text-slate-500">Filter by category or search for exactly what you need.</p>
          </AnimateIn>
        </div>
      </section>
      <Suspense fallback={
        <div className="bg-stone-50 px-4 py-10 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-64 animate-pulse rounded-2xl bg-slate-200" />
            ))}
          </div>
        </div>
      }>
        <ProductsCatalog showBottomCta={false} />
      </Suspense>

      {/* ── Trust Marquee ────────────────────────── */}
      <Marquee items={marqueeItems} />

      {/* ── Why RCH ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-800 px-4 pb-32 pt-20 sm:px-6 sm:pb-36 sm:pt-24">
        {/* wave top */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" className="block w-full" preserveAspectRatio="none">
            <path d="M0,32 C240,0 480,64 720,32 C960,0 1200,64 1440,32 L1440,0 L0,0 Z" fill="#1e1a1a" />
          </svg>
        </div>
        {/* dot grid */}
        <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-60" />
        {/* glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />
        {/* wave bottom into testimonials */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" className="block w-full" preserveAspectRatio="none">
            <path d="M0,32 C360,0 720,64 1080,32 C1260,16 1350,40 1440,32 L1440,64 L0,64 Z" fill="#ffffff" />
          </svg>
        </div>

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

      {/* ── Testimonials ─────────────────────────── */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Trusted by Manufacturers
              </h2>
              <p className="mt-2 text-slate-500">
                40+ years of orders placed, fulfilled, and reordered.
              </p>
            </div>
          </AnimateIn>
          <div className="grid gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.author} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-stone-50 p-6">
                  <div className="mb-4 text-teal-500">
                    <QuoteIcon />
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-stone-200 pt-4">
                    <div className="text-sm font-semibold text-slate-800">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-teal-600 px-4 pb-14 pt-16 sm:px-6 sm:pt-20">
        {/* diagonal cut from white (testimonials) */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 56" className="block w-full" preserveAspectRatio="none">
            <path d="M0,0 L1440,56 L1440,0 Z" fill="#ffffff" />
          </svg>
        </div>
        {/* radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Place Your Order Today.</h2>
            <p className="mt-2 text-teal-100">
              WhatsApp your list or call - we&apos;ll confirm availability and pricing within the hour.
            </p>
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

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
