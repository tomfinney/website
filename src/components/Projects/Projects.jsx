import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

import "./projects.scss";
import ContentTeaser from "../ContentTeaser/ContentTeaser";
import useContent from "../ContentProvider/useContent";

export default function Projects() {
  const { projects } = useContent();

  return (
    <PageWrapper>
      <div className="projects">
        <div>
          <div className="contentTeaserPanel">
            <h2>All Projects</h2>
            <div className="contentTeasers">
              {Object.values(projects).map(project => (
                <ContentTeaser content={project} contentType="projects" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
