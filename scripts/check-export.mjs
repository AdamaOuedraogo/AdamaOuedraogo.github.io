// Smoke checks on the static export in ./out. Run after
// `STATIC_EXPORT=true npm run build`; no dependency beyond Node.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const failures = [];

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return htmlFiles(p);
    return name.endsWith(".html") ? [p] : [];
  });
}

function resolves(href) {
  const p = href.replace(/^\/|\/$/g, "");
  return (
    p === "" ||
    existsSync(join(OUT, p)) ||
    existsSync(join(OUT, `${p}.html`)) ||
    existsSync(join(OUT, p, "index.html"))
  );
}

if (!existsSync(OUT)) {
  console.error(`No ${OUT}/ directory. Build with STATIC_EXPORT=true first.`);
  process.exit(1);
}

const pages = htmlFiles(OUT);

// 1. Every internal link in every page resolves to an exported file.
for (const file of pages) {
  const html = readFileSync(file, "utf8");
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith("/_next")) continue;
    if (!resolves(href)) failures.push(`${file}: broken link ${href}`);
  }
}

// 2. Each route below exists, has one H1 and the expected content.
const routes = {
  "consulting/e2e-audit": [
    "mailto:adama692@gmail.com?subject=E2E%20Test%20Audit",
    "<title>E2E Test Audit",
  ],
  consulting: ['href="/consulting/e2e-audit/"'],
  "": ['href="/consulting/e2e-audit/"'],
};

for (const [route, expected] of Object.entries(routes)) {
  const file = join(OUT, route, "index.html");
  if (!existsSync(file)) {
    failures.push(`missing page ${file}`);
    continue;
  }
  const html = readFileSync(file, "utf8");
  const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1s !== 1) failures.push(`${file}: expected 1 <h1>, found ${h1s}`);
  for (const needle of expected) {
    if (!html.includes(needle)) failures.push(`${file}: missing ${needle}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`${pages.length} pages checked: links resolve, routes and H1s OK.`);
