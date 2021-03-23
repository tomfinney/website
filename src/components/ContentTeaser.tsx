import React from "react";
import { PostLink } from "./PostLink";

export default function ContentTeaser({ meta }) {
  return (
    <div className="teaser">
      <div className="title">
        <h3>{meta.title}</h3>
        <div className="spacer" />
        <span className={`tag tag--${meta.type}`}>{meta.type}</span>
      </div>
      <div className="spacer" />
      <small>{meta.date}</small>
      <div className="spacer" />
      <p>{meta.summary}</p>
      <div className="link-container">
        <PostLink handle={meta.handle}>Read More</PostLink>
      </div>
      <style jsx>
        {`
          .teaser {
            background-color: #ffffff;
            padding: 1em;
            border-radius: 0.5em;
          }

          .teaser + .teaser {
            margin-top: 1em;
          }

          .title {
            display: flex;
            align-items: center;
          }

          .title h3 {
            margin: 0;
            flex: 1;
          }

          .spacer {
            width: 0.25em;
            height: 0.25em;
          }

          .tag {
            color: #ffffff;
            line-height: 1;
            padding: 0.25em 0.75em;
            border-radius: 2.5em;
            font-size: 0.85em;
            font-weight: 800;
            border: 1px solid;
            border-color: transparent;
          }

          .tag--blog {
            background-color: #9593ff;
          }

          .tag--project {
            background-color: #ff9393;
          }

          p {
            margin: 0.5em 0 1em;
          }

          .link-container :global(a) {
            display: block;
            margin: 1em -1em -1em;
            padding: 0.5em 1em;
            background-color: #e4e4e4;
            border-bottom-right-radius: 0.5em;
            border-bottom-left-radius: 0.5em;
            transition: 0.3 ease-in-out;
          }

          .link-container :global(a:hover) {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}
