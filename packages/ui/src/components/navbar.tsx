"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] py-6 bg-gradient-to-b from-[#0B1D3A]/80 to-transparent backdrop-blur-sm">
      <div className="font-display text-lg font-bold text-white tracking-wide">
        ADAPTATION LIVING
        <span className="text-text-muted text-xs ml-2 font-display tracking-widest">
          LLC
        </span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/intake"
          className="text-sm uppercase tracking-widest border border-white px-5 py-2 rounded hover:bg-white hover:text-bg-dark transition-all"
        >
          Start Project
        </a>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-[#0B1D3A]/98 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-6 pt-12 font-display text-lg tracking-wider uppercase" aria-label="Mobile navigation">
            <a href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Home</a>
            <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Services</a>
            <a href="/showcase" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Showcase</a>
            <a href="/ai" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">AI</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors">Contact</a>
            <a href="https://app.adaptationliving.com" className="text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">Sign In</a>
            <a href="/intake" onClick={() => setMobileMenuOpen(false)} className="bg-[#D4AF37] text-[#0B1D3A] px-6 py-3 rounded font-bold hover:bg-[#D4AF37]/90 transition-colors">Start Project</a>
          </nav>
        </div>
      )}
    </nav>
  );
}
