import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../constants/routes";

import Header from "../Header/Header";
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
        </div>
      </BrowserRouter>
    </ContentProvider>
  );
}
