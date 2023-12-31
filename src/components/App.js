import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Bookings from "./Bookings";
import StyleCardList from "./StyleCardList";
import StyleCardForm from "./StyleCardForm";
import CommunityBoard from "./CommunityBoard";

function App() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/styles`)
      .then((r) => r.json())
      .then((data) => setStyles(data));
  }, []);

  function addStyles(newStyle) {
    const updatedStyles = [...styles, newStyle];
    setStyles(updatedStyles);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route
          path="/inspiration"
          element={<StyleCardList styles={styles} />}
        />
        <Route path="/community" element={<CommunityBoard />} />
        <Route
          path="/community/form"
          element={<StyleCardForm addStyles={addStyles} styles={styles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
