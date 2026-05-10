import Link from "next/link";
import { brandsWithStock } from "@/data/brands";

export function Maisons() {
  const stockBrands = brandsWithStock();
  // duplicate for seamless ticker
  const items = [...stockBrands, ...stockBrands];
  return (
    <section
      id="maisons"
      aria-label="Дома"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink bg-paper py-6 md:py-8"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-paper to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-paper to-transparent pointer-events-none" />
        <div className="flex ticker-track gap-10 md:gap-16 whitespace-nowrap">
          {items.map((b, i) => (
            <Link
              key={`${b.slug}-${i}`}
              href={`/brands/${b.slug}`}
              className="t-mono-cap text-ink/85 hover:text-sapphire-mid transition-colors flex items-center gap-10 md:gap-16"
              style={{ fontSize: 13, letterSpacing: "0.06em" }}
            >
              {b.name}
              <span className="inline-block w-1 h-1 bg-sapphire-mid rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
