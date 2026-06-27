import type { Metadata } from "next";
import { PageHeader, Tag } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "A growing, searchable knowledge base on MCP, AI, Playwright, QA and agentic systems.",
};

const TOPICS = ["MCP", "AI for QA", "Playwright", "Agentic Systems", "Test Strategy"];

export default function KnowledgePage() {
  const notes = getDocs("notes");

  return (
    <>
      <PageHeader
        eyebrow="Knowledge Base"
        title="Notes that compound into expertise."
        intro="Over time this becomes one of the biggest assets of the site — a second brain on MCP, AI, Playwright and agentic quality, written in plain language as I learn."
      />

      <section className="container-page pb-8">
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        {notes.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {notes.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>
        ) : (
          <p className="text-ink-soft">
            The first notes are being distilled from the lab journal. Check back soon.
          </p>
        )}
      </section>
    </>
  );
}
