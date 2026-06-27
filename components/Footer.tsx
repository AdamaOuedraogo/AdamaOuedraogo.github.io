import Link from "next/link";
import { ecosystem, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-faint/15">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-mono text-sm font-semibold text-ink">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">{site.role}</p>
          <p className="mt-4 text-xs text-ink-faint">{site.location}</p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Ecosystem</p>
          <ul className="mt-3 space-y-2">
            {Object.entries(ecosystem).map(([key, node]) => (
              <li key={key}>
                <a
                  href={node.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {node.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-start justify-between gap-2 border-t border-ink-faint/15 py-6 text-xs text-ink-faint sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Built in public.
        </p>
        <p className="font-mono">
          Produced by the{" "}
          <a href={ecosystem.lab.href} target="_blank" rel="noreferrer" className="text-accent">
            Agentic Quality Lab
          </a>
        </p>
      </div>
    </footer>
  );
}
