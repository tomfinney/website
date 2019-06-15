import React from "react";
const ContentTeaser = React.lazy(() =>
  import("../ContentTeaser/ContentTeaser")
);
import useContents from "../ContentProvider/useContents";

import "./contentsIndex.scss";

export default function ContentIndex({ match }) {
  const type = match.path.split("/").filter(Boolean)[0];
  const contents = useContents();

  return (
    <div className="contents">
      <div>
        <div className="contentTeaserPanel">
          <h2>All {type}</h2>
          <div className="contentTeasers">
            <React.Suspense fallback="">
              {Object.values(contents[type]).map(content => (
                <ContentTeaser
                  key={content.meta.handle}
                  content={content}
                  contentType={type}
                />
              ))}
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
