import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JewelryCard } from "@/components/JewelryCard";
import { Crystal, Fog, Streak, SparkleField } from "@/components/primitives";
import { ProductGallery } from "@/components/ProductGallery";
import { JEWELRY, getJewelry, relatedJewelry } from "@/data/jewelry";
import { getBrand } from "@/data/brands";

export function generateStaticParams() {
  return JEWELRY.map((j) => ({ slug: j.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = getJewelry(slug);
  if (!j) return { title: "Не найдено" };
  return {
    title: `${j.brand} ${j.model}`,
    description: `${j.brand} ${j.model}, ${j.ref}, ${j.year}. ${j.description.slice(0, 140)}`,
  };
}

export default async function JewelryItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const j = getJewelry(slug);
  if (!j) notFound();

  const brand = getBrand(j.brandSlug);
  const related = relatedJewelry(j.slug, 4);

  return (
    <>
      <Header />
      <main className="flex-1 pt-28 md:pt-32">
        <section className="relative overflow-hidden pb-12 md:pb-20 bg-paper border-b border-line">
          <Fog x={-150} y={-100} size={500} color="#2853C8" opacity={0.3} blur={100} />
          <Fog x="75%" y="55%" size={500} color="#C12347" opacity={0.22} blur={100} />

          <div className="mx-auto max-w-[110rem] px-6 md:px-10">
            <Breadcrumb
              items={[
                { href: "/", label: "Главная" },
                { href: "/jewelry", label: "Украшения" },
                { href: `/brands/${j.brandSlug}`, label: j.brand },
                { label: j.model },
              ]}
            />

            <div className="mt-7 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                {j.images && j.images.length > 0 ? (
                  <ProductGallery images={j.images} alt={`${j.brand} ${j.model}`} fit="cover" />
                ) : (
                  <div className="relative aspect-[4/5] bg-white border border-line overflow-hidden">
                    <Crystal x="28%" y="22%" size={320} hue={j.hue} rot={5} />
                    <Crystal x="55%" y="58%" size={170} hue={j.hue === "ruby" ? "sapphire" : "ruby"} rot={-15} opacity={0.85} />
                    <Streak x="-5%" y="80%" w={400} hue="sapphire" rot={-12} opacity={0.45} />
                    <div aria-hidden className="absolute inset-0 pointer-events-none">
                      <SparkleField variant="jewel" />
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-6">
                <Link
                  href={`/brands/${j.brandSlug}`}
                  className="t-mono-cap text-ink-3 hover:text-sapphire-mid transition-colors"
                >
                  · {j.brand} · {j.category.toUpperCase()}
                </Link>
                <h1
                  className="t-display mt-3"
                  style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
                >
                  {j.model}<span style={{ color: "var(--sapphire)" }}>.</span>
                </h1>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="tag">{j.tag}</span>
                  <span className="tag tag--ghost">REF · {j.ref}</span>
                  <span className="tag tag--ghost">{j.year}</span>
                  <span className="tag tag--ghost">{j.condition}</span>
                  {j.papers && <span className="tag tag--ghost">СЕРТИФИКАТ</span>}
                  {j.box && <span className="tag tag--ghost">КОРОБКА</span>}
                </div>

                <p className="text-[15px] md:text-[16px] leading-[1.65] text-ink-2 mt-7 max-w-xl">
                  {j.description}
                </p>

                <div className="grid grid-cols-2 mt-7 md:mt-8 border border-line">
                  {j.specs.map(([k, v], i, arr) => (
                    <div
                      key={k}
                      className="bg-white p-3 md:p-4"
                      style={{
                        borderRight: i % 2 === 0 ? "1px solid var(--line)" : "none",
                        borderBottom: i < arr.length - 2 ? "1px solid var(--line)" : "none",
                      }}
                    >
                      <div className="t-mono-cap text-ink-3 mb-1">{k}</div>
                      <div className="text-[12.5px] md:text-[13px] font-semibold leading-snug">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-ink text-paper p-5 md:p-6 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="t-mono-cap mb-1.5" style={{ color: "var(--chrome)" }}>· ЦЕНА</div>
                    <div className="text-[1.6rem] md:text-[2.2rem] font-extrabold tracking-[-0.03em] leading-none">
                      {j.price}
                    </div>
                    <div className="t-mono-cap mt-2" style={{ color: "var(--chrome)" }}>+ trade-in зачётом</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link href="/#contact" className="btn btn--white">
                      Запросить просмотр<span className="arrow">→</span>
                    </Link>
                    <Link href="/#trade-in" className="btn" style={{ background: "var(--ruby-mid)" }}>
                      Trade-in зачёт<span className="arrow">→</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 t-mono-cap">
                  <a href="https://t.me/goldandtime" className="card p-4 hover:border-ink transition-colors text-ink">
                    TELEGRAM @goldandtime
                  </a>
                  <a href="tel:+74951234567" className="card p-4 hover:border-ink transition-colors text-ink">
                    +7 (495) 123-45-67
                  </a>
                  <a href="mailto:atelier@goldandtime.ru" className="card p-4 hover:border-ink transition-colors text-ink">
                    atelier@goldandtime.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {brand && (
          <section className="relative py-12 md:py-16 border-b border-line">
            <div className="mx-auto max-w-[110rem] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <div className="md:col-span-5">
                <span className="t-mono-cap text-ink-3">· О ДОМЕ</span>
                <h2
                  className="t-display mt-3 text-ink"
                  style={{ fontSize: "clamp(1.85rem, 4.5vw, 3.5rem)" }}
                >
                  {brand.name}
                </h2>
                <div className="t-mono-cap text-ink-3 mt-2">{brand.era}</div>
              </div>
              <div className="md:col-span-7">
                <p className="text-[15px] leading-[1.7] text-ink-2 max-w-2xl">{brand.description}</p>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="btn btn--ghost mt-6 inline-flex"
                >
                  Все позиции {brand.name}<span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="relative py-14 md:py-20 overflow-hidden">
            <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
              <SparkleField variant="subtle" />
            </div>
            <div className="mx-auto max-w-[110rem] px-6 md:px-10">
              <div className="flex justify-between items-end gap-6 mb-7 md:mb-10 flex-wrap">
                <h2 className="t-display text-ink" style={{ fontSize: "clamp(1.85rem, 5vw, 4rem)" }}>
                  Похожие<span style={{ color: "var(--sapphire)" }}>.</span>
                </h2>
                <Link href="/jewelry" className="t-mono-cap hover:text-sapphire-mid transition-colors">
                  ВСЕ УКРАШЕНИЯ →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {related.map((p, i) => <JewelryCard key={p.slug} p={p} i={i} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
