"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, categoryLabels, type ProductCategory } from "@/lib/products";

const allCategories: ProductCategory[] = [
  "binding-wires",
  "covers",
  "sheets",
  "packaging",
  "complete-kits",
];

export default function ProductsCatalog() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  useEffect(() => {
    const cat = searchParams.get("category") as ProductCategory | null;
    if (cat && allCategories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <div className="sticky top-[57px] z-30 bg-white px-4 py-3 shadow-sm sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-1.5 overflow-x-auto pb-0.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Products
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="bg-stone-50 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm text-slate-400">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && <span> in {categoryLabels[activeCategory]}</span>}
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
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
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-semibold text-slate-900 group-hover:text-teal-700">{product.name}</h2>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`https://wa.me/919810035108?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 rounded-lg bg-teal-500 py-2 text-center text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      WhatsApp for Price
                    </a>
                    <span className="flex items-center rounded-lg bg-slate-100 px-3 text-xs font-medium text-slate-700">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h2 className="text-xl font-bold">Need a Custom Bulk Order?</h2>
            <p className="mt-2 text-slate-300">
              Tell us what you need - quantities, specifications, delivery location.
              We will get back to you immediately.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                WhatsApp Your Requirements
              </a>
              <a
                href="tel:+919810035108"
                className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Call: +91 98100 35108
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
