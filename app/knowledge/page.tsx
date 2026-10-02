import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";
export const metadata: Metadata = {
  title: "Notes",
  description:
    "Practical notes on QA engineering, AI-assisted testing and MCP.",
};
export default function KnowledgePage() {
  const notes = getDocs("notes");
  return (
    <>
      <PageHeader
        eyebrow="Notes"
        title="Practical notes from the work."
        intro="Short explanations and lessons on testing, MCP and AI-assisted quality engineering."
      />
      <section className="container-page pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {notes.map((doc) => (
            <DocCard key={doc.slug} doc={doc} />
          ))}
        </div>
      </section>
      <section className="container-page pb-8">
        <h2 className="text-xl">Posts and historical experiments</h2>
        <p className="mt-3 text-ink-soft">
          Earlier writing remains available with its original dates.
        </p>
        <div className="mt-4 flex gap-5">
          <Link href="/learning" className="link-underline">
            Posts →
          </Link>
          <Link href="/lab" className="link-underline">
            Historical experiments →
          </Link>
        </div>
      </section>
    </>
  );
}
