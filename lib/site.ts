/**
 * Single source of truth for the site's identity and the ecosystem it connects.
 *
 * The ecosystem: Learn → Agentic Quality Lab → {LinkedIn, GitHub, Knowledge Base}
 *                → this Website → {Consulting, Training, Newsletter}
 *
 * Every external node of the ecosystem is wired here once, then referenced
 * everywhere (nav, footer, CTAs). Positioning copy lives here too so the whole
 * site stays consistent with the real-world profiles (LinkedIn / Malt).
 */

export const site = {
  name: "Adama Ouedraogo",
  role: "AI-Powered Quality Engineering Consultant",
  tagline:
    "Helping engineering teams build better software using AI, MCP and agentic workflows — while keeping humans in control.",
  shortBio:
    "Senior QA Automation Engineer with 20+ years in software engineering. After almost six years at Aircall, I'm rebuilding my positioning around Agentic Quality Engineering — and documenting the whole journey in public.",
  location: "Niort, France · Remote across France & Europe",
  email: "adama692@gmail.com",
  url: "https://adamaouedraogo.github.io",
} as const;

/**
 * The ecosystem nodes. `kind` lets the UI group them:
 *  - presence: where I already exist publicly (profiles)
 *  - source:   the engines that produce the content this site showcases
 *  - offer:    where a visit can turn into working together
 */
export const ecosystem = {
  linkedin: {
    label: "LinkedIn",
    kind: "presence",
    href: "https://www.linkedin.com/in/adama-ou%C3%A9draogo-731a0629/",
    blurb: "Daily build-in-public posts on QA, AI, MCP and agentic testing.",
  },
  malt: {
    label: "Malt",
    kind: "offer",
    href: "https://www.malt.fr/profile/adamaouedraogo5",
    blurb: "Available for freelance missions — Agentic Quality Engineering.",
  },
  github: {
    label: "GitHub",
    kind: "source",
    href: "https://github.com/AdamaOuedraogo",
    blurb: "Open-source experiments, MCP servers and this site itself.",
  },
  lab: {
    label: "Agentic Quality Lab",
    kind: "source",
    href: "https://github.com/AdamaOuedraogo/agentic-quality-lab",
    blurb: "My operating system: learn daily, experiment, publish. The engine behind this site.",
  },
} as const;

export type EcosystemNode = (typeof ecosystem)[keyof typeof ecosystem];

/** Primary site navigation — mirrors the sections in the website vision. */
export const nav = [
  { label: "Mission", href: "/mission" },
  { label: "The Lab", href: "/lab" },
  { label: "Learning", href: "/learning" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Open Source", href: "/open-source" },
  { label: "Consulting", href: "/consulting" },
  { label: "Speaking", href: "/speaking" },
  { label: "Newsletter", href: "/newsletter" },
] as const;

/** What I help teams with — used on the home page and consulting page. */
export const offers = [
  {
    title: "Adopt AI for QA",
    body: "Bring LLMs into your quality workflow pragmatically: test generation, edge-case discovery, AI-assisted review and debugging — without losing rigor.",
  },
  {
    title: "Build AI-assisted testing workflows",
    body: "Turn Jira tickets and acceptance criteria into maintainable Playwright automation, with AI accelerating creation and maintenance.",
  },
  {
    title: "Explore MCP & agentic tooling",
    body: "Expose your real test stack — runners, reports, ticketing — as tools agents can use through the Model Context Protocol.",
  },
  {
    title: "Modernize your QA strategy",
    body: "Design an Agentic Quality Engineering approach that scales with continuous delivery while keeping humans in the loop.",
  },
] as const;
