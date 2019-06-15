import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import Markdown from "./components/Markdown";

function processMarkdown(text) {
  const [meta, content] = text.split("---").filter(Boolean);
  return import("js-yaml").then(yaml => ({
    meta: yaml.load(meta),
    content
  }));
}

function useMarkdownContent(path) {
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
  }, []);

  return { meta, content };
}

export default () => {
  const { content } = useMarkdownContent("/static/markdown/about.md");
  return (
    <Page>
      <div className="about">
        <div>
          <div className="articleContainer">
            <article className="articleText">
              {content && <Markdown content={content} />}
            </article>
            <aside className="articleAside">
              <br />
              <img
                className="circle"
                src="/static/images/me.jpg"
                alt="picture of tom"
              />
            </aside>
          </div>
        </div>
      </div>
    </Page>
  );
};
