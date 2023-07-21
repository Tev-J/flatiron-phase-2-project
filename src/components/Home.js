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
    <div style={{ color: "#c8deca" }}>
      <img className="bg-image" src={bgImg} alt="Concept" style={moreStyle} />
      <div className="p-5">
        <Header
          className={"align-middle"}
          pageHeader={"VIRTUAL BARBERSHOP-FRONT"}
          headerSupport={"Inspiration | Service | Community "}
        />
      </div>
      <div className="text-center mt-1 p-5 ">
        <h2> | contact me |</h2>
        <h3>404-xox-xxxx</h3>
        <h3>tj_delph@yahoo.com</h3>
      </div>
    </div>
  );
}

export default Home;
