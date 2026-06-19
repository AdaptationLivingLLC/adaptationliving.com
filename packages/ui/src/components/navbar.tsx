"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, type CSSProperties } from "react";

type NavLink = {
  href: string;
  label: string;
  cause?: boolean;
};

const navLinks: NavLink[] = [
  { href: "/features", label: "Features" },
  { href: "/services", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/vs", label: "Compare" },
  { href: "/ai", label: "AI Agents" },
  { href: "/ls-2025.html", label: "LS-2025 Lifeline", cause: true },
  { href: "/contact", label: "Contact" },
];

const causeLinkStyle: CSSProperties = {
  color: "#BF0A30",
  WebkitTextStroke: "0.75px #D4AF37",
};

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
        <a href="/" className="flex flex-col gap-1">
          <span className="font-display font-bold text-[#0B1D3A] tracking-[0.03em] leading-none text-[28px] sm:text-[34px] lg:text-[40px] hover:text-[#2563EB] transition-colors duration-200">
            ADAPTIVE AI
          </span>
          <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-[#0B1D3A]/70 font-display tracking-[0.24em] uppercase font-semibold leading-none">
            born from Adaptation Living
          </span>
        </a>

        {/* Desktop nav links — visible from md up */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={link.cause ? causeLinkStyle : undefined}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={link.cause ? causeLinkStyle : undefined}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={link.cause ? causeLinkStyle : undefined}
                className="text-[#0B1D3A] font-semibold hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
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
