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
      className="relative scroll-mt-24 overflow-hidden border-y border-line bg-noir-soft/30 py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mb-10 md:mb-14 flex flex-col items-center text-center px-6"
      >
        <span className="eyebrow text-gold">Дома · Maisons</span>
        <h2 className="font-display mt-4 text-3xl md:text-5xl text-champagne">
          Авторизованный <span className="italic text-gold-gradient">selector</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-champagne/60">
          Подлинные изделия со сквозной историей владельцев и сертификатами
          мануфактур. Аукционные лоты, лимитированные серии,
          винтаж&nbsp;NOS.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-noir to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-noir to-transparent pointer-events-none" />
        <div className="flex marquee-track gap-12 md:gap-20">
          {items.map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="font-display whitespace-nowrap text-3xl md:text-5xl lg:text-6xl text-champagne/65 hover:text-gold-gradient transition-colors"
            >
              {m}
              <span className="ml-12 md:ml-20 text-gold/50">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
