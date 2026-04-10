export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-slate-900 py-3.5">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-5 px-5 text-sm font-medium tracking-wide text-slate-400"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-teal-500/50" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
