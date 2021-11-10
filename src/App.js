import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Home/Footer/Footer";

import Home from "./components/Home/Home/Home";
import Nav from "./components/Home/Nav/Nav";
import Login from "./components/Login/Login/Login";
import MoreCars from "./components/MoreCars/MoreCars";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/moreCars">
            <MoreCars />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
