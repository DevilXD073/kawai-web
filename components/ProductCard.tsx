import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return <article className="group glass overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-pink-400/35 hover:shadow-glow">
    <Link href={`/shop/${product.slug}`} className="block">
      <div className="relative m-2 aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-pink-500/15 via-fuchsia-500/5 to-black">
        <div className="absolute inset-0 opacity-50" style={{backgroundImage:"radial-gradient(circle at 25% 25%, rgba(255,157,202,.4), transparent 25%), radial-gradient(circle at 75% 70%, rgba(217,38,135,.3), transparent 30%)"}} />
        <div className="absolute inset-0 grid place-items-center"><span className="rounded-2xl border border-pink-300/20 bg-black/35 px-5 py-3 text-center text-sm font-medium text-pink-100 backdrop-blur">KAWAI<br/><span className="text-xs text-zinc-500">DIGITAL SERVICE</span></span></div>
        {product.badge && <span className="absolute left-3 top-3 rounded-full border border-pink-300/20 bg-black/65 px-2.5 py-1 text-[10px] font-bold tracking-wider text-pink-200">{product.badge}</span>}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3"><span className="text-xs text-pink-300/80">{product.category}</span>{discount > 0 && <span className="text-xs text-pink-300">-{discount}%</span>}</div>
        <h3 className="mt-2 font-semibold tracking-tight">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">{product.description}</p>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div><p className="text-lg font-semibold">{formatINR(product.price)}</p>{product.originalPrice && <p className="text-xs text-zinc-600 line-through">{formatINR(product.originalPrice)}</p>}</div>
          <span className={`text-xs ${product.available ? "text-emerald-300" : "text-red-300"}`}>{product.available ? "Available" : "Out of stock"}</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-zinc-500"><span className="flex items-center gap-1"><Clock3 size={13}/> {product.deliveryTime}</span><span className="inline-flex items-center gap-1 text-pink-200">View Product <ArrowUpRight size={14}/></span></div>
      </div>
    </Link>
  </article>;
}
