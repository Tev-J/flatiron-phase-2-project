import React from "react";
import backgroundImg from "../assets/background_chair.png";

function Home() {
  const styl = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const contentStyle = {
    paddingTop: "100px", // Adjust the top padding as needed
  };

  return (
    <div>
      <div style={styl}></div>
      <div style={contentStyle}>
        <h1>Your Text Here</h1>
        <p>Additional description or content</p>
      </div>
    </div>
  );
}

export default Home;
