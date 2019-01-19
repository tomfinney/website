import React, { useEffect, useState, useRef } from "react";
import PageWrapper from "../PageWrapper";
import { retrieveResourceContent } from "../../utils/markdown";

import "./blogsShow.scss";

function BlogsShow({ match }) {
  const handle = match.params.handle;
  const blogs = retrieveResourceContent("blogs");
  const [content, setContent] = useState(null);
  const mounted = useRef(false);

  useEffect(
    function() {
      setContent(blogs.find(content => content.meta.handle === handle));
      mounted.current = true;

      return function() {
        mounted.current = false;
      };
    },
    [handle]
  );

  return (
    <PageWrapper>
      <div className="blogsShow" />
      {!mounted.current && !content && <p>Loading...</p>}
      {mounted.current && !content && (
        <p>No content found for handle: {handle}</p>
      )}
      {mounted.current && content && <div>loaded!</div>}
    </PageWrapper>
  );
}

export { BlogsShow };
