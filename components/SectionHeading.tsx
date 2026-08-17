export default function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return <div className="mb-10 max-w-2xl">
    {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[.22em] text-pink-300">{eyebrow}</p>}
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-zinc-400">{subtitle}</p>}
  </div>;
}
