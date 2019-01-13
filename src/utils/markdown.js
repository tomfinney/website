import yaml from "js-yaml";

import blogs from "../constants/blogs";

const dirMap = {
  blogs
};

export function processMarkdown(mdContent) {
  const [meta, content] = mdContent.split("---").filter(Boolean);
  return { meta: yaml.load(meta), content };
}

export function retrieveResourceContent(dir) {
  const markDownFiles = dirMap[dir];
  return markDownFiles.map(markDownFile => processMarkdown(markDownFile));
}
