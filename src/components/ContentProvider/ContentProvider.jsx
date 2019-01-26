import React, { useState, useEffect } from "react";
import yaml from "js-yaml";

import blogs from "../../markdown/blogs/*.md";
import projects from "../../markdown/projects/*.md";

const contentMap = {
  blogs,
  projects
};

const defaultValue = {
  blogs: {},
  projects: {},
  processMarkdown: () => {},
  fetchFile: () => {}
};

export const ContentContext = React.createContext(defaultValue);

export default function ContentProvider({ children }) {
  const [contents, setContents] = useState(defaultValue);

  useEffect(
    function() {
      fetchContent("blogs");
      fetchContent("projects");
    },
    [blogs, projects]
  );

  function fetchContent(type) {
    Object.entries(contentMap[type]).map(([name, path]) => {
      fetchFile(path).then(text => {
        const newContents = contents;
        newContents[type][name] = processMarkdown(text);
        setContents(newContents);
      });
    });
  }

  function fetchFile(path) {
    return fetch(path).then(response => response.text());
  }

  function processMarkdown(text) {
    const [meta, content] = text.split("---").filter(Boolean);
    return { meta: yaml.load(meta), content };
  }

  return (
    <ContentContext.Provider
      value={{
        blogs: contents.blogs,
        projects: contents.projects,
        processMarkdown,
        fetchFile
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
