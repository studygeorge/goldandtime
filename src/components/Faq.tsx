"use client";

import { useState } from "react";

const QA = [
  {
    q: "Как я могу убедиться, что часы оригинальные?",
    a: "Каждая позиция проходит независимую экспертизу — часовщик с 24-летним стажем плюс внешний геммолог для камней. На руки выдаём заключение с фотографиями, сверкой серийных номеров и пробами. До оплаты — вы получаете полный отчёт. После оплаты обнаружится несоответствие — возврат 100% средств в течение 14 дней.",
  },
  {
    q: "Какие документы вы предоставляете?",
    a: "По часам: оригинальный паспорт мануфактуры (если есть), коробка, гарантийная карта, договор купли-продажи, акт экспертизы, фотосессия. По украшениям — сертификат GIA / IGI / SSEF на каждый существенный камень, акт геммолога, договор. Все позиции — официально, с НДС или без по выбору.",
  },
  {
    q: "Можно ли вернуть часы после покупки?",
    a: "Да. 14 дней на возврат с момента передачи — без объяснения причин, при сохранении комплектации. Деньги возвращаем безналом в течение 3 рабочих дней. Trade-in зачёт при возврате расторгается симметрично.",
  },
  {
    q: "Как работает trade-in?",
    a: "Присылаете фото и документы — в течение рабочего дня пришлём предварительную оценку. После согласования — очная экспертиза в офисе, финальная цена. Зачёт идёт в покупку любой позиции из каталога или выплачиваем на счёт. Принимаем швейцарские часы, ювелирные украшения, инвестиционные камни.",
  },
  {
    q: "Можно ли посмотреть позицию вживую?",
    a: "Да, в офисе на Петровке, 5 — по предварительной записи. Также возможен выезд курьера-носителя (Москва и МО), показ в банковской ячейке или на нейтральной территории. Все встречи — по NDA, без съёмки и третьих лиц.",
  },
  {
    q: "Доставляете в другие города и страны?",
    a: "По России — инкассация в страховой упаковке, лимит до $1 000 000 на отправление. Международная доставка — через сертифицированных перевозчиков (Brinks, Ferrari Group), оформление CITES при необходимости. Растаможка — отдельная услуга, считаем индивидуально.",
  },
  {
    q: "Какие способы оплаты?",
    a: "Безналичный расчёт на счёт юрлица в РФ или в дружественной юрисдикции (ОАЭ, Гонконг, Турция). Криптовалюта — USDT/USDC по курсу на момент сделки, через KYC-канал. Наличные — до лимита по ФЗ-115. Рассрочка от партнёра-банка для позиций до $500 000.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative scroll-mt-24 py-16 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="t-mono-cap text-ink-3">— ЧАСТЫЕ ВОПРОСЫ</span>
            <h2
              className="t-display mt-3 text-ink"
              style={{ fontSize: "clamp(1.85rem, 4.8vw, 4.25rem)" }}
            >
              Что<br />
              <span style={{ color: "var(--sapphire)" }}>спрашивают.</span>
            </h2>
            <p className="mt-5 md:mt-6 text-[14px] leading-[1.6] text-ink-2 max-w-sm">
              Не нашли ответа — напишите в&nbsp;<a href="https://t.me/goldandtime" className="underline underline-offset-4 hover:text-sapphire-mid">Telegram</a>{" "}
              или запросите звонок куратора.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-line">
            {QA.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-5 md:gap-6 py-5 md:py-6 text-left group"
                  >
                    <span className="text-[1rem] md:text-[1.2rem] font-extrabold tracking-[-0.02em] leading-snug">
                      {it.q}
                    </span>
                    <span
                      className="t-mono shrink-0 text-ink-3 group-hover:text-ink transition-colors"
                      style={{ fontSize: 22, lineHeight: 1, marginTop: 2 }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 md:pb-6 pr-8 md:pr-12 text-[14px] md:text-[14.5px] leading-[1.65] text-ink-2 max-w-[58ch]">
                      {it.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
