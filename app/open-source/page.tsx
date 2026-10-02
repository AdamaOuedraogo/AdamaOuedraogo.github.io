import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Card, Tag } from "@/components/ui";
import { ecosystem } from "@/lib/site";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "QA MCP Server: practical open-source exploration of AI-assisted quality engineering.",
};
export default function OpenSourcePage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Building useful tools for QA."
        intro="A focused open-source project, backed by hands-on quality engineering experience."
      />
      <section className="container-page pb-16 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="eyebrow">Open source · Evolving MVP</p>
          <h2 className="mt-3 text-2xl">QA MCP Server</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Encode QA engineering expertise as capabilities AI assistants can
            execute. Flaky-test triage returns classifications, evidence,
            recommended actions and safe-repair rules. Test reports and runners
            are the observation and execution sources; test execution is opt-in.
          </p>
          <a
            href={ecosystem.qamcp.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block link-underline"
          >
            View repository ↗
          </a>
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>TypeScript</Tag>
            <Tag>MCP</Tag>
            <Tag>Playwright</Tag>
            <Tag>Cypress</Tag>
          </div>
        </Card>
        <Card>
          <p className="eyebrow">Open source</p>
          <h2 className="mt-3 text-2xl">This website</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            My professional experience, freelance services and notes in one
            place. Built with Next.js, TypeScript and Tailwind, with Markdown
            content and a static GitHub Pages deployment.
          </p>
          <a
            href="https://github.com/AdamaOuedraogo/AdamaOuedraogo.github.io"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block link-underline"
          >
            View source ↗
          </a>
        </Card>
      </section>
      <section className="container-page pb-8">
        <h2 className="text-xl">Notes and experiments</h2>
        <p className="mt-3 text-ink-soft">
          I share what I learn as I build, including MCP concepts and testing
          workflows.
        </p>
        <Link href="/knowledge" className="mt-4 inline-block link-underline">
          Read my notes →
        </Link>
      </section>
    </>
  );
}
