import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Bookings from "./Bookings";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/portfolio" component={Portfolio} />
      </Routes>
    </div>
  );
}

export default App;
