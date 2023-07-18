import React from "react";
import { useNavigate } from "react-router-dom";
import StyleCard from "./StyleCard";
import Header from "./Header";

function StyleCardList({ styles }) {
  const navigate = useNavigate();
  const handleUploadPhoto = () => {
    navigate("/community/form");
  };

  return (
    <div>
      <Header
        pageHeader={"Inspire. Be Inspired"}
        headerSupport={"Endure Change, Real Change. Design Yourself."}
      />
      <div className="d-flex justify-content-center ">
        <button
          className="btn btn-primary btn-lg mb-5"
          type="button"
          onClick={handleUploadPhoto}
        >
          Upload Your Own Style
        </button>
      </div>
      <div className="container shadow-lg p-3 mb-5 bg-light rounded">
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
