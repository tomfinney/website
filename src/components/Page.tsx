import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import "../css/core.scss";

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Page({ children, title, description }: IProps) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title ? `${title} | ` : ""}tom's website</title>
        <meta
          name="description"
          content={
            description
              ? description
              : "Personal website of Tom Finney and his ramblings (sometimes talks about Javascript)."
          }
        />
        <link rel="icon" type="image/png" href="/static/images/fav.png" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-133286888-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "UA-133286888-1");`
          }}
        />
      </Head>
      <Header />
      <div className="pageInner">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
