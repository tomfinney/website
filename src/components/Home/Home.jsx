import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

import "./home.scss";
const ContentTeaser = React.lazy(() =>
  import("../ContentTeaser/ContentTeaser")
);
import useContents from "../ContentProvider/useContents";

export default function Home() {
  const { blogs, projects } = useContents();

  return (
    <PageWrapper>
      <div className="home">
        <div>
          <div className="contentTeaserPanel">
            <h2>Recent blogs</h2>
            <div className="contentTeasers">
              <React.Suspense fallback="...">
                {Object.values(blogs).map(blog => (
                  <ContentTeaser
                    key={blog.meta.handle}
                    content={blog}
                    contentType="blogs"
                  />
                ))}
              </React.Suspense>
            </div>
          </div>
          <div className="contentTeaserPanel">
            <h2>Recent projects</h2>
            <div className="contentTeasers">
              <React.Suspense fallback="...">
                {Object.values(projects).map(project => (
                  <ContentTeaser
                    key={project.meta.handle}
                    content={project}
                    contentType="projects"
                  />
                ))}
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
