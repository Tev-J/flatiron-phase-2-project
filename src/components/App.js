import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Bookings from "./Bookings";
import StyleCardList from "./StyleCardList";
import StyleCard from "./StyleCard";
import NewStyleCard from "./StyleCardForm";
import CommunityBoard from "./CommunityBoard";

function App() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    fetch("https://my-server-j9z7.onrender.com/db")
      .then((r) => r.json())
      .then((data) => setStyles(data.styles));
  }, []);

  function addStyles(newStyle) {
    const updatedStyles = [...styles, newStyle];
    setStyles(updatedStyles);
  }

  return (
    <div>
      <NavBar />
      {/* <NewStyleCard addStyles={addStyles} styles={styles} /> */}
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route
          path="/inspiration"
          element={<StyleCardList styles={styles} />}
        />
        <Route path="/community" element={<CommunityBoard />} />
      </Routes>
    </div>
  );
}

export default App;
