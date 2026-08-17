import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center"><p className="font-medium">No services found.</p><p className="mt-2 text-sm text-zinc-500">Try a different search or category.</p></div>;
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map(p => <ProductCard key={p.id} product={p}/>)}</div>;
}
