import Link from "next/link";

const productLinks = [
  { href: "/products/stitching-steel-wires", label: "Stitching Steel Wires" },
  { href: "/products/spiral-binding-wires", label: "Spiral Binding Wires" },
  { href: "/products/notebook-covers", label: "Notebook Covers" },
  { href: "/products/black-ledger-sheets", label: "Black Ledger Sheets" },
  { href: "/products/ohp-sheets", label: "OHP Sheets" },
  { href: "/products/shrink-packing-roll", label: "Shrink Packing Roll" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <svg width="34" height="34" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="48" height="48" rx="10" fill="#0d9488"/>
                <text x="10" y="37" fontFamily="Georgia, serif" fontSize="31" fontWeight="bold" fill="white">R</text>
                <line x1="26" y1="27" x2="39" y2="43" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.35"/>
              </svg>
              <div>
                <div className="font-bold text-white">Raj Copy House</div>
                <div className="text-xs text-slate-400">Total Solutions</div>
              </div>
            </div>
            <p className="mb-1 text-sm text-slate-400">Complete Notebook Manufacturing Solutions</p>
            <p className="mb-4 text-xs italic text-slate-500">नोटबुक उद्योग का सम्पूर्ण समाधान</p>
            <p className="text-sm text-slate-400">
              Trusted by notebook manufacturers across India for 40+ years.
              Your one-stop supplier for all raw materials.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <a href="tel:+919810035108" className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
                <PhoneIcon />
                +91 98100 35108
              </a>
              <a href="https://wa.me/919810035108" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300">
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">Products</h3>
            <ul className="flex flex-col gap-1.5">
              {productLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">Company</h3>
            <ul className="mb-4 flex flex-col gap-1.5">
              <li><Link href="/about" className="text-sm text-slate-400 transition-colors hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-slate-400 transition-colors hover:text-white">All Products</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 transition-colors hover:text-white">Contact</Link></li>
            </ul>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-200">Address</h3>
            <address className="not-italic text-sm leading-relaxed text-slate-400">
              Chawri Bazaar,<br />
              Chandni Chowk,<br />
              Delhi - 110006
            </address>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 border-t border-slate-700/60 pt-8">
          {[
            "Wholesale / B2B Only",
            "GST Invoice on Every Order",
            "Same-Day Dispatch from Delhi",
            "Pan India Delivery",
            "40+ Years in Business",
          ].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-500"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-5 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Raj Copy House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
