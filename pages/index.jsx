import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { fetchMarkdownMeta } from "./utils/markdown";

function Index({ blogs, projects }) {

  const metas = [...blogs.map(b => ({ ...b, type: 'blogs' })), ...projects.map(b => ({ ...b, type: 'projects' }))]
  const sortedMetas = metas.sort((a, b) => {
    return b.date - a.date
  })

  return (
    <Page>
      <div className="contentTeaserPanel">
        <h2>Recent posts</h2>
        <div className="contentTeasers">
          {sortedMetas.map((meta, i) => (
            <ContentTeaser key={meta.handle} meta={meta} type={meta.type} initialY={100 + (i * 20)} />
          ))}
        </div>
      </div>
    </Page>
  );
}

Index.getInitialProps = async () => {
  const blogs = await fetchMarkdownMeta({ type: "blogs" });
  const projects = await fetchMarkdownMeta({ type: "projects" });
  return { blogs, projects };
};

export default Index;
