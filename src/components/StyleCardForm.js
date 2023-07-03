import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function StyleCardForm({ addStyles, styles }) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [styleImg, setStyleImg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const styleOptions = styles.filter((style) => style.origin === "Default");

  function handleSubmit(event) {
    event.preventDefault();

    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: selectedStyle,
        image: styleImg,
        description: userName,
        likes: 0,
        price: "unknown",
        origin: "Community_Post",
      }),
    };

    fetch("https://my-server-j9z7.onrender.com/db/db.json/styles", configObj)
      .then((res) => res.json())
      .then((data) => {
        addStyles(data);
        // Reset form fields
        setUserName("");
        setSelectedStyle("");
        setStyleImg("");
        setIsSubmitted(true);
        // Redirect to the Community page after 3 seconds
        setTimeout(() => {
          navigate("/inspiration");
        }, 2500);
      });
  }

  return (
    <div>
      <Header
        pageHeader={"Show Us Your Style!"}
        headerSupport={
          "Upload here to post your haircut to the Inspiration Board."
        }
      />
      <div className="container shadow-lg p-4 mb-5 bg-white rounded-3">
        {isSubmitted ? (
          <div style={{ textAlign: "center" }}>
            <h1
              className="display-5 fw-bold"
              style={{
                color: "#80e0aa",
                fontSize: "56px",
              }}
            >
              🎊 UPLOAD SUCCESSFUL! 🎊{" "}
            </h1>
          </div>
        ) : (
          <form className="container" onSubmit={handleSubmit}>
            <h3 style={{ textAlign: "Center" }}>Upload Style</h3>
            <div className="mb-3">
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control "
                id="floatingInputValue"
                placeholder="Username"
                value={userName}
              />
            </div>
            <div class="mb-3">
              <input
                onChange={(e) => setStyleImg(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="Image URL"
                value={styleImg}
              />
            </div>

            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingSelect"
                value={isSubmitted ? "" : selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
              >
                <option value="">Community Upload</option>

                {styleOptions.map((style) => (
                  <option key={style.id} value={style.name}>
                    {style.name}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelect">Style Name</label>
            </div>

            <div>
              <button type="submit" className="btn btn-outline-dark col-12">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default StyleCardForm;
