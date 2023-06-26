import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Bookings from "./Bookings";
import Portfolio from "./Portfolio";
import StyleCard from "./StyleCard";

function App() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    fetch("https://my-server-j9z7.onrender.com/db")
      .then((r) => r.json())
      .then((data) => setStyles(data.styles));
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/portfolio" component={Portfolio} />
      </Routes>
      <StyleCard />
    </div>
  );
}

export default App;
