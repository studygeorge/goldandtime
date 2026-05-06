"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  return (
    <section id="contact" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="card-luxe p-10 md:p-16"
        >
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow text-gold-deep">Контакты</span>
            <h2 className="font-display section-h mt-4 text-graphite">
              Личная <span className="italic text-gold-gradient">встреча</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-graphite/70">
              Оставьте контакты — наш консьерж свяжется с вами в течение
              рабочего дня и согласует удобное время приватного показа.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("ok");
            }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <Field label="Имя" name="name" required />
            <Field label="Телефон" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="Город" name="city" />
            <div className="md:col-span-2">
              <FieldArea label="Что вас интересует" name="message" />
            </div>
            <div className="md:col-span-2 flex flex-col items-center gap-4 mt-2">
              <button type="submit" className="btn-gold">
                Записаться на просмотр
              </button>
              {status === "ok" && (
                <p className="text-[0.78rem] uppercase tracking-[0.22em] text-gold-deep">
                  Спасибо · мы свяжемся с вами
                </p>
              )}
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-graphite/40">
                Отправляя форму, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <InfoBlock label="Telegram" value="@goldandtime" href="https://t.me/goldandtime" />
          <InfoBlock label="WhatsApp" value="+7 999 000-00-00" href="https://wa.me/79990000000" />
          <InfoBlock label="E-mail" value="atelier@goldandtime.ru" href="mailto:atelier@goldandtime.ru" />
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-graphite/55">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-base text-graphite placeholder:text-graphite/30 outline-none transition-colors focus:border-gold-deep"
      />
    </label>
  );
}

function FieldArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] uppercase tracking-[0.28em] text-graphite/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={3}
        className="mt-2 w-full resize-none border-b border-line bg-transparent py-2.5 text-base text-graphite placeholder:text-graphite/30 outline-none transition-colors focus:border-gold-deep"
      />
    </label>
  );
}

function InfoBlock({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-sm border border-line bg-ivory/60 p-6 transition-all duration-500 hover:border-gold-deep/50 hover:bg-cream/60"
    >
      <div className="text-[0.65rem] uppercase tracking-[0.28em] text-gold-deep">
        {label}
      </div>
      <div className="font-display mt-2 text-xl text-graphite">{value}</div>
    </a>
  );
}
