"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
}

export function PerfDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animRef = useRef<number>(0);
  const fpsRef = useRef<number[]>([]);
  const [fps, setFps] = useState(60);
  const [particleCount, setParticleCount] = useState(0);
  const lastTimeRef = useRef(performance.now());

  const colors = ["#2563EB", "#F8FAFC", "#ffffff", "#B8941F", "#2563EB"];

  const spawnParticles = useCallback((x: number, y: number, count: number) => {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      const maxLife = Math.random() * 80 + 40;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]!,
        life: 0,
        maxLife,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (!touch) return;
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
      mouseRef.current.active = true;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleMouseLeave);

    const animate = () => {
      const now = performance.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      fpsRef.current.push(1000 / delta);
      if (fpsRef.current.length > 30) fpsRef.current.shift();
      const avgFps = Math.round(
        fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length
      );
      setFps(avgFps);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      if (mouseRef.current.active) {
        spawnParticles(mouseRef.current.x, mouseRef.current.y, 5);
      }

      // Auto-spawn from center with orbital motion
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const t = now * 0.001;
      spawnParticles(
        cx + Math.cos(t * 1.5) * 80,
        cy + Math.sin(t * 1.5) * 80,
        2
      );
      spawnParticles(
        cx + Math.cos(t * 0.7 + 2) * 120,
        cy + Math.sin(t * 0.7 + 2) * 120,
        1
      );

      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.vx *= 0.99;
        p.vy *= 0.99;
        p.life++;

        if (p.life < p.maxLife) {
          const alpha = 1 - p.life / p.maxLife;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * alpha, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.round(alpha * 255).toString(16).padStart(2, "0");
          ctx.fill();
          alive.push(p);
        }
      }
      particlesRef.current = alive;
      setParticleCount(alive.length);

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleMouseLeave);
    };
  }, [spawnParticles]);

  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-[#0F172A]/90">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        style={{ display: "block" }}
      />
      <div className="absolute top-4 left-4 flex gap-3">
        <div className="rounded-lg bg-[#0F172A]/70 border border-white/10 px-3 py-1.5">
          <p className="text-[10px] uppercase tracking-widest text-accent">FPS</p>
          <p className="font-display text-lg font-bold text-white">{fps}</p>
        </div>
        <div className="rounded-lg bg-[#0F172A]/70 border border-white/10 px-3 py-1.5">
          <p className="text-[10px] uppercase tracking-widest text-accent">Particles</p>
          <p className="font-display text-lg font-bold text-white">{particleCount}</p>
        </div>
      </div>
      <p className="absolute bottom-4 left-4 text-[#64748B] text-xs">
        Move your mouse or finger to create particles
      </p>
    </div>
  );
}
