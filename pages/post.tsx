import React from "react";
import Link from "next/link";
import Page from "./components/Page";
import Markdown from "./components/Markdown";
import { fetchAndProcessMarkdown, fetchMarkdownMeta } from "./utils/markdown";

function Post({ content, meta, sidemenuMeta }) {
  const types = ["blog", "project"];
  return (
    <Page title={meta.title} description={meta.summary}>
      <div className="articleContainer">
        <article className="articleText">
          {content && <Markdown content={content} />}
        </article>
        <aside>
          {types.map(type => (
            <div key={type} className="articleAside">
              <h2>More {type}s</h2>
              <p className="articleAsideLinks">
                {sidemenuMeta
                  .filter(meta => meta.type === type)
                  .map(meta => (
                    <Link
                      href={`/post?&handle=${meta.handle}`}
                      key={meta.handle}
                    >
                      <a>{meta.title}</a>
                    </Link>
                  ))}
              </p>
              {sidemenuMeta.length < 1 && <p>Sorry, no other {type} :(</p>}
            </div>
          ))}
        </aside>
      </div>
    </Page>
  );
}

Post.getInitialProps = async ({ query }) => {
  const handle = query.handle;
  const { content, meta } = await fetchAndProcessMarkdown(
    `/static/markdown/posts/${handle}.md`
  );

  const sidemenuMeta = await fetchMarkdownMeta({ order: "desc" });
  return { content, meta, sidemenuMeta };
};

export default Post;
