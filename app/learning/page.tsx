import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";
import { curriculum } from "@/lib/curriculum";
import { ecosystem } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learning in Public",
  description:
    "My learning journey — posts, notes and a tracked roadmap from QA Automation to Agentic Quality Engineering.",
};

const dot: Record<string, string> = {
  done: "bg-accent",
  current: "bg-accent animate-none ring-4 ring-accent/20",
  upcoming: "bg-ink-faint/30",
};

export default function LearningPage() {
  const posts = getDocs("posts");

  return (
    <>
      <PageHeader
        eyebrow="Learning in Public"
        title="Learning with me, not just about me."
        intro="One hour of structured learning, one experiment, one post — every day. This is the roadmap and the trail of what I publish along the way."
      />

      {/* Roadmap */}
      <section className="container-page pb-16">
        <h2 className="text-xl font-semibold">The roadmap</h2>
        <ol className="mt-6 space-y-3">
          {curriculum.map((p) => (
            <li
              key={p.n}
              className="flex items-start gap-4 rounded-xl border border-ink-faint/15 bg-paper-raised p-4"
            >
              <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dot[p.status]}`} />
              <div>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <span className="font-mono text-xs text-ink-faint">Phase {p.n}</span>
                  {p.title}
                  {p.status === "current" && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                      ← current
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-ink-soft">{p.goal}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Posts */}
      <section className="container-page pb-24">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Published</h2>
          <a
            href={ecosystem.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className="link-underline text-sm font-medium"
          >
            Follow on LinkedIn ↗
          </a>
        </div>
        {posts.length > 0 ? (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {posts.map((doc) => (
              <DocCard key={doc.slug} doc={doc} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-ink-soft">Posts are syncing from the lab…</p>
        )}
      </section>
    </>
  );
}
