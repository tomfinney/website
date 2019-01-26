import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Markdown({ content }) {
  function RouterLink(props) {
    return props.href.match(/((^(https?:)?\/\/)|(^(mailto:))|(^(tel:)))/) ? (
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    ) : (
      <Link to={props.href}>{props.children}</Link>
    );
  }

  return <ReactMarkdown source={content} renderers={{ link: RouterLink }} />;
}
