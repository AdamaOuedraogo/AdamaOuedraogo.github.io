import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders Lab-produced markdown inside the site's prose style. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose prose-stone max-w-prose prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-code:font-mono prose-code:text-sm">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
