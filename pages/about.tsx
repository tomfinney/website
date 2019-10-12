import React from "react";
import Page from "./components/Page";
import Markdown from "./components/Markdown";
import { fetchAndProcessMarkdown } from "./utils/markdown";

function About({ content }) {
  return (
    <Page title="about tom">
      <div className="articleContainer">
        <article className="articleText">
          {content && <Markdown content={content} />}
        </article>
        <aside className="articleAside">
          <br />
          {/* <img
            className="circle"
            src="/static/images/me.jpg"
            alt="picture of tom"
          /> */}
        </aside>
      </div>
    </Page>
  );
}

About.getInitialProps = async () => {
  const { content } = await fetchAndProcessMarkdown(
    "/static/markdown/about.md"
  );

  return { content };
};

export default About;
