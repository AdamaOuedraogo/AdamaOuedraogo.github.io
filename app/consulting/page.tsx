import type { Metadata } from "next";
import { PageHeader, Card, CTA } from "@/components/ui";
import { offers, ecosystem, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "I help engineering teams adopt AI for QA, build AI-assisted testing workflows, explore MCP and modernize their quality strategy.",
};

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We look at your current quality workflow — test suites, flakiness, review and release friction — and find where AI realistically helps.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "A small, concrete experiment: AI-assisted test generation, a Playwright MCP workflow, or agent-assisted review — finishable, not theoretical.",
  },
  {
    n: "03",
    title: "Adopt",
    body: "We turn what works into a repeatable workflow your team owns, with humans kept firmly in the loop.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Consulting"
        title="Helping teams adopt AI-native quality — without losing rigor."
        intro="Not “hire me”. I help engineering teams understand and adopt AI, MCP and agentic workflows in their quality process, keeping human judgment in control."
      />

      <section className="container-page pb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {offers.map((o) => (
            <Card key={o.title}>
              <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <p className="eyebrow">How we'd work</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-ink-faint/15 p-6">
              <span className="font-mono text-sm text-accent">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
          <h2 className="text-2xl font-semibold">Let's talk.</h2>
          <p className="mt-3 max-w-prose text-ink-soft">
            Available for remote missions across France and Europe — Playwright,
            E2E testing, AI-assisted testing and agentic QA. The best way to start
            is a short conversation about where your team is today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA href={`mailto:${site.email}`} external>
              Email me
            </CTA>
            <CTA href={ecosystem.malt.href} variant="ghost" external>
              View Malt profile ↗
            </CTA>
            <CTA href={ecosystem.linkedin.href} variant="ghost" external>
              Connect on LinkedIn ↗
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
