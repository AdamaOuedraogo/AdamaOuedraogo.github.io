import type { Metadata } from "next";
import { PageHeader, CTA } from "@/components/ui";
import { ecosystem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Talks, podcasts, webinars and workshops on Agentic Quality Engineering.",
};

const topics = [
  "From Automation to Orchestration: the next decade of QA",
  "Giving agents real testing hands with Playwright + MCP",
  "AI-assisted testing without losing rigor",
  "Building a learning-in-public engine as a working engineer",
];

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Speaking"
        title="Talks, podcasts and workshops."
        intro="I'm starting to share this journey on stage and on air. If you're organizing a meetup, podcast, webinar or internal workshop on AI and quality, I'd love to take part."
      />

      <section className="container-page pb-12">
        <p className="eyebrow">Topics I can speak on</p>
        <ul className="mt-6 space-y-3">
          {topics.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-xl border border-ink-faint/15 bg-paper-raised p-4 text-ink"
            >
              <span className="mt-1 font-mono text-accent">›</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-2xl border border-ink-faint/15 p-8">
          <p className="text-ink-soft">
            No past talks listed yet — this section grows as the journey does.
            Want to be the first invitation?
          </p>
          <div className="mt-5">
            <CTA href={ecosystem.linkedin.href} external>
              Reach out on LinkedIn ↗
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
