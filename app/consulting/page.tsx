import type { Metadata } from "next";
import { PageHeader, Card, CTA } from "@/components/ui";
import { offers, ecosystem, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Freelance Playwright and Cypress automation, risk-based test strategy, CI/CD and AI-assisted testing.",
};

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We look at your current quality workflow (test suites, flakiness, review and release friction) and identify the highest-priority improvements.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "Deliver a useful first increment: a critical test journey, a CI improvement or a focused AI-assisted testing experiment.",
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
        title="Practical QA automation and quality engineering."
        intro="I help teams build maintainable tests, prioritize coverage and make CI results useful. Playwright, Cypress and risk-based testing are the foundation; AI supports the work where it helps."
      />

      <section className="container-page pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {offers.map((o) => (
            <Card key={o.title}>
              <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {o.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <p className="eyebrow">How we'd work</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-ink-faint/15 p-6"
            >
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
            {site.location}. {site.mobility} Let’s start with your product, your
            quality challenges and the scope of your mission.
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
