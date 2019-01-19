import React from "react";
import PageWrapper from "../PageWrapper";
import ReactMarkdown from "react-markdown";

import "./blogsShow.scss";

function BlogsShow({ loading, noContentFound, content }) {
  return (
    <PageWrapper>
      <div className="blogsShow">
        <div>
          {loading && loading}
          {noContentFound && noContentFound}
          {content && <ReactMarkdown source={content.content} />}
        </div>
      </div>
    </PageWrapper>
  );
}

export { BlogsShow };
