"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { Fog, SparkleField } from "./primitives";
import type { Watch } from "@/data/watches";
import { brandsWithStock } from "@/data/brands";

type SortKey = "newest" | "priceAsc" | "priceDesc" | "yearDesc";

const SORTS: Array<[SortKey, string]> = [
  ["newest",    "СНАЧАЛА — НОВЫЕ"],
  ["priceDesc", "ЦЕНА · УБЫВ."],
  ["priceAsc",  "ЦЕНА · ВОЗР."],
  ["yearDesc",  "ГОД · УБЫВ."],
];

function applySort(items: Watch[], key: SortKey): Watch[] {
  const arr = [...items];
  if (key === "priceAsc") {
    arr.sort((a, b) => (a.priceUSD ?? Number.POSITIVE_INFINITY) - (b.priceUSD ?? Number.POSITIVE_INFINITY));
  } else if (key === "priceDesc") {
    arr.sort((a, b) => (b.priceUSD ?? -1) - (a.priceUSD ?? -1));
  } else if (key === "yearDesc") {
    arr.sort((a, b) => parseInt(b.year, 10) - parseInt(a.year, 10));
  } // newest = source order
  return arr;
}

export function CatalogGrid({
  watches,
  showBrandFilter = true,
  initialBrand,
}: {
  watches: Watch[];
  showBrandFilter?: boolean;
  initialBrand?: string;
}) {
  const [brand, setBrand] = useState<string>(initialBrand || "all");
  const [sort, setSort] = useState<SortKey>("newest");

  const stockBrands = useMemo(() => brandsWithStock(), []);
  const visible = useMemo(() => {
    const filtered = brand === "all" ? watches : watches.filter((w) => w.brandSlug === brand);
    return applySort(filtered, sort);
  }, [watches, brand, sort]);

  return (
    <div className="relative">
      <Fog x="80%" y={-100} size={420} color="#2853C8" opacity={0.22} blur={90} />
      <div aria-hidden className="absolute inset-0 pointer-events-none -z-10">
        <SparkleField variant="subtle" />
      </div>

      {showBrandFilter && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-y border-ink mb-6 md:mb-8">
          <div className="flex flex-wrap gap-2 overflow-x-auto sm:overflow-visible no-scrollbar">
            <button
              onClick={() => setBrand("all")}
              className={`t-mono-cap px-3 sm:px-3.5 py-2 transition-colors whitespace-nowrap ${
                brand === "all"
                  ? "bg-ink text-paper border-0"
                  : "bg-transparent text-ink-3 border border-line hover:text-ink hover:border-ink"
              }`}
              style={{ borderRadius: 0 }}
            >
              ВСЕ
            </button>
            {stockBrands.map((b) => (
              <button
                key={b.slug}
                onClick={() => setBrand(b.slug)}
                className={`t-mono-cap px-3 sm:px-3.5 py-2 transition-colors whitespace-nowrap ${
                  brand === b.slug
                    ? "bg-ink text-paper border-0"
                    : "bg-transparent text-ink-3 border border-line hover:text-ink hover:border-ink"
                }`}
                style={{ borderRadius: 0 }}
              >
                {b.short}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <label className="t-mono-cap text-ink-3">СОРТ ·</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="t-mono-cap bg-transparent border border-line py-1.5 px-2"
              style={{ borderRadius: 0 }}
            >
              {SORTS.map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {visible.length === 0 ? (
        <div className="text-center py-16">
          <div className="t-mono-cap text-ink-3 mb-3">· ПУСТО</div>
          <p className="text-[15px] text-ink-2 max-w-md mx-auto">
            По выбранному фильтру позиций нет. Запросите подбор под себя — найдём за&nbsp;48&nbsp;часов.
          </p>
          <Link href="/#contact" className="btn mt-6 inline-flex">
            Запросить позицию<span className="arrow">→</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}
        </div>
      )}
    </div>
  );
}
