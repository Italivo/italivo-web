import ReactMarkdown from "react-markdown";

type MarkdownRendererProps = React.ComponentProps<typeof ReactMarkdown>;

export function MarkdownRenderer({ ...props }: MarkdownRendererProps) {
  return <ReactMarkdown {...props} />;
}
