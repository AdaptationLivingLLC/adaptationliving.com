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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] py-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="font-display text-lg font-bold text-white tracking-wide">
        ADAPTATION LIVING
        <span className="text-text-muted text-xs ml-2 font-display tracking-widest">
          LLC
        </span>
      </div>

      {/* Desktop */}
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

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white p-2"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-[5%] text-white p-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl uppercase tracking-widest opacity-80 hover:opacity-100 hover:text-accent transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/intake"
            onClick={() => setOpen(false)}
            className="text-xl uppercase tracking-widest border-2 border-accent bg-accent text-white px-8 py-3 rounded hover:bg-transparent hover:text-accent transition-all"
          >
            Start Project
          </a>
        </div>
      )}
    </nav>
  );
}
