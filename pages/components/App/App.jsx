import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../constants/routes";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import ContentShow from "../ContentShow/ContentShow";
import ContentIndex from "../ContentIndex/ContentIndex";

import ContentProvider from "../ContentProvider/ContentProvider";

import "../../css/normalize.scss";
import "../../css/core.scss";

export default function App() {
  document.title = "tom's website";
  return (
    <ContentProvider>
      <BrowserRouter>
        <div className="pageWrapper">
          <ScrollToTop />
          <Header />
          <Switch>
            <Route path={routes.about} component={About} exact />
            <Route path={routes.blogsShow} component={ContentShow} exact />
            <Route path={routes.blogs} component={ContentIndex} exact />
            <Route path={routes.projectsShow} component={ContentShow} exact />
            <Route path={routes.projects} component={ContentIndex} exact />
            <Route path={routes.home} component={Home} exact />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </ContentProvider>
  );
}

function ScrollToTop() {
  return <Route render={route => <SrollToTopEffect {...route} />} />;
}

function SrollToTopEffect({ location }) {
  const mounted = useRef(false);
  useEffect(
    function() {
      if (mounted.current) {
        window.scrollTo(0, 0);
      }
      mounted.current = true;
    },
    [location.pathname]
  );

  return null;
}
