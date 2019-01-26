import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../PageWrapper/PageWrapper";
import Markdown from "../Markdown/Markdown";

import "./contentsShow.scss";
import useContentShow from "./useContentShow";

export default function ContentShow({ match }) {
  const {
    loading,
    noContentFound,
    content,
    sideMenuContents,
    type
  } = useContentShow(match);

  return (
    <PageWrapper>
      <div className="contentsShow">
        <div>
          <div className="articleContainer">
            <article className="articleText">
              {loading && <p>Loading...</p>}
              {noContentFound && <p>No content found for handle: {handle}</p>}
              {content && <Markdown content={content.content} />}
            </article>
            <aside className="articleAside">
              <h2>More {type}</h2>
              <p className="articleAsideLinks">
                {sideMenuContents.map(contentObj => (
                  <Link
                    to={`/${type}/${contentObj.meta.handle}`}
                    key={contentObj.meta.handle}
                  >
                    {contentObj.meta.title}
                  </Link>
                ))}
              </p>
              {sideMenuContents.length < 1 && <p>Sorry, no other {type} :(</p>}
            </aside>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
