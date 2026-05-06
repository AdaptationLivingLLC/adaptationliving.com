"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/services", label: "Pricing" },
  { href: "/demo", label: "Demo" },
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
      className={`sticky top-0 left-0 w-full z-50 transition-shadow duration-300 border-b bg-[#faf0df] border-[#0B1D3A]/15 ${
        scrolled ? "shadow-[0_2px_18px_rgba(11,29,58,0.18)]" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <a href="/" className="flex items-baseline gap-3">
          <span className="font-display font-bold text-[#0B1D3A] tracking-[0.03em] leading-none text-[28px] sm:text-[34px] lg:text-[40px] hover:text-[#2563EB] transition-colors duration-200">
            ADAPTATION LIVING
          </span>
          <span className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#0B1D3A]/75 font-display tracking-[0.3em] uppercase font-bold leading-none">
            LLC
          </span>
        </a>

        {/* Desktop nav links — visible from md up */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* LS-2025 — flagship veteran-mission CTA, leftmost so it cannot be missed even when the nav wraps on narrow desktop widths */}
          <a
            href="/ls-2025.html"
            className="inline-flex items-center gap-[6px] text-[11px] lg:text-[12px] uppercase tracking-[0.18em] bg-[#BF0A30] text-white font-extrabold px-[18px] py-[10px] rounded-[10px] border-2 border-white shadow-[0_0_0_2px_#002868,0_4px_14px_rgba(191,10,48,0.45)] transition-all duration-[180ms] hover:bg-[#A8082A] hover:-translate-y-px hover:shadow-[0_0_0_2px_#002868,0_6px_20px_rgba(191,10,48,0.65)]"
            aria-label="LS-2025 Veteran Lifeline"
          >
            <span aria-hidden="true" className="text-white">★</span>
            LS-2025
          </a>

          <span className="w-px h-5 bg-[#0B1D3A]/20" />

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <span className="w-px h-5 bg-[#0B1D3A]/20" />

          <a
            href="https://app.adaptationliving.com"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors duration-200"
          >
            Sign In
          </a>

          {/* Book Setup Call — primary CTA, stays the loudest element on the bar */}
          <a
            href="/intake"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.16em] bg-[#2563EB] text-white px-5 py-[11px] rounded-[10px] font-extrabold border border-[#2563EB] shadow-[0_4px_18px_rgba(37,99,235,0.40)] transition-all duration-[180ms] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] hover:shadow-[0_6px_22px_rgba(37,99,235,0.55)] hover:-translate-y-px"
          >
            Book Setup Call
          </a>
        </div>

        {/* Narrow mobile: hamburger (below md, i.e. <768px) */}
        <button
          className="md:hidden text-[#0B1D3A] hover:text-[#2563EB] transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile: always-visible quick links BELOW the brand row on small screens */}
        <div className="flex md:hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-[#0B1D3A]/12 pt-2">
          <a
            href="/ls-2025.html"
            className="inline-flex items-center gap-[5px] text-[10px] uppercase tracking-[0.18em] bg-[#BF0A30] text-white px-3 py-1 rounded-[8px] font-extrabold border-2 border-white shadow-[0_0_0_2px_#002868,0_2px_10px_rgba(191,10,48,0.5)]"
            aria-label="LS-2025 Veteran Lifeline"
          >
            <span aria-hidden="true" className="text-white">★</span>
            LS-2025
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.22em] text-[#0B1D3A] font-semibold hover:text-[#2563EB]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/intake"
            className="text-[10px] uppercase tracking-[0.16em] bg-[#2563EB] text-white px-3 py-1 rounded-[8px] font-extrabold border border-[#2563EB] shadow-[0_2px_10px_rgba(37,99,235,0.45)]"
          >
            Book Setup Call
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0B1D3A]/35 to-transparent" />

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-40 bg-[#faf0df] md:hidden border-t border-[#0B1D3A]/15">
          <nav className="flex flex-col items-center gap-7 pt-14 font-display text-base tracking-[0.18em] uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Home</a>
            <a
              href="/ls-2025.html"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="LS-2025 Veteran Lifeline"
              className="inline-flex items-center gap-2 bg-[#BF0A30] text-white font-extrabold px-7 py-3 rounded-[10px] border-2 border-white shadow-[0_0_0_2px_#002868,0_4px_18px_rgba(191,10,48,0.5)] hover:bg-[#A8082A] hover:shadow-[0_0_0_2px_#002868,0_6px_22px_rgba(191,10,48,0.65)] transition-all duration-[180ms]"
            >
              <span aria-hidden="true" className="text-white">★</span>
              LS-2025 Lifeline
            </a>
            <a href="/features" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Features</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Pricing</a>
            <a href="/demo" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Demo</a>
            <a href="/vs" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Compare</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">AI Agents</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Contact</a>
            <div className="w-16 h-px bg-[#0B1D3A]/30" />
            <a href="https://app.adaptationliving.com" className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors">Sign In</a>
            <a
              href="/intake"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#2563EB] text-white px-9 py-3 rounded-[10px] font-extrabold border border-[#2563EB] shadow-[0_4px_18px_rgba(37,99,235,0.45)] hover:bg-[#1D4ED8] hover:border-[#1D4ED8] transition-all duration-[180ms]"
            >
              Book Setup Call
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
