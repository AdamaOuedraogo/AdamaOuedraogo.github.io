import type { Metadata } from "next";
import { PageHeader, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "About", description: "18+ years in software quality, six years at Aircall, now working as a freelance quality engineering consultant." };
export default function MissionPage() {
  return <>
    <PageHeader eyebrow="About" title="Software quality, grounded in real engineering work." intro="I’m Adama, a freelance QA Automation / Quality Engineering Consultant based in Niort, France." />
    <section className="container-page pb-16">
      <div className="prose max-w-prose prose-a:text-accent">
        <p>I have worked in software quality for more than eighteen years. My work combines hands-on automation, risk-based test strategy and collaboration with developers and product teams.</p>
        <h2>Six years at Aircall</h2>
        <p>From 2020 to 2026, I worked at Aircall in Senior and Staff QA roles, with a focus on engineering productivity. I contributed to end-to-end testing with Cypress and Playwright, GitLab CI pipelines, flaky-test investigation and desktop testing on macOS and Windows.</p>
        <h2>How I work</h2>
        <p>I start with the product and its critical user journeys. Then I help the team choose what to test, at which level, and how to make the results useful in everyday delivery. Readable automation, clear priorities and shared ownership matter to me.</p>
        <h2>What I’m building now</h2>
        <p>I am exploring AI-assisted testing through QA MCP Server, an open-source project that gives AI assistants structured access to QA tools and guidance. I use this work to learn, test ideas and share practical findings.</p>
        <h2>Working together</h2>
        <p>I am available for freelance QA automation and quality engineering missions. Remote work is preferred; I can be on-site up to three days a week in Paris, Nantes or Bordeaux.</p>
      </div>
      <div className="mt-8"><CTA href="/consulting">Discuss a mission</CTA></div>
    </section>
  </>;
}
