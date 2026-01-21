import ReactMarkdown from "react-markdown"

export default function Markdown({ content }: {
    content: string
}) {
    return <ReactMarkdown
        components={{
            h1: ({ children }) => (
                <h1 className="mt-6 text-2xl font-semibold">{children}</h1>
            ),
            h2: ({ children }) => (
                <h2 className="mt-6 text-2xl font-semibold">{children}</h2>
            ),
            p: ({ children }) => (
                <p className="leading-7">{children}</p>
            ),
            code: ({ children }) => (
                <code className="rounded bg-muted px-1 py-0.5">{children}</code>
            ),
            pre: ({ children }) => (
                <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-zinc-100">{children}</pre>
            ),

        }}>
        {content}

    </ReactMarkdown>
}