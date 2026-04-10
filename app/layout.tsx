import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajcopyhouse.vercel.app"),
  title: {
    default: "Raj Copy House | Complete Notebook Manufacturing Solutions",
    template: "%s | Raj Copy House",
  },
  description:
    "Premium notebook manufacturing raw materials supplier in Chawri Bazaar, Delhi. Binding wires, stitching wires, notebook covers (300+ designs), ledger sheets, OHP sheets & shrink rolls. Wholesale. All India delivery. 40+ years.",
  keywords: [
    "notebook binding wire supplier Delhi",
    "stitching wire wholesale Delhi",
    "spiral binding wire manufacturer",
    "notebook covers wholesale India",
    "notebook raw materials Chawri Bazaar",
    "notebook manufacturing supplier Delhi",
    "Raj Copy House",
    "RCH Total Solutions",
    "OHP sheets wholesale",
    "shrink packing roll notebook",
  ],
  authors: [{ name: "Raj Copy House" }],
  openGraph: {
    title: "Raj Copy House | Complete Notebook Manufacturing Solutions",
    description:
      "Premium notebook manufacturing raw materials from Chawri Bazaar, Delhi. 40+ years, 300+ cover designs, all India delivery. Call or WhatsApp Manoj Sachdeva.",
    type: "website",
    locale: "en_IN",
    url: "https://rajcopyhouse.vercel.app",
    siteName: "Raj Copy House",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://rajcopyhouse.vercel.app",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Raj Copy House",
  alternateName: "RCH Total Solutions",
  description:
    "Wholesale supplier of notebook manufacturing raw materials. Binding wires, stitching wires, spiral coils, notebook covers, ledger sheets, OHP sheets, shrink packing rolls. 40+ years from Chawri Bazaar, Delhi.",
  url: "https://rajcopyhouse.vercel.app",
  telephone: "+919810035108",
  email: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chawri Bazaar",
    addressLocality: "Chandni Chowk",
    addressRegion: "Delhi",
    postalCode: "110006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.6527",
    longitude: "77.2297",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Manoj Sachdeva",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Notebook Manufacturing Raw Materials",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
