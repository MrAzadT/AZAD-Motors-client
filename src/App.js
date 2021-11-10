import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import MoreCars from "./components/MoreCars/MoreCars";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/moreCars">
            <MoreCars />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
