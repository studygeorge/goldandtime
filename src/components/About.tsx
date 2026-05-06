"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Происхождение",
    text: "Сертификаты GIA / IGI на каждый камень. Прозрачная история металла и происхождения.",
  },
  {
    title: "Атéлье",
    text: "Эскиз, 3D-визуализация, модель из воска, ручная отливка и закрепка — в одной мастерской.",
  },
  {
    title: "Конфиденциальность",
    text: "Закрытые показы, доставка с курьером инкассации, NDA для индивидуальных заказов.",
  },
  {
    title: "Сервис",
    text: "Пожизненная диагностика часов, ежегодная чистка украшений, программа trade-in.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold/80">
              О бренде
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-6xl leading-tight text-champagne">
              Бренд для тех, <br />
              кто <span className="italic text-gold-gradient">выбирает редкое</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-champagne/70">
              Gold&nbsp;&amp;&nbsp;Time — закрытое ювелирное ателье и
              часовой бутик. Мы работаем с частными коллекционерами и теми,
              для кого вещь — это история, а не аксессуар.
            </p>
            <p className="mt-4 text-base leading-relaxed text-champagne/65">
              Все изделия создаются ограниченными сериями или в&nbsp;единственном
              экземпляре. Мы не делаем «коллекции сезона» — мы делаем
              предметы, которые переживут моду.
            </p>
            <a href="#contact" className="btn-gold mt-12">
              Записаться в ателье
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px md:gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="card-luxe p-8"
              >
                <span className="font-display text-3xl text-gold-gradient">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-6 text-2xl text-champagne">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-champagne/65">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
