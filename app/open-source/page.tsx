import type { Metadata } from "next";
import { PageHeader, Card, Tag } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";
import { ecosystem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Projects, MCP servers and experiments — with the thinking behind them.",
};

export default function OpenSourcePage() {
  const projects = getDocs("projects");

  return (
    <>
      <PageHeader
        eyebrow="Open Source"
        title="Projects, not just repositories."
        intro="Each project explains the problem, the approach, the lessons learned and what's next — because the thinking is the asset."
      />

      <section className="container-page pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <p className="eyebrow">Live</p>
            <h3 className="mt-2 text-lg font-semibold">Agentic Quality Lab</h3>
            <p className="mt-2 text-sm text-ink-soft">
              The operating system behind this site: a daily learning + content
              engine that turns study into experiments, posts and notes.
            </p>
            <a
              href={ecosystem.lab.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block link-underline text-sm"
            >
              View repository ↗
            </a>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Tag>TypeScript</Tag>
              <Tag>Claude API</Tag>
              <Tag>MCP</Tag>
            </div>
          </Card>

          <Card>
            <p className="eyebrow">Live</p>
            <h3 className="mt-2 text-lg font-semibold">This website</h3>
            <p className="mt-2 text-sm text-ink-soft">
              The public face of the lab — Next.js, TypeScript and Tailwind,
              consuming markdown the lab produces. Built in public.
            </p>
            <a
              href={ecosystem.github.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block link-underline text-sm"
            >
              View source ↗
            </a>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Tag>Next.js</Tag>
              <Tag>Tailwind</Tag>
              <Tag>MDX</Tag>
            </div>
          </Card>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="container-page pb-24">
          <h2 className="text-xl font-semibold">More projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
