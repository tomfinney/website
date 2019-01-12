import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../../css/normalize.scss";

import Home from "../Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export { App };
