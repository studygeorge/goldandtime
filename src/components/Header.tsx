"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV: Array<{ href: string; label: string }> = [
  { href: "/watches", label: "Часы" },
  { href: "/jewelry", label: "Украшения" },
  { href: "/#how", label: "Как это работает" },
  { href: "/#trade-in", label: "Trade-in" },
  { href: "/#faq", label: "FAQ" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(237,239,242,0.85)] border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[110rem] grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 py-4 md:py-5 gap-6">
        <Link href="/" className="logo" style={{ fontSize: 18 }}>
          <span className="dot" />
          GOLD&amp;TIME
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-6 text-[13px] font-semibold tracking-[-0.01em]">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink hover:text-sapphire-mid transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 md:gap-4">
          <a
            href="tel:+74951234567"
            className="hidden md:inline-block t-mono text-ink-2 hover:text-sapphire-mid transition-colors"
            style={{ fontSize: 13 }}
          >
            +7 (495) 123-45-67
          </a>
          <Link href="/#contact" className="btn btn--sm hidden md:inline-flex">
            Записаться<span className="arrow">→</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="lg:hidden text-ink p-2 -mr-2"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <path d="M2 2h20M2 9h20M2 16h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="flex flex-col px-6 py-6 gap-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.04em] text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn mt-2 self-start" onClick={() => setOpen(false)}>
              Записаться<span className="arrow">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
