"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Аутентификация",
    text: "Каждый лот проходит независимую экспертизу часовых мастеров и геммологов. Заключение прилагается.",
  },
  {
    title: "Конфиденциальность",
    text: "Закрытые показы в офисе или на вашей территории, NDA на каждую сделку, доставка инкассацией.",
  },
  {
    title: "Trade-in",
    text: "Зачёт ваших часов и украшений до 90% оценочной стоимости. Прозрачная структура комиссий.",
  },
  {
    title: "Investment grade",
    text: "Подбор позиций с растущей стоимостью. Аналитика по аукционам Phillips, Christie's, Sotheby's.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-44 bg-cream/40 border-y border-line">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="eyebrow text-graphite/70">Atelier · est. 2008</span>
            <h2 className="section-h mt-4 leading-tight text-graphite">
              Бренд для тех, кто выбирает редкое
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-graphite/80">
              Gold&nbsp;&amp;&nbsp;Time — закрытое ателье и часовой кабинет.
              Мы работаем с частными коллекционерами и&nbsp;инвесторами,
              для&nbsp;которых вещь — это&nbsp;история, актив и&nbsp;высказывание
              о&nbsp;себе.
            </p>
            <p className="mt-5 text-base leading-relaxed text-graphite/65">
              Среди наших клиентов — топ-менеджеры FORTUNE&nbsp;500, владельцы
              футбольных клубов, члены королевских домов Ближнего Востока.
              Имена не разглашаются.
            </p>
            <a href="#contact" className="btn-solid mt-12">
              Записаться в ателье
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="card-luxe p-9 md:p-11"
              >
                <span className="text-3xl md:text-4xl text-graphite font-light tracking-tight">
                  0{i + 1}
                </span>
                <h3 className="mt-7 text-xl md:text-2xl text-graphite font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-graphite/70">
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
