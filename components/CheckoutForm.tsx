"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/utils";

export default function CheckoutForm({product}:{product:Product}){
 const [qty,setQty]=useState(1); const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [discord,setDiscord]=useState("");
 const total=useMemo(()=>product.price*qty,[product.price,qty]);
 return <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
  <div className="space-y-6">
   <section className="glass rounded-3xl p-6"><h2 className="font-semibold">Customer Information</h2><div className="mt-5 grid gap-4"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="field"/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="field"/><input value={discord} onChange={e=>setDiscord(e.target.value)} placeholder="Discord username" className="field"/></div></section>
   <section className="glass rounded-3xl p-6"><h2 className="font-semibold">Payment</h2><div className="mt-5 rounded-2xl border border-dashed border-pink-400/15 bg-pink-500/[.03] p-5"><div className="flex items-center gap-2 text-sm text-pink-200"><LockKeyhole size={16}/> Payment-provider-ready</div><p className="mt-2 text-sm leading-6 text-zinc-600">This demo does not process or confirm payments. Connect a real provider and confirm payment server-side before creating an order.</p></div></section>
  </div>
  <aside className="glass h-fit rounded-3xl p-6"><p className="text-xs uppercase tracking-wider text-pink-300">Order</p><h2 className="mt-2 text-xl font-semibold">{product.name}</h2><div className="mt-5 flex items-center justify-between border-b border-white/5 pb-5 text-sm"><span className="text-zinc-500">Quantity</span><select value={qty} onChange={e=>setQty(Number(e.target.value))} className="rounded-lg border border-white/10 bg-black px-3 py-2">{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></div><div className="space-y-3 py-5 text-sm"><div className="flex justify-between"><span className="text-zinc-500">Price</span><span>{formatINR(product.price)}</span></div><div className="flex justify-between"><span className="text-zinc-500">Discount</span><span className="text-pink-300">{product.originalPrice?formatINR((product.originalPrice-product.price)*qty):"—"}</span></div><div className="flex justify-between pt-3 text-base font-semibold"><span>Total</span><span>{formatINR(total)}</span></div></div><button disabled={!name||!email||!discord} className="w-full rounded-xl bg-white/5 px-5 py-4 font-semibold text-zinc-500 disabled:opacity-50">Proceed to real payment</button><p className="mt-3 text-center text-[11px] text-zinc-700">Payment integration required before this button can complete an order.</p><Link href={`/shop/${product.slug}`} className="mt-4 block text-center text-xs text-zinc-600 hover:text-white">Back to product</Link></aside>
 </div>
}
