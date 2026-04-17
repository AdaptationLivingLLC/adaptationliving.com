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
          ? "bg-[#FFFFFF] border-[#2563EB]/60 shadow-[0_2px_14px_rgba(15,23,42,0.12)]"
          : "bg-[#FFFFFF] border-[#2563EB]/30"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <a href="/" className="flex items-baseline gap-3">
          <span className="font-display font-bold text-[#0F172A] tracking-[0.03em] leading-none text-[28px] sm:text-[34px] lg:text-[40px]">
            ADAPTATION LIVING
          </span>
          <span className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#1D4ED8] font-display tracking-[0.3em] uppercase font-bold leading-none">
            LLC
          </span>
        </a>

        {/* Desktop nav links — visible from md up (narrow phones still get menu) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <span className="w-px h-5 bg-[#0F172A]/20" />
          <a
            href="https://app.adaptationliving.com"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#1D4ED8] font-semibold hover:text-[#0F172A] transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="/intake"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] bg-[#2563EB] text-[#0F172A] px-4 py-2.5 lg:px-5 rounded-sm font-bold hover:bg-[#3B82F6] transition-all duration-200 shadow-[0_0_14px_rgba(37,99,235,0.35)]"
          >
            Start Project
          </a>
        </div>

        {/* Narrow mobile: hamburger (below md, i.e. <768px) */}
        <button
          className="md:hidden text-[#0F172A] hover:text-[#1D4ED8] transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile: always-visible quick links BELOW the brand row on small screens  */}
        {/* Wraps inside the same flex-wrap container so navigation is always      */}
        {/* reachable without tapping a hamburger.                                  */}
        <div className="flex md:hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-[#0F172A]/10 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.22em] text-[#0F172A] font-semibold hover:text-[#1D4ED8]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/intake"
            className="text-[10px] uppercase tracking-[0.22em] bg-[#2563EB] text-[#0F172A] px-3 py-1 rounded-sm font-bold"
          >
            Start
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-40 bg-[#FFFFFF] md:hidden border-t border-[#2563EB]/40">
          <nav className="flex flex-col items-center gap-7 pt-14 font-display text-base tracking-[0.18em] uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">Home</a>
            <a href="/#platform" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">Platform</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">Pricing</a>
            <a href="/vs" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">Compare</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">AI Agents</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#0F172A] font-semibold hover:text-[#1D4ED8] transition-colors">Contact</a>
            <div className="w-16 h-px bg-[#2563EB]/40" />
            <a href="https://app.adaptationliving.com" className="text-[#1D4ED8] font-semibold hover:text-[#0F172A] transition-colors">Sign In</a>
            <a href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-[#2563EB] text-[#0F172A] px-8 py-3 rounded-sm font-bold hover:bg-[#3B82F6] transition-all shadow-[0_0_14px_rgba(37,99,235,0.35)]">
              Start Project
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
