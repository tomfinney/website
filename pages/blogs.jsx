import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { fetchMarkdownMeta } from "./utils/markdown";

function Blogs({ blogs }) {
  return (
    <Page title="blogs" description="a collection of blogs tom has authored">
      <div className="contentTeaserPanel">
        <h2>All blogs</h2>
        <div className="contentTeasers">
          {blogs.map(meta => (
            <ContentTeaser key={meta.handle} meta={meta} type="blogs" />
          ))}
        </div>
      </div>
    </Page>
  );
}

Blogs.getInitialProps = async () => {
  const blogs = await fetchMarkdownMeta({ type: "blogs" });
  return { blogs };
};

export default Blogs;
