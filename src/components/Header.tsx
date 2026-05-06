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
          ? "backdrop-blur-md bg-ivory/90 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[110rem] items-center justify-between px-6 md:px-10 py-4 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm md:text-base tracking-[0.22em] uppercase text-graphite font-medium"
        >
          <span className="gold-mark" />
          GOLD &amp; TIME
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-graphite/75 transition-colors hover:text-graphite"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-ghost">
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
                className="text-sm uppercase tracking-[0.22em] text-graphite/85 hover:text-graphite"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-solid mt-2 self-start" onClick={() => setOpen(false)}>
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
