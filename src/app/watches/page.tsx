import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CatalogGrid } from "@/components/CatalogGrid";
import { Fog, SparkleField } from "@/components/primitives";
import { WATCHES } from "@/data/watches";
import { brandsWithStock } from "@/data/brands";

export const metadata: Metadata = {
  title: "Каталог часов",
  description:
    "Швейцарские часы в наличии: Patek Philippe, Audemars Piguet, Rolex, Cartier, Vacheron Constantin, A. Lange & Söhne, Richard Mille. С документами, гарантия 12 месяцев.",
};

export default function WatchesPage() {
  const stockCount = WATCHES.length;
  const brands = brandsWithStock();

  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <section className="relative overflow-hidden pb-10 md:pb-14">
          <Fog x={-150} y={-100} size={500} color="#2853C8" opacity={0.32} blur={110} />
          <Fog x="75%" y="20%" size={400} color="#1F9266" opacity={0.22} blur={100} />
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <SparkleField variant="subtle" />
          </div>

          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <Breadcrumb items={[{ href: "/", label: "Главная" }, { label: "Часы" }]} />

            <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
              <div>
                <span className="t-mono-cap text-ink-3">— КАТАЛОГ ЧАСОВ</span>
                <h1
                  className="t-display mt-3 text-ink"
                  style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
                >
                  ЧАСЫ<span style={{ color: "var(--sapphire)" }}>.</span>
                </h1>
              </div>
              <div className="t-mono text-[12.5px] md:text-[13px] text-ink-2 max-w-md leading-[1.55]">
                {stockCount} позиций в активе · поставки еженедельно от&nbsp;официальных партнёров
                и&nbsp;с&nbsp;аукционов Phillips, Christie&apos;s, Sotheby&apos;s.
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
            <CatalogGrid watches={WATCHES} />

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10 md:mt-14">
              <Link href="/#contact" className="btn">
                Запросить позицию под себя<span className="arrow">→</span>
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
