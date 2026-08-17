import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ProductGrid from "./ProductGrid";
import { products } from "@/lib/products";
export default function FeaturedProducts() { return <section className="container-k py-20"><SectionHeading eyebrow="Shop" title="Explore Our Services" subtitle="Everything you need. One kawaii marketplace."/><ProductGrid products={products.filter(p=>p.featured).slice(0,6)}/><div className="mt-8 text-center"><Link href="/shop" className="inline-flex rounded-xl border border-pink-400/20 px-5 py-3 text-sm font-semibold text-pink-200 hover:bg-pink-500/10">View All Services →</Link></div></section>; }
