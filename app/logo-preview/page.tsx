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
      {/* Three sizes */}
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
      description: "A binding wire coil viewed side-on - the actual shape of the product.",
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
      description: "A pure-geometry R built from rectangles. The leg turns into a diagonal wire accent.",
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
      description: "Three stacked sheets with stitching dots — references both stitching wire and layered paper.",
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

  const newOptions: Option[] = [
    {
      id: "E",
      name: "Concentric",
      description: "Three concentric rings — the cross-section of a wire coil end-on. Pure geometry. Reads as a target, a bull's-eye, a coil. Works at any size.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <circle cx="24" cy="24" r="15" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="24" r="9" fill="none" stroke="white" strokeWidth="3"/>
          <circle cx="24" cy="24" r="3.5" fill="none" stroke="white" strokeWidth="2.5"/>
        </svg>
      ),
    },
    {
      id: "F",
      name: "Wire R",
      description: "The letter R drawn as a single continuous wire stroke — no fills, no rectangles. Clean monogram. The arch and leg are one unbroken path.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <path
            d="M14,37 L14,11 C22,11 33,11 33,18.5 C33,26 22,26 14,26 M20,26 L34,37"
            fill="none"
            stroke="white"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "G",
      name: "Fan Pages",
      description: "Four horizontal bars flush-right, each indented further left — the front edge of fanned notebook pages. Ultra minimal. No literal binding reference.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <rect x="9"  y="10" width="30" height="5.5" rx="2" fill="white"/>
          <rect x="12" y="18" width="27" height="5.5" rx="2" fill="white" opacity="0.82"/>
          <rect x="15" y="26" width="24" height="5.5" rx="2" fill="white" opacity="0.60"/>
          <rect x="18" y="34" width="21" height="5.5" rx="2" fill="white" opacity="0.38"/>
        </svg>
      ),
    },
    {
      id: "H",
      name: "Chain Rings",
      description: "Three binding rings in a row, perfectly tangent — a chain. Instantly reads as binding hardware. Bold, symmetrical, industrial.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <circle cx="10" cy="24" r="5.5" fill="none" stroke="white" strokeWidth="3"/>
          <circle cx="24" cy="24" r="5.5" fill="none" stroke="white" strokeWidth="3"/>
          <circle cx="38" cy="24" r="5.5" fill="none" stroke="white" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      id: "I",
      name: "Chevrons",
      description: "Three right-pointing chevrons with a depth fade — abstract, dynamic, forward motion. Reads as precision, layers, momentum. Modern industrial mark.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          <path d="M8,16 L19,24 L8,32"  fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.32"/>
          <path d="M17,16 L28,24 L17,32" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
          <path d="M26,16 L37,24 L26,32" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          <p className="mt-2 text-slate-400">Nine directions — pick one and I&apos;ll wire it up everywhere.</p>
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Original (A–D)</p>
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {original.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">New (E–I)</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newOptions.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          Tell me which option (A–I) you prefer and I&apos;ll apply it everywhere.
        </p>
      </div>
    </div>
  );
}
