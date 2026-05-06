"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    id: "watches",
    title: "Часы",
    subtitle: "Швейцарские механизмы. Корпуса из золота 750°.",
    description:
      "Лимитированные модели с автоподзаводом, сапфировым стеклом и инкрустацией бриллиантами. Каждые часы — нумерованный экземпляр.",
    accent: "01",
  },
  {
    id: "jewelry",
    title: "Украшения",
    subtitle: "Колье, браслеты, серьги и кольца ручной работы.",
    description:
      "Драгоценные камни сертифицированных огранок, ручная закрепка, индивидуальный размер. Авторские изделия и переосмысление классики.",
    accent: "02",
  },
  {
    id: "atelier",
    title: "Atelier",
    subtitle: "Изделия по индивидуальному эскизу.",
    description:
      "Эскиз, 3D-визуализация, ручная сборка. От первой встречи до готового украшения — 4–8 недель.",
    accent: "03",
  },
];

export function Collections() {
  return (
    <section
      id="collections"
      className="relative scroll-mt-24 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold/80">
            Коллекции
          </span>
          <h2 className="font-display mt-5 text-4xl md:text-6xl text-champagne">
            Три измерения роскоши
          </h2>
          <div className="divider-gold mt-10 w-40" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px md:grid-cols-3 md:gap-8">
          {ITEMS.map((item, i) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
              className="card-luxe group flex flex-col p-10 md:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-gold-gradient">
                  {item.accent}
                </span>
                <span className="h-px w-16 bg-line transition-all duration-500 group-hover:w-24 group-hover:bg-gold/70" />
              </div>
              <h3 className="font-display mt-12 text-3xl md:text-4xl text-champagne">
                {item.title}
              </h3>
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-gold/85">
                {item.subtitle}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-champagne/65">
                {item.description}
              </p>
              <span className="mt-10 inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.28em] text-champagne/75 transition-colors group-hover:text-gold">
                Изучить
                <svg
                  width="32"
                  height="8"
                  viewBox="0 0 32 8"
                  fill="none"
                  className="transition-transform duration-500 group-hover:translate-x-2"
                >
                  <path
                    d="M0 4h30m0 0L26 1m4 3l-4 3"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
