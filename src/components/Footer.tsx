import Link from "next/link";
import { brandsWithStock } from "@/data/brands";

const NAV = [
  { href: "/watches", label: "Каталог часов" },
  { href: "/#jewelry", label: "Украшения" },
  { href: "/#how", label: "Как проходит сделка" },
  { href: "/#trade-in", label: "Trade-in" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Контакты" },
];

export function Footer() {
  const brands = brandsWithStock();
  const items = [...brands, ...brands];

  return (
    <footer className="bg-ice border-t border-ink">
      <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-4 sm:col-span-2">
          <Link href="/" className="logo" style={{ fontSize: 22 }}>
            <span className="dot" />
            GOLD&amp;TIME
          </Link>
          <p className="mt-4 md:mt-5 text-[13px] text-ink-2 leading-[1.7] max-w-sm">
            Дилер швейцарских часов и&nbsp;ювелирных украшений с&nbsp;1992&nbsp;года.
            Подбор, экспертиза, trade-in. Всё — в&nbsp;Москве, без&nbsp;посредников.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="t-mono-cap text-ink-3 mb-3">— КОНТАКТЫ</div>
          <div className="text-[13px] leading-[1.7] text-ink-2">
            ул. Петровка, 5<br />
            Пн&nbsp;—&nbsp;Вс · 11:00 — 21:00<br />
            <a href="tel:+74951234567" className="t-mono hover:text-sapphire-mid transition-colors">+7 (495) 123-45-67</a><br />
            <a href="mailto:atelier@goldandtime.ru" className="hover:text-sapphire-mid transition-colors break-all">atelier@goldandtime.ru</a><br />
            <a href="https://t.me/goldandtime" className="hover:text-sapphire-mid transition-colors">@goldandtime</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="t-mono-cap text-ink-3 mb-3">— РАЗДЕЛЫ</div>
          <div className="grid grid-cols-1 gap-y-2 text-[13px] font-semibold tracking-[-0.01em]">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-sapphire-mid transition-colors">
                {n.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="t-mono-cap text-ink-3 mb-3">— ДОВЕРИЕ</div>
          <ul className="text-[13px] leading-[1.7] text-ink-2 space-y-1.5">
            <li>· Гарантия 12 мес.</li>
            <li>· Возврат 14 дней</li>
            <li>· Сертификаты GIA</li>
            <li>· NDA на сделку</li>
          </ul>
        </div>
      </div>

      {/* brand list — clickable links to /brands/[slug] */}
      <div className="border-y border-line overflow-hidden">
        <div className="flex ticker-track gap-12 py-4 whitespace-nowrap">
          {items.map((b, i) => (
            <Link
              key={`${b.slug}-${i}`}
              href={`/brands/${b.slug}`}
              className="t-mono-cap text-ink-3 hover:text-ink transition-colors"
              style={{ fontSize: 11 }}
            >
              {b.name}
              <span className="inline-block ml-12 w-1 h-1 bg-ink-3 rounded-full align-middle" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[110rem] px-6 md:px-10 py-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        <p className="t-mono-cap text-ink-3">
          © {new Date().getFullYear()} GOLD &amp; TIME · MOSCOW · С&nbsp;1992
        </p>
        <p className="t-mono-cap text-ink-3">
          <a href="#" className="hover:text-ink transition-colors">Политика обработки данных</a>
          {" · "}
          <a href="#" className="hover:text-ink transition-colors">Оферта</a>
        </p>
      </div>
    </footer>
  );
}
