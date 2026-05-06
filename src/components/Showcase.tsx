"use client";

import { motion } from "framer-motion";

const WATCHES = [
  {
    name: "Aurum Chronograph",
    metal: "Розовое золото 750°",
    movement: "Автомат · 42 ч резерва",
    price: "по запросу",
    edition: "Limited 25/100",
  },
  {
    name: "Noctis Skeleton",
    metal: "Платина 950°",
    movement: "Скелетон · ручной завод",
    price: "по запросу",
    edition: "Unique piece",
  },
  {
    name: "Solar Méridien",
    metal: "Жёлтое золото 750°",
    movement: "Турбийон · сапфир",
    price: "по запросу",
    edition: "Limited 12/50",
  },
];

const JEWELRY = [
  {
    name: "Колье «Solène»",
    detail: "Бриллианты 4.8 ct · золото 750°",
    note: "Авторская закрепка, длина 42 см",
  },
  {
    name: "Кольцо «Amber Vow»",
    detail: "Сапфир падпараджа 3.2 ct",
    note: "Индивидуальный размер",
  },
  {
    name: "Серьги «Lumière»",
    detail: "Изумруды · бриллианты паве",
    note: "Съёмные подвесы",
  },
  {
    name: "Браслет «Aether»",
    detail: "Белое золото 585° · ониксы",
    note: "Архитектурное плетение",
  },
];

function PieceCard({
  index,
  title,
  lines,
  badge,
  variant,
}: {
  index: number;
  title: string;
  lines: string[];
  badge?: string;
  variant: "watch" | "jewelry";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      className="card-luxe flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          {variant === "watch" ? <WatchIllustration /> : <JewelIllustration />}
        </div>
        {badge && (
          <span className="absolute left-4 top-4 rounded-full border border-gold/60 bg-noir/70 px-3 py-1 text-[0.62rem] uppercase tracking-[0.25em] text-gold backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h4 className="font-display text-2xl text-champagne">{title}</h4>
        <ul className="mt-3 space-y-1.5 text-[0.78rem] leading-relaxed text-champagne/65">
          {lines.map((l) => (
            <li key={l}>— {l}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-7">
          <span className="text-[0.68rem] uppercase tracking-[0.28em] text-gold/85">
            Узнать
          </span>
          <span className="h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
        </div>
      </div>
    </motion.article>
  );
}

function WatchIllustration() {
  return (
    <div className="relative h-[78%] w-[78%]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-deep/20 via-gold/10 to-transparent" />
      <div className="absolute inset-[6%] rounded-full border border-gold/40 ring-spin" />
      <div className="absolute inset-[14%] rounded-full bg-noir-soft border border-line shadow-[inset_0_0_60px_rgba(212,175,55,0.18)]" />
      <div className="absolute left-1/2 top-1/2 h-[3px] w-[36%] -translate-x-1/2 -translate-y-1/2 origin-left bg-gold rotate-[35deg] rounded-full" />
      <div className="absolute left-1/2 top-1/2 h-[2px] w-[28%] -translate-x-1/2 -translate-y-1/2 origin-left bg-champagne/80 rotate-[110deg] rounded-full" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.7)]" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <span
          key={deg}
          className="absolute left-1/2 top-1/2 block h-2 w-px -translate-x-1/2 origin-bottom bg-gold/65"
          style={{
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-44%)`,
          }}
        />
      ))}
    </div>
  );
}

function JewelIllustration() {
  return (
    <div className="relative h-[72%] w-[72%]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(247,231,206,0.18)_0%,transparent_60%)]" />
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8c668" />
            <stop offset="50%" stopColor="#f7e7ce" />
            <stop offset="100%" stopColor="#a07c1f" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#g)"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <ellipse cx="100" cy="110" rx="60" ry="32" />
          <ellipse cx="100" cy="110" rx="40" ry="22" opacity="0.65" />
          <path d="M100 78 L92 60 L100 50 L108 60 Z" fill="url(#g)" stroke="none" />
          <path d="M100 78 L92 60 L108 60 Z" fill="rgba(255,255,255,0.4)" stroke="none" />
          <circle cx="100" cy="78" r="3.5" fill="#f7e7ce" />
        </g>
      </svg>
    </div>
  );
}

export function Showcase() {
  return (
    <>
      <section id="watches" className="relative scroll-mt-24 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold/80">
                Часы · Horology
              </span>
              <h2 className="font-display mt-4 text-4xl md:text-6xl text-champagne">
                Швейцарская
                <br />
                <span className="italic text-gold-gradient">точность</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-champagne/65">
              Каждая модель собрана вручную мастером-часовщиком. Корпус,
              механизм, циферблат — выбираются индивидуально. Гравировка —
              в подарок.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WATCHES.map((w, i) => (
              <PieceCard
                key={w.name}
                index={i}
                variant="watch"
                title={w.name}
                badge={w.edition}
                lines={[w.metal, w.movement, `Стоимость · ${w.price}`]}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <div className="divider-gold" />
      </div>

      <section id="jewelry" className="relative scroll-mt-24 py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold/80">
                Украшения · Haute Joaillerie
              </span>
              <h2 className="font-display mt-4 text-4xl md:text-6xl text-champagne">
                Архитектура
                <br />
                <span className="italic text-gold-gradient">света</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-champagne/65">
              Сертифицированные камни, авторская закрепка, индивидуальный
              размер. Возможна реставрация и переработка фамильных
              украшений.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {JEWELRY.map((j, i) => (
              <PieceCard
                key={j.name}
                index={i}
                variant="jewelry"
                title={j.name}
                lines={[j.detail, j.note]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
