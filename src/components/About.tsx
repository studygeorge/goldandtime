"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Fog, SparkleField } from "./primitives";

const PILLARS = [
  { n: "01", title: "Аутентификация",
    text: "Часовщик с 24-летним стажем + независимый геммолог. Заключение с фото и серийниками — на руки до оплаты.",
    meta: "часы и камни" },
  { n: "02", title: "Документы",
    text: "Паспорт мануфактуры, коробка, гарантия, договор. По камням — оригинальные сертификаты GIA / IGI / SSEF.",
    meta: "полный комплект" },
  { n: "03", title: "Гарантия 12 месяцев",
    text: "На механизм — год. Бесплатное ТО в авторизованном сервисе в течение года. Возврат 14 дней без объяснений.",
    meta: "механика и сделка" },
  { n: "04", title: "Trade-in",
    text: "Принимаем в зачёт любые швейцарские часы и ювелирные украшения. Оценка за 24 часа, прозрачная комиссия.",
    meta: "оценка за 24ч" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yFog = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} id="about" className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden">
      <motion.div aria-hidden style={{ y: yFog }} className="absolute inset-0 pointer-events-none -z-10">
        <Fog x={-100} y={-100} size={520} color="#2853C8" opacity={0.22} blur={110} />
        <Fog x="80%" y="60%" size={450} color="#1F9266" opacity={0.2} blur={100} />
      </motion.div>
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <SparkleField variant="subtle" />
      </div>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="t-mono-cap text-ink-3">— О НАС · С 1992</span>
            <h2
              className="t-display mt-3 leading-[0.86] text-ink"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              33 года<br />
              в&nbsp;часовом<br />
              <span style={{ color: "var(--sapphire)" }}>деле.</span>
            </h2>
            <p className="mt-5 md:mt-7 text-[15px] md:text-base leading-[1.6] text-ink-2 max-w-md">
              Закрытое ателье на&nbsp;Петровке, 5. Подбираем редкие часы и&nbsp;ювелирные позиции
              для&nbsp;частных коллекционеров с&nbsp;1992&nbsp;года.
            </p>
            <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] leading-[1.6] text-ink-3 max-w-md">
              Работаем напрямую с&nbsp;официальными дилерами 12&nbsp;maisons и&nbsp;крупнейшими
              аукционами Phillips, Christie&apos;s, Sotheby&apos;s. Все сделки — по&nbsp;NDA.
            </p>
            <div className="mt-7 md:mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[["2 800+", "сделок"], ["12+", "maisons"], ["98%", "повторных"]].map(([v, k]) => (
                <div key={k}>
                  <div
                    className="t-display"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.25rem)", letterSpacing: "-0.04em" }}
                  >{v}</div>
                  <div className="t-mono-cap text-ink-3 mt-1.5">{k}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn mt-7 md:mt-10">
              Записаться в&nbsp;ателье<span className="arrow">→</span>
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="card p-6 md:p-9 flex flex-col"
              >
                <div className="t-display text-ink-3" style={{ fontSize: "2rem", letterSpacing: "-0.04em" }}>
                  {p.n}
                </div>
                <h3 className="mt-4 md:mt-5 text-[1.15rem] md:text-[1.25rem] font-extrabold tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] md:text-[14px] leading-[1.65] text-ink-2 flex-1">
                  {p.text}
                </p>
                <div className="mt-5 md:mt-6 pt-3 border-t border-line t-mono-cap text-ink-3">
                  · {p.meta}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
