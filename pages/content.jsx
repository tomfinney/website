import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import Page from "./components/Page";
import Markdown from "./components/Markdown";
import { useMarkdownContent } from "./hooks/useMarkdownContent";
import { useMarkdownTeasers } from "./hooks/useMarkdownTeasers";
import routes from "./constants/routes";

const content = ({ url }) => {
  const handle = url.query.handle;
  const type = url.query.type;

  const { content } = useMarkdownContent(
    `/static/markdown/${type}/${handle}.md`
  );

  const contents = useMarkdownTeasers({ types: [type] });
  const sidemenuMeta = contents[type];

  return (
    <Page>
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
};

export default withRouter(content);
