import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { DocCard } from "@/components/DocCard";
import { getDocs } from "@/lib/content";
export const metadata: Metadata = {
  title: "Posts",
  description: "Dated posts about QA engineering and AI-assisted testing.",
};
export default function LearningPage() {
  const posts = getDocs("posts");
  return (
    <>
      <PageHeader
        eyebrow="Posts"
        title="Writing from practical QA work."
        intro="A dated archive of posts. Earlier entries reflect the project direction at the time they were written."
      />
      <section className="container-page pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((doc) => (
            <DocCard key={doc.slug} doc={doc} />
          ))}
        </div>
        <a href="/knowledge" className="mt-6 inline-block link-underline">
          Read the notes →
        </a>
      </section>
    </>
  );
}
