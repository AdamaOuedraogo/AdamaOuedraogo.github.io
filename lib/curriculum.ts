/**
 * Learning roadmap — mirrors learning/curriculum.md in the Agentic Quality Lab.
 * Kept here as lightweight static data (it changes rarely). The Lab remains the
 * source of truth; `npm run sync` overwrites this file when the curriculum moves.
 */

export interface Phase {
  n: number;
  title: string;
  goal: string;
  status: "done" | "current" | "upcoming";
}

export const curriculum: Phase[] = [
  { n: 1, title: "MCP Foundations", goal: "Understand how agents get eyes and hands.", status: "current" },
  { n: 2, title: "LLMs for QA", goal: "Apply LLMs concretely to testing work.", status: "upcoming" },
  { n: 3, title: "Agent Design", goal: "Design agents that act, observe and improve — humans in control.", status: "upcoming" },
  { n: 4, title: "Playwright + MCP", goal: "Give agents real testing hands via Playwright MCP.", status: "upcoming" },
  { n: 5, title: "RAG for QA", goal: "Ground agents in real product knowledge.", status: "upcoming" },
  { n: 6, title: "Multi-Agent Systems", goal: "Orchestrate multiple agents for quality workflows.", status: "upcoming" },
  { n: 7, title: "Building QA Products", goal: "Turn the lab into reusable assets and offers.", status: "upcoming" },
];
