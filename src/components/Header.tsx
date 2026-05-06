"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#maisons", label: "Дома" },
  { href: "#watches", label: "Часы" },
  { href: "#jewelry", label: "Украшения" },
  { href: "#about", label: "Atelier" },
  { href: "#contact", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-ivory/85 border-b border-line shadow-[0_1px_30px_-12px_rgba(26,22,18,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-[0.18em] text-gold-gradient"
        >
          GOLD &amp; TIME
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] uppercase tracking-[0.2em] text-graphite/70 transition-colors hover:text-gold-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-ghost"
        >
          Записаться
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          className="md:hidden text-graphite"
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <path d="M2 2h24M2 10h24M2 18h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ivory/95 backdrop-blur">
          <div className="flex flex-col px-6 py-6 gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-graphite/80 hover:text-gold-deep"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold mt-2 self-start" onClick={() => setOpen(false)}>
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
