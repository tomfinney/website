import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

import "./home.scss";
import ContentTeaser from "../ContentTeaser/ContentTeaser";
import useContent from "../ContentProvider/useContent";

export default function Home() {
  const { blogs, projects } = useContent();

  return (
    <PageWrapper>
      <div className="home">
        <div>
          <div className="contentTeaserPanel">
            <h2>Recent Blogs</h2>
            <div className="contentTeasers">
              {Object.values(blogs).map(blog => (
                <ContentTeaser
                  key={blog.meta.handle}
                  content={blog}
                  contentType="blogs"
                />
              ))}
            </div>
          </div>
          <div className="contentTeaserPanel">
            <h2>Recent Projects</h2>
            <div className="contentTeasers">
              {Object.values(projects).map(project => (
                <ContentTeaser
                  key={project.meta.handle}
                  content={project}
                  contentType="projects"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
