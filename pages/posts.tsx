import React from "react";
import Page from "../src/components/Page";
import ContentTeaser from "../src/components/ContentTeaser";
import { fetchMarkdownMeta } from "../src/utils/markdown";

function Posts({ posts }) {
  return (
    <Page title="posts" description="a collection of posts tom has authored">
      <div className="contentTeaserPanel">
        <h2>All posts</h2>
        <div className="contentTeasers">
          {posts.map((meta, i) => (
            <ContentTeaser
              key={meta.handle}
              meta={meta}
              initialY={100 + i * 20}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}

Posts.getInitialProps = async () => {
  const posts = await fetchMarkdownMeta({ order: "desc" });
  return { posts };
};

export default Posts;
