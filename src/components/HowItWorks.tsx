"use client";

import { motion } from "framer-motion";
import { Fog, SparkleField } from "./primitives";

const STEPS = [
  { n: "01", title: "Запрос",
    text: "Опишите задачу: бренд, модель, бюджет, повод. Куратор перезвонит в&nbsp;течение часа в&nbsp;рабочее время.",
    detail: "1 час" },
  { n: "02", title: "Подбор",
    text: "Готовим 3–5 позиций под вас. Из&nbsp;стока, от&nbsp;официальных партнёров и&nbsp;с&nbsp;аукционов. Сравнение, история владельцев.",
    detail: "1–3 дня" },
  { n: "03", title: "Экспертиза",
    text: "Часовой мастер и&nbsp;геммолог проверяют выбранную позицию. Заключение и&nbsp;фотосессия — на&nbsp;руки до&nbsp;оплаты.",
    detail: "1–2 дня" },
  { n: "04", title: "Передача",
    text: "Подписание, оплата (нал/безнал/крипта), передача в&nbsp;офисе или с&nbsp;инкассацией к&nbsp;вам. Гарантия 12&nbsp;месяцев.",
    detail: "по согласованию" },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden">
      <Fog x="50%" y={-100} size={500} color="#2853C8" opacity={0.22} blur={100} />
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <SparkleField variant="subtle" />
      </div>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-14">
          <div>
            <span className="t-mono-cap text-ink-3">— КАК ПРОХОДИТ СДЕЛКА</span>
            <h2
              className="t-display mt-3 text-ink"
              style={{ fontSize: "clamp(2rem, 7vw, 6.5rem)" }}
            >
              4 шага<span style={{ color: "var(--sapphire)" }}>.</span>
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-ink-2 leading-[1.55] max-w-md">
            От&nbsp;первого звонка до&nbsp;передачи — обычно 5–7&nbsp;дней. Срочные позиции
            находим за&nbsp;48&nbsp;часов. Все этапы — в&nbsp;Москве, без&nbsp;посредников.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="card p-6 md:p-9 flex flex-col"
            >
              <div className="t-display text-ink-3" style={{ fontSize: "2.25rem", letterSpacing: "-0.04em" }}>
                {s.n}
              </div>
              <h3 className="mt-5 md:mt-6 text-[1.35rem] md:text-[1.5rem] font-extrabold tracking-[-0.02em]">
                {s.title}
              </h3>
              <p
                className="mt-3 text-[13.5px] md:text-[14px] leading-[1.6] text-ink-2 flex-1"
                dangerouslySetInnerHTML={{ __html: s.text }}
              />
              <div className="mt-5 md:mt-6 pt-3 border-t border-line t-mono-cap text-ink-3">
                · {s.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
