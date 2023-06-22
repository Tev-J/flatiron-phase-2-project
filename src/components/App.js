import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Bookings from "./components/Bookings";
import BarberPortfolio from "./components/BarberPortfolio";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/portfolio" component={BarberPortfolio} />
      </Switch>
    </Router>
  );
}

export default App;
