import React, { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import useContents from "../ContentProvider/useContents";
import aboutMd from "../../markdown/about.md";
import meJpg from "../../assets/images/me.jpg";
import Markdown from "../Markdown/Markdown";

import "./about.scss";

export default function About() {
  const { processMarkdown, fetchFile } = useContents();
  const [about, setAbout] = useState({});

  useEffect(function() {
    fetchFile(aboutMd).then(text => {
      setAbout(processMarkdown(text));
    });
  }, []);

  return (
    <PageWrapper>
      <div className="about">
        <div>
          <div className="articleContainer">
            <article className="articleText">
              {about.content && <Markdown content={about.content} />}
            </article>
            <aside className="articleAside">
              <br />
              <img className="circle" src={meJpg} alt="picture of tom" />
            </aside>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
