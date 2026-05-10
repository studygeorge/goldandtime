"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crystal, Fog, Streak, SparkleField } from "./primitives";
import { ProductCard } from "./ProductCard";
import { WATCHES } from "@/data/watches";

export function Watches() {
  const preview = WATCHES.slice(0, 4);

  return (
    <section id="watches" className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden">
      <Fog x="80%" y={-100} size={420} color="#2853C8" opacity={0.28} blur={90} />
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <SparkleField variant="subtle" />
      </div>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
          <div>
            <span className="t-mono-cap text-ink-3">— КАТАЛОГ ЧАСОВ · ИЗБРАННОЕ</span>
            <h2 className="t-display mt-3 text-ink" style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}>
              ЧАСЫ<span style={{ color: "var(--sapphire)" }}>.</span>
            </h2>
          </div>
          <p className="t-mono text-[12.5px] md:text-[13px] text-ink-2 max-w-sm leading-[1.55]">
            {WATCHES.length} позиций в активе · поставки от&nbsp;официальных партнёров
            и&nbsp;с&nbsp;аукционов Phillips, Christie&apos;s, Sotheby&apos;s.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {preview.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10 md:mt-12">
          <Link href="/watches" className="btn">
            Все часы ({WATCHES.length})<span className="arrow">→</span>
          </Link>
          <Link href="/#contact" className="btn btn--ghost">
            Запросить под себя<span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* === Single product showcase — Threads necklace === */
export function Jewelry() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yCrystal = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const yFog = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);

  return (
    <section
      ref={ref}
      id="jewelry"
      className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden bg-paper border-y border-line"
    >
      <Fog x={-150} y={-100} size={500} color="#2853C8" opacity={0.3} blur={100} />
      <Fog x="75%" y="55%" size={500} color="#0F5A40" opacity={0.28} blur={100} />

      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="flex justify-between items-end mb-7 md:mb-8 flex-wrap gap-4">
          <div>
            <span className="t-mono-cap text-ink-3">— УКРАШЕНИЯ · ИЗБРАННОЕ</span>
            <h2 className="t-display mt-3 text-ink" style={{ fontSize: "clamp(1.85rem, 6vw, 5.5rem)" }}>
              GRAFF · THREADS<span style={{ color: "var(--sapphire)" }}>.</span>
            </h2>
          </div>
          <span className="t-mono-cap text-ink-3 hidden sm:inline-block">/ JEWELLERY / NECKLACES / 1 OF 1</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] bg-white border border-line overflow-hidden">
              <motion.div aria-hidden style={{ y: yFog }} className="absolute inset-0">
                <Fog x={-50} y={-50} size={300} color="#2853C8" opacity={0.5} blur={70} />
                <Fog x="55%" y="55%" size={280} color="#1F9266" opacity={0.5} blur={70} />
              </motion.div>
              <motion.div aria-hidden style={{ y: yCrystal }} className="absolute inset-0">
                <Crystal x="32%" y="22%" size={300} hue="sapphire" rot={5} />
                <Crystal x="55%" y="58%" size={180} hue="emerald" rot={-15} />
                <Streak x="-5%" y="80%" w={400} hue="emerald" rot={-12} opacity={0.5} />
              </motion.div>
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <SparkleField variant="jewel" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="ph aspect-square" style={{ fontSize: 9 }}>VIEW {i}</div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="t-mono-cap mb-3 md:mb-4" style={{ color: "var(--sapphire)" }}>
              · GRAFF · HIGH JEWELLERY
            </div>
            <h3 className="t-display" style={{ fontSize: "clamp(2.25rem, 6vw, 6rem)" }}>
              Колье<br />
              <span style={{ color: "var(--sapphire)" }}>Threads.</span>
            </h3>

            <div className="grid grid-cols-3 gap-3 mt-7 md:mt-8 pt-4 border-t border-ink">
              {[["31.4 ct", "БРИЛЛИАНТЫ"], ["412", "КАМНЕЙ"], ["PT 950", "ПЛАТИНА"]].map(([v, k]) => (
                <div key={k}>
                  <div className="text-[1.45rem] md:text-[2.2rem] font-extrabold tracking-[-0.04em] leading-none">
                    {v}
                  </div>
                  <div className="t-mono-cap text-ink-3 mt-1.5">{k}</div>
                </div>
              ))}
            </div>

            <p className="text-[14px] md:text-[15px] leading-[1.6] text-ink-2 mt-6 md:mt-8 max-w-lg">
              Каждый камень закреплён индивидуально. Ручная работа женевского ателье,
              GIA-отчёт по&nbsp;каждой позиции, размер регулируется. Доступно для&nbsp;частного просмотра
              на&nbsp;Петровке или с&nbsp;выездом.
            </p>

            <div className="grid grid-cols-2 mt-6 md:mt-8 border border-line">
              {[
                ["ОГРАНКА", "ROUND BRILLIANT"],
                ["ЧИСТОТА", "IF — VVS1"],
                ["ЦВЕТ", "D — F"],
                ["СЕРТИФИКАТ", "GIA · по каждому"],
                ["ПРОИСХОЖДЕНИЕ", "London Atelier"],
                ["РАЗМЕР", "регулируется"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className="bg-white p-3 md:p-4"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: i < 4 ? "1px solid var(--line)" : "none",
                  }}
                >
                  <div className="t-mono-cap text-ink-3 mb-1">{k}</div>
                  <div className="text-[12.5px] md:text-[13px] font-semibold">{v}</div>
                </div>
              ))}
            </div>

            <div className="bg-ink text-paper p-5 md:p-6 mt-5 md:mt-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="t-mono-cap mb-1.5" style={{ color: "var(--chrome)" }}>· ЦЕНА</div>
                <div className="text-[1.4rem] md:text-[2.2rem] font-extrabold tracking-[-0.03em] leading-none">
                  $ 485 000
                </div>
                <div className="t-mono-cap mt-2" style={{ color: "var(--chrome)" }}>+ trade-in зачётом</div>
              </div>
              <Link href="/#contact" className="btn btn--white">Запросить просмотр<span className="arrow">→</span></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
