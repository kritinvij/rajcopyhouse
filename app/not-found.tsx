import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-slate-800 px-4 py-20 text-center sm:px-6">
      <div className="hero-dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative">
        <div className="font-mono text-8xl font-bold text-teal-400/30 sm:text-9xl">404</div>
        <h1 className="-mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-400">
          This page does not exist. If you were looking for a product or a quote, try the links below.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/products"
            className="rounded-xl bg-teal-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
          >
            Browse Products
          </Link>
          <a
            href="https://wa.me/919810035108"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-600 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
          >
            WhatsApp for a Quote
          </a>
          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-teal-400"
          >
            Go to Homepage &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
