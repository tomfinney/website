import React from "react";
import Page from "../src/components/Page";
import ContentTeaser from "../src/components/ContentTeaser";
import { fetchMarkdownMeta } from "../src/utils/markdown";
import { images } from "../src/constants/images";

function Index({ posts }) {
  const image = images[Math.floor(Math.random() * images.length)];

  return (
    <Page>
      <div className="contentTeaserPanel">
        <div
          style={{
            backgroundImage: `url('/static/images/${image.src}')`,
            height: 500,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
          }}
        />
      </div>
      <div className="contentTeaserPanel">
        <h2>Recent posts</h2>
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

Index.getInitialProps = async () => {
  const posts = await fetchMarkdownMeta({ order: "desc", limit: 3 });
  return { posts };
};

export default Index;
