import Link from "next/link";
import type { Doc } from "@/lib/content";
import { Card, Tag } from "@/components/ui";

function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Compact card for a single Lab-produced document in a listing. */
export function DocCard({ doc }: { doc: Doc }) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-ink-faint">{formatDate(doc.date)}</span>
        {doc.status && (
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
            {doc.status}
          </span>
        )}
      </div>

      <Link
        href={`/${doc.collection}/${doc.slug}`}
        className="text-lg font-semibold leading-snug text-ink transition-colors hover:text-accent"
      >
        {doc.title}
      </Link>

      {doc.summary && (
        <p className="text-sm leading-relaxed text-ink-soft">{doc.summary}</p>
      )}

      {doc.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {doc.tags.slice(0, 4).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </Card>
  );
}
