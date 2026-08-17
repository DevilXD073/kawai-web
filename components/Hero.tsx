import Link from "next/link";
import { ArrowRight, Gem, Zap, Heart, Sparkles } from "lucide-react";
import { discordUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28">
      <div className="container-k grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/5 px-3 py-1.5 text-xs font-medium tracking-[.2em] text-pink-200">✦ THE KAWAI STORE</div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl lg:text-7xl">Premium Services.<br/><span className="pink-gradient">Kawaii Prices.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">Affordable digital services for Discord, gaming and online communities — delivered with quality, speed and care.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="pink-button inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold">Shop Now <ArrowRight size={18}/></Link>
            <a href={discordUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[.03] px-5 py-3.5 font-semibold text-white hover:bg-white/[.06]">Join Discord</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
            <span>⚡ Fast Delivery</span><span>•</span><span>💎 Premium Quality</span><span>•</span><span>♡ Affordable Prices</span>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[540px]">
          <div className="absolute inset-10 rounded-full bg-pink-500/15 blur-3xl" />
          <div className="glass absolute left-[10%] top-[12%] w-[58%] rotate-[-5deg] rounded-3xl p-5 shadow-glow float">
            <div className="flex items-center justify-between"><span className="text-xs text-zinc-500">THE KAWAI STORE</span><Sparkles size={16} className="text-pink-300"/></div>
            <div className="mt-7 h-28 rounded-2xl bg-gradient-to-br from-pink-500/25 via-fuchsia-500/10 to-transparent p-4"><div className="h-full rounded-xl border border-pink-300/10 bg-black/30"/></div>
            <div className="mt-4 flex items-end justify-between"><div><p className="text-xs text-zinc-500">Featured</p><p className="font-semibold">Premium Services</p></div><span className="rounded-lg bg-pink-500/15 px-2 py-1 text-xs text-pink-200">♡</span></div>
          </div>
          <div className="glass absolute right-[4%] top-[29%] w-[42%] rounded-2xl p-4 float" style={{animationDelay:"-2s"}}><div className="flex items-center gap-3"><Zap className="text-pink-300" size={18}/><div><p className="text-xs text-zinc-500">FAST DELIVERY</p><p className="text-sm font-medium">Ready when you are.</p></div></div></div>
          <div className="glass absolute bottom-[13%] left-[5%] w-[44%] rounded-2xl p-4 float" style={{animationDelay:"-3.5s"}}><div className="flex items-center gap-3"><Gem className="text-pink-300" size={18}/><div><p className="text-xs text-zinc-500">PREMIUM QUALITY</p><p className="text-sm font-medium">Made with care.</p></div></div></div>
          <div className="glass absolute bottom-[4%] right-[8%] rounded-2xl px-5 py-4 float" style={{animationDelay:"-1s"}}><div className="flex items-center gap-2 text-pink-200"><Heart size={17} fill="currentColor"/><span className="text-sm font-medium">Kawaii Prices</span></div></div>
        </div>
      </div>
    </section>
  );
}
