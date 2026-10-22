import type { Metadata } from "next";
import { PageHeader, CTA, Table } from "@/components/ui";
import { audit, site } from "@/lib/site";

const description =
  "Two-day fixed-price audit of your Playwright or Cypress end-to-end suite: measured flakiness, root causes, fixes delivered as a pull request, and an action plan your team can run on its own.";

export const metadata: Metadata = {
  title: audit.title,
  description,
  alternates: { canonical: `${audit.href}/` },
  openGraph: {
    title: `${audit.title} · ${site.name}`,
    description,
    url: `${site.url}${audit.href}/`,
    siteName: site.name,
    type: "website",
  },
};

const scope = [
  [
    "Playwright or Cypress E2E suite (TypeScript/JavaScript), up to 500 tests",
    "Unit tests, load tests, manual testing",
  ],
  [
    "Last 30 days of CI history (GitLab CI, GitHub Actions, Jenkins, CircleCI)",
    "Framework migration (e.g. Selenium to Playwright)",
  ],
  [
    "Test code structure: selectors, waits, fixtures, test data, parallelisation",
    "Changes to the application under test",
  ],
  [
    "CI configuration: runners, retries, sharding, artifacts, run time",
    "Setting up a CI from scratch (separate 5-day offer)",
  ],
  ["Fixes for the 5 to 10 most expensive tests", "Fixing the entire suite"],
];

const steps = [
  {
    when: "Day 0 (30 min, video call)",
    body: "Kick-off: repository and CI access, which suite, who the point of contact is.",
  },
  {
    when: "Day 1, morning",
    body: "Measure: pull CI history, compute per-test flakiness rate, pipeline duration, and the cost of re-runs.",
  },
  {
    when: "Day 1, afternoon",
    body: "Diagnose: read the test code, identify root causes (fragile selectors, implicit waits, test interdependence, shared data, timeouts, parallelisation).",
  },
  {
    when: "Day 2, morning",
    body: "Fix: 5 to 10 of the most expensive tests, delivered as a pull request with every change explained.",
  },
  {
    when: "Day 2, afternoon",
    body: "Handover (1 h, video call): report walkthrough with the team, prioritised action plan, Q&A.",
  },
];

const deliverables = [
  [
    "Audit report",
    "PDF, 8–12 pages",
    "Overall and per-test flakiness rate, pipeline duration, estimated cost of re-runs, root causes, prioritised recommendations (quick wins / mid-term / structural)",
  ],
  [
    "Fixes",
    "Pull request on your repository",
    "5 to 10 tests fixed, one commit per root cause, rationale in the description",
  ],
  [
    "Action plan",
    "Table in the report",
    "Actions, estimated effort, expected gain, recommended order; designed to be run by the team without me",
  ],
  [
    "Handover",
    "1 h video call, recordable",
    "Walkthrough for the team, questions answered",
  ],
];

const terms = [
  "50% on order (€600 excl. VAT), 50% on delivery of the report. Payment on receipt, bank transfer.",
  "Quote and purchase order within 24 h; start possible within 5 business days of receiving the deposit and access.",
  "If repository and CI access are not provided within 10 business days of the agreed date, the deposit is retained and a new date is set.",
  "NDA signed on request before any access to code. Access is revoked on delivery.",
  "Sole-trader status (micro-entreprise); VAT per the regime in force at invoicing date.",
];

const prerequisites = [
  "Read access to the repository holding the E2E tests (plus the right to open a pull request)",
  "Read access to CI: last 30 days of jobs, logs, artifacts",
  "A test environment (staging or local) where the suite can run",
  "One point of contact: 30 min at kick-off, reachable during the 2 days, present 1 h at handover",
  "An application test account if the suite needs one",
];

const followUps = [
  [
    "Action plan implementation",
    "3 to 10 days, depending on the plan",
    "Fix the rest of the suite and stabilise CI",
  ],
  [
    "Playwright + CI setup",
    "5 days, fixed price",
    "A product with no E2E tests yet, foundation delivered turnkey",
  ],
  [
    "QA automation engagement",
    "3 to 6 months, remote",
    "Strengthen the team on an ongoing basis, daily rate by quote",
  ],
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page pb-12" aria-labelledby={id}>
      <h2 id={id} className="text-2xl font-semibold">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function AuditPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packaged offer"
        title={audit.title}
        intro={description}
      />

      <section className="container-page pb-12">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-ink-faint/15 py-4 text-sm">
          <p className="font-semibold text-ink">{audit.price}</p>
          <p className="text-ink-soft">2 days · remote · fixed price</p>
          <CTA href={audit.mailto} external>
            Email me
          </CTA>
        </div>
      </section>

      <Section id="who" title="Who it's for">
        <div className="max-w-prose space-y-4 leading-relaxed text-ink-soft">
          <p>
            For SaaS product teams (20 to 300 people) whose Playwright or
            Cypress end-to-end suite slows releases down: tests that fail for
            no reason, pipelines re-run several times a day, and nobody
            trusting a green build anymore.
          </p>
          <p>
            In two days you get a measured diagnosis of your suite, the real
            causes behind the instability, fixes for the most expensive cases,
            and an action plan the team can carry out without me.
          </p>
        </div>
      </Section>

      <Section id="scope" title="Scope">
        <p className="max-w-prose leading-relaxed text-ink-soft">
          One E2E suite, one repository, one CI pipeline.
        </p>
        <div className="mt-5">
          <Table
            caption="What the audit includes and excludes"
            columns={["Included", "Not included"]}
            rows={scope}
          />
        </div>
        <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-soft">
          Suites above 500 tests, or several repositories: scope and price
          agreed by quote before signing.
        </p>
      </Section>

      <Section id="how" title="How it runs">
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <li
              key={s.when}
              className="rounded-2xl border border-ink-faint/15 p-6"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.when}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-soft">
          Both days are consecutive or less than a week apart. Everything is
          remote; one on-site day in Paris, Nantes or Bordeaux is possible at
          no extra cost.
        </p>
      </Section>

      <Section id="deliverables" title="Deliverables">
        <Table
          caption="Deliverables, their format and contents"
          columns={["Deliverable", "Format", "Contents"]}
          rows={deliverables}
        />
        <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-soft">
          Report and pull request delivered no later than 2 business days
          after the audit ends.
        </p>
      </Section>

      <Section id="price" title="Price and terms">
        <p className="text-xl font-semibold text-ink">
          {audit.price}, fixed price, 2 days.
        </p>
        <ul className="mt-5 max-w-prose list-disc space-y-2 pl-5 leading-relaxed text-ink-soft">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section id="prerequisites" title="What you need to provide">
        <ul className="max-w-prose list-disc space-y-2 pl-5 leading-relaxed text-ink-soft">
          {prerequisites.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Section>

      <Section id="next" title="What comes next">
        <p className="max-w-prose leading-relaxed text-ink-soft">
          The audit stands on its own: the action plan is designed to be run by
          your team. Three optional follow-ups, no commitment:
        </p>
        <div className="mt-5">
          <Table
            caption="Optional follow-ups after the audit"
            columns={["Option", "Duration", "Purpose"]}
            rows={followUps}
          />
        </div>
        <p className="mt-5 max-w-prose text-sm leading-relaxed text-ink-soft">
          A half-day &ldquo;AI-assisted QA&rdquo; demo (automatic flaky-test
          triage with QA MCP Server) can be added to the audit.
        </p>
      </Section>

      <section className="container-page pb-24">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8">
          <h2 className="text-2xl font-semibold">
            Is flaky E2E a problem right now?
          </h2>
          <p className="mt-3 max-w-prose text-ink-soft">
            Email me with the size of your suite and your CI. I&apos;ll tell
            you within a day whether the audit fits, or what would.
          </p>
          <div className="mt-6">
            <CTA href={audit.mailto} external>
              Email me
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
