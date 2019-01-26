import React from "react";
const ContentTeaser = React.lazy(() =>
  import("../ContentTeaser/ContentTeaser")
);
import useContents from "../ContentProvider/useContents";

import "./home.scss";

export default function Home() {
  const contents = useContents();
  const contentTypes = ["blogs", "projects"];

  return (
    <div className="home">
      <div>
        {contentTypes.map(type => (
          <div key={type} className="contentTeaserPanel">
            <h2>Recent {type}</h2>
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
        ))}
      </div>
    </div>
  );
}
