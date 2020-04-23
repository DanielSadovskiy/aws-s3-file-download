import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./src/components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
