import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "../views/Register";
import Login from "../views/Login";
import "../assets/styles/App.scss";
import Home from "../views/Home";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
