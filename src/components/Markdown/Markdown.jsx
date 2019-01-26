import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Markdown({ content }) {
  function RouterLink({ href, children }) {
    return href.match(/((^(https?:)?\/\/)|(^(mailto:))|(^(tel:)))/) ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) : (
      <Link to={href}>{children}</Link>
    );
  }

  return <ReactMarkdown source={content} renderers={{ link: RouterLink }} />;
}
