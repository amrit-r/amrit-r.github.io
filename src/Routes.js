import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Blogs" component={Blogs} />
        </Switch>
      </Router>
    );
  }
}
