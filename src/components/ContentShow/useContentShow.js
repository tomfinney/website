import { useEffect, useState, useRef } from "react";
import useContents from "../ContentProvider/useContents";

export default function useContentShow(match) {
  const contents = useContents();
  const [content, setContent] = useState(null);
  const mounted = useRef(false);
  const handle = match.params.handle;
  const type = match.path.split("/").filter(Boolean)[0];
  const contentObjects = contents[type];
  const sideMenuContents = Object.values(contents[type]).filter(
    contentObj => contentObj.meta.handle !== handle
  );

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

  return {
    loading: !mounted.current && !content,
    noContentFound: mounted.current && !content,
    content,
    sideMenuContents,
    type
  };
}
