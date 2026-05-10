"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Crystal, Fog, Streak, SparkleField, FloaterField } from "./primitives";

const STATS: Array<[string, string]> = [
  ["33 года",   "на рынке Москвы"],
  ["2 800+",    "проведённых сделок"],
  ["12",        "часовых домов в работе"],
  ["24 часа",   "оценка trade-in"],
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFog = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
  const yCrystal = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacityVisual = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden md:min-h-[100svh] pt-24 md:pt-32 pb-16 md:pb-20"
    >
      <motion.div
        aria-hidden
        style={{ y: yFog, opacity: opacityVisual }}
        className="absolute inset-0 -z-30 pointer-events-none"
      >
        <Fog x={-200} y={-150} size={700} color="#2853C8" opacity={0.45} blur={120} />
        <Fog x="60%" y="35%" size={620} color="#1F9266" opacity={0.32} blur={110} />
        <Fog x="20%" y="70%" size={400} color="#C12347" opacity={0.22} blur={100} />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ y: yCrystal, opacity: opacityVisual }}
        className="absolute inset-0 -z-20 pointer-events-none hidden lg:block"
      >
        <Streak x={-80} y={220} w={620} hue="sapphire" rot={-12} opacity={0.45} blur={2} />
        <Crystal x="92%" y="8%" size={140} hue="emerald" rot={20} opacity={0.55} />
        <Crystal x="-8%" y="78%" size={180} hue="ruby" rot={-15} opacity={0.45} />
      </motion.div>

      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <SparkleField variant="hero" />
        <FloaterField />
      </div>

      <div className="relative mx-auto w-full max-w-[110rem] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center gap-3 md:gap-5 mb-7 md:mb-12"
        >
          <span className="t-mono-cap text-ink-2">С 1992 · МОСКВА · ПЕТРОВКА 5</span>
          <span className="hidden sm:block flex-1 h-px bg-ink max-w-[180px]" />
          <span className="t-mono-cap text-ink-3">НОВОЕ ПОСТУПЛЕНИЕ · 14 ПОЗИЦИЙ</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* TEXT COLUMN */}
          <motion.div style={{ y: yText }} className="lg:col-span-7 order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="t-display text-ink"
              style={{
                fontSize: "clamp(2.8rem, 11vw, 11rem)",
                letterSpacing: "-0.05em",
                maxWidth: "1000px",
              }}
            >
              ЧАСЫ.<br />
              УКРАШЕНИЯ.<br />
              <span style={{ color: "var(--sapphire)" }}>TRADE-IN.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-7 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[820px]"
            >
              <p className="text-[15px] md:text-base leading-[1.55] text-ink-2 max-w-md">
                Дилер швейцарских часов и&nbsp;ювелирных украшений с&nbsp;1992&nbsp;года.
                Аутентификация, документы, гарантия 12&nbsp;месяцев. Принимаем в&nbsp;зачёт ваши часы.
              </p>

              <div className="flex flex-wrap gap-2.5 items-start">
                <Link href="/watches" className="btn">
                  Смотреть каталог<span className="arrow">→</span>
                </Link>
                <Link href="/#trade-in" className="btn btn--ghost">
                  Оценить мои часы<span className="arrow">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-ink pt-6 md:pt-8 gap-y-6 md:gap-y-8 max-w-[900px]"
            >
              {STATS.map((s, i) => (
                <div
                  key={s[0]}
                  className={`px-2 md:px-4 ${i < STATS.length - 1 ? "lg:border-r lg:border-line" : ""}`}
                >
                  <div
                    className="t-display text-ink"
                    style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.4rem)", letterSpacing: "-0.04em" }}
                  >
                    {s[0]}
                  </div>
                  <div className="mt-1.5 md:mt-2 t-mono-cap text-ink-3">{s[1]}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* IMAGE COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            style={{ y: yPhoto }}
            className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] bg-paper border border-ink overflow-hidden">
              <Image
                src="/lifestyle/hero-businessman.jpg"
                alt="Часы Gold & Time"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              {/* sapphire vignette */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,11,14,0) 50%, rgba(10,11,14,0.55) 100%)",
                }}
              />
              {/* corner caption */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 z-10">
                <div className="t-mono-cap text-paper">
                  · АТЕЛЬЕ · ПЕТРОВКА 5
                </div>
                <div className="t-mono-cap text-paper/80">
                  EST. 1992
                </div>
              </div>
              {/* sparkle decoration */}
              <div aria-hidden className="absolute inset-0 pointer-events-none">
                <SparkleField variant="jewel" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
