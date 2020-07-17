import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Register from "../views/Register";
import Login from "../views/Login";
import Playlist from "../views/Playlist";
import "../assets/styles/App.scss";
import Home from "../views/Home";
import Layout from "./Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/playlist" component={Playlist} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
