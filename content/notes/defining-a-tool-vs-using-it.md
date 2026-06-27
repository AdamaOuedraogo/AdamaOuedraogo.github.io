---
title: "Defining a tool vs. an agent actually using it"
date: "2026-06-26"
summary: "Building my first MCP server made one distinction concrete: writing a tool is easy; making it genuinely useful for an agent is the real work."
tags: ["MCP", "Agents", "AI for QA"]
status: "note"
---

The day I stopped *configuring* someone else's MCP server and *wrote my own*, a
distinction I'd glossed over became concrete.

**Defining a tool** is almost trivial. With a framework like FastMCP, a function
plus a decorator and a docstring becomes a callable tool. It took less code than
a flaky Cypress test.

**Getting an agent to use it well** is the actual engineering:

- The tool's *description* is its interface to the model. Vague description →
  the agent never picks it, or picks it wrong.
- Inputs and outputs have to be shaped for a model, not a human. A wall of raw
  log text is worse than a small structured summary.
- Least privilege matters. A QA tool that can *run tests* is great; one that can
  *delete environments* needs a human in the loop.

## The QA framing

If I had to expose three of my real QA tasks as MCP tools, I'd start with the
ones that remove the most context-switching: **run the e2e suite**, **summarize
a failing report**, **fetch a ticket's acceptance criteria**. That trio alone
turns an AI client into something that can sit inside a real review workflow.

This is the seed of a concrete consulting offer: *expose your existing QA stack
as MCP tools.* Teams already have the runners, dashboards and ticketing. The
value is wiring them into agents — carefully.
