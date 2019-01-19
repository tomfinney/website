import React, { useEffect, useState, useRef } from "react";
import { retrieveResourceContent } from "../../utils/markdown";
import { BlogsShow } from "../BlogsShow/BlogsShow";

const contentDataMap = {
  blogs: retrieveResourceContent("blogs")
};

const contentComponentMap = {
  blogs: BlogsShow
};

function ContentShow({ match }) {
  const [content, setContent] = useState(null);
  const mounted = useRef(false);
  const handle = match.params.handle;
  const contentType = match.path.split("/").filter(Boolean)[0];
  const contentData = contentDataMap[contentType];
  const ContentComponent = contentComponentMap[contentType];

  useEffect(
    function() {
      setContent(contentData.find(content => content.meta.handle === handle));
      mounted.current = true;

      return function() {
        mounted.current = false;
      };
    },
    [handle, contentType]
  );

  return (
    <ContentComponent
      loading={!mounted.current && !content ? <p>Loading...</p> : ""}
      noContentFound={
        mounted.current &&
        !content && <p>No content found for handle: {handle}</p>
      }
      content={content}
    />
  );
}

export { ContentShow };
