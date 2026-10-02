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
        intro="The former lab name is retired. These entries preserve the original work and dates; they are not an active product or a promised publishing cadence."
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
        <a href="/knowledge" className="mt-6 inline-block link-underline">
          Notes →
        </a>
      </section>
    </>
  );
}
