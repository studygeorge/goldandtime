"use client";

import Link from "next/link";
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
        className="absolute inset-0 -z-20 pointer-events-none"
      >
        <div className="hidden lg:block">
          <Crystal x="68%" y={130} size={520} hue="sapphire" rot={12} />
          <Crystal x="58%" y="55%" size={220} hue="emerald" rot={-18} />
          <Crystal x="84%" y="68%" size={160} hue="ruby" rot={25} opacity={0.9} />
          <Streak x={-80} y={220} w={620} hue="sapphire" rot={-12} opacity={0.55} blur={2} />
        </div>
        <div className="lg:hidden">
          <Crystal x="58%" y="6%" size={260} hue="sapphire" rot={12} opacity={0.95} />
          <Crystal x="-12%" y="58%" size={180} hue="ruby" rot={-15} opacity={0.7} />
          <Crystal x="78%" y="78%" size={130} hue="emerald" rot={20} opacity={0.85} />
          <Streak x="-20%" y="38%" w={420} hue="sapphire" rot={-12} opacity={0.4} blur={2} />
        </div>
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

        <motion.div style={{ y: yText }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="t-display text-ink"
              style={{
                fontSize: "clamp(3rem, 13vw, 13rem)",
                letterSpacing: "-0.05em",
                maxWidth: "1100px",
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
              className="mt-7 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-[1080px]"
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

              <div className="border-l border-ink pl-5">
                <div className="t-mono-cap text-ink-3 mb-2">ОФИС / МОСКВА</div>
                <div className="text-[13px] font-medium leading-[1.6]">
                  ул. Петровка, 5<br />
                  Пн&nbsp;—&nbsp;Вс · по&nbsp;записи<br />
                  <a href="tel:+74951234567" className="t-mono hover:text-sapphire-mid transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-ink pt-6 md:pt-8 gap-y-6 md:gap-y-8"
            >
              {STATS.map((s, i) => (
                <div
                  key={s[0]}
                  className={`px-2 md:px-4 ${i < STATS.length - 1 ? "md:border-r md:border-line" : ""}`}
                >
                  <div
                    className="t-display text-ink"
                    style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.85rem)", letterSpacing: "-0.04em" }}
                  >
                    {s[0]}
                  </div>
                  <div className="mt-1.5 md:mt-2 t-mono-cap text-ink-3">{s[1]}</div>
                </div>
              ))}
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
