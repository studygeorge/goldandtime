"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV: Array<{ href: string; label: string }> = [
  { href: "/watches",    label: "Часы" },
  { href: "/jewelry",    label: "Украшения" },
  { href: "/#how",       label: "Как это работает" },
  { href: "/#trade-in",  label: "Trade-in" },
  { href: "/#faq",       label: "FAQ" },
];

const TG_URL = "https://t.me/goldandtime";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname() || "/";
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
          ? "backdrop-blur-md bg-[rgba(237,239,242,0.88)] border-b border-line shadow-[0_1px_0_rgba(10,11,14,0.04)]"
          : "bg-gradient-to-b from-paper/40 to-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[110rem] grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 py-3.5 md:py-4 gap-6">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2.5" style={{ fontSize: 18 }} aria-label="Gold & Time — главная">
          <svg
            width="22" height="22" viewBox="0 0 24 24"
            className="text-ink transition-transform duration-500 group-hover:rotate-90"
            aria-hidden
          >
            <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="3.5" fill="currentColor" />
          </svg>
          <span className="font-extrabold tracking-[-0.04em] text-ink leading-none">
            GOLD<span style={{ color: "var(--sapphire)" }}>&amp;</span>TIME
          </span>
          <span className="hidden md:inline-block t-mono-cap text-ink-3 ml-2 pl-2 border-l border-line">EST. 1992</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center justify-center gap-1 text-[13px] font-semibold tracking-[-0.005em]">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span aria-hidden className="absolute left-3 right-3 -bottom-px h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT-SIDE ACTIONS */}
        <div className="flex items-center justify-end gap-2 md:gap-3">
          <a
            href="tel:+74951234567"
            className="hidden md:inline-flex items-center gap-1.5 t-mono text-ink-2 hover:text-ink transition-colors"
            style={{ fontSize: 12.5 }}
            aria-label="Позвонить"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M2 3.2A1.2 1.2 0 0 1 3.2 2h2.1c.5 0 1 .35 1.13.85l.7 2.66a1.2 1.2 0 0 1-.31 1.16L5.7 7.79a9.5 9.5 0 0 0 4.5 4.5l1.13-1.12a1.2 1.2 0 0 1 1.16-.31l2.66.7c.5.13.85.6.85 1.13v2.1a1.2 1.2 0 0 1-1.2 1.2A12.8 12.8 0 0 1 2 3.2Z"
                stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
            +7 (495) 123-45-67
          </a>

          {/* CTA — Telegram chat */}
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-paper px-3.5 md:px-4 py-2.5 hover:bg-sapphire transition-colors"
            style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "-0.005em" }}
            aria-label="Написать в Telegram"
          >
            <svg width="14" height="14" viewBox="0 0 240 240" fill="currentColor" aria-hidden>
              <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0Zm55.4 81.4-19.4 91.5c-1.5 6.5-5.3 8.1-10.7 5l-29.6-21.8-14.3 13.7c-1.6 1.6-2.9 2.9-5.9 2.9l2.1-30 54.7-49.4c2.4-2.1-.5-3.3-3.7-1.2L80.9 132l-29.2-9.1c-6.4-2-6.5-6.4 1.3-9.5l114.1-44c5.3-1.9 9.9 1.3 8.3 12Z" />
            </svg>
            Написать в чат
          </a>

          {/* mobile-only TG icon (compact) */}
          <a
            href={TG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="sm:hidden inline-flex w-9 h-9 items-center justify-center bg-ink text-paper hover:bg-sapphire transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 240 240" fill="currentColor" aria-hidden>
              <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0Zm55.4 81.4-19.4 91.5c-1.5 6.5-5.3 8.1-10.7 5l-29.6-21.8-14.3 13.7c-1.6 1.6-2.9 2.9-5.9 2.9l2.1-30 54.7-49.4c2.4-2.1-.5-3.3-3.7-1.2L80.9 132l-29.2-9.1c-6.4-2-6.5-6.4 1.3-9.5l114.1-44c5.3-1.9 9.9 1.3 8.3 12Z" />
            </svg>
          </a>

          {/* burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="lg:hidden text-ink p-2 -mr-2"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden>
                <path d="M2 2h18M2 9h18M2 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="flex flex-col px-6 py-6 gap-1">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 border-b border-line text-[15px] font-semibold tracking-[-0.01em] ${
                    active ? "text-ink" : "text-ink-2"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              );
            })}
            <a
              href={TG_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn mt-5 inline-flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 240 240" fill="currentColor" aria-hidden>
                <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0Zm55.4 81.4-19.4 91.5c-1.5 6.5-5.3 8.1-10.7 5l-29.6-21.8-14.3 13.7c-1.6 1.6-2.9 2.9-5.9 2.9l2.1-30 54.7-49.4c2.4-2.1-.5-3.3-3.7-1.2L80.9 132l-29.2-9.1c-6.4-2-6.5-6.4 1.3-9.5l114.1-44c5.3-1.9 9.9 1.3 8.3 12Z" />
              </svg>
              Написать в Telegram<span className="arrow">→</span>
            </a>
            <a
              href="tel:+74951234567"
              onClick={() => setOpen(false)}
              className="t-mono text-ink-2 mt-3 inline-flex items-center gap-2"
              style={{ fontSize: 13 }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 3.2A1.2 1.2 0 0 1 3.2 2h2.1c.5 0 1 .35 1.13.85l.7 2.66a1.2 1.2 0 0 1-.31 1.16L5.7 7.79a9.5 9.5 0 0 0 4.5 4.5l1.13-1.12a1.2 1.2 0 0 1 1.16-.31l2.66.7c.5.13.85.6.85 1.13v2.1a1.2 1.2 0 0 1-1.2 1.2A12.8 12.8 0 0 1 2 3.2Z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
