import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { useMarkdownTeasers } from "./hooks/useMarkdownTeasers";

export default () => {
  const { projects } = useMarkdownTeasers({ types: ["projects"] });

  return (
    <Page>
      <div className="contentTeaserPanel">
        <h2>All projects</h2>
        <div className="contentTeasers">
          {projects.map(meta => (
            <ContentTeaser key={meta.handle} meta={meta} type="projects" />
          ))}
        </div>
      </div>
    </Page>
  );
};
