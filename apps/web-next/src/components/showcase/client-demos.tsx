"use client";

import dynamic from "next/dynamic";

export function ThreeDemo() {
  return (
    <div className="w-full h-[500px] rounded-2xl border border-white/10 bg-black/80 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(231,76,60,0.12),transparent_50%)]" />
      <div className="relative text-center px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-accent mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Interactive 3D
        </div>
        <p className="font-display text-2xl font-bold text-white mb-2">Three.js &amp; React Three Fiber</p>
        <p className="text-text-muted text-sm max-w-md mx-auto">
          Real-time 3D graphics, distortion shaders, orbital controls, and particle systems — the same tech used by Nike, Apple, and Tesla.
        </p>
      </div>
    </div>
  );
}

export const PerfDemo = dynamic(
  () => import("./perf-demo").then((m) => m.PerfDemo),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] rounded-2xl border border-white/10 bg-black/90 flex items-center justify-center text-text-muted">
        Loading demo...
      </div>
    ),
  }
);
