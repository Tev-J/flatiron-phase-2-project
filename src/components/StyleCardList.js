import React from "react";
import StyleCard from "./StyleCard";
import { Card } from "react-bootstrap";

function StyleCardList({ styles }) {
  return (
    <div>
      <div className="container">
        <h1
          className="text-center mb-4 mt-5 fw-bold"
          style={{ fontSize: "5rem" }}
        >
          Inspire. Be Inspired.
        </h1>
      </div>
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row g-3 ">
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

export default StyleCardList;
