import { ecosystem, site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink-faint/15">
      <div className="container-page flex flex-col justify-between gap-5 py-8 sm:flex-row">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="mt-2 text-xs text-ink-faint">
            © {new Date().getFullYear()} · {site.location}
          </p>
        </div>
        <nav
          aria-label="Contact links"
          className="flex flex-wrap items-start gap-5 text-sm"
        >
          <a href={`mailto:${site.email}`} className="link-underline">
            Email
          </a>
          {[ecosystem.github, ecosystem.linkedin, ecosystem.malt].map(
            (node) => (
              <a
                key={node.label}
                href={node.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                {node.label} ↗
              </a>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
