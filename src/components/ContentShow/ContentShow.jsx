import React, { useEffect, useState, useRef } from "react";
import BlogsShow from "../BlogsShow/BlogsShow";
import ProjectsShow from "../ProjectsShow/ProjectsShow";
import useContent from "../ContentProvider/useContent";

const contentComponentMap = {
  blogs: BlogsShow,
  projects: ProjectsShow
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
      const loadedContent = Object.values(contentObjects).find(
        contentObject => contentObject.meta.handle === handle
      );

      if (loadedContent) {
        document.title = `${loadedContent.meta.title} | tom's website`;
      }

      mounted.current = true;
      setContent(loadedContent);

      return function() {
        document.title = "tom's website";
        mounted.current = false;
      };
    },
    [handle, type, contents]
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
