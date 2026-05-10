"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Crystal, Fog, Streak, SparkleField } from "./primitives";

const BRANDS = [
  "", "Rolex", "Patek Philippe", "Audemars Piguet", "Cartier",
  "Vacheron Constantin", "A. Lange & Söhne", "Richard Mille",
  "Omega", "Breitling", "IWC", "Hublot", "Другой",
];

const CONDITIONS = [
  ["new",       "Новые в плёнке"],
  ["excellent", "Отличное · следы носки минимальные"],
  ["good",      "Хорошее · обычная носка"],
  ["worn",      "Заметные следы · нужна полировка"],
];

export function TradeIn() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yCrystal = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yFog = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const [sent, setSent] = useState(false);

  return (
    <section ref={ref} id="trade-in" className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="card relative overflow-hidden bg-ink text-paper p-7 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          style={{ border: "none" }}
        >
          {/* Parallax background */}
          <motion.div aria-hidden style={{ y: yFog }} className="absolute inset-0 pointer-events-none">
            <Fog x={-100} y={-80} size={500} color="#C12347" opacity={0.55} blur={80} />
            <Fog x="60%" y="40%" size={400} color="#2853C8" opacity={0.45} blur={80} />
          </motion.div>
          <motion.div aria-hidden style={{ y: yCrystal }} className="absolute inset-0 pointer-events-none">
            <Crystal x="65%" y="6%" size={240} hue="ruby" rot={10} opacity={0.85} />
            <div className="hidden md:block">
              <Streak x="10%" y="80%" w={500} hue="ruby" rot={-12} opacity={0.5} />
            </div>
          </motion.div>
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <SparkleField variant="dense" />
          </div>

          <div className="relative lg:col-span-5">
            <span className="t-mono-cap" style={{ color: "var(--ruby-pale)" }}>· TRADE-IN</span>
            <h2
              className="t-display mt-4 text-paper"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Оценка ваших<br />
              часов <span style={{ color: "var(--ruby-pale)" }}>за&nbsp;24 часа.</span>
            </h2>
            <p className="mt-6 text-[14px] md:text-[15px] leading-[1.6] text-chrome max-w-md">
              Принимаем в&nbsp;зачёт швейцарские часы, ювелирные украшения и&nbsp;камни.
              Пришлите фото и&nbsp;документы — пришлём предварительную оценку
              в&nbsp;течение рабочего дня. Финальная — после очной экспертизы.
            </p>
            <ul className="mt-6 space-y-2 text-[14px] text-chrome">
              <li className="flex gap-3"><span className="t-mono-cap" style={{ color: "var(--ruby-pale)" }}>·</span><span>Прозрачная структура комиссий, без&nbsp;скрытых удержаний</span></li>
              <li className="flex gap-3"><span className="t-mono-cap" style={{ color: "var(--ruby-pale)" }}>·</span><span>Зачёт в&nbsp;покупку или выплата на&nbsp;счёт</span></li>
              <li className="flex gap-3"><span className="t-mono-cap" style={{ color: "var(--ruby-pale)" }}>·</span><span>Принимаем без&nbsp;документов — после экспертизы</span></li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 self-start bg-paper text-ink p-5 md:p-8"
            style={{ border: "1px solid var(--line)" }}
          >
            <div className="sm:col-span-2 t-mono-cap text-ink-3">
              · ФОРМА ОЦЕНКИ · ОТВЕТ В&nbsp;ТЕЧЕНИЕ 24Ч
            </div>

            <div className="field">
              <label className="field-label">БРЕНД</label>
              <select name="brand" required className="field-input" defaultValue="">
                {BRANDS.map((b) => (
                  <option key={b} value={b} disabled={b === ""}>
                    {b === "" ? "Выберите бренд" : b}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label className="field-label">МОДЕЛЬ / РЕФЕРЕНС</label>
              <input name="model" required placeholder="Daytona 116500LN" className="field-input" />
            </div>

            <div className="field">
              <label className="field-label">ГОД</label>
              <input name="year" type="number" min={1950} max={2026} placeholder="2022" className="field-input" />
            </div>

            <div className="field">
              <label className="field-label">КОМПЛЕКТ</label>
              <select name="set" className="field-input" defaultValue="full">
                <option value="full">Полный · паспорт + коробка</option>
                <option value="papers">Только паспорт</option>
                <option value="box">Только коробка</option>
                <option value="watch">Только часы</option>
              </select>
            </div>

            <div className="field sm:col-span-2">
              <label className="field-label">СОСТОЯНИЕ</label>
              <div className="grid grid-cols-1 gap-2">
                {CONDITIONS.map(([v, l]) => (
                  <label
                    key={v}
                    className="flex items-center gap-3 p-3 border border-line bg-white cursor-pointer hover:border-ink transition-colors"
                  >
                    <input type="radio" name="condition" value={v} className="accent-ink" defaultChecked={v === "excellent"} />
                    <span className="text-[14px]">{l}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label className="field-label">ИМЯ</label>
              <input name="name" required placeholder="Как к вам обращаться" className="field-input" />
            </div>

            <div className="field">
              <label className="field-label">ТЕЛЕФОН</label>
              <input name="phone" type="tel" required placeholder="+7 (___) ___-__-__" className="field-input" />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <button type="submit" className="btn" style={{ background: "var(--ruby-mid)" }}>
                Получить оценку<span className="arrow">→</span>
              </button>
              {sent && (
                <span className="t-mono-cap" style={{ color: "var(--emerald)" }}>
                  · ПРИНЯТО — ПРИШЛЁМ ОЦЕНКУ В&nbsp;ТЕЧЕНИЕ ДНЯ
                </span>
              )}
            </div>

            <p className="sm:col-span-2 t-mono text-[10px] text-ink-3 leading-snug">
              Отправляя форму, вы соглашаетесь с&nbsp;обработкой персональных данных.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
