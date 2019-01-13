import React from "react";
import PageWrapper from "../PageWrapper";

import yaml from "js-yaml";
import ReactMarkdown from "react-markdown";

// import blog1 from "";

import { readFileSync } from "fs";

import "./blogs.scss";

function Blogs() {
  const path = "../../../markdown/blogs/01_new_website.md";
  const mdContent = readFileSync(__dirname + path, "utf-8");
  const [meta, content] = mdContent.split("---").filter(Boolean);
  const b = yaml;
  console.log(yaml.load(meta));
  return (
    <PageWrapper>
      <div className="blogs">
        <div>
          <ReactMarkdown source={content} />
        </div>
      </div>
    </PageWrapper>
  );
}

export { Blogs };
