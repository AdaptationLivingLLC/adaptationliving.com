"use client";

import dynamic from "next/dynamic";

export const ThreeDemo = dynamic(
  () => import("./three-demo").then((m) => m.ThreeDemo),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] rounded-2xl border border-white/10 bg-black/80 flex items-center justify-center text-text-muted">
        Loading 3D scene...
      </div>
    ),
  }
);

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
