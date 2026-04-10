import { Suspense } from "react";
import ProductsCatalog from "./ProductsCatalog";

export const metadata = {
  title: "Products",
  description:
    "Complete notebook manufacturing raw materials - binding wires, stitching wires, notebook covers, ledger sheets, OHP sheets, shrink rolls. Wholesale & bulk supply.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-slate-800 px-4 py-12 sm:px-6">
        <div className="hero-dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-24 -top-16 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Our Products
          </h1>
          <p className="mt-2 text-slate-300">
            Complete notebook manufacturing raw materials - wholesale &amp; bulk supply.
          </p>
        </div>
      </section>

      <Suspense fallback={<ProductsLoading />}>
        <ProductsCatalog />
      </Suspense>
    </>
  );
}

function ProductsLoading() {
  return (
    <div className="bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-64 animate-pulse rounded-2xl bg-slate-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
