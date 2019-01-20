import React, { useEffect, useState, useRef } from "react";
import BlogsShow from "../BlogsShow/BlogsShow";
import useContent from "../ContentProvider/useContent";

const contentComponentMap = {
  blogs: BlogsShow
};

export default function ContentShow({ match }) {
  const contents = useContent();
  const [content, setContent] = useState(null);
  const mounted = useRef(false);
  const handle = match.params.handle;
  const type = match.path.split("/").filter(Boolean)[0];
  const contentObjects = contents[type];
  const ContentComponent = contentComponentMap[type];

  useEffect(
    function() {
      setContent(
        Object.values(contentObjects).find(
          contentObject => contentObject.meta.handle === handle
        )
      );
      mounted.current = true;

      return function() {
        mounted.current = false;
      };
    },
    [handle, type]
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
