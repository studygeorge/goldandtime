"use client";

import { motion } from "framer-motion";

type Piece = {
  brand: string;
  model: string;
  reference: string;
  metal: string;
  detail: string;
  price: string;
  badge?: string;
  tone: "warm" | "cool" | "rose";
};

const WATCHES: Piece[] = [
  {
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "Ref. 5811/1G",
    metal: "Белое золото 750°",
    detail: "Автоматический калибр 26-330 S C · 45 ч",
    price: "$ 290 000",
    badge: "В наличии · 1 из 2",
    tone: "cool",
  },
  {
    brand: "Audemars Piguet",
    model: "Royal Oak Concept Tourbillon",
    reference: "Ref. 26630TI",
    metal: "Титан · керамика",
    detail: "Скелетонизированный турбийон · ручной завод",
    price: "$ 410 000",
    badge: "Limited · NOS",
    tone: "cool",
  },
  {
    brand: "Rolex",
    model: "Daytona Platinum",
    reference: "Ref. 126506 · Ice-blue dial",
    metal: "Платина 950°",
    detail: "Калибр 4131 · хронограф",
    price: "$ 185 000",
    badge: "Под запрос",
    tone: "warm",
  },
  {
    brand: "Richard Mille",
    model: "RM 11-03 McLaren",
    reference: "Carbon TPT · Quartz TPT",
    metal: "Углеродное волокно",
    detail: "Хронограф flyback · 55 ч",
    price: "$ 245 000",
    badge: "Edition limitée 14/500",
    tone: "rose",
  },
  {
    brand: "A. Lange & Söhne",
    model: "Lange 1 Tourbillon",
    reference: "Ref. 722.025",
    metal: "Розовое золото 750°",
    detail: "Турбийон с остановкой · ручной завод",
    price: "$ 395 000",
    badge: "Numbered 12/100",
    tone: "rose",
  },
  {
    brand: "Vacheron Constantin",
    model: "Overseas Perpetual Calendar",
    reference: "Ref. 4300V",
    metal: "Розовое золото 750°",
    detail: "Вечный календарь · 40 ч",
    price: "$ 175 000",
    badge: "Сертификат Hallmark of Geneva",
    tone: "rose",
  },
];

const JEWELRY: Piece[] = [
  {
    brand: "Cartier",
    model: "Panthère High Jewelry",
    reference: "Колье",
    metal: "Белое золото 750° · ониксы · изумруды",
    detail: "Ручная закрепка, 24.6 ct бриллиантов",
    price: "$ 485 000",
    badge: "Unique piece",
    tone: "cool",
  },
  {
    brand: "Van Cleef & Arpels",
    model: "Alhambra · 20 motifs",
    reference: "Длинное колье",
    metal: "Жёлтое золото 750° · перламутр",
    detail: "Авторизованная серия Maison",
    price: "$ 95 000",
    badge: "Сертификат VCA",
    tone: "warm",
  },
  {
    brand: "Bulgari",
    model: "Serpenti High Jewelry",
    reference: "Браслет-часы",
    metal: "Розовое золото · бриллианты паве",
    detail: "Турникет, индивидуальная посадка",
    price: "$ 320 000",
    badge: "Haute Joaillerie",
    tone: "rose",
  },
  {
    brand: "Graff",
    model: "Butterfly Silhouette",
    reference: "Серьги",
    metal: "Платина · фантазийные бриллианты",
    detail: "Розовый бриллиант 4.21 ct, GIA",
    price: "$ 540 000",
    badge: "Аукционный лот",
    tone: "cool",
  },
  {
    brand: "Harry Winston",
    model: "Cluster",
    reference: "Кольцо · 8.18 ct",
    metal: "Платина · бриллиант D Flawless",
    detail: "Сертификат GIA · Type IIa",
    price: "$ 410 000",
    badge: "Investment grade",
    tone: "cool",
  },
  {
    brand: "Tiffany & Co.",
    model: "Schlumberger «Bird on a Rock»",
    reference: "Брошь",
    metal: "Жёлтое золото · аквамарин 41 ct",
    detail: "Архивный дизайн J. Schlumberger",
    price: "$ 220 000",
    badge: "Архив Tiffany",
    tone: "warm",
  },
];

function WatchIllustration() {
  return (
    <div className="relative h-[78%] w-[78%]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-graphite/10 via-graphite/5 to-transparent" />
      <div className="absolute inset-[5%] rounded-full border border-graphite/25 ring-spin" />
      <div className="absolute inset-[14%] rounded-full bg-ivory border border-graphite/30 shadow-[inset_0_0_40px_rgba(13,12,10,0.08),0_8px_24px_-8px_rgba(13,12,10,0.18)]" />
      <div className="absolute left-1/2 top-1/2 h-[3px] w-[34%] -translate-x-1/2 -translate-y-1/2 origin-left bg-graphite rotate-[35deg] rounded-full" />
      <div className="absolute left-1/2 top-1/2 h-[2px] w-[26%] -translate-x-1/2 -translate-y-1/2 origin-left bg-graphite/85 rotate-[110deg] rounded-full" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-graphite" />
      {Array.from({ length: 60 }).map((_, idx) => (
        <span
          key={idx}
          className="absolute left-1/2 top-1/2 block w-px origin-bottom bg-graphite/55"
          style={{
            height: idx % 5 === 0 ? "10px" : "4px",
            transform: `translate(-50%, -50%) rotate(${idx * 6}deg) translateY(-43%)`,
          }}
        />
      ))}
    </div>
  );
}

function JewelIllustration() {
  return (
    <div className="relative h-[78%] w-[78%]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(13,12,10,0.08)_0%,transparent_60%)]" />
      <svg viewBox="0 0 220 220" className="h-full w-full">
        <defs>
          <linearGradient id="ring-bw" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d0c0a" />
            <stop offset="50%" stopColor="#5a534a" />
            <stop offset="100%" stopColor="#0d0c0a" />
          </linearGradient>
          <radialGradient id="gem-bw" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="50%" stopColor="#e8d9bd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d0c0a" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#ring-bw)"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <ellipse cx="110" cy="125" rx="72" ry="38" />
          <ellipse cx="110" cy="125" rx="50" ry="26" opacity="0.7" />
          <ellipse cx="110" cy="125" rx="30" ry="14" opacity="0.5" />
        </g>
        <g>
          <path
            d="M110 78 L94 56 L110 42 L126 56 Z"
            fill="url(#gem-bw)"
            stroke="url(#ring-bw)"
            strokeWidth="0.8"
          />
          <path d="M110 78 L94 56 L126 56 Z" fill="rgba(255,255,255,0.4)" />
          <circle cx="110" cy="62" r="2.6" fill="#ffffff" opacity="0.95" />
          <circle cx="50" cy="125" r="3" fill="url(#gem-bw)" />
          <circle cx="170" cy="125" r="3" fill="url(#gem-bw)" />
        </g>
      </svg>
    </div>
  );
}

function PieceCard({
  index,
  piece,
  variant,
}: {
  index: number;
  piece: Piece;
  variant: "watch" | "jewelry";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.1,
      }}
      className="card-luxe group flex flex-col"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-line bg-gradient-to-br from-ivory via-cream/50 to-cream/70">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
        >
          {variant === "watch" ? <WatchIllustration /> : <JewelIllustration />}
        </div>
        {piece.badge && (
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 border border-graphite bg-ivory/90 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-graphite backdrop-blur">
            <span className="gold-mark" />
            {piece.badge}
          </span>
        )}
        <div className="absolute right-5 top-5 text-right">
          <div className="eyebrow text-graphite/55">{piece.brand}</div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h4 className="text-xl md:text-2xl text-graphite font-medium tracking-tight">
          {piece.model}
        </h4>
        <p className="mt-1 eyebrow text-graphite/55">{piece.reference}</p>
        <ul className="mt-5 space-y-1.5 text-[0.82rem] leading-relaxed text-graphite/75">
          <li>— {piece.metal}</li>
          <li>— {piece.detail}</li>
        </ul>

        <div className="mt-auto pt-7 flex items-end justify-between border-t border-line">
          <div>
            <div className="eyebrow text-graphite/55">Стоимость</div>
            <div className="mt-1 text-xl md:text-2xl text-graphite font-medium tracking-tight">
              {piece.price}
            </div>
          </div>
          <a
            href="#contact"
            className="text-[0.7rem] uppercase tracking-[0.22em] text-graphite transition-colors hover:text-graphite/60 flex items-center gap-2"
          >
            Запросить
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
              <path
                d="M0 4h20m0 0L17 1m3 3l-3 3"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Showcase() {
  return (
    <>
      <section id="watches" className="relative scroll-mt-24 py-24 md:py-32" data-showcase>
        <div className="mx-auto max-w-[110rem] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <span className="eyebrow text-graphite/70">Часы · Horology</span>
              <h2 className="section-h mt-4 text-graphite">
                Кабинет коллекционера
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-graphite/70">
              Аутентифицированные образцы со всеми коробками и&nbsp;документами.
              Для каждой позиции — отчёт независимого часового эксперта.
              Цены без НДС, доставка инкассацией.
            </p>
          </motion.div>

          <div id="showcase" className="mt-14 md:mt-20 grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WATCHES.map((w, i) => (
              <PieceCard
                key={`${w.brand}-${w.model}`}
                index={i}
                variant="watch"
                piece={w}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="divider-thin" />
      </div>

      <section id="jewelry" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-[110rem] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8"
          >
            <div>
              <span className="eyebrow text-graphite/70">Украшения · Haute Joaillerie</span>
              <h2 className="section-h mt-4 text-graphite">
                Камни, которые помнят
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-graphite/70">
              Сертификаты GIA / IGI / SSEF. Trade-in ваших украшений
              с&nbsp;зачётом до&nbsp;90%. Сопровождение сделки нотариусом
              и&nbsp;экспертом-геммологом.
            </p>
          </motion.div>

          <div className="mt-14 md:mt-20 grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {JEWELRY.map((j, i) => (
              <PieceCard
                key={`${j.brand}-${j.model}`}
                index={i}
                variant="jewelry"
                piece={j}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
