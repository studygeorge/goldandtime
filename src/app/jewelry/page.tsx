import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JewelryGrid } from "@/components/JewelryGrid";
import { Fog, SparkleField } from "@/components/primitives";
import { JEWELRY } from "@/data/jewelry";
import { jewelryBrands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Каталог украшений",
  description:
    "Высокое ювелирное искусство в наличии: Graff, Boucheron, Piaget, Chopard, Messika. Сертификаты GIA, оригинальные коробки, гарантия 12 месяцев.",
};

export default function JewelryPage() {
  const brands = jewelryBrands();

  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <section className="relative overflow-hidden pb-10 md:pb-14">
          <Fog x={-150} y={-100} size={500} color="#2853C8" opacity={0.32} blur={110} />
          <Fog x="75%" y="20%" size={400} color="#C12347" opacity={0.22} blur={100} />
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <SparkleField variant="subtle" />
          </div>

          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <Breadcrumb items={[{ href: "/", label: "Главная" }, { label: "Украшения" }]} />

            <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <span className="t-mono-cap text-ink-3">— КАТАЛОГ УКРАШЕНИЙ</span>
                <h1
                  className="t-display mt-3 text-ink"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
                >
                  УКРАШЕНИЯ<span style={{ color: "var(--sapphire)" }}>.</span>
                </h1>
              </div>
              <div className="t-mono text-[12.5px] md:text-[13px] text-ink-2 max-w-md leading-[1.55]">
                {JEWELRY.length} позиций в активе · поставки от&nbsp;Place Vendôme и&nbsp;London Atelier.
                Не нашли нужное — <Link href="/#contact" className="underline underline-offset-2 hover:text-sapphire-mid">запросите подбор</Link>.
              </div>
            </div>

            <div className="mt-10 md:mt-14 flex flex-wrap gap-3">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="t-mono-cap px-3 py-2 border border-line hover:border-ink hover:text-ink text-ink-3 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  {b.short} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative pb-20 md:pb-28">
          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <JewelryGrid items={JEWELRY} />

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10 md:mt-14">
              <Link href="/#contact" className="btn">
                Запросить украшение под себя<span className="arrow">→</span>
              </Link>
              <Link href="/#how" className="btn btn--ghost">
                Как проходит сделка<span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
