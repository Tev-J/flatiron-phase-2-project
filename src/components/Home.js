import React from "react";
import bgImg from "../assets/background_images/background_image2.png";
import Header from "./Header";

function Home() {
  const moreStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.7)",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: -1,
  };

  return (
    <div className="text-white">
      <img className="bg-image" src={bgImg} alt="Concept" style={moreStyle} />
      <Header
        class={"align-middle"}
        pageHeader={"CONCEPTUAL BARBERSHOP"}
        headerSupport={"Design | Service | Inspire"}
      />
    </div>
  );
}

export default Home;
