"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18)_0%,transparent_60%)] blur-3xl" />
        <div className="absolute right-[-12vw] top-[-10vh] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle,rgba(247,231,206,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.4em] text-gold/90"
        >
          <span className="h-px w-12 bg-gold/60" />
          Atelier de luxe
          <span className="h-px w-12 bg-gold/60" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-display mt-8 text-[3rem] leading-[0.95] md:text-[6.2rem] md:leading-[0.95]"
        >
          <span className="block text-champagne/90">Время, отлитое</span>
          <span className="block italic text-gold-gradient">в&nbsp;золото</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-champagne/70"
        >
          Авторские часы и украшения ограниченных серий — для тех, кто
          узнаёт совершенство по&nbsp;деталям.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#collections" className="btn-gold glow-pulse">
            Смотреть коллекции
          </a>
          <a href="#contact" className="btn-ghost">
            Персональная консультация
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mt-24 grid w-full max-w-4xl grid-cols-3 gap-px overflow-hidden rounded-sm border border-line"
        >
          {[
            { k: "12+", v: "лет в индустрии luxury" },
            { k: "300+", v: "лимитированных изделий" },
            { k: "100%", v: "ручная работа" },
          ].map((s) => (
            <div
              key={s.k}
              className="bg-noir-soft/70 px-4 py-7 md:px-8 md:py-9 text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-gold-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-[0.68rem] uppercase tracking-[0.22em] text-champagne/55">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
