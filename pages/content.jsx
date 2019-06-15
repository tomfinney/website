import React from "react";
import Link from "next/link";
import Page from "./components/Page";
import Markdown from "./components/Markdown";
import { fetchAndProcessMarkdown, fetchMarkdownMeta } from "./utils/markdown";

function Content({ type, content, meta, sidemenuMeta }) {
  return (
    <Page title={meta.title} description={meta.summary}>
      <div className="articleContainer">
        <article className="articleText">
          {content && <Markdown content={content} />}
        </article>
        <aside className="articleAside">
          <h2>More {type}</h2>
          <p className="articleAsideLinks">
            {sidemenuMeta.map(meta => (
              <Link
                // as={`${routes[type]}${meta.handle}`}
                href={`/content?type=${type}&handle=${meta.handle}`}
                key={meta.handle}
              >
                <a>{meta.title}</a>
              </Link>
            ))}
          </p>
          {sidemenuMeta.length < 1 && <p>Sorry, no other {type} :(</p>}
        </aside>
      </div>
    </Page>
  );
}

Content.getInitialProps = async ({ query }) => {
  const handle = query.handle;
  const type = query.type;
  const { content, meta } = await fetchAndProcessMarkdown(
    `/static/markdown/${type}/${handle}.md`
  );
  const sidemenuMeta = await fetchMarkdownMeta({ type });
  return { content, meta, type, sidemenuMeta };
};

export default Content;
