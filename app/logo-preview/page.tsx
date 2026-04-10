export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-2xl font-bold text-slate-800">Logo Concepts</h1>
        <p className="mb-12 text-slate-500">Six directions for Raj Copy House / RCH Total Solutions</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* 1: Badge Monogram */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="20" fill="#0f172a"/>
                <text x="60" y="72" textAnchor="middle" fontFamily="Georgia, serif" fontSize="40" fontWeight="700" fill="#fbbf24" letterSpacing="-2">RCH</text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">01 - Badge Monogram</div>
              <div className="mt-1 text-xs text-slate-400">Classic serif · Dark square · Gold letters</div>
            </div>
          </div>

          {/* 2: Ligature Wordmark */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="200" height="80" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* R with leg flowing into C */}
                <text x="0" y="52" fontFamily="Georgia, serif" fontSize="56" fontWeight="700" fill="#0f172a" letterSpacing="-3">Rch</text>
                {/* underline rule */}
                <rect x="0" y="62" width="200" height="2" fill="#fbbf24"/>
                <text x="0" y="76" fontFamily="Arial, sans-serif" fontSize="10" fill="#64748b" letterSpacing="4">TOTAL SOLUTIONS</text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">02 - Ligature Wordmark</div>
              <div className="mt-1 text-xs text-slate-400">Serif ligature &ldquo;Rch&rdquo; · Gold rule · Spaced caption</div>
            </div>
          </div>

          {/* 3: Circular Seal */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="57" stroke="#0f172a" strokeWidth="2.5"/>
                <circle cx="60" cy="60" r="50" stroke="#0f172a" strokeWidth="0.75"/>
                <text x="60" y="66" textAnchor="middle" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#0f172a">RCH</text>
                <path id="topArc" d="M 20,60 A 40,40 0 0,1 100,60" fill="none"/>
                <path id="botArc" d="M 16,60 A 44,44 0 0,0 104,60" fill="none"/>
                <text fontSize="8.5" fontFamily="Arial, sans-serif" fill="#0f172a" letterSpacing="2.5">
                  <textPath href="#topArc" startOffset="8%">RAJ COPY HOUSE</textPath>
                </text>
                <text fontSize="7.5" fontFamily="Arial, sans-serif" fill="#64748b" letterSpacing="2">
                  <textPath href="#botArc" startOffset="10%">EST. CHAWRI BAZAAR · DELHI</textPath>
                </text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">03 - Heritage Seal</div>
              <div className="mt-1 text-xs text-slate-400">Circular stamp · Arced text · Traditional feel</div>
            </div>
          </div>

          {/* 4: Modern Stacked */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900" fill="#0f172a" letterSpacing="-1">RAJ</text>
                <rect x="0" y="46" width="180" height="1.5" fill="#fbbf24"/>
                <text x="1" y="64" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="400" fill="#334155" letterSpacing="6">COPY HOUSE</text>
                <text x="1" y="80" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400" fill="#94a3b8" letterSpacing="4">TOTAL SOLUTIONS</text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">04 - Stacked Wordmark</div>
              <div className="mt-1 text-xs text-slate-400">Bold &ldquo;RAJ&rdquo; · Spaced lowercase · Gold rule</div>
            </div>
          </div>

          {/* 5: Geometric R Mark */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Geometric R with diagonal leg as arrow */}
                <rect x="0" y="8" width="8" height="64" fill="#0f172a"/>
                <rect x="8" y="8" width="26" height="8" fill="#0f172a"/>
                <rect x="8" y="36" width="26" height="8" fill="#0f172a"/>
                <rect x="34" y="8" width="8" height="36" rx="0" fill="#0f172a"/>
                {/* Arrow leg */}
                <polygon points="26,44 34,44 56,72 44,72" fill="#fbbf24"/>
                <text x="68" y="38" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a" letterSpacing="1">RAJ COPY</text>
                <text x="68" y="56" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#0f172a" letterSpacing="1">HOUSE</text>
                <text x="68" y="70" fontFamily="Arial, sans-serif" fontSize="8" fill="#94a3b8" letterSpacing="3">TOTAL SOLUTIONS</text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">05 - Geometric Mark + Wordmark</div>
              <div className="mt-1 text-xs text-slate-400">Abstract R · Gold diagonal · Side text</div>
            </div>
          </div>

          {/* 6: Minimal Lowercase with Spiral */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-center">
              <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Spiral coil icon - simplified */}
                <ellipse cx="28" cy="45" rx="18" ry="10" stroke="#fbbf24" strokeWidth="3" fill="none"/>
                <ellipse cx="28" cy="45" rx="12" ry="6.5" stroke="#fbbf24" strokeWidth="2.5" fill="none"/>
                <ellipse cx="28" cy="45" rx="6" ry="3" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                <text x="56" y="55" fontFamily="Georgia, serif" fontSize="32" fontWeight="400" fill="#0f172a" letterSpacing="-1">rch</text>
                <rect x="56" y="62" width="90" height="1.5" fill="#e2e8f0"/>
                <text x="56" y="75" fontFamily="Arial, sans-serif" fontSize="8" fill="#94a3b8" letterSpacing="3.5">RAJ COPY HOUSE</text>
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-800">06 - Spiral Mark + Lowercase</div>
              <div className="mt-1 text-xs text-slate-400">Binding wire coil · Serif lowercase · Minimal</div>
            </div>
          </div>

        </div>

        {/* On dark backgrounds */}
        <h2 className="mb-6 mt-16 text-lg font-semibold text-slate-700">On Dark Background</h2>
        <div className="grid gap-8 rounded-2xl bg-slate-950 p-8 sm:grid-cols-3">

          <div className="flex flex-col items-center gap-3">
            <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="20" fill="#1e293b"/>
              <text x="60" y="72" textAnchor="middle" fontFamily="Georgia, serif" fontSize="40" fontWeight="700" fill="#fbbf24" letterSpacing="-2">RCH</text>
            </svg>
            <span className="text-xs text-slate-500">01 on dark</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="140" height="56" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="52" fontFamily="Georgia, serif" fontSize="56" fontWeight="700" fill="#ffffff" letterSpacing="-3">Rch</text>
              <rect x="0" y="62" width="200" height="2" fill="#fbbf24"/>
              <text x="0" y="76" fontFamily="Arial, sans-serif" fontSize="10" fill="#94a3b8" letterSpacing="4">TOTAL SOLUTIONS</text>
            </svg>
            <span className="text-xs text-slate-500">02 on dark</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="80" height="56" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontSize="36" fontWeight="900" fill="#ffffff" letterSpacing="-1">RAJ</text>
              <rect x="0" y="46" width="180" height="1.5" fill="#fbbf24"/>
              <text x="1" y="64" fontFamily="Arial, sans-serif" fontSize="14" fill="#94a3b8" letterSpacing="6">COPY HOUSE</text>
            </svg>
            <span className="text-xs text-slate-500">04 on dark</span>
          </div>

        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Share which direction you like and I&apos;ll refine it into a final SVG for favicon, header, and print use.
        </p>
      </div>
    </div>
  );
}
