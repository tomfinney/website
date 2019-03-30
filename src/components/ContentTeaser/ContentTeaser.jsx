import React from "react";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import cameraSvg from "../../assets/images/camera.svg";

export default function ContentTeaser({ content, contentType }) {
  return (
    <div className="contentTeaser">
      <div
        className={`contentTeaser__imgContainer ${
          content.meta.thumb ? "" : "translucent"
        }`}
      >
        <img
          src={content.meta.thumb ? content.meta.thumb : cameraSvg}
          alt={content.meta.alt}
        />
      </div>
      <div className="contentTeaser__content">
        <div className="contentTeaser__title">
          <h3>{content.meta.title}</h3>
          <small className="translucent">{content.meta.date}</small>
        </div>
        <p>{content.meta.summary}</p>
      </div>
      <div className="contentTeaser__btnContainer">
        <Link
          className="btn"
          to={`${routes[contentType]}${content.meta.handle}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
