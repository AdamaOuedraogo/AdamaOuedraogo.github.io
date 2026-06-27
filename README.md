# Adama Ouedraogo — Digital Headquarters

The public face of my transformation from **QA Automation Engineer** to
**AI-Powered / Agentic Quality Engineering Consultant**.

Not a portfolio. Not a résumé. The central hub of a connected ecosystem.

```
            Learn  (Udemy · docs · GitHub · YouTube)
                 │
                 ▼
        Agentic Quality Lab        ← the operating system (separate repo)
        learn · experiment · publish
                 │   produces markdown
                 ▼
        npm run sync  ──►  this site's /content
                 │
      ┌──────────┼───────────┐
      ▼          ▼           ▼
  LinkedIn    GitHub    Knowledge Base
      └──────────┼───────────┘
                 ▼
          This website  (the public face)
                 │
      ┌──────────┼───────────┐
      ▼          ▼           ▼
  Consulting  Training    Newsletter
```

**The lab produces. The website showcases. No duplication.**

## Architecture

- **Next.js (App Router) · TypeScript · Tailwind CSS** — markdown-first, no CMS.
- `lib/site.ts` — single source of truth for identity + every ecosystem link
  (LinkedIn, Malt, GitHub, the Lab). Change a link once, it updates everywhere.
- `content/` — markdown the [Agentic Quality Lab](https://github.com/AdamaOuedraogo/agentic-quality-lab)
  writes via `npm run sync`. Collections: `lab`, `posts`, `experiments`
  (auto-synced) and `notes`, `projects` (hand-authored here).
- `lib/content.ts` — the only reader of `content/`. Frontmatter + body in, typed
  docs out.
- Pages mirror the vision: Mission · The Lab · Learning · Knowledge · Open Source
  · Consulting · Speaking · Newsletter.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Updating content

Content flows from the lab. In the **lab repo**:

```bash
npm run sync       # writes lab/ posts/ experiments/ → this repo's content/
```

Then commit & push here to deploy. Notes and projects are authored directly in
`content/notes` and `content/projects`.

## Deploy

**Primary — Vercel (recommended):** import this repo at vercel.com. Zero config;
Next.js is auto-detected. Add a custom domain there when ready
(`adamaouedraogo.com` / `.dev`) — that's the real alignment win.

**Fallback — GitHub Pages (zero-config):** `.github/workflows/deploy.yml` builds a
static export and publishes to `adamaouedraogo.github.io` on every push. One-time
setup: **Settings → Pages → Source → GitHub Actions**. The static export is enabled
with `STATIC_EXPORT=true npm run build` (verified to produce `/out`).

> Optional: set `NEXT_PUBLIC_NEWSLETTER_ACTION` to a provider endpoint
> (Buttondown / ConvertKit / Resend) to wire up newsletter signups.

## Legacy

The previous HTML CV is archived in [`/legacy`](./legacy) for reference.
