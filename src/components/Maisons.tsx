"use client";

import { motion } from "framer-motion";

const MAISONS = [
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Vacheron Constantin",
  "A. Lange & Söhne",
  "Cartier",
  "Bulgari",
  "Van Cleef & Arpels",
  "Harry Winston",
  "Graff",
  "Tiffany & Co.",
  "Chopard",
  "Richard Mille",
  "Jaeger-LeCoultre",
];

export function Maisons() {
  const items = [...MAISONS, ...MAISONS];

  return (
    <section
      id="maisons"
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-cream/45 py-14 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-10 md:mb-14 flex flex-col items-center text-center px-6"
      >
        <span className="eyebrow text-graphite/70">Дома · Maisons</span>
        <h2 className="section-h mt-4 text-graphite">
          Авторизованный selector
        </h2>
        <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-graphite/65">
          Подлинные изделия со сквозной историей владельцев и сертификатами
          мануфактур. Аукционные лоты, лимитированные серии, винтаж&nbsp;NOS.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent pointer-events-none" />
        <div className="flex marquee-track gap-12 md:gap-16">
          {items.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="whitespace-nowrap text-2xl md:text-4xl lg:text-5xl text-graphite/85 hover:text-graphite transition-colors flex items-center gap-12 md:gap-16 font-light tracking-tight"
            >
              {m}
              <span className="gold-mark" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
