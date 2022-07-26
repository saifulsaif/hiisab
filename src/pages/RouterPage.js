import React from "react";
import { BrowserRouter as Router, Switch, route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const RouterPage = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/">component={Login}</Route>
        <Route path="/home">component={Home}</Route>
      </Switch>
    </Router>
  </div>
);

export default RouterPage;
