"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

export function ProductGallery({
  images,
  alt,
  fit = "contain",
}: {
  images: string[];
  alt: string;
  /** "contain" — product on white with padding (watches); "cover" — full-bleed lifestyle (jewelry models) */
  fit?: "contain" | "cover";
}) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];
  const cover = fit === "cover";
  const ratio = cover ? "aspect-[4/5]" : "aspect-square";
  const n = images.length;

  const prev = useCallback(() => setActive((a) => (a - 1 + n) % n), [n]);
  const next = useCallback(() => setActive((a) => (a + 1) % n), [n]);

  // keyboard nav
  useEffect(() => {
    if (n < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, n]);

  return (
    <div className="max-w-[520px] mx-auto lg:mx-0">
      <div className={`relative ${ratio} bg-white overflow-hidden group ${cover ? "" : "border border-line"}`}>
        <Image
          key={main}
          src={main}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className={`${cover ? "object-cover" : "object-contain p-6 md:p-8"} transition-transform duration-500 group-hover:scale-[1.02]`}
          priority
        />

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Предыдущее фото"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-ink border border-line backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 1L3 7l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Следующее фото"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white text-ink border border-line backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 t-mono-cap bg-ink text-paper px-2 py-1">
              {active + 1} / {n}
            </div>
          </>
        )}
      </div>

      {n > 1 && (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {images.slice(0, 4).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Фото ${i + 1}`}
              aria-pressed={active === i}
              className={`relative aspect-square bg-white overflow-hidden transition-[outline] ${
                active === i
                  ? "outline outline-2 outline-ink outline-offset-[-2px]"
                  : "outline outline-1 outline-line hover:outline-ink-3 outline-offset-[-1px]"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className={cover ? "object-cover" : "object-contain p-2"}
              />
            </button>
          ))}
          {!cover && Array.from({ length: Math.max(0, 4 - images.length) }).map((_, i) => (
            <div key={`ph-${i}`} className="ph aspect-square" style={{ fontSize: 9 }}>
              VIEW {images.length + i + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
