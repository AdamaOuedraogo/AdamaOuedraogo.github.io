import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "Experiments, prototypes, MCP servers and AI agents for software quality. The heart of the site.",
};

export default function LabPage() {
  const experiments = getDocs("experiments");
  const labLogs = getDocs("lab");

  return (
    <>
      <PageHeader
        eyebrow="Agentic Quality Lab"
        title="A laboratory for the future of software quality."
        intro="Small, finishable QA + AI experiments — Playwright, MCP, agents, AI-assisted review. Each one is designed to become a post, a demo, and eventually a reusable asset."
      />

      <section className="container-page pb-16">
        <h2 className="text-xl font-semibold text-ink">Experiments</h2>
        {experiments.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {experiments.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-ink-soft">
            First experiments are being written up. Follow along on the lab log below.
          </p>
        )}
      </section>

      <section className="container-page pb-24">
        <h2 className="text-xl font-semibold text-ink">Lab log</h2>
        <p className="mt-2 text-sm text-ink-soft">
          Daily missions from the Agentic Quality Lab — what I studied, built and learned.
        </p>
        {labLogs.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {labLogs.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-ink-soft">Lab logs are syncing…</p>
        )}
      </section>
    </>
  );
}
