import React from "react";
import Link from "next/link";
// import routes from "../constants/routes";

export default function ContentTeaser({ meta, type }) {
  return (
    <div className="contentTeaser">
      <div
        className={`contentTeaser__imgContainer ${
          meta.thumb ? "" : "translucent"
        }`}
      >
        <img
          src={meta.thumb ? meta.thumb : "/static/images/camera.svg"}
          alt={meta.alt}
        />
      </div>
      <div className="contentTeaser__content">
        <div className="contentTeaser__title">
          <h3>{meta.title}</h3>
          <small className="translucent">{meta.date}</small>
        </div>
        <p>{meta.summary}</p>
      </div>
      <div className="contentTeaser__btnContainer">
        <Link
          // as={`${routes[type]}${meta.handle}`}
          href={`/content?type=${type}&handle=${meta.handle}`}
        >
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  );
}
