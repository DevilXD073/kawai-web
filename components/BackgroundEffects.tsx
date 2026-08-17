export default function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="pulse-glow absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pulse-glow absolute -right-32 top-[35%] h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/10 blur-3xl" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute left-[12%] top-[22%] text-pink-300/40">✦</div>
      <div className="absolute right-[18%] top-[18%] text-pink-300/30">♡</div>
      <div className="absolute right-[9%] top-[55%] text-pink-300/30">✧</div>
      <div className="absolute left-[8%] top-[72%] text-pink-300/25">·</div>
    </div>
  );
}
