import React, { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import useContent from "../ContentProvider/useContent";
import aboutMd from "../../markdown/about.md";
import ReactMarkdown from "react-markdown";

import "./about.scss";

export default function About() {
  const { processMarkdown, fetchFile } = useContent();
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
              {about.content && <ReactMarkdown source={about.content} />}
            </article>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
