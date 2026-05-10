"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Crystal, Fog, SparkleField } from "./primitives";

const SUBJECTS = [
  ["buy", "Запрос конкретной модели"],
  ["consult", "Консультация куратора"],
  ["visit", "Записаться на показ"],
  ["other", "Другое"],
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yCrystal = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yFog = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [agree, setAgree] = useState(true);

  return (
    <section ref={ref} id="contact" className="relative scroll-mt-24 py-16 md:py-32 overflow-hidden">
      <motion.div aria-hidden style={{ y: yFog }} className="absolute inset-0 pointer-events-none -z-20">
        <Fog x="80%" y={-100} size={600} color="#2853C8" opacity={0.32} blur={120} />
        <Fog x={-150} y="60%" size={500} color="#1F9266" opacity={0.22} blur={110} />
      </motion.div>
      <motion.div aria-hidden style={{ y: yCrystal }} className="absolute inset-0 pointer-events-none -z-10 hidden lg:block">
        <Crystal x="78%" y="22%" size={260} hue="sapphire" rot={10} opacity={0.8} />
      </motion.div>
      <motion.div aria-hidden style={{ y: yCrystal }} className="absolute inset-0 pointer-events-none -z-10 lg:hidden">
        <Crystal x="68%" y="6%" size={180} hue="sapphire" rot={10} opacity={0.6} />
      </motion.div>
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <SparkleField variant="dense" />
      </div>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="t-mono-cap text-ink-3">— СВЯЗАТЬСЯ</span>
            <h2
              className="t-display mt-3 text-ink"
              style={{ fontSize: "clamp(2.25rem, 6.5vw, 6rem)" }}
            >
              Записаться<br />
              на&nbsp;<span style={{ color: "var(--sapphire)" }}>показ.</span>
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-base leading-[1.6] text-ink-2 max-w-md">
              Куратор перезвонит в&nbsp;течение часа в&nbsp;рабочее время и&nbsp;согласует удобный формат:
              в&nbsp;офисе на&nbsp;Петровке, у&nbsp;вас или в&nbsp;банковской ячейке.
            </p>

            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="https://t.me/goldandtime" className="card p-4 md:p-5 hover:border-ink transition-colors">
                <div className="t-mono-cap text-ink-3 mb-1">TELEGRAM · быстрее всего</div>
                <div className="text-[15px] font-semibold">@goldandtime</div>
              </a>
              <a href="https://wa.me/74951234567" className="card p-4 md:p-5 hover:border-ink transition-colors">
                <div className="t-mono-cap text-ink-3 mb-1">WHATSAPP</div>
                <div className="text-[15px] font-semibold t-mono">+7 (495) 123-45-67</div>
              </a>
              <a href="tel:+74951234567" className="card p-4 md:p-5 hover:border-ink transition-colors">
                <div className="t-mono-cap text-ink-3 mb-1">ТЕЛЕФОН</div>
                <div className="text-[15px] font-semibold t-mono">+7 (495) 123-45-67</div>
              </a>
              <a href="mailto:atelier@goldandtime.ru" className="card p-4 md:p-5 hover:border-ink transition-colors">
                <div className="t-mono-cap text-ink-3 mb-1">EMAIL</div>
                <div className="text-[15px] font-semibold break-all">atelier@goldandtime.ru</div>
              </a>
              <div className="card p-4 md:p-5 sm:col-span-2">
                <div className="t-mono-cap text-ink-3 mb-1">ОФИС · ПО ЗАПИСИ</div>
                <div className="text-[15px] font-semibold">Москва, ул.&nbsp;Петровка, 5</div>
                <div className="t-mono text-[11px] text-ink-3 mt-1">Пн&nbsp;—&nbsp;Вс · 11:00 — 21:00</div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            onSubmit={(e) => { e.preventDefault(); setStatus("ok"); }}
            className="card p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:col-span-7 self-start"
          >
            <div className="md:col-span-2 t-mono-cap text-ink-3">· ФОРМА ЗАПРОСА</div>

            <div className="field md:col-span-2">
              <label className="field-label">ТЕМА ОБРАЩЕНИЯ</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SUBJECTS.map(([v, l]) => (
                  <label
                    key={v}
                    className="flex items-center justify-center text-[12px] py-3 border border-line bg-white cursor-pointer hover:border-ink transition-colors text-center"
                  >
                    <input type="radio" name="subject" value={v} className="sr-only peer" defaultChecked={v === "buy"} />
                    <span className="peer-checked:font-extrabold">{l}</span>
                  </label>
                ))}
              </div>
            </div>

            <Field label="ИМЯ" name="name" placeholder="Как к вам обращаться" required />
            <Field label="ТЕЛЕФОН" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            <Field label="ИНТЕРЕС" name="interest" placeholder="Patek Philippe Nautilus 5811/1G" />
            <Field label="БЮДЖЕТ" name="budget" placeholder="до $300 000" />

            <div className="md:col-span-2 field">
              <label className="field-label">КОММЕНТАРИЙ</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Ищу референс 5811/1G, рассмотрю trade-in моего Daytona 116500."
                className="field-input resize-y"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 md:gap-5 mt-2">
              <label className="inline-flex items-center gap-2.5 text-[12px] leading-snug max-w-md cursor-pointer">
                <span className="relative inline-block w-4 h-4 border border-ink shrink-0" aria-hidden>
                  {agree && <span className="absolute inset-[3px] bg-ink" />}
                </span>
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="sr-only" />
                Согласен с&nbsp;<a href="#" className="underline underline-offset-2">обработкой персональных данных</a>
              </label>
              <button type="submit" className="btn">Отправить<span className="arrow">→</span></button>
            </div>

            {status === "ok" && (
              <p className="md:col-span-2 t-mono-cap" style={{ color: "var(--emerald)" }}>
                · ПРИНЯТО — КУРАТОР СВЯЖЕТСЯ В&nbsp;ТЕЧЕНИЕ ЧАСА
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="field">
      <label className="field-label">
        {label}{required && <span className="text-ink"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        placeholder={placeholder}
        className="field-input"
      />
    </div>
  );
}
