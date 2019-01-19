import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../PageWrapper";
import { retrieveResourceContent } from "../../utils/markdown";
import routes from "../../constants/routes";

import "./home.scss";
import ContentTeaser from "../ContentTeaser";

function Home() {
  const blogs = retrieveResourceContent("blogs");
  const projects = retrieveResourceContent("projects");
  return (
    <PageWrapper>
      <div className="home">
        <div>
          <div className="contentTeaserPanel">
            <h2>Blogs</h2>
            <div className="contentTeasers">
              {blogs.map(blog => (
                <ContentTeaser content={blog} contentType="blogs" />
              ))}
            </div>
          </div>
          <div className="contentTeaserPanel">
            <h2>Projects</h2>
            <div className="contentTeasers">
              {projects.map(project => (
                <ContentTeaser content={project} contentType="projects" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export { Home };
