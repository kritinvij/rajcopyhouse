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
  /**
   * Design brief (from research):
   * - The wire is not decoration — it must be structural to the mark
   * - Bold, geometric, single-color functional
   * - Must survive: 16px favicon, 2cm spool label sticker, WhatsApp DP
   * - Teal is unclaimed in this product category — own it
   * - The Parker Pen principle: product shape = letterform structure
   */

  const options: Option[] = [
    // ─── KEEP: the current live logo for reference ───────────────────────────
    {
      id: "A",
      name: "Bound Pages (live)",
      description: "Currently deployed. Three coil rings + three page bars. Kept here as the baseline to beat.",
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

    // ─── NEW BATCH — designed from research principles ─────────────────────

    {
      id: "B",
      name: "Wire-Ring R",
      description: "The letter R where the bowl is made of two actual binding wire rings (washer: white with teal centre hole). The product IS the letterform — the Parker Pen principle. R for RCH.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Arch (R bowl) — drawn first so rings sit on top */}
          <path
            d="M15,14 C23,8 37,14 35,21 C35,28 23,28 15,28"
            fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"
          />
          {/* Leg */}
          <line x1="23" y1="28" x2="38" y2="38" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          {/* Top binding ring — washer (white disc, teal centre) */}
          <circle cx="15" cy="14" r="6" fill="white"/>
          <circle cx="15" cy="14" r="2.5" fill="#0d9488"/>
          {/* Mid binding ring */}
          <circle cx="15" cy="28" r="6" fill="white"/>
          <circle cx="15" cy="28" r="2.5" fill="#0d9488"/>
        </svg>
      ),
    },

    {
      id: "C",
      name: "Wire Helix",
      description: "One full period of the binding wire shown as a helix — a single continuous S-curve with circular wire terminals at each end. The whole product in one stroke.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* The helix wave — one full period */}
          <path
            d="M5,24 C5,12 24,12 24,24 C24,36 43,36 43,24"
            fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"
          />
          {/* Wire end terminals (the cut ends of the wire) */}
          <circle cx="5" cy="24" r="3.5" fill="white"/>
          <circle cx="43" cy="24" r="3.5" fill="white"/>
        </svg>
      ),
    },

    {
      id: "D",
      name: "Wire Roll",
      description: "A coil of binding wire seen end-on: the cross-section reveals the wound wire as a bold outer ring and the spool hub as a smaller inner ring. What every buyer sees on delivery day.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Wound wire — very thick outer ring */}
          <circle cx="24" cy="24" r="14" fill="none" stroke="white" strokeWidth="8"/>
          {/* Spool hub rim */}
          <circle cx="24" cy="24" r="5.5" fill="none" stroke="white" strokeWidth="2.5"/>
          {/* Centre axle */}
          <circle cx="24" cy="24" r="1.5" fill="white" opacity="0.6"/>
        </svg>
      ),
    },

    {
      id: "E",
      name: "Thread Through",
      description: "A binding wire ring threading through a stack of pages — the front arc bold and visible, the back arc faint and behind. The paper edges anchor it. Shows the binding action itself.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Paper stack edge lines — where the wire enters and exits */}
          <line x1="4" y1="24" x2="12" y2="24" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.5"/>
          <line x1="36" y1="24" x2="44" y2="24" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.5"/>
          {/* Back of ring (below/behind the paper) — faint */}
          <path d="M11,24 A13,8.5 0 0 1 37,24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.22"/>
          {/* Front of ring (above/in front of paper) — bold */}
          <path d="M11,24 A13,8.5 0 0 0 37,24" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      ),
    },

    {
      id: "F",
      name: "Notebook Top",
      description: "Looking down at a spiral notebook: pages as a solid white block, three coil rings visible along the top binding edge. Every buyer knows this view — it is the product itself.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Notebook pages (solid white — the coil ring stroke disappears into this at bottom half) */}
          <rect x="10" y="20" width="28" height="21" rx="2" fill="white"/>
          {/* Ruled lines on pages */}
          <line x1="15" y1="26" x2="33" y2="26" stroke="#0d9488" strokeWidth="1.2" opacity="0.25"/>
          <line x1="15" y1="31" x2="33" y2="31" stroke="#0d9488" strokeWidth="1.2" opacity="0.25"/>
          <line x1="15" y1="36" x2="33" y2="36" stroke="#0d9488" strokeWidth="1.2" opacity="0.25"/>
          {/* Coil rings along the top binding edge */}
          {/* Top half of each ring = visible against teal; bottom half = invisible on white */}
          <circle cx="15" cy="20" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="20" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="33" cy="20" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
        </svg>
      ),
    },

    {
      id: "G",
      name: "Coil Spine",
      description: "Five tight coil rings stacked — just the binding spine, nothing else. No page bars, no connectors. Pure wire. Industrial, bold, reads instantly as the spiral binding product.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Five coil rings, stacked, tight spacing */}
          <circle cx="24" cy="9"  r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="18" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="27" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          <circle cx="24" cy="36" r="5.5" fill="none" stroke="white" strokeWidth="3.5"/>
          {/* Wire axis thread through all rings */}
          <line x1="24" y1="4" x2="24" y2="41" stroke="white" strokeWidth="1.5" opacity="0.3"/>
        </svg>
      ),
    },

    {
      id: "H",
      name: "Bound Notebook",
      description: "A notebook viewed from the spine: solid page block with three wire rings arcing out of the left binding edge. The rings ARE the product. The block IS the customer's output.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Page block */}
          <rect x="17" y="8" width="23" height="32" rx="2" fill="white" opacity="0.55"/>
          {/* Wire rings arcing out of the left spine — solid front, faint back */}
          <path d="M17,12 C8,12 8,20 17,20" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M17,20 C8,20 8,28 17,28" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M17,28 C8,28 8,36 17,36" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          {/* Page block at full opacity, drawn on top to sharpen the right edge */}
          <rect x="17" y="8" width="23" height="32" rx="2" fill="white" opacity="0.55"/>
        </svg>
      ),
    },

    {
      id: "I",
      name: "Punch + Bind",
      description: "A solid white notebook block with three binding holes punched as negative space (teal cut-outs) on the spine. The wire goes through those holes. No wire shown — just the consequence of it.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Notebook pages — solid white block */}
          <rect x="14" y="8" width="26" height="32" rx="2" fill="white"/>
          {/* Three punch holes (negative space) on the binding spine edge */}
          <circle cx="14" cy="15" r="5" fill="#0d9488"/>
          <circle cx="14" cy="24" r="5" fill="#0d9488"/>
          <circle cx="14" cy="33" r="5" fill="#0d9488"/>
        </svg>
      ),
    },

    {
      id: "J",
      name: "Wire Gauge",
      description: "The RCH monogram — R, C, H rendered as three distinct wire shapes side by side: the R's arch, a coil ring (the C), and a staple-H. Letters built entirely from the product forms.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* R: vertical stem + small arch */}
          <line x1="7" y1="34" x2="7" y2="14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M7,14 C7,14 16,14 16,19 C16,24 7,24 7,24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="10" y1="24" x2="17" y2="34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          {/* C: open coil ring */}
          <path d="M30,17 A5.5,5.5 0 1 0 30,31" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          {/* H: two stems + crossbar */}
          <line x1="35" y1="34" x2="35" y2="14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="41" y1="34" x2="41" y2="14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <line x1="35" y1="24" x2="41" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },

    {
      id: "K",
      name: "Open Coil Ring",
      description: "A single large coil ring, open at one side — like the letter C but clearly a binding wire ring, not a glyph. The opening shows where the wire starts and ends. Pure, bold, industrial.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Large open ring — sweeps ~300°, opens at the right */}
          <path
            d="M36,18 A16,16 0 1 0 36,30"
            fill="none" stroke="white" strokeWidth="6" strokeLinecap="round"
          />
          {/* Wire end terminals */}
          <circle cx="36" cy="18" r="3" fill="white" opacity="0.55"/>
          <circle cx="36" cy="30" r="3" fill="white" opacity="0.55"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500">Logo Options</p>
          <h1 className="text-3xl font-bold text-white">Raj Copy House</h1>
          <p className="mt-2 text-slate-400">
            Eleven options — each researched and constructed from first principles.
            Option A is the current live logo. B–K are new.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {options.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          Pick A–K. I&apos;ll apply it to the navbar, favicon, og:image, and everywhere else — immediately.
        </p>
      </div>
    </div>
  );
}
