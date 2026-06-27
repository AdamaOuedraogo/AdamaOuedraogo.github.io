---
title: "What MCP actually is, in plain QA language"
date: "2026-06-20"
summary: "MCP gives AI tools access to capabilities they don't have out of the box — including your test framework. Here's the mental model that finally made it click for me."
tags: ["MCP", "AI for QA", "Agents"]
status: "note"
---

For years I treated AI as a smarter search engine. Useful for generating a code
snippet, writing a test case, answering a question. Read-only.

**MCP — the Model Context Protocol — is what turns "read-only" into "can act."**

Here's the mental model I use now:

- An AI client (Claude Desktop, Claude Code, Cursor) is the brain.
- Out of the box, that brain can only talk. It can't run your tests, read your
  CI, or open a ticket.
- An **MCP server** exposes real capabilities as **tools** the brain can call.
- MCP is just the **protocol** that lets the two talk — clients, servers, a
  transport in between.

## Why a QA engineer should care

Once you connect a Playwright MCP server to your AI client, you can ask the agent
to actually **run** your end-to-end suite — not just read the code, but execute
it, read the output, and help you interpret failures. The agent stops being a
fancy autocomplete and starts acting like a junior engineer who can do things.

## The one line that sticks

> Without MCP, AI assistants can read and generate text. With MCP, they can act.

That shift — from read-only assistant to tool-using agent — is the whole reason
I'm rebuilding my positioning around agentic quality engineering.
