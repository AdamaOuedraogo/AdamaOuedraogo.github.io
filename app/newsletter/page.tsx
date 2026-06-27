import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "A slow, useful newsletter on AI, MCP and the future of software quality. Building in public.",
};

export default function NewsletterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsletter"
        title="The future of quality, in your inbox."
        intro="Occasional, useful notes on AI, MCP, Playwright and agentic quality engineering — drawn from what I'm actually learning and building. No noise, no hype."
      />

      <section className="container-page max-w-prose pb-8">
        <NewsletterForm />
        <p className="mt-4 text-xs text-ink-faint">
          No spam. Unsubscribe anytime. Even with zero subscribers today, the door is open.
        </p>
      </section>

      <section className="container-page max-w-prose pb-24">
        <div className="prose prose-stone max-w-prose">
          <h2>What you'll get</h2>
          <ul>
            <li>Field notes from real QA + AI experiments</li>
            <li>Plain-language explainers on MCP and agentic workflows</li>
            <li>What changed my mind, and why it matters for QA engineers</li>
          </ul>
        </div>
      </section>
    </>
  );
}
