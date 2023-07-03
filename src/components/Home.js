import React from "react";
import backgroundImg from "../assets/background_images/background_chair.png";

function Home() {
  return (
    <section
      className="bg-image"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="container p-5 mb-4 text-white-50">
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
        <h1> Testing </h1>
      </div>
    </section>
  );
}

export default Home;
