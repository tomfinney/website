import { useEffect, useState } from "react";
import { processMarkdown } from "../utils/processMarkdown";
import { content } from "../constants/content";

export function useMarkdownTeasers(
  { limit, types } = { limit: 3, types: ["blogs", "projects"] }
) {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (types.includes("blogs")) {
      fetchMarkdownContents("blogs", setBlogs);
    }
    if (types.includes("projects")) {
      fetchMarkdownContents("projects", setProjects);
    }
  }, [limit, types]);

  function fetchMarkdownContents(contentType, set) {
    const list = limit
      ? content[contentType].slice(0, limit)
      : content[contentType];
    Promise.all(
      list.map(path =>
        fetch(`/static/markdown/${contentType}/${path}`).then(response =>
          response
            .text()
            .then(text => processMarkdown(text).then(({ meta }) => meta))
        )
      )
    ).then(meta => set(meta));
  }

  return { blogs, projects };
}
