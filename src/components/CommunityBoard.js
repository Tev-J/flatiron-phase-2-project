import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function CommunityBoard() {
  const navigate = useNavigate();
  const handleUploadPhoto = () => {
    navigate("/community/form");
  };

  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="container py-4">
      <Header
        pageHeader={"Join Our Community"}
        headerSupport={"Share. Learn. Meme."}
      />
      <div className="p-5 mb-4 bg-light rounded-3 shadow">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Share And Inspire!</h1>
          <p className="col-md-8 fs-4">
            Join our community! Share a picture of your new haircut. Uploads
            will be posted to the Inspiration Board where visitors will be able
            to see and rate your contributions. Showcase your styles! Set new
            trends! Inspire!
          </p>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={handleUploadPhoto}
          >
            Upload Your Photo Here
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3 shadow">
            <h2>Eum dolores minus sed iste modi.</h2>
            <p>
              Lorem ipsum dolor sit amet. Cum quia nisi quo perspiciatis fugiat
              33 galisum tenetur et necessitatibus facilis. Vel asperiores illum
              eum aspernatur dolores aut praesentium error quo internos vero id
              ducimus dolores qui autem delectus. Nam vitae tenetur a
              repellendus eius ut maiores quod et voluptatum doloremque ut minus
              adipisci ea cumque earum.
            </p>
            <button className="btn btn-outline-light" type="button">
              Press for Good Luck
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3 shadow">
            <h2>Random Joke</h2>
            <p>{joke}</p>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={getJoke}
            >
              Get Another Joke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityBoard;
