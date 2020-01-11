import React from "react";
import Page from "../src/components/Page";
import Markdown from "../src/components/Markdown";
import { fetchAndProcessMarkdown } from "../src/utils/markdown";

function About({ content }) {
  return (
    <Page title="about tom">
      <div className="articleContainer">
        <article className="articleText">
          {content && <Markdown content={content} />}
        </article>
        <aside className="articleAside">
          <br />
        </aside>
      </div>
    </Page>
  );
}

About.getInitialProps = async () => {
  const { content } = await fetchAndProcessMarkdown(
    "/static/markdown/misc/about.md"
  );

  return { content };
};

export default About;
