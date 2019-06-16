import React from "react";
import Link from "next/link";
import { useRough } from "../hooks/useRough";

export default function ContentTeaser({ meta, type }) {
  const { containerRef, canvasRef } = useRough();
  return (
    <div ref={containerRef} className="contentTeaser">
      <canvas ref={canvasRef} />
      <div className="contentTeaser__inner">
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
        <Button path={`/content?type=${type}&handle=${meta.handle}`}>
          Read More
        </Button>
      </div>
    </div>
  );
}

function Button({ path, children }) {
  const { containerRef, canvasRef } = useRough({
    color: "#fff",
    hachureGap: 4
  });
  return (
    <div ref={containerRef} className="contentTeaser__btnContainer">
      <canvas ref={canvasRef} />
      <Link href={path}>
        <a className="btn">{children}</a>
      </Link>
    </div>
  );
}
