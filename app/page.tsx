import Link from "next/link";
import { site, offers, ecosystem } from "@/lib/site";
import { CTA, Card } from "@/components/ui";
import { EcosystemMap } from "@/components/EcosystemMap";
import { DocCard } from "@/components/DocCard";
import { getLatest } from "@/lib/content";

export default function Home() {
  const latestPosts = getLatest("posts", 2);
  const latestLab = getLatest("lab", 1);
  const latest = [...latestLab, ...latestPosts].slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="container-page pt-20 pb-16 md:pt-32">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow">{site.role}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] md:text-7xl">
              The future of software quality is being written now.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA href="/lab">Explore the Lab</CTA>
              <CTA href="/consulting" variant="ghost">
                Work with me
              </CTA>
            </div>
          </div>
          <img
            src="/adama.png"
            alt="Adama Ouedraogo"
            width={240}
            height={240}
            className="order-first mx-auto h-44 w-44 rounded-full object-cover ring-1 ring-ink-faint/20 md:order-last md:h-60 md:w-60"
          />
        </div>
        <p className="mt-10 max-w-2xl border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink-soft">
          {site.shortBio}
        </p>
      </section>

      {/* Ecosystem map */}
      <section className="border-y border-ink-faint/15 bg-paper-raised/50 py-16">
        <div className="container-page grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">One connected system</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Not a portfolio. An operating system for a transformation.
            </h2>
            <p className="mt-5 max-w-prose text-ink-soft">
              Everything here is connected. A daily learning engine — the{" "}
              <a href={ecosystem.lab.href} target="_blank" rel="noreferrer" className="link-underline">
                Agentic Quality Lab
              </a>{" "}
              — produces experiments, posts and notes. This site is its public
              face. The lab produces; the website showcases; and it all compounds
              toward consulting, training and a growing audience.
            </p>
            <div className="mt-6">
              <Link href="/mission" className="link-underline text-sm font-medium">
                Read the mission →
              </Link>
            </div>
          </div>
          <EcosystemMap />
        </div>
      </section>

      {/* What I help teams with */}
      <section className="container-page py-20">
        <p className="eyebrow">How I help</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight">
          I help engineering teams prepare for the future of software quality.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {offers.map((o) => (
            <Card key={o.title}>
              <h3 className="text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest from the lab */}
      <section className="container-page pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Latest from the lab</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Learning in public, every day.
            </h2>
          </div>
          <Link href="/learning" className="hidden link-underline text-sm font-medium sm:block">
            See all →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {latest.length > 0 ? (
            latest.map((doc) => <DocCard key={`${doc.collection}-${doc.slug}`} doc={doc} />)
          ) : (
            <p className="text-ink-soft">Content is syncing from the lab…</p>
          )}
        </div>
      </section>
    </>
  );
}
