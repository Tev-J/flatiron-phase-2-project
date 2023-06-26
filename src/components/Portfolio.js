import React from "react";
import StyleCard from "./StyleCard";
import { Card } from "react-bootstrap";

function Portfolio({ styles }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Fresh Cuts Bruh</h2>
      <div className="container">
        <div className="row g-3">
          {styles.map((style) => (
            <div className="col-12 col-md-6 col-lg-4" key={style.id}>
              <StyleCard styleDesign={style} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
