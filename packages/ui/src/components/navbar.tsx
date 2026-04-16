"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/showcase", label: "Showcase" },
  { href: "/ai", label: "AI" },
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
          ? "bg-[#0B1D3A]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_2px_20px_rgba(11,29,58,0.4)]"
          : "bg-[#0B1D3A]/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        <a href="/" className="flex items-center gap-3">
          <span className="font-display text-base font-bold text-white tracking-wide">
            ADAPTATION LIVING
          </span>
          <span className="text-[10px] text-[#D4AF37] font-display tracking-[0.3em] uppercase">
            LLC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] text-white/70 hover:text-[#D4AF37] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <span className="w-px h-5 bg-[#D4AF37]/30" />
          <a
            href="https://app.adaptationliving.com"
            className="text-xs uppercase tracking-[0.18em] text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="/intake"
            className="text-xs uppercase tracking-[0.18em] bg-[#D4AF37] text-[#0B1D3A] px-5 py-2.5 rounded-sm font-bold hover:bg-[#D4AF37]/85 transition-all duration-200 shadow-[0_0_12px_rgba(212,175,55,0.25)]"
          >
            Start Project
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="sm:hidden text-white/80 hover:text-[#D4AF37] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Gold accent line at bottom of navbar */}
      <div className={`h-px w-full transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent ${scrolled ? "opacity-100" : "opacity-0"}`} />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#0B1D3A]/98 backdrop-blur-md sm:hidden border-t border-[#D4AF37]/20">
          <nav className="flex flex-col items-center gap-8 pt-16 font-display text-base tracking-wider uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="/showcase" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#D4AF37] transition-colors">Showcase</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#D4AF37] transition-colors">AI</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-[#D4AF37] transition-colors">Contact</a>
            <div className="w-16 h-px bg-[#D4AF37]/30" />
            <a href="https://app.adaptationliving.com" className="text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors">Sign In</a>
            <a href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-[#D4AF37] text-[#0B1D3A] px-8 py-3 rounded-sm font-bold hover:bg-[#D4AF37]/85 transition-all shadow-[0_0_12px_rgba(212,175,55,0.25)]">
              Start Project
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
