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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0B1D3A] border-[#2563EB]/60 shadow-[0_2px_18px_rgba(0,0,0,0.45)]"
          : "bg-[#0B1D3A] border-[#2563EB]/30"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
        <a href="/" className="flex items-baseline gap-3">
          <span className="font-display font-bold text-[#faf0df] tracking-[0.03em] leading-none text-[28px] sm:text-[34px] lg:text-[40px] hover:text-white transition-colors duration-200">
            ADAPTATION LIVING
          </span>
          <span className="text-[13px] sm:text-[15px] lg:text-[17px] text-[#faf0df]/80 font-display tracking-[0.3em] uppercase font-bold leading-none">
            LLC
          </span>
        </a>

        {/* Desktop nav links — visible from md up */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* LS-2025 — premium secondary CTA */}
          <a
            href="/ls-2025.html"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.16em] bg-[#faf0df] text-[#0B2348] font-extrabold px-[18px] py-[10px] rounded-[10px] border border-[#faf0df]/75 shadow-[0_0_18px_rgba(250,240,223,0.18)] transition-all duration-[180ms] hover:bg-white hover:text-[#1D4ED8] hover:border-[#3B82F6] hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:-translate-y-px"
            aria-label="LS-2025 Veteran Lifeline"
          >
            LS-2025
          </a>

          <span className="w-px h-5 bg-[#faf0df]/25" />

          <a
            href="https://app.adaptationliving.com"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.22em] text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors duration-200"
          >
            Sign In
          </a>

          {/* Book Setup Call — primary CTA, stays louder than LS-2025 */}
          <a
            href="/intake"
            className="text-[11px] lg:text-[12px] uppercase tracking-[0.16em] bg-[#2563EB] text-white px-5 py-[11px] rounded-[10px] font-extrabold border border-[#2563EB] shadow-[0_0_22px_rgba(37,99,235,0.45)] transition-all duration-[180ms] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] hover:-translate-y-px"
          >
            Book Setup Call
          </a>
        </div>

        {/* Narrow mobile: hamburger (below md, i.e. <768px) */}
        <button
          className="md:hidden text-[#faf0df] hover:text-[#3B82F6] transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile: always-visible quick links BELOW the brand row on small screens */}
        <div className="flex md:hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 border-t border-[#faf0df]/15 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.22em] text-[#faf0df] font-semibold hover:text-[#3B82F6]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/ls-2025.html"
            className="text-[10px] uppercase tracking-[0.16em] bg-[#faf0df] text-[#0B2348] px-3 py-1 rounded-[8px] font-extrabold border border-[#faf0df]/75 shadow-[0_0_12px_rgba(250,240,223,0.2)]"
          >
            LS-2025
          </a>
          <a
            href="/intake"
            className="text-[10px] uppercase tracking-[0.16em] bg-[#2563EB] text-white px-3 py-1 rounded-[8px] font-extrabold border border-[#2563EB] shadow-[0_0_14px_rgba(37,99,235,0.45)]"
          >
            Book Setup Call
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-40 bg-[#0B1D3A] md:hidden border-t border-[#2563EB]/40">
          <nav className="flex flex-col items-center gap-7 pt-14 font-display text-base tracking-[0.18em] uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Home</a>
            <a href="/features" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Features</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Pricing</a>
            <a href="/demo" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Demo</a>
            <a href="/vs" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Compare</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">AI Agents</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Contact</a>
            <a
              href="/ls-2025.html"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#faf0df] text-[#0B2348] font-extrabold px-7 py-3 rounded-[10px] border border-[#faf0df]/75 shadow-[0_0_18px_rgba(250,240,223,0.18)] hover:bg-white hover:text-[#1D4ED8] hover:border-[#3B82F6] hover:shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-[180ms]"
            >
              LS-2025 Lifeline
            </a>
            <div className="w-16 h-px bg-[#faf0df]/30" />
            <a href="https://app.adaptationliving.com" className="text-[#faf0df] font-semibold hover:text-[#3B82F6] transition-colors">Sign In</a>
            <a
              href="/intake"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#2563EB] text-white px-9 py-3 rounded-[10px] font-extrabold border border-[#2563EB] shadow-[0_0_22px_rgba(37,99,235,0.45)] hover:bg-[#3B82F6] hover:border-[#3B82F6] hover:shadow-[0_0_28px_rgba(59,130,246,0.55)] transition-all duration-[180ms]"
            >
              Book Setup Call
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
