"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faq";
export default function FAQ(){const [open,setOpen]=useState<number|null>(null);return <div className="mx-auto max-w-3xl">{faqs.map(([q,a],i)=><div key={q} className="border-b border-white/5"><button aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-5 py-5 text-left font-medium">{q}<Plus size={18} className={`shrink-0 text-pink-300 transition ${open===i?"rotate-45":""}`}/></button>{open===i&&<div className="pb-5 pr-10 text-sm leading-6 text-zinc-500">{a}</div>}</div>)}</div>}
