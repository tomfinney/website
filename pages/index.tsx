import React from "react";
import Page from "../src/components/Page";
import ContentTeaser from "../src/components/ContentTeaser";
import { fetchMarkdownMeta } from "../src/utils/markdown";
import { images } from "../src/constants/images";

function Index({ posts }) {
  const image = images[Math.floor(Math.random() * images.length)];

  return (
    <Page>
      <div className="hero"></div>
      <main>
        <h1>Recent posts</h1>
        {posts.map((meta) => (
          <ContentTeaser key={meta.handle} meta={meta} />
        ))}
      </main>
      <style jsx>{`
        .hero {
          background-image: url("/static/images/${image.src}");
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 2;
          opacity: 0.9;
        }
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
