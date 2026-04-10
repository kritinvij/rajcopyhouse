export default function LogoPreview() {
  const options = [
    {
      id: "A",
      name: "Bound Pages",
      description: "Three coil rings (binding wire) + three page bars. Currently live.",
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
          {/* Coil spring: sine-wave arcs */}
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
      description: "A pure-geometry R built from rectangles - no font rendering. The R's leg turns into a wire/diagonal.",
      svg: (
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="11" fill="#0d9488"/>
          {/* Stem */}
          <rect x="12" y="11" width="5" height="26" rx="2" fill="white"/>
          {/* Top bar */}
          <rect x="12" y="11" width="16" height="5" rx="2" fill="white"/>
          {/* Right arm of arch */}
          <rect x="23" y="11" width="5" height="13" rx="2" fill="white"/>
          {/* Mid bar */}
          <rect x="12" y="21" width="16" height="5" rx="2" fill="white"/>
          {/* Diagonal leg - binding wire accent */}
          <line x1="20" y1="26" x2="36" y2="37" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          {/* Wire dot accent */}
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
          {/* Three paper sheets, stacked and offset */}
          <rect x="10" y="28" width="30" height="14" rx="3" fill="white" opacity="0.3"/>
          <rect x="10" y="20" width="30" height="14" rx="3" fill="white" opacity="0.55"/>
          <rect x="10" y="12" width="30" height="14" rx="3" fill="white"/>
          {/* Stitching dots on left edge */}
          <circle cx="16" cy="16" r="2" fill="#0d9488"/>
          <circle cx="16" cy="22" r="2" fill="#0d9488" opacity="0.6"/>
          <circle cx="16" cy="28" r="2" fill="#0d9488" opacity="0.35"/>
          {/* Stitching line */}
          <line x1="16" y1="13" x2="16" y2="31" stroke="#0d9488" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-500">Logo Options</p>
          <h1 className="text-3xl font-bold text-white">Raj Copy House</h1>
          <p className="mt-2 text-slate-400">Four logo mark directions. Pick the one that feels right.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {options.map((opt) => (
            <div
              key={opt.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-teal-800"
            >
              {/* Sizes */}
              <div className="mb-8 flex items-end gap-6">
                {/* Large */}
                <div className="w-24 h-24">{opt.svg}</div>
                {/* Medium - navbar size */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9">{opt.svg}</div>
                  <div className="leading-tight">
                    <div className="text-sm font-bold tracking-tight text-white">Raj Copy House</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-teal-400">Total Solutions</div>
                  </div>
                </div>
                {/* Favicon size */}
                <div className="w-4 h-4">{opt.svg}</div>
              </div>

              {/* Label */}
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-bold text-teal-500">{opt.id}</span>
                <span className="font-semibold text-white">{opt.name}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{opt.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-600">
          Tell me which option (A, B, C, or D) you prefer and I&apos;ll apply it everywhere.
        </p>
      </div>
    </div>
  );
}
