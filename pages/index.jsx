import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { fetchMarkdownMeta } from "./utils/markdown";

// TODOS
// 1. cooler design

function Index(props) {
  const contentTypes = ["blogs", "projects"];

  return (
    <Page>
      {contentTypes.map(type => (
        <div key={type} className="contentTeaserPanel">
          <h2>Recent {type}</h2>
          <div className="contentTeasers">
            {props[type] &&
              props[type].map(meta => (
                <ContentTeaser key={meta.handle} meta={meta} type={type} />
              ))}
          </div>
        </div>
      ))}
    </Page>
  );
}

Index.getInitialProps = async () => {
  const blogs = await fetchMarkdownMeta({ type: "blogs" });
  const projects = await fetchMarkdownMeta({ type: "projects" });
  return { blogs, projects };
};

export default Index;
