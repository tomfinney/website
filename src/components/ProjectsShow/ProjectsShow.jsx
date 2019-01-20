import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import ReactMarkdown from "react-markdown";

import "./projectsShow.scss";

export default function ProjectsShow({ loading, noContentFound, content }) {
  return (
    <PageWrapper>
      <div className="projectsShow">
        <div>
          {loading && loading}
          {noContentFound && noContentFound}
          {content && <ReactMarkdown source={content.content} />}
        </div>
      </div>
    </PageWrapper>
  );
}
