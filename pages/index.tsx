import React from "react";
import Page from "./components/Page";
import ContentTeaser from "./components/ContentTeaser";
import { fetchMarkdownMeta } from "./utils/markdown";

function Index({ posts }) {
  return (
    <Page>
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
