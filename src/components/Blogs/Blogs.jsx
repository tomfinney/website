import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

import "./blogs.scss";
import ContentTeaser from "../ContentTeaser/ContentTeaser";
import useContent from "../ContentProvider/useContent";

export default function Blogs() {
  const { blogs } = useContent();

  return (
    <PageWrapper>
      <div className="blogs">
        <div>
          <div className="contentTeaserPanel">
            <h2>All Blogs</h2>
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
        </div>
      </div>
    </PageWrapper>
  );
}
