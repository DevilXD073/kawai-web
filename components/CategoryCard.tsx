import Link from "next/link";
import { ArrowUpRight, MessageCircle, Gamepad2, Sparkles, Gift } from "lucide-react";
const icons = { MessageCircle, Gamepad2, Sparkles, Gift };
export default function CategoryCard({ category }: { category: {name:string; count:number; description:string; icon:string} }) {
  const Icon = icons[category.icon as keyof typeof icons] ?? Sparkles;
  return <Link href={`/shop?category=${encodeURIComponent(category.name)}`} className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-pink-400/35 hover:shadow-glow">
    <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-500/10 text-pink-300"><Icon size={20}/></span><ArrowUpRight size={18} className="text-zinc-600 transition group-hover:text-pink-300"/></div>
    <h3 className="mt-7 font-semibold">{category.name}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{category.description}</p><p className="mt-5 text-xs text-pink-300/80">{category.count} services</p>
  </Link>;
}
