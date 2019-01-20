import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import ReactMarkdown from "react-markdown";

import "./blogsShow.scss";

export default function BlogsShow({ loading, noContentFound, content }) {
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
