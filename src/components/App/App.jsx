import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../constants/routes";

import Home from "../Home";

import "../../css/normalize.scss";
import "../../css/core.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.about} component={Home} exact />
        <Route path={routes.blogs} component={Home} exact />
        <Route path={routes.projects} component={Home} exact />
        <Route path={routes.home} component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
