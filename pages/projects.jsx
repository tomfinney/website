import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { fetchMarkdownMeta } from "./utils/markdown";

function Projects({ projects }) {
  return (
    <Page
      title="projects"
      description="a collection of posts about projects that tom has been working on/finished"
    >
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
}

Projects.getInitialProps = async () => {
  const projects = await fetchMarkdownMeta({ type: "projects" });
  return { projects };
};

export default Projects;
