# Adama Ouedraogo

Professional website for an **AI-Powered Quality Engineering Consultant** with **Staff QA Automation Engineer** experience, 18+ years in software quality and six years at Aircall.

The flagship is [QA MCP Server](https://github.com/AdamaOuedraogo/qa-mcp-server): reusable QA engineering judgment for AI assistants. The site presents concrete QA expertise, project evidence, notes and freelance services.

## Structure

- `lib/site.ts`: mirrored public identity, location, mobility and links.
- `app/`: About, Projects, Notes and Consulting, plus historical routes retained for existing links.
- `content/`: Markdown notes, posts and historical experiments.
- `lib/content.ts`: typed Markdown reader. No active external content sync.

Private strategy and unpublished profile drafts are maintained outside this public repository. Historical entries retain their original wording; the former lab brand is not a current offer.

## Develop and validate

```bash
npm ci
npm run dev
npm run typecheck
STATIC_EXPORT=true npm run build
```

## Deploy

The existing GitHub Actions workflow builds a static export into `out/` and deploys GitHub Pages on pushes to the configured production branches. A review-branch push does not deploy the website.

The former HTML CV is retained under `legacy/` as history.
