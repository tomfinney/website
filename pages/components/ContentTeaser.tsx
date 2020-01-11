import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContentTeaser({ meta, initialY = 100 }) {
  return (
    <motion.div
      initial={{
        opacity: 0.05,
        y: initialY
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className="contentTeaser"
    >
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
        <Button path={`/post?handle=${meta.handle}`}>Read More</Button>
      </div>
    </motion.div>
  );
}

function Button({ path, children }) {
  return (
    <div className="contentTeaser__btnContainer">
      <Link href={path}>
        <a className="btn">{children}</a>
      </Link>
    </div>
  );
}
