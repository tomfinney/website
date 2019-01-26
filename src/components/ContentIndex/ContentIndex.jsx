import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

import "./contentsIndex.scss";
import ContentTeaser from "../ContentTeaser/ContentTeaser";
import useContents from "../ContentProvider/useContents";

export default function Blogs({ match }) {
  const type = match.path.split("/").filter(Boolean)[0];
  const contents = useContents();

  return (
    <PageWrapper>
      <div className="contents">
        <div>
          <div className="contentTeaserPanel">
            <h2>All {type}</h2>
            <div className="contentTeasers">
              {Object.values(contents[type]).map(content => (
                <ContentTeaser
                  key={content.meta.handle}
                  content={content}
                  contentType={type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
