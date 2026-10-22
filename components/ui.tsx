import Link from "next/link";
import clsx from "clsx";

/** Page-level header used at the top of every section page. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="container-page pt-16 pb-10 md:pt-24">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] md:text-5xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>
      )}
    </header>
  );
}

/**
 * Data table that stays readable on small screens: a regular table from `md`
 * up, and one stacked block per row below, with the column name repeated
 * above each cell.
 */
export function Table({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: React.ReactNode[][];
  caption: string;
}) {
  return (
    <table className="w-full border-t border-ink-faint/15 text-sm">
      <caption className="sr-only">{caption}</caption>
      <thead className="hidden md:table-header-group">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              scope="col"
              className="py-3 pr-4 text-left font-mono text-[11px] font-medium uppercase tracking-wider text-ink-faint"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {rows.map((row, i) => (
          <tr
            key={i}
            className="block border-b border-ink-faint/15 py-3 md:table-row md:py-0"
          >
            {row.map((cell, j) => (
              <td
                key={j}
                data-label={columns[j]}
                className={clsx(
                  "block py-1 pr-4 align-top leading-relaxed md:table-cell md:border-b md:border-ink-faint/15 md:py-3",
                  "before:block before:font-mono before:text-[11px] before:uppercase before:tracking-wider before:text-ink-faint before:content-[attr(data-label)] md:before:hidden",
                  j === 0 ? "font-medium text-ink" : "text-ink-soft",
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-ink-faint/25 px-2.5 py-0.5 font-mono text-[11px] text-ink-soft">
      {children}
    </span>
  );
}

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-ink-faint/15 bg-paper-raised p-6 transition-colors hover:border-accent/40",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A labelled call-to-action button. `external` opens in a new tab. */
export function CTA({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const cls = clsx(
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent"
      : "border border-ink/15 text-ink hover:border-accent hover:text-accent",
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
