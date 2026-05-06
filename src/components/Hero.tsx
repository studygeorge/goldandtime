"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-32 pb-16"
    >
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute right-[-10vw] top-[5vh] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle,rgba(232,217,189,0.55)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute left-[-10vw] bottom-[-10vh] h-[40vmin] w-[40vmin] rounded-full bg-[radial-gradient(circle,rgba(184,134,11,0.1)_0%,transparent_60%)] blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative mx-auto w-full max-w-[110rem] px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <span className="gold-line w-12" />
          <span className="eyebrow text-graphite/80">
            est. 2008 / Москва · Дубай
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="hero-text mt-10 text-graphite"
        >
          <span className="block">Часы &amp;</span>
          <span className="block">украшения.</span>
          <span className="block text-graphite/60">Под запрос.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"
        >
          <p className="md:col-span-6 text-sm md:text-base leading-relaxed text-graphite/80 max-w-2xl">
            Rolex · Patek Philippe · Audemars Piguet · Cartier · Bulgari ·
            Van&nbsp;Cleef&nbsp;&amp;&nbsp;Arpels.
            <br />
            Аутентифицированные позиции от&nbsp;100&nbsp;000 до&nbsp;500&nbsp;000 USD.
            Trade-in&nbsp;до&nbsp;90% оценки. NDA на каждую сделку.
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col sm:flex-row md:flex-col items-start gap-3">
            <a href="#showcase" className="btn-solid w-full sm:w-auto">
              Смотреть подборку
            </a>
            <a href="#contact" className="btn-ghost w-full sm:w-auto">
              Приватный показ
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-line pt-10 gap-y-8"
        >
          {[
            { k: "18", v: "лет на рынке luxury" },
            { k: "1 200+", v: "позиций в коллекции" },
            { k: "9 maisons", v: "официальных партнёрств" },
            { k: "100%", v: "аутентификация" },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="px-2 md:px-4 md:border-r md:border-line md:last:border-r-0"
            >
              <div className="text-3xl md:text-5xl text-graphite font-light tracking-tight">
                {s.k}
              </div>
              <div className="mt-3 eyebrow text-graphite/55">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-graphite/40 ticker-fade">scroll</span>
        <div className="h-10 w-px bg-graphite/30" />
      </motion.div>
    </section>
  );
}
