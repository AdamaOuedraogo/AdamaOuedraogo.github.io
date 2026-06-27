import { ecosystem } from "@/lib/site";

/**
 * Visual map of the connected ecosystem:
 *   Learn → Agentic Quality Lab → {LinkedIn · GitHub · Knowledge Base}
 *         → this Website → {Consulting · Training · Newsletter}
 *
 * Pure CSS/flex — calm, technical, no flashy animation (per design principles).
 */

function Node({
  label,
  sub,
  href,
  variant = "default",
}: {
  label: string;
  sub?: string;
  href?: string;
  variant?: "default" | "core" | "muted";
}) {
  const base =
    "flex min-w-[8.5rem] flex-col items-center rounded-xl border px-4 py-3 text-center transition-colors";
  const styles = {
    default: "border-ink-faint/25 bg-paper-raised",
    core: "border-accent bg-accent/5",
    muted: "border-dashed border-ink-faint/30 bg-transparent",
  }[variant];

  const inner = (
    <>
      <span
        className={
          variant === "core"
            ? "text-sm font-semibold text-accent"
            : "text-sm font-medium text-ink"
        }
      >
        {label}
      </span>
      {sub && <span className="mt-0.5 text-[11px] text-ink-faint">{sub}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles} hover:border-accent`}>
        {inner}
      </a>
    );
  }
  return <div className={`${base} ${styles}`}>{inner}</div>;
}

function Arrow() {
  return <div className="h-6 w-px bg-ink-faint/30" aria-hidden />;
}

export function EcosystemMap() {
  return (
    <div className="flex flex-col items-center gap-2 font-mono">
      <Node label="Learn" sub="Udemy · docs · repos" variant="muted" />
      <Arrow />
      <Node label="Agentic Quality Lab" sub="learn · experiment · publish" href={ecosystem.lab.href} variant="core" />
      <Arrow />
      <div className="flex flex-wrap items-stretch justify-center gap-3">
        <Node label="LinkedIn" sub="build in public" href={ecosystem.linkedin.href} />
        <Node label="GitHub" sub="open source" href={ecosystem.github.href} />
        <Node label="Knowledge Base" sub="notes that compound" />
      </div>
      <Arrow />
      <Node label="This Website" sub="the public face" variant="core" />
      <Arrow />
      <div className="flex flex-wrap items-stretch justify-center gap-3">
        <Node label="Consulting" sub="work with me" href={ecosystem.malt.href} />
        <Node label="Training" sub="workshops" />
        <Node label="Newsletter" sub="audience" />
      </div>
    </div>
  );
}
