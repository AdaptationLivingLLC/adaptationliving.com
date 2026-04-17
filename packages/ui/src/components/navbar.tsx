"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#platform", label: "Platform" },
  { href: "/services", label: "Pricing" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1D3A]/95 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_2px_24px_rgba(11,29,58,0.45)]"
          : "bg-[#0B1D3A]/85 backdrop-blur-sm border-b border-[#D4AF37]/10"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-5 lg:px-10 py-3.5">
        <a href="/" className="flex items-center gap-3">
          <span className="font-display text-[15px] font-bold text-white tracking-[0.06em]">
            ADAPTATION LIVING
          </span>
          <span className="text-[9px] text-[#D4AF37] font-display tracking-[0.3em] uppercase">
            LLC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-5 lg:gap-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.22em] text-white/90 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <span className="w-px h-5 bg-[#D4AF37]/30" />
          <a
            href="https://app.adaptationliving.com"
            className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]/85 hover:text-[#D4AF37] transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="/intake"
            className="text-[11px] uppercase tracking-[0.22em] bg-[#D4AF37] text-[#0B1D3A] px-5 py-2.5 rounded-sm font-bold hover:bg-[#E8C96A] transition-all duration-200 shadow-[0_0_14px_rgba(212,175,55,0.35)]"
          >
            Start Project
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden text-white hover:text-[#D4AF37] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className={`h-px w-full transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent ${scrolled ? "opacity-100" : "opacity-0"}`} />

      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[58px] z-40 bg-[#0B1D3A]/98 backdrop-blur-md sm:hidden border-t border-[#D4AF37]/20">
          <nav className="flex flex-col items-center gap-7 pt-14 font-display text-base tracking-[0.18em] uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="/#platform" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Platform</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Pricing</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">AI Agents</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Contact</a>
            <div className="w-16 h-px bg-[#D4AF37]/30" />
            <a href="https://app.adaptationliving.com" className="text-[#D4AF37]/85 hover:text-[#D4AF37] transition-colors">Sign In</a>
            <a href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-[#D4AF37] text-[#0B1D3A] px-8 py-3 rounded-sm font-bold hover:bg-[#E8C96A] transition-all shadow-[0_0_14px_rgba(212,175,55,0.35)]">
              Start Project
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
