import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../constants/routes";

import Home from "../Home";
import Blogs from "../Blogs";
import ContentShow from "../ContentShow";

import "../../css/normalize.scss";
import "../../css/core.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.about} component={Home} exact />
        <Route path={routes.blogsShow} component={ContentShow} exact />
        <Route path={routes.blogs} component={Blogs} exact />
        <Route path={routes.projects} component={Home} exact />
        <Route path={routes.home} component={Home} exact />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
