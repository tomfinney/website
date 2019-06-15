import { useEffect, useState } from "react";
import { fetchAndProcessMarkdown } from "../utils/markdown";

export function useMarkdownContent(path) {
  const [meta, setMeta] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchAndProcessMarkdown(path).then(({ meta, content }) => {
      setMeta(meta);
      setContent(content);
    });
  }, [path]);

  return { meta, content };
}
