"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#platform", label: "Platform" },
  { href: "/services", label: "Pricing" },
  { href: "/vs", label: "Compare" },
  { href: "/ai", label: "AI Agents" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#FEFCF8] border-[#D4AF37]/60 shadow-[0_2px_14px_rgba(11,29,58,0.12)]"
          : "bg-[#FEFCF8] border-[#D4AF37]/30"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <a href="/" className="flex items-baseline gap-2.5">
          <span className="font-display font-bold text-[#0B1D3A] tracking-[0.04em] leading-none text-[24px] sm:text-[28px] lg:text-[32px]">
            ADAPTATION LIVING
          </span>
          <span className="text-[12px] sm:text-[13px] lg:text-[15px] text-[#B8952A] font-display tracking-[0.3em] uppercase font-bold leading-none">
            LLC
          </span>
        </a>

        {/* Desktop nav links — visible from md up (narrow phones still get menu) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <span className="w-px h-5 bg-[#0B1D3A]/20" />
          <a
            href="https://app.adaptationliving.com"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#B8952A] font-semibold hover:text-[#0B1D3A] transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="/intake"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] bg-[#D4AF37] text-[#0B1D3A] px-4 py-2.5 lg:px-5 rounded-sm font-bold hover:bg-[#E8C96A] transition-all duration-200 shadow-[0_0_14px_rgba(212,175,55,0.35)]"
          >
            Start Project
          </a>
        </div>

        {/* Narrow mobile: hamburger (below md, i.e. <768px) */}
        <button
          className="md:hidden text-[#0B1D3A] hover:text-[#B8952A] transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile: always-visible quick links BELOW the brand row on small screens  */}
        {/* Wraps inside the same flex-wrap container so navigation is always      */}
        {/* reachable without tapping a hamburger.                                  */}
        <div className="flex md:hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-[#0B1D3A]/10 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.22em] text-[#0B1D3A] font-semibold hover:text-[#B8952A]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/intake"
            className="text-[10px] uppercase tracking-[0.22em] bg-[#D4AF37] text-[#0B1D3A] px-3 py-1 rounded-sm font-bold"
          >
            Start
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-40 bg-[#FEFCF8] md:hidden border-t border-[#D4AF37]/40">
          <nav className="flex flex-col items-center gap-7 pt-14 font-display text-base tracking-[0.18em] uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">Home</a>
            <a href="/#platform" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">Platform</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">Pricing</a>
            <a href="/vs" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">Compare</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">AI Agents</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#B8952A] transition-colors">Contact</a>
            <div className="w-16 h-px bg-[#D4AF37]/40" />
            <a href="https://app.adaptationliving.com" className="text-[#B8952A] font-semibold hover:text-[#0B1D3A] transition-colors">Sign In</a>
            <a href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-[#D4AF37] text-[#0B1D3A] px-8 py-3 rounded-sm font-bold hover:bg-[#E8C96A] transition-all shadow-[0_0_14px_rgba(212,175,55,0.35)]">
              Start Project
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
