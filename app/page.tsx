import Link from "next/link";
import { site, offers, ecosystem } from "@/lib/site";
import { CTA } from "@/components/ui";

export default function Home() {
  return (
    <>
      <section className="container-page pt-16 pb-16 md:pt-24">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_160px]">
          <div>
            <p className="eyebrow">Freelance · Quality Engineering</p>
            <h1 className="mt-5 text-5xl leading-[1.1] md:text-6xl">
              Adama Ouedraogo
            </h1>
            <p className="mt-5 text-xl font-semibold">{site.role}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
              {site.shortBio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA href={ecosystem.qamcp.href} external>
                Explore QA MCP Server ↗
              </CTA>
              <CTA href="/consulting" variant="ghost">
                Discuss a mission
              </CTA>
              <CTA href={ecosystem.github.href} external variant="ghost">
                GitHub ↗
              </CTA>
              <CTA href={ecosystem.linkedin.href} external variant="ghost">
                LinkedIn ↗
              </CTA>
            </div>
            <p className="mt-6 text-sm text-ink-faint">{site.location}</p>
          </div>
          <img
            src="/adama.png"
            alt="Adama Ouedraogo"
            width={160}
            height={160}
            className="order-first h-28 w-28 rounded-2xl object-cover md:order-last md:h-40 md:w-40"
          />
        </div>
      </section>
      <section
        className="container-page border-t border-ink-faint/15 py-12"
        aria-labelledby="project-title"
      >
        <p className="eyebrow">Featured project · Open source</p>
        <h2 id="project-title" className="mt-3 text-2xl">
          QA MCP Server
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          I am encoding QA engineering judgment as reusable capabilities for AI
          assistants. The flaky-test triage capability classifies failures,
          presents evidence and recommends actions, with rules that prevent
          hiding defects through unsafe repairs.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-faint">
          Playwright, Cypress and test reports supply observations. The value is
          the QA reasoning applied to them. Test runners use dry-run defaults
          with opt-in execution.
        </p>
        <a
          href={ecosystem.qamcp.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block link-underline"
        >
          Explore the repository ↗
        </a>
      </section>
      <section
        className="container-page border-t border-ink-faint/15 py-12"
        aria-labelledby="work-title"
      >
        <p className="eyebrow">What I bring to your team</p>
        <h2 id="work-title" className="mt-3 text-2xl">
          Reliable tests. Clear priorities. Useful feedback.
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {offers.map((offer) => (
            <div key={offer.title}>
              <h3 className="text-lg">{offer.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {offer.body}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="container-page border-t border-ink-faint/15 py-12"
        aria-labelledby="experience-title"
      >
        <p className="eyebrow">Experience</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[180px_1fr]">
          <div>
            <h2 id="experience-title" className="text-2xl">
              Aircall
            </h2>
            <p className="mt-2 text-sm text-ink-faint">2020–2026 · SaaS</p>
          </div>
          <div>
            <h3 className="text-lg">Staff QA / Engineering Productivity</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Six years working on end-to-end automation, CI pipelines and
              release confidence. My work included Cypress and Playwright,
              flaky-test investigation, desktop testing and collaboration with
              engineering teams on critical user journeys.
            </p>
            <Link
              href="/mission"
              className="mt-4 inline-block link-underline text-sm"
            >
              More about my approach →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page border-t border-ink-faint/15 pt-12 pb-4">
        <h2 className="text-2xl">
          Let’s make your quality workflow work better.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          Available for freelance QA automation and quality engineering
          missions. Tell me about your product, your tests and what your team
          needs.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="link-underline">
            Email me →
          </a>
          <a
            href={ecosystem.malt.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            Malt ↗
          </a>
        </div>
      </section>
    </>
  );
}
