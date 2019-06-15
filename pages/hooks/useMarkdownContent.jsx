import { useEffect, useState } from "react";
import { processMarkdown } from "../utils/processMarkdown";

export function useMarkdownContent(path) {
  const [meta, setMeta] = useState({});
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(path).then(response => {
      response.text().then(text => {
        processMarkdown(text).then(({ meta, content }) => {
          setMeta(meta);
          setContent(content);
        });
      });
    });
  }, [path]);

  return { meta, content };
}
