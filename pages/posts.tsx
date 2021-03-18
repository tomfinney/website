import React from "react";
import Page from "../src/components/Page";
import ContentTeaser from "../src/components/ContentTeaser";
import { fetchMarkdownMeta } from "../src/utils/markdown";

function Posts({ posts }) {
  return (
    <Page title="posts" description="a collection of posts tom has authored">
      <main>
        <h1>All posts</h1>
        {posts.map((meta, i) => (
          <ContentTeaser key={meta.handle} meta={meta} />
        ))}
      </main>
      <style jsx>
        {`
          main {
            max-width: 700px;
            margin: 0 auto;
            padding: 4em 1em 2em;
          }
          h1 {
            margin: 0 0 0.5em;
          }
        `}
      </style>
    </Page>
  );
}

Posts.getInitialProps = async () => {
  const posts = await fetchMarkdownMeta({ order: "desc" });
  return { posts };
};

export default Posts;
