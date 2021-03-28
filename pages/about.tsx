import React from "react";
import Page from "../src/components/Page";
import Markdown from "../src/components/Markdown";
import { fetchAndProcessMarkdown } from "../src/utils/markdown";

function About({ content, meta }) {
  return (
    <Page title={meta.title}>
      <main>
        <h1>{meta.title}</h1>
        <article>{content && <Markdown content={content} />}</article>
      </main>
      <style jsx>
        {`
          main {
            max-width: 600px;
            margin: 0 auto;
            padding: 4em 1em 2em;
          }
          h1 {
            margin: 0 0 0.5em;
          }
          article {
            background-color: white;
            padding: 1em;
            border-radius: 0.5em;
          }
          article :global(:first-child) {
            margin-top: 0;
          }
          article :global(:last-child) {
            margin-bottom: 0;
          }
        `}
      </style>
    </Page>
  );
}

About.getInitialProps = async () => {
  const { content, meta } = await fetchAndProcessMarkdown(
    "/static/markdown/misc/about.md"
  );

  return { content, meta };
};

export default About;
