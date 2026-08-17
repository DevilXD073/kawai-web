import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";
export default function Deals(){const deals=products.filter(p=>p.originalPrice||p.limited);return <div className="container-k py-16 md:py-20"><SectionHeading eyebrow="Limited" title="Kawaii Deals" subtitle="Discounts, bundles and limited offers configured by the store owner."/><ProductGrid products={deals}/><p className="mt-8 text-center text-xs text-zinc-700">No countdowns are shown unless a real promotion is configured.</p></div>}
