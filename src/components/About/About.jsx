import React, { useState, useEffect } from "react";
import useContents from "../ContentProvider/useContents";
import aboutMd from "../../markdown/about.md";
import meJpg from "../../assets/images/me.jpg";
const Markdown = React.lazy(() => import("../Markdown/Markdown"));

import "./about.scss";

export default function About() {
  const { processMarkdown, fetchFile } = useContents();
  const [about, setAbout] = useState({});

  useEffect(
    function() {
      document.title = `About | tom's website`;
      fetchFile(aboutMd).then(text => {
        processMarkdown(text).then(processed => {
          setAbout(processed);
        });
      });
      return function() {
        document.title = "tom's website";
      };
    },
    [aboutMd]
  );

  return (
    <div className="about">
      <div>
        <div className="articleContainer">
          <article className="articleText">
            <React.Suspense fallback="">
              {about.content && <Markdown content={about.content} />}
            </React.Suspense>
          </article>
          <aside className="articleAside">
            <br />
            <img className="circle" src={meJpg} alt="picture of tom" />
          </aside>
        </div>
      </div>
    </div>
  );
}
