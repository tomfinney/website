import { fetch } from "./fetch";
import { posts } from "../constants/posts";
import yaml from "js-yaml";

function processMarkdown(text: string) {
  try {
    const [meta, content] = text.split("---").filter(Boolean);
    return {
      meta: yaml.load(meta),
      content
    };
  } catch (e) {
    console.error("FAILED to parse markdown", text)
    return { meta: {}, content: "" }
  }
}

async function fetchMarkdown(path: string) {
  const response = await fetch(path)
  return await response.text()
}

export async function fetchAndProcessMarkdown(path: string) {
  const text = await fetchMarkdown(path);
  return await processMarkdown(text);
}

interface IFetchMetaOpts {
  order?: "asc" | "desc";
  limit?: number;
}

export function fetchMarkdownMeta({ limit, order = "asc" }: IFetchMetaOpts) {
  let orderedPosts = order === "asc" ? [...posts] : [...posts].reverse();
  orderedPosts = limit ? orderedPosts.slice(0, limit) : orderedPosts;

  return Promise.all(
    orderedPosts.map(path =>
      fetchAndProcessMarkdown(`/static/markdown/posts/${path}`).then(
        ({ meta }) => meta
      )
    )
  );
}
