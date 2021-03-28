import React from "react";
import Page from "../src/components/Page";
import ContentTeaser from "../src/components/ContentTeaser";
import { fetchMarkdownMeta } from "../src/utils/markdown";
import Hero from "../src/components/Hero";

function Index({ posts }) {
  return (
    <Page>
      <Hero />
      <main>
        <h1>Recent posts</h1>
        {posts.map((meta) => (
          <ContentTeaser key={meta.handle} meta={meta} />
        ))}
      </main>
      <style jsx>{`
        main {
          max-width: 600px;
          margin: 0 auto;
          padding: 2em 1em 2em;
          min-height: calc(100vh - 514px);
        }
        h1 {
          margin: 0 0 0.5em;
        }
      `}</style>
    </Page>
  );
}

Index.getInitialProps = async () => {
  const posts = await fetchMarkdownMeta({ order: "desc", limit: 3 });
  return { posts };
};

export default Index;
