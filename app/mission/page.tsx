import type { Metadata } from "next";
import { PageHeader, CTA } from "@/components/ui";
import { EcosystemMap } from "@/components/EcosystemMap";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Why I am rebuilding my positioning around Agentic Quality Engineering — and documenting it in public.",
};

export default function MissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mission"
        title="Most portfolios describe the past. This one describes the future."
        intro="For more than twenty years I have worked in software engineering and quality. Today I am exploring what comes next — and building it in the open."
      />

      <section className="container-page pb-8">
        <div className="grid items-start gap-10 md:grid-cols-[200px_1fr]">
          <figure className="mx-auto md:mx-0">
            <img
              src="/adama.png"
              alt="Adama Ouedraogo"
              width={200}
              height={200}
              className="h-40 w-40 rounded-full object-cover ring-1 ring-ink-faint/20 md:h-48 md:w-48"
            />
            <figcaption className="mt-3 text-center text-sm text-ink-soft md:text-left">
              Adama Ouedraogo
              <span className="block text-xs text-ink-faint">Niort, France</span>
            </figcaption>
          </figure>

          <div className="prose prose-stone max-w-prose prose-headings:font-semibold prose-a:text-accent">
          <p>
            I recently finished almost six years as a Senior QA Automation
            Engineer at Aircall. Instead of simply looking for the next QA
            position, I decided to use this transition to completely reinvent my
            professional positioning.
          </p>
          <p>
            Artificial intelligence is transforming how software is built. I
            believe it will transform how software quality is engineered just as
            deeply. The market is already shifting — from a <em>builder</em>{" "}
            mindset to an <em>orchestrator</em> mindset. Future value is not only
            in writing automation scripts. It is in orchestrating AI agents,
            connecting them to real tools through MCP, and designing workflows
            where agents execute, observe and improve testing — while humans stay
            in control.
          </p>

          <h2>What I believe</h2>
          <ul>
            <li>
              The goal is not the most sophisticated agent system. The goal is
              consistency — habits that compound into visibility and credibility.
            </li>
            <li>
              AI should <strong>guide</strong> expertise, not replace judgment.
              Humans stay in the loop.
            </li>
            <li>
              People follow transformations more than technologies. So I document
              the transformation, in public, every day.
            </li>
          </ul>

          <h2>What I'm becoming</h2>
          <p>
            An <strong>AI-Powered / Agentic Quality Engineering Consultant</strong>{" "}
            — helping QA engineers, QA leads and engineering managers adopt AI,
            MCP and agentic workflows in their quality process, without losing
            the rigor that good testing demands.
          </p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <p className="eyebrow">How it all connects</p>
        <div className="mt-8 flex justify-center">
          <EcosystemMap />
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="flex flex-wrap gap-3">
          <CTA href="/lab">Explore the Lab</CTA>
          <CTA href="/consulting" variant="ghost">
            Work with me
          </CTA>
        </div>
      </section>
    </>
  );
}
