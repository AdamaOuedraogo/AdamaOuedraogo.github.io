import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";
import { ecosystem } from "@/lib/site";
export const metadata: Metadata = {
  title: "Historical experiments",
  description:
    "Archived QA and AI experiments. QA MCP Server is the current flagship.",
};
export default function LabPage() {
  const entries = [...getDocs("experiments"), ...getDocs("lab")];
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Historical experiments."
        intro="Earlier QA and AI experiments, preserved with their original dates. Follow QA MCP Server for current work."
      />
      <section className="container-page pb-12">
        <a href={ecosystem.qamcp.href} className="link-underline">
          Explore QA MCP Server, the current flagship ↗
        </a>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {entries.map((doc) => (
            <DocCard key={`${doc.collection}-${doc.slug}`} doc={doc} />
          ))}
        </div>
        <Link href="/knowledge" className="mt-6 inline-block link-underline">
          Notes →
        </Link>
      </section>
    </>
  );
}
