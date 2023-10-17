"use client";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function MarkdownView({ markdown }: { markdown: string }) {
  return (
    // children 속성에 값을 맵핑하지 말고, 컴포넌트 태그 사이에 {data} 형식으로 넣어주어야 한다.
    <Markdown
      className={"prose lg:prose-xl mx-auto"}
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              ref={null}
              style={dark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={300}
          />
        ),
      }}
    >
      {markdown}
    </Markdown>
  );
}
