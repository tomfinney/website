import React from "react";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

import "./contentTeaser.scss";

function ContentTeaser({ content, contentType }) {
  return (
    <div className="contentTeaser">
      <div>
        <div className="contentTeaser__img" />
        <div className="contentTeaser__content">
          <h3>{content.meta.title}</h3>
          <p>{content.meta.summary}</p>
          <Link
            className="btn"
            to={`${routes[contentType]}${content.meta.handle}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export { ContentTeaser };
