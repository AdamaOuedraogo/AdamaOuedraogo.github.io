import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-faint/15 bg-paper/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-sm font-semibold tracking-tight text-ink">
            {site.name}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:inline">
            / Agentic Quality
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/consulting"
          className="rounded-full border border-ink/15 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Work with me
        </Link>
      </div>
    </header>
  );
}
