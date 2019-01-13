import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../PageWrapper";

import "./home.scss";

const teasers = [
  {
    title: "A title about something",
    summary: "Something something something something",
    to: "/"
  },
  {
    title: "A title about something",
    summary: "Something something something something",
    to: "/"
  },
  {
    title: "A title about something",
    summary: "Something something something something",
    to: "/"
  }
];

function Home() {
  return (
    <PageWrapper>
      <div className="home">
        <div>
          <div className="contentTeaserPanel">
            <h2>Blogs</h2>
            <div className="contentTeasers">
              {teasers.map(teaser => (
                <div className="contentTeaser">
                  <div>
                    <div className="contentTeaser__img" />
                    <div className="contentTeaser__content">
                      <h3>{teaser.title}</h3>
                      <p>{teaser.summary}</p>
                      <Link className="btn" to={teaser.to}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export { Home };
