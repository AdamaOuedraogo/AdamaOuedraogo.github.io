import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDoc, getSlugs, type Collection } from "@/lib/content";
import { Markdown } from "@/components/Markdown";
import { Tag } from "@/components/ui";

const COLLECTIONS: Collection[] = ["lab", "posts", "notes", "experiments", "projects"];

const BACK: Record<Collection, { href: string; label: string }> = {
  lab: { href: "/lab", label: "The Lab" },
  posts: { href: "/learning", label: "Learning in Public" },
  notes: { href: "/knowledge", label: "Knowledge Base" },
  experiments: { href: "/lab", label: "The Lab" },
  projects: { href: "/open-source", label: "Open Source" },
};

export function generateStaticParams() {
  return COLLECTIONS.flatMap((collection) =>
    getSlugs(collection).map((slug) => ({ collection, slug })),
  );
}

function parse(params: { collection: string; slug: string }) {
  const collection = params.collection as Collection;
  if (!COLLECTIONS.includes(collection)) return null;
  const doc = getDoc(collection, params.slug);
  if (!doc) return null;
  return { collection, doc };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string; slug: string }>;
}): Promise<Metadata> {
  const parsed = parse(await params);
  if (!parsed) return {};
  return { title: parsed.doc.title, description: parsed.doc.summary };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ collection: string; slug: string }>;
}) {
  const parsed = parse(await params);
  if (!parsed) notFound();
  const { collection, doc } = parsed;
  const back = BACK[collection];

  return (
    <article className="container-page max-w-prose pt-16 pb-10 md:pt-24">
      <Link href={back.href} className="link-underline font-mono text-xs">
        ← {back.label}
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-faint">
          <span>{doc.date}</span>
          {doc.phase && <span className="text-accent">{doc.phase}</span>}
          {doc.status && <span className="uppercase tracking-wider text-accent">{doc.status}</span>}
        </div>
        <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
          {doc.title}
        </h1>
        {doc.summary && <p className="mt-4 text-lg text-ink-soft">{doc.summary}</p>}
        {doc.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {doc.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </header>

      <hr className="my-8 border-ink-faint/15" />

      <Markdown>{doc.body}</Markdown>

      {doc.source && (
        <div className="mt-10 rounded-xl border border-ink-faint/15 bg-paper-raised p-5">
          <p className="eyebrow">Also lives at</p>
          <a
            href={doc.source}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block link-underline text-sm"
          >
            {doc.source} ↗
          </a>
        </div>
      )}
    </article>
  );
}
