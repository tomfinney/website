import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { useMarkdownTeasers } from "./hooks/useMarkdownTeasers";

export default () => {
  const contents = useMarkdownTeasers();

  const contentTypes = ["blogs", "projects"];

  return (
    <Page>
      {contentTypes.map(type => (
        <div key={type} className="contentTeaserPanel">
          <h2>Recent {type}</h2>
          <div className="contentTeasers">
            {contents[type].map(meta => (
              <ContentTeaser key={meta.handle} meta={meta} type={type} />
            ))}
          </div>
        </div>
      ))}
    </Page>
  );
};
