import type { ReactNode } from "react";

interface Option {
  id: string;
  name: string;
  description: string;
  svg: ReactNode;
}

function LogoCard({ opt }: { opt: Option }) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-teal-800">
      <div className="mb-8 flex items-end gap-6">
        <div className="w-24 h-24">{opt.svg}</div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9">{opt.svg}</div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight text-white">Raj Copy House</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-teal-400">Total Solutions</div>
          </div>
        </div>
        <div className="w-4 h-4">{opt.svg}</div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs font-bold text-teal-500">{opt.id}</span>
        <span className="font-semibold text-white">{opt.name}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-slate-400">{opt.description}</p>
    </div>
  );
}

export default function LogoPreview() {
  const original: Option[] = [
    {
      id: "A",
      name: "Bound Pages",
      description: "Three coil rings + three page bars. Currently live.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <line x1="14" y1="11.5" x2="14" y2="36.5" stroke="white" strokeWidth="1" opacity="0.25"/>
          <circle cx="14" cy="16" r="4" fill="none" stroke="white" strokeWidth="2.5"/>
          <circle cx="14" cy="24" r="4" fill="none" stroke="white" strokeWidth="2.5"/>
          <circle cx="14" cy="32" r="4" fill="none" stroke="white" strokeWidth="2.5"/>
          <rect x="21" y="14" width="19" height="4" rx="1.5" fill="white"/>
          <rect x="21" y="22" width="19" height="4" rx="1.5" fill="white"/>
          <rect x="21" y="30" width="14" height="4" rx="1.5" fill="white" opacity="0.7"/>
        </svg>
      ),
    },
    {
      id: "B",
      name: "Coil Spring",
      description: "A binding wire coil viewed side-on.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <path d="M8,17 C14,8 22,8 28,17 C34,26 42,26 44,20" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
          <path d="M4,21 C8,12 18,12 24,21 C30,30 40,30 44,21" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M4,29 C8,20 18,20 24,29 C30,38 40,38 44,29" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M8,33 C14,24 22,24 28,33 C34,42 42,42 44,36" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
        </svg>
      ),
    },
    {
      id: "C",
      name: "Geometric R",
      description: "A pure-geometry R. The leg turns into a diagonal wire accent.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <rect x="12" y="11" width="5" height="26" rx="2" fill="white"/>
          <rect x="12" y="11" width="16" height="5" rx="2" fill="white"/>
          <rect x="23" y="11" width="5" height="13" rx="2" fill="white"/>
          <rect x="12" y="21" width="16" height="5" rx="2" fill="white"/>
          <line x1="20" y1="26" x2="36" y2="37" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          <circle cx="36" cy="37" r="3" fill="white" opacity="0.5"/>
        </svg>
      ),
    },
    {
      id: "D",
      name: "Clean Stitch",
      description: "Three stacked sheets with stitching wire dots.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <rect x="10" y="28" width="30" height="14" rx="3" fill="white" opacity="0.3"/>
          <rect x="10" y="20" width="30" height="14" rx="3" fill="white" opacity="0.55"/>
          <rect x="10" y="12" width="30" height="14" rx="3" fill="white"/>
          <circle cx="16" cy="16" r="2" fill="#0d9488"/>
          <circle cx="16" cy="22" r="2" fill="#0d9488" opacity="0.6"/>
          <circle cx="16" cy="28" r="2" fill="#0d9488" opacity="0.35"/>
          <line x1="16" y1="13" x2="16" y2="31" stroke="#0d9488" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      ),
    },
  ];

  const fresh: Option[] = [
    {
      id: "E",
      name: "Coil Ring",
      description: "One loop of spiral binding wire in perspective. Front arc is bold; back arc is translucent — the exact shape buyers see when they hold the wire.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Back of ring - faint */}
          <path d="M9,24 A16,11 0 0 1 39,24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.22"/>
          {/* Front of ring - bold */}
          <path d="M9,24 A16,11 0 0 0 39,24" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          {/* Wire tails - the helix continues above and below */}
          <line x1="9" y1="24" x2="4" y2="28" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
          <line x1="39" y1="24" x2="44" y2="20" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.45"/>
        </svg>
      ),
    },
    {
      id: "F",
      name: "Spiral Notebook",
      description: "A spiral notebook from the spine — pages as a solid block, three coil rings looping out of the left edge. Product in use, distilled to its simplest form.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Pages block */}
          <rect x="18" y="9" width="22" height="30" rx="2" fill="white" opacity="0.5"/>
          {/* Coil rings arcing out from spine */}
          <path d="M18,11 C10,11 10,19 18,19" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M18,19 C10,19 10,27 18,27" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M18,27 C10,27 10,35 18,35" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      id: "G",
      name: "Punch Holes",
      description: "Pages as a solid white block — three binding holes punched through the spine as negative space. Shows the exact action of the wire: threading through paper.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Pages */}
          <rect x="15" y="9" width="25" height="30" rx="2" fill="white"/>
          {/* Punch holes: teal circles drawn on top of white pages */}
          <circle cx="15" cy="15" r="4.5" fill="#0d9488"/>
          <circle cx="15" cy="24" r="4.5" fill="#0d9488"/>
          <circle cx="15" cy="33" r="4.5" fill="#0d9488"/>
        </svg>
      ),
    },
    {
      id: "H",
      name: "Wire Helix",
      description: "The spiral binding wire shown as a helix — one full period of the coil, large and clean. The whole product in a single bold stroke.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* One full period of the helix wave */}
          <path
            d="M4,24 C4,12 24,12 24,24 C24,36 44,36 44,24"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "I",
      name: "Wire Spool",
      description: "A roll of binding wire seen end-on: thick outer ring is the wound wire, inner ring is the spool core. Recognisable to every buyer who has received a shipment.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Wound wire - thick outer ring */}
          <circle cx="24" cy="24" r="17" fill="none" stroke="white" strokeWidth="5"/>
          {/* Spool core */}
          <circle cx="24" cy="24" r="8" fill="none" stroke="white" strokeWidth="2.5" opacity="0.7"/>
          {/* Axle */}
          <circle cx="24" cy="24" r="2.5" fill="white" opacity="0.55"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500">Logo Options</p>
          <h1 className="text-3xl font-bold text-white">Raj Copy House</h1>
          <p className="mt-2 text-slate-400">Nine options — original set plus five that show exactly what you sell.</p>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Original (A–D)</p>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {original.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Product-Focused (E–I)</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fresh.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          Pick A–I and I&apos;ll apply it everywhere — navbar, favicon, og:image.
        </p>
      </div>
    </div>
  );
}
