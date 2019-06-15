import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { useMarkdownTeasers } from "./hooks/useMarkdownTeasers";

export default () => {
  const { blogs } = useMarkdownTeasers({ types: ["blogs"] });

  return (
    <Page>
      <div className="contentTeaserPanel">
        <h2>All blogs</h2>
        <div className="contentTeasers">
          {blogs.map(meta => (
            <ContentTeaser key={meta.handle} meta={meta} type="blogs" />
          ))}
        </div>
      </div>
    </Page>
  );
};
