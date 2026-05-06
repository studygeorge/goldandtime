"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
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
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_55%)] blur-3xl" />
        <div className="absolute right-[-15vw] top-[5vh] h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle,rgba(247,231,206,0.10)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute left-[-10vw] bottom-[-10vh] h-[45vmin] w-[45vmin] rounded-full bg-[radial-gradient(circle,rgba(160,124,31,0.18)_0%,transparent_60%)] blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative mx-auto w-full max-w-[110rem] px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5"
        >
          <span className="h-px w-16 bg-gold" />
          <span className="eyebrow text-gold">Maison de luxe · Москва</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display hero-text mt-8 text-champagne"
        >
          <span className="block">Часы &amp;</span>
          <span className="block italic text-gold-gradient -mt-2 md:-mt-4">
            украшения
          </span>
          <span className="block text-champagne/70 font-light italic">
            высшего класса
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end"
        >
          <p className="md:col-span-5 text-base md:text-lg leading-relaxed text-champagne/70 max-w-xl">
            Rolex, Patek Philippe, Audemars Piguet, Cartier, Bulgari,
            Van&nbsp;Cleef&nbsp;&amp;&nbsp;Arpels — <em className="not-italic text-champagne">в наличии и под заказ</em>.
            Сертифицированные коллекционные позиции от&nbsp;100&nbsp;000&nbsp;до&nbsp;500&nbsp;000&nbsp;$.
          </p>

          <div className="md:col-span-4 md:col-start-9 flex flex-col sm:flex-row md:flex-col items-start gap-4">
            <a href="#showcase" className="btn-gold glow-pulse">
              Смотреть подборку
            </a>
            <a href="#contact" className="btn-ghost">
              Приватный показ
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px md:gap-6 border-t border-line pt-10"
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
              className="px-2 md:px-4"
            >
              <div className="font-display text-3xl md:text-5xl text-gold-gradient">
                {s.k}
              </div>
              <div className="mt-2 eyebrow text-champagne/55">{s.v}</div>
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
        <span className="eyebrow text-champagne/45 ticker-fade">
          Прокрутите ниже
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
