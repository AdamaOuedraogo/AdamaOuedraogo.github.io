import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { ecosystem } from "@/lib/site";
export const metadata: Metadata = {
  title: "Follow the work",
  description: "Follow QA engineering notes and QA MCP Server updates.",
};
export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Updates"
        title="Follow the work."
        intro="Project updates and practical QA notes are available on GitHub and LinkedIn."
      />
      <section className="container-page pb-12">
        <p className="text-ink-soft">
          Newsletter signup is currently unavailable.
        </p>
        <div className="mt-5 flex gap-5">
          <a href={ecosystem.qamcp.href} className="link-underline">
            QA MCP Server ↗
          </a>
          <a href={ecosystem.linkedin.href} className="link-underline">
            LinkedIn ↗
          </a>
          <a href="/knowledge" className="link-underline">
            Notes →
          </a>
        </div>
      </section>
    </>
  );
}
