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
    "I help teams build reliable end-to-end tests, improve CI feedback and use AI where it makes QA work better.",
  shortBio:
    "Staff QA Automation Engineer with 18+ years in software quality and six years at Aircall. My focus: Playwright, Cypress, CI/CD and practical AI-assisted testing.",
  location: "Niort, France · Remote across France & Europe",
  email: "adama692@gmail.com",
  url: "https://adamaouedraogo.github.io",
  expertise: "Staff QA Automation Engineer",
  mobility:
    "Remote preferred. On-site arrangements in Paris, Nantes or Bordeaux are agreed per mission, up to three days a week.",
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
    blurb: "Experience and notes on QA automation and AI-assisted testing.",
  },
  malt: {
    label: "Malt",
    kind: "offer",
    href: "https://www.malt.fr/profile/adamaouedraogo5",
    blurb: "Freelance QA automation and quality engineering missions.",
  },
  github: {
    label: "GitHub",
    kind: "source",
    href: "https://github.com/AdamaOuedraogo",
    blurb: "Open-source experiments, MCP servers and this site itself.",
  },
  qamcp: {
    label: "QA MCP Server",
    kind: "source",
    href: "https://github.com/AdamaOuedraogo/qa-mcp-server",
    blurb:
      "An open-source MCP server for typed QA tools, testing guidance and opt-in test execution.",
  },
} as const;

export type EcosystemNode = (typeof ecosystem)[keyof typeof ecosystem];

/** Primary site navigation — mirrors the sections in the website vision. */
export const nav = [
  { label: "About", href: "/mission" },
  { label: "Projects", href: "/open-source" },
  { label: "Notes", href: "/knowledge" },
  { label: "Consulting", href: "/consulting" },
] as const;

/** What I help teams with — used on the home page and consulting page. */
export const offers = [
  {
    title: "QA automation",
    body: "Build and maintain Playwright and Cypress test suites around critical user journeys, with readable tests and dependable test data.",
  },
  {
    title: "Quality engineering",
    body: "Prioritize coverage by risk, integrate tests into CI/CD and investigate flaky failures so teams can act on the results.",
  },
  {
    title: "AI-assisted testing",
    body: "Explore AI for test design and failure analysis, and connect assistants to testing tools through MCP. Keep review and decisions with the team.",
  },
] as const;
