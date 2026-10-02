/** Markdown content reader. Historical entries preserve their original dates and wording. */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Collection = "lab" | "posts" | "notes" | "experiments" | "projects";

export interface Doc {
  collection: Collection;
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  summary?: string;
  tags: string[];
  /** Where this artifact also lives (LinkedIn URL, GitHub repo, etc.). */
  source?: string;
  /** "published" | "draft" | "idea" — free-form. */
  status?: string;
  /** Phase of the learning curriculum, when relevant. */
  phase?: string;
  body: string; // raw markdown
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function readCollection(collection: Collection): Doc[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx?$/, "");
      return {
        collection,
        slug,
        title: data.title ?? slug,
        date: String(data.date ?? "").slice(0, 10),
        summary: data.summary,
        tags: Array.isArray(data.tags) ? data.tags : [],
        source: data.source,
        status: data.status,
        phase: data.phase,
        body: content.trim(),
      } satisfies Doc;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getDocs(collection: Collection): Doc[] {
  return readCollection(collection);
}

export function getDoc(collection: Collection, slug: string): Doc | undefined {
  return readCollection(collection).find((d) => d.slug === slug);
}

/** All slugs in a collection — for generateStaticParams. */
export function getSlugs(collection: Collection): string[] {
  return readCollection(collection).map((d) => d.slug);
}
