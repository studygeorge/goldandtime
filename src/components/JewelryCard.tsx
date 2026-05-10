"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Crystal } from "./primitives";
import type { Jewelry, JewelryTagVariant } from "@/data/jewelry";

function tagClass(v: JewelryTagVariant) {
  if (v === "rare") return "tag tag--ruby";
  if (v === "limited") return "tag tag--limited";
  if (v === "exclusive") return "tag tag--exclusive";
  if (v === "request") return "tag tag--ghost";
  return "tag";
}

export function JewelryCard({ p, i = 0 }: { p: Jewelry; i?: number }) {
  const hero = p.images && p.images.length > 0 ? p.images[0] : null;
  const second = p.images && p.images.length > 1 ? p.images[1] : null;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.05 }}
      className="card group flex flex-col"
    >
      <Link href={`/jewelry/${p.slug}`} className="block">
        <div className="relative h-[200px] sm:h-[230px] bg-white overflow-hidden">
          {hero ? (
            <>
              <Image
                src={hero}
                alt={`${p.brand} ${p.model}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 320px"
                className={`object-cover transition-opacity duration-500 ${second ? "group-hover:opacity-0" : "transition-transform group-hover:scale-[1.04]"}`}
                priority={i < 4}
              />
              {second && (
                <Image
                  src={second}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 320px"
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <div className="relative w-full h-full">
                <Crystal x="22%" y="18%" size={170} hue={p.hue} rot={(i * 17) % 30 - 15} opacity={0.9} />
              </div>
            </div>
          )}
          <span className={`${tagClass(p.tagVariant)} absolute top-3 left-3 z-10`}>{p.tag}</span>
          <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap z-10">
            {p.papers && <span className="t-mono-cap bg-white/80 backdrop-blur px-2 py-1 text-ink">СЕРТИФИКАТ</span>}
            {p.box && <span className="t-mono-cap bg-white/80 backdrop-blur px-2 py-1 text-ink">КОРОБКА</span>}
          </div>
        </div>
      </Link>
      <div className="p-4 sm:p-5 border-t border-line flex-1 flex flex-col">
        <div className="t-mono-cap text-ink-3 mb-1.5">{p.brand} · {p.category.toUpperCase()}</div>
        <Link href={`/jewelry/${p.slug}`} className="block">
          <div className="text-[18px] sm:text-[19px] font-extrabold tracking-[-0.02em] mb-2.5 leading-tight hover:text-sapphire-mid transition-colors">
            {p.model}
          </div>
        </Link>
        <div className="t-mono text-[11px] text-ink-3">REF · {p.ref}</div>
        <div className="t-mono text-[11px] text-ink-3 mb-4">{p.year} · {p.condition}</div>
        <div className="mt-auto flex items-end justify-between pt-3 border-t border-dashed border-line gap-3">
          <div>
            <div className="t-mono-cap text-ink-3 mb-1">ЦЕНА</div>
            <div className="text-[15px] sm:text-[16px] font-extrabold tracking-[-0.02em] leading-none">
              {p.price}
            </div>
          </div>
          <Link
            href={`/jewelry/${p.slug}`}
            className="t-mono-cap text-ink hover:text-sapphire-mid transition-colors flex items-center gap-1.5"
          >
            СМОТРЕТЬ →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
