import React from "react";
import Page from "./components/Page";
import Markdown from "./components/Markdown";
import { useMarkdownContent } from "./hooks/useMarkdownContent";

export default () => {
  const { content } = useMarkdownContent("/static/markdown/about.md");
  return (
    <Page>
      <div className="articleContainer">
        <article className="articleText">
          {content && <Markdown content={content} />}
        </article>
        <aside className="articleAside">
          <br />
          <img
            className="circle"
            src="/static/images/me.jpg"
            alt="picture of tom"
          />
        </aside>
      </div>
    </Page>
  );
};
