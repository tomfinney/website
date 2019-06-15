import { useEffect, useState } from "react";
import { fetchAndProcessMarkdown } from "../utils/markdown";
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
  }, [limit, JSON.stringify(types)]);

  return { blogs, projects };
}
