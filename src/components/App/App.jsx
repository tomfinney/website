import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../constants/routes";

import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ContentShow from "../ContentShow/ContentShow";

import ContentProvider from "../ContentProvider/ContentProvider";

import "../../css/normalize.scss";
import "../../css/core.scss";

export default function App() {
  document.title = "tom's website";
  return (
    <ContentProvider>
      <BrowserRouter>
        <Switch>
          <Route path={routes.about} component={About} exact />
          <Route path={routes.blogsShow} component={ContentShow} exact />
          <Route path={routes.blogs} component={Blogs} exact />
          <Route path={routes.projectsShow} component={ContentShow} exact />
          <Route path={routes.projects} component={Projects} exact />
          <Route path={routes.home} component={Home} exact />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ContentProvider>
  );
}
