"use client";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { discordUrl } from "@/lib/utils";

const links = [["Home","/"],["Shop","/shop"],["Categories","/categories"],["Reviews","/reviews"],["FAQ","/faq"],["Contact","/contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/55 backdrop-blur-xl">
      <div className="container-k flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-pink-400/30 bg-pink-500/10 text-pink-300"><Heart size={17} fill="currentColor" /></span>
          <span>The Kawai <span className="text-pink-300">Store</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href={discordUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-pink-400/20 px-4 py-2 text-sm text-pink-200 transition hover:bg-pink-500/10">Join Discord</a>
          <Link href="/shop" className="pink-button rounded-xl px-4 py-2 text-sm font-semibold">Shop Now</Link>
        </div>
        <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 lg:hidden">
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </div>
      {open && <div className="border-t border-white/5 bg-black/95 px-4 py-5 lg:hidden">
        <nav className="container-k flex flex-col gap-1">
          {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5">{label}</Link>)}
          <a href={discordUrl} target="_blank" rel="noreferrer" className="mt-2 rounded-xl border border-pink-400/20 px-4 py-3 text-center text-pink-200">Join Discord</a>
          <Link onClick={() => setOpen(false)} href="/shop" className="pink-button mt-2 rounded-xl px-4 py-3 text-center font-semibold">Shop Now</Link>
        </nav>
      </div>}
    </header>
  );
}
