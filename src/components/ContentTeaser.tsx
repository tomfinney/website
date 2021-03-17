import React from "react";
import { PostLink } from "./PostLink";

export default function ContentTeaser({ meta, initialY = 100 }) {
  return (
    <div
      className="contentTeaser"
    >
      <div className="contentTeaser__inner">
        <div className="contentTeaser__content">
          <div className="contentTeaser__title">
            <h3>{meta.title}</h3>
            <small className="translucent">{meta.date}</small>
            <span className={`tag tag--${meta.type}`}>{meta.type}</span>
          </div>
          <p>{meta.summary}</p>
        </div>
        <div className="contentTeaser__btnContainer">
          <PostLink handle={meta.handle} className="btn">
            Read More
          </PostLink>
        </div>
      </div>
    </div>
  );
}
