import React from "react";
import Page from "../../src/components/Page";
import Markdown from "../../src/components/Markdown";
import {
  fetchAndProcessMarkdown,
  fetchMarkdownMeta,
} from "../../src/utils/markdown";
import { PostLink } from "../../src/components/PostLink";

function Post({ content, meta, sidemenuMeta }) {
  const types = ["blog", "project"];

  return (
    <Page title={meta.title} description={meta.summary}>
      <main>
        <h1>{meta.title}</h1>
        <small>{meta.date}</small>
        <div className="spacer" />
        <article>{content && <Markdown content={content} />}</article>
        <div className="spacer" />
        <div className="spacer" />
        {types.map((type, i) => (
          <React.Fragment key={type}>
            <div className="links">
              <h2>More {type}s</h2>
              {sidemenuMeta
                .filter((meta) => meta.type === type)
                .map((meta) => (
                  <React.Fragment>
                    <PostLink handle={meta.handle} key={meta.handle}>
                      {meta.title}
                    </PostLink>
                    <br />
                  </React.Fragment>
                ))}
              {sidemenuMeta.length < 1 && <p>Sorry, no other {type} :(</p>}
            </div>
            {i !== types.length - 1 && (
              <React.Fragment>
                <div className="spacer" />
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </main>
      <style jsx>
        {`
          main {
            max-width: 600px;
            margin: 0 auto;
            padding: 4em 1em 2em;
          }
          h1 {
            margin: 0;
          }
          .spacer {
            width: 1em;
            height: 1em;
          }
          article {
            background-color: #ffffff;
            padding: 1em;
            border-radius: 0.5em;
          }

          article :global(:first-child) {
            margin-top: 0;
          }

          article :global(:last-child) {
            margin-bottom: 0;
          }

          .links h2 {
            margin: 0 0 0.5em;
          }
        `}
      </style>
    </Page>
  );
}

Post.getInitialProps = async ({ query }) => {
  const { content, meta } = await fetchAndProcessMarkdown(
    `/static/markdown/posts/${query.handle}.md`
  );

  const sidemenuMeta = await fetchMarkdownMeta({ order: "desc" });
  return { content, meta, sidemenuMeta };
};

export default Post;
