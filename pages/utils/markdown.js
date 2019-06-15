import { fetch } from "./fetch";
import { content } from "../constants/content";
import yaml from "js-yaml";

export function processMarkdown(text) {
  const [meta, content] = text.split("---").filter(Boolean);
  return {
    meta: yaml.load(meta),
    content
  };
}

export function fetchMarkdown(path) {
  return fetch(path).then(response => response.text().then(text => text));
}

export async function fetchAndProcessMarkdown(path) {
  const text = await fetchMarkdown(path);
  return await processMarkdown(text);
}

export function fetchMarkdownMeta({ type, limit }) {
  const list = limit ? content[type].slice(0, limit) : content[type];
  return Promise.all(
    list.map(path =>
      fetchAndProcessMarkdown(`/static/markdown/${type}/${path}`).then(
        ({ meta }) => meta
      )
    )
  );
}
