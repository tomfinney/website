export function processMarkdown(text) {
  const [meta, content] = text.split("---").filter(Boolean);
  return import("js-yaml").then(yaml => ({
    meta: yaml.load(meta),
    content
  }));
}
