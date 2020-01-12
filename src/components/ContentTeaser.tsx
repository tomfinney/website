import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PostLink } from "./PostLink";

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
        <div className="contentTeaser__content">
          <div className="contentTeaser__title">
            <h3>{meta.title}</h3>
            <small className="translucent">{meta.date}</small>
          </div>
          <p>{meta.summary}</p>
        </div>
        <div className="contentTeaser__btnContainer">
          <PostLink handle={meta.handle} className="btn">
            Read More
          </PostLink>
        </div>
      </div>
    </motion.div>
  );
}
