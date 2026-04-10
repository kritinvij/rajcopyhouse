"use client";

import { useState, useEffect, useRef } from "react";
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

export default function ProductsCatalog({ showBottomCta = true }: { showBottomCta?: boolean }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [fading, setFading] = useState(false);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category") as ProductCategory | null;
    if (cat && allCategories.includes(cat)) setActiveCategory(cat);
  }, [searchParams]);

  const triggerFade = (fn: () => void) => {
    if (fadeTimer.current) clearTimeout(fadeTimer.current);
    setFading(true);
    fadeTimer.current = setTimeout(() => {
      fn();
      setFading(false);
    }, 140);
  };

  const handleCategoryChange = (cat: ProductCategory | "all") => {
    triggerFade(() => setActiveCategory(cat));
  };

  // Search updates instantly - no fade so products stay visible while typing
  const handleSearch = (value: string) => {
    setInputValue(value);
    setQuery(value);
  };

  const handleClear = () => {
    setInputValue("");
    setQuery("");
  };

  const filtered = products.filter((p) => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    if (!query.trim()) return matchesCat;
    const q = query.toLowerCase();
    return (
      matchesCat &&
      (p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.specs.some((s) => s.value.toLowerCase().includes(q)))
    );
  });

  return (
    <>
      {/* Sticky filter + search bar */}
      <div className="sticky top-[57px] z-30 border-b border-slate-100 bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {/* Search input */}
            <div className="relative sm:w-56 shrink-0">
              <SearchIcon />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-8 text-sm text-slate-700 placeholder:text-slate-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                aria-label="Search products"
              />
              {inputValue && (
                <button
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600"
                >
                  <XIcon />
                </button>
              )}
            </div>

            {/* Divider */}
            <div className="hidden h-5 w-px bg-slate-200 sm:block" />

            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-teal-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {categoryLabels[cat]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="bg-stone-50 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm text-slate-400">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {query && <span> matching &ldquo;{query}&rdquo;</span>}
            {!query && activeCategory !== "all" && (
              <span> in {categoryLabels[activeCategory]}</span>
            )}
          </p>

          <div
            className={`transition-opacity duration-150 ${fading ? "opacity-0" : "opacity-100"}`}
          >
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-slate-500">
                  No products found{query ? ` for "${query}"` : ""}.
                </p>
                <button
                  onClick={handleClear}
                  className="mt-3 cursor-pointer text-sm text-teal-600 hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-teal-100"
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
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
                          {categoryLabels[product.category]}
                        </span>
                      </div>
                      {product.featured && (
                        <div className="absolute right-3 top-3">
                          <span className="rounded-full bg-teal-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                            Top Pick
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-semibold text-slate-900 transition-colors group-hover:text-teal-700">
                        {product.name}
                      </h2>
                      <p className="mt-1.5 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-500">
                        {product.shortDescription}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.specs.slice(0, 2).map((spec) => (
                          <span
                            key={spec.label}
                            className="rounded-md border border-slate-100 bg-slate-50 px-2 py-1 text-xs text-slate-500"
                          >
                            <span className="font-medium text-slate-700">{spec.label}:</span>{" "}
                            {spec.value.length > 30 ? spec.value.slice(0, 30) + "…" : spec.value}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex gap-2">
                        <a
                          href={`https://wa.me/919810035108?text=${encodeURIComponent(
                            `Hi, I need ${product.name}${product.specs[0] ? ` (${product.specs[0].value})` : ""} for a bulk order. Please share pricing, minimum order quantity, and availability.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-teal-500 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-600"
                        >
                          <MiniWhatsAppIcon />
                          WhatsApp for Price
                        </a>
                        <span className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-600 transition-colors group-hover:border-teal-300 group-hover:bg-teal-50 group-hover:text-teal-700">
                          Details
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                            <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          {showBottomCta && <div className="relative mt-12 overflow-hidden rounded-2xl bg-slate-800 p-8 text-center text-white">
            <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-50" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/15 blur-3xl" />
            <div className="relative">
              <h2 className="text-xl font-bold">Need a Custom Bulk Order?</h2>
              <p className="mt-2 text-slate-300">
                Tell us what you need - quantities, specifications, delivery location.
                We&apos;ll get back to you within the hour.
              </p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/919810035108"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-all hover:bg-teal-400"
                >
                  WhatsApp Your Requirements
                </a>
                <a
                  href="tel:+919810035108"
                  className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
                >
                  Call: +91 98100 35108
                </a>
              </div>
            </div>
          </div>}
        </div>
      </section>
    </>
  );
}

function MiniWhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}
