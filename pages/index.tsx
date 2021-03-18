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
        <h2>Recent posts</h2>
        <div className="contentTeasers">
          {posts.map((meta) => (
            <ContentTeaser key={meta.handle} meta={meta} />
          ))}
        </div>
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
          max-width: 800px;
          margin: 0 auto;
          padding: 32px 16px;
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
