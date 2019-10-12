import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Markdown({ content }) {
  function RouterLink({ href, children }) {
    return href.match(/((^(https?:)?\/\/)|(^(mailto:))|(^(tel:)))/) ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) : (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }

  return <ReactMarkdown source={content} renderers={{ link: RouterLink }} />;
}
