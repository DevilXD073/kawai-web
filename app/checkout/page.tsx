import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CheckoutForm from "@/components/CheckoutForm";
import { products } from "@/lib/products";
export default async function Checkout({searchParams}:{searchParams:Promise<{product?:string}>}){const {product}=await searchParams;const p=products.find(x=>x.slug===product)||products[0];return <div className="container-k py-16 md:py-20"><SectionHeading eyebrow="Secure Checkout" title="Complete Your Order" subtitle="Review your details and prepare your order. Payment is disabled until a real provider is connected."/><CheckoutForm product={p}/><p className="mt-8 text-center text-xs text-zinc-700">Need help? <Link href="/contact" className="text-pink-300/70">Contact support</Link>.</p></div>}
