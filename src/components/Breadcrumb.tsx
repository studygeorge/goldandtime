import Link from "next/link";

export type Crumb = { href?: string; label: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="t-mono-cap text-ink-3 flex flex-wrap items-center gap-x-2 gap-y-1">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-2">
            {c.href && !last ? (
              <Link href={c.href} className="hover:text-ink transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className={last ? "text-ink-2" : ""}>{c.label}</span>
            )}
            {!last && <span aria-hidden>/</span>}
          </span>
        );
      })}
    </nav>
  );
}
