import React from "react";
import StyleCard from "./StyleCard";
import { Card } from "react-bootstrap";
import Header from "./Header";

function StyleCardList({ styles }) {
  return (
    <div>
      <Header pageHeader={"Inspire. Be Inspired"} headerSupport={"hi"} />
      <div className="container shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row g-3 mt-4">
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
