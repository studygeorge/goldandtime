"use client";

import Image from "next/image";
import { useState } from "react";

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

  return (
    <div>
      <div className={`relative aspect-[4/5] bg-white overflow-hidden group ${cover ? "" : "border border-line"}`}>
        <Image
          src={main}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className={`${cover ? "object-cover" : "object-contain p-8 md:p-10"} transition-transform duration-500 group-hover:scale-[1.02]`}
          priority
        />
      </div>
      {images.length > 1 && (
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
