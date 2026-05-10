import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CatalogGrid } from "@/components/CatalogGrid";
import { JewelryCard } from "@/components/JewelryCard";
import { Crystal, Fog, Streak, SparkleField } from "@/components/primitives";
import { BRANDS, brandsWithStock, getBrand } from "@/data/brands";
import { watchesByBrand } from "@/data/watches";
import { jewelryByBrand } from "@/data/jewelry";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = getBrand(slug);
  if (!b) return { title: "Не найдено" };
  const kindLabel =
    b.kind === "watches" ? "каталог часов" : b.kind === "jewelry" ? "каталог украшений" : "каталог";
  return {
    title: `${b.name} — ${kindLabel}`,
    description: `${b.name} (${b.era}). ${b.description.slice(0, 140)}`,
  };
}

export default async function BrandPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  const watches = watchesByBrand(slug);
  const jewelry = jewelryByBrand(slug);
  const totalCount = watches.length + jewelry.length;
  const others = brandsWithStock().filter((b) => b.slug !== slug);

  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <section className="relative overflow-hidden pb-12 md:pb-20 border-b border-line">
          <Fog x={-150} y={-100} size={500} color="#2853C8" opacity={0.32} blur={110} />
          <Fog x="80%" y="40%" size={420} color="#1F9266" opacity={0.22} blur={100} />
          <div className="hidden lg:block">
            <Crystal x="72%" y="14%" size={340} hue={brand.hue} rot={10} opacity={0.85} />
            <Streak x="50%" y="68%" w={500} hue={brand.hue === "obsidian" ? "sapphire" : (brand.hue as "sapphire" | "emerald" | "ruby" | "chrome")} rot={-12} opacity={0.4} />
          </div>
          <div className="lg:hidden">
            <Crystal x="62%" y="6%" size={210} hue={brand.hue} rot={10} opacity={0.7} />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
            <SparkleField variant="hero" />
          </div>

          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <Breadcrumb
              items={[
                { href: "/", label: "Главная" },
                brand.kind === "jewelry"
                  ? { href: "/jewelry", label: "Украшения" }
                  : { href: "/watches", label: "Часы" },
                { label: brand.name },
              ]}
            />

            <div className="mt-7 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
              <div className="lg:col-span-7">
                <span className="t-mono-cap text-ink-3">— {brand.era}</span>
                <h1
                  className="t-display mt-3 text-ink"
                  style={{ fontSize: "clamp(2.25rem, 8vw, 8rem)" }}
                >
                  {brand.name}<span style={{ color: "var(--sapphire)" }}>.</span>
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-ink-2 max-w-xl">
                  {brand.description}
                </p>
                <div className="t-mono-cap text-ink-3 mt-6">
                  · {totalCount} {totalCount === 1 ? "позиция" : "позиций"} в&nbsp;стоке
                  {watches.length > 0 && jewelry.length > 0 && (
                    <> · {watches.length} час. + {jewelry.length} укр.</>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {watches.length > 0 && (
          <section className="relative py-14 md:py-20">
            <div className="mx-auto max-w-[110rem] px-6 md:px-10">
              <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 flex-wrap">
                <div>
                  <span className="t-mono-cap text-ink-3">— ЧАСЫ</span>
                  <h2 className="t-display mt-2 text-ink" style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
                    {watches.length} {watches.length === 1 ? "позиция" : watches.length < 5 ? "позиции" : "позиций"}
                    <span style={{ color: "var(--sapphire)" }}>.</span>
                  </h2>
                </div>
                <Link href="/watches" className="t-mono-cap hover:text-sapphire-mid transition-colors">
                  ВСЕ ЧАСЫ →
                </Link>
              </div>
              <CatalogGrid watches={watches} showBrandFilter={false} />
            </div>
          </section>
        )}

        {jewelry.length > 0 && (
          <section className="relative py-14 md:py-20 bg-paper border-t border-line">
            <div className="mx-auto max-w-[110rem] px-6 md:px-10">
              <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 flex-wrap">
                <div>
                  <span className="t-mono-cap text-ink-3">— УКРАШЕНИЯ</span>
                  <h2 className="t-display mt-2 text-ink" style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>
                    {jewelry.length} {jewelry.length === 1 ? "позиция" : jewelry.length < 5 ? "позиции" : "позиций"}
                    <span style={{ color: "var(--sapphire)" }}>.</span>
                  </h2>
                </div>
                <Link href="/jewelry" className="t-mono-cap hover:text-sapphire-mid transition-colors">
                  ВСЕ УКРАШЕНИЯ →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {jewelry.map((p, i) => <JewelryCard key={p.slug} p={p} i={i} />)}
              </div>
            </div>
          </section>
        )}

        {totalCount === 0 && (
          <section className="relative py-14 md:py-20">
            <div className="mx-auto max-w-[110rem] px-6 md:px-10">
              <div className="text-center py-16 max-w-xl mx-auto">
                <div className="t-mono-cap text-ink-3 mb-3">· В СТОКЕ ПОКА НЕТ ПОЗИЦИЙ</div>
                <p className="text-[15px] text-ink-2">
                  Подбираем {brand.name} под запрос — обычно находим за&nbsp;48&nbsp;часов от&nbsp;официальных партнёров и&nbsp;аукционов.
                </p>
                <Link href="/#contact" className="btn mt-6 inline-flex">
                  Запросить позицию {brand.short}<span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="relative py-12 md:py-16 border-t border-line bg-paper">
          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <div className="t-mono-cap text-ink-3 mb-5">— ДРУГИЕ ДОМА</div>
            <div className="flex flex-wrap gap-2">
              {others.map((b) => (
                <Link
                  key={b.slug}
                  href={`/brands/${b.slug}`}
                  className="t-mono-cap px-3.5 py-2 border border-line hover:border-ink hover:text-ink text-ink-3 transition-colors bg-white"
                  style={{ borderRadius: 0 }}
                >
                  {b.short} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
