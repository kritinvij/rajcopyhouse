import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getProductsByCategory, getCrossSells, products, categoryLabels } from "@/lib/products";
import ImageGallery from "@/components/ImageGallery";
import StickyInquiryBar from "@/components/StickyInquiryBar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const productKeywords: Record<string, string[]> = {
  "stitching-steel-wires": ["stitching wire wholesale Delhi", "notebook stitching wire supplier", "saddle stitch wire India", "book binding wire", "18 SWG stitching wire"],
  "spiral-binding-wires": ["spiral binding wire wholesale", "Duracoil spiral wire Delhi", "metal coil binding wire India", "notebook spiral wire supplier", "3:1 pitch binding wire"],
  "notebook-covers": ["notebook covers wholesale Delhi", "ready-made notebook covers", "Mazboot notebook cover", "spiral notebook cover supplier", "300 designs notebook cover"],
  "black-ledger-sheets": ["black ledger sheet supplier", "notebook end sheet wholesale", "high GSM ledger sheet India", "black paper notebook", "ledger quality sheet Delhi"],
  "ohp-sheets": ["OHP sheet wholesale Delhi", "DHP sheet supplier India", "transparency sheet notebook", "clear polypropylene sheet", "OHP film supplier"],
  "shrink-packing-roll": ["shrink packing roll wholesale", "POF shrink film supplier India", "notebook packaging film", "heat shrink roll Delhi", "shrink wrap film roll"],
  "writing-paper": ["writing paper wholesale India", "maplitho paper supplier Delhi", "notebook interior paper", "ruled paper wholesale", "60 GSM writing paper"],
  "black-pp-sheets": ["black PP sheet supplier India", "polypropylene board wholesale", "notebook back cover board", "black plastic sheet Delhi", "PP sheet notebook"],
  "complete-raw-material-kit": ["notebook raw material supplier Delhi", "complete notebook manufacturing kit", "notebook manufacturing materials India", "one stop notebook supplier"],
  "plastic-spiral-rings": ["plastic spiral ring wholesale India", "PVC coil binding ring", "plastic binding coil Delhi", "notebook spiral coil supplier"],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    keywords: productKeywords[slug] ?? [],
    openGraph: {
      title: `${product.name} | Raj Copy House`,
      description: product.shortDescription,
      type: "website",
      url: `https://rajcopyhouse.vercel.app/products/${slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.name} - Raj Copy House`,
        },
      ],
    },
    alternates: {
      canonical: `https://rajcopyhouse.vercel.app/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const crossSells = getCrossSells(slug);

  const whatsappMessage = `Hi, I need ${product.name}${product.specs[0] ? ` (${product.specs[0].value})` : ""} for a bulk order. Please share pricing, minimum order quantity, and availability.`;
  const sampleMessage = `Hi, I'm interested in ${product.name} and would like to request a sample before placing a bulk order. Please share the process.`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://rajcopyhouse.vercel.app${product.image}`,
    url: `https://rajcopyhouse.vercel.app/products/${slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      url: `https://rajcopyhouse.vercel.app/products/${slug}`,
      seller: {
        "@type": "Organization",
        name: "Raj Copy House",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rajcopyhouse.vercel.app" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://rajcopyhouse.vercel.app/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://rajcopyhouse.vercel.app/products/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-2 text-sm text-slate-400">
          <Link href="/" className="hover:text-slate-700">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-slate-700">Products</Link>
          <span>/</span>
          <span className="text-slate-700">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <section className="bg-white px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ImageGallery
              images={[product.image, ...(product.images ?? [])]}
              alt={product.name}
              priority
            />

            <div>
              <div className="mb-3">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  {categoryLabels[product.category]}
                </span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{product.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{product.description}</p>

              {/* Trust strip */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Wholesale / B2B",
                  "GST Invoice Included",
                  "Same-Day Dispatch Available",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-100 bg-white">
                <div className="border-b border-slate-100 bg-stone-50 px-4 py-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Specifications</span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={spec.label} className={`border-b border-slate-50 last:border-0 ${i % 2 === 0 ? "" : "bg-stone-50/50"}`}>
                        <td className="w-2/5 px-4 py-3 font-medium text-slate-700">{spec.label}</td>
                        <td className="px-4 py-3 text-slate-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/919810035108?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon />
                  Request Bulk Price
                </a>
                <a
                  href="tel:+919810035108"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  <PhoneIcon />
                  Call: +91 98100 35108
                </a>
              </div>
              <div className="mt-3 border-t border-slate-100 pt-3">
                <a
                  href={`https://wa.me/919810035108?text=${encodeURIComponent(sampleMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-teal-300 hover:text-teal-700"
                >
                  Request a Sample First
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {crossSells.length > 0 && (
        <section className="border-t border-slate-100 bg-stone-50 px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-1 text-lg font-bold text-slate-900">Often Ordered Together</h2>
            <p className="mb-6 text-sm text-slate-500">Manufacturers ordering this product also buy:</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {crossSells.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/products/${cs.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-100"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={cs.image}
                      alt={cs.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-slate-900 transition-colors group-hover:text-teal-700">
                      {cs.name}
                    </div>
                    <div className="mt-0.5 truncate text-xs text-slate-500">{categoryLabels[cs.category]}</div>
                    <div className="mt-1.5 text-xs font-medium text-teal-600">View details &rarr;</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-stone-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-xl font-bold text-slate-900">Related Products</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/products/${rel.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-900 group-hover:text-teal-700">{rel.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">{rel.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyInquiryBar productName={product.name} />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
