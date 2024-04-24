"use client";

import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export interface ContentRendererProps {
  content: BlocksContent;
}

export const ContentRenderer = ({ content }: ContentRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => (
          <p className="text-neutral900 w-full py-2">{children}</p>
        ),
        // ...or point to a design system
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-3xl font-semibold">{children}</h1>;
            case 2:
              return <h2 className="text-2xl font-semibold">{children}</h2>;
            case 3:
              return <h3 className="text-xl font-semibold">{children}</h3>;

            default:
              return <h3 className="text-lg font-semibold">{children}</h3>;
          }
        },
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};
