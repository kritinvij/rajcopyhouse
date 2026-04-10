import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raj Copy House | Complete Notebook Manufacturing Solutions",
    template: "%s | Raj Copy House",
  },
  description:
    "Premium notebook manufacturing raw materials supplier based in Chawri Bazaar, Delhi. Binding wires, stitching wires, notebook covers, ledger sheets, OHP sheets & more. Wholesale available. All India delivery. 40+ years of excellence.",
  keywords: [
    "notebook binding wire",
    "stitching wire",
    "spiral binding wire",
    "notebook covers wholesale",
    "notebook raw materials Delhi",
    "Chawri Bazaar stationery",
    "notebook manufacturing supplier",
    "Raj Copy House",
    "RCH Total Solutions",
  ],
  authors: [{ name: "Raj Copy House" }],
  openGraph: {
    title: "Raj Copy House | Complete Notebook Manufacturing Solutions",
    description:
      "Premium notebook manufacturing raw materials supplier. 40+ years from Chawri Bazaar, Delhi. Wholesale available.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
