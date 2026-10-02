import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adama Ouedraogo about practical quality engineering.",
};
export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk about practical quality engineering."
        intro="For a technical discussion or workshop inquiry, tell me about your audience and the problem you want to explore."
      />
      <section className="container-page pb-12">
        <p className="text-ink-soft">
          Topics include E2E automation, test reliability and QA MCP Server. No
          past speaking engagements are claimed here.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-5 inline-block link-underline"
        >
          Contact me →
        </a>
      </section>
    </>
  );
}
