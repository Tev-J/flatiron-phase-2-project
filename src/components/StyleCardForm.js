import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          navigate("/community");
        }, 3000);
      });
  }

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        {isSubmitted ? (
          <div style={{ textAlign: "center" }}>
            <h1
              className="display-5 fw-bold"
              style={{
                color: "#80e0aa",
                fontSize: "56px",
              }}
            >
              🎊 PERFECT! 🎊{" "}
            </h1>
            <p>Your post was successfully added to the inspiration pool!</p>
            <p>You will now be rerouted to the Community Page.</p>
          </div>
        ) : (
          <form className="container" onSubmit={handleSubmit}>
            <h1 className="display-5 fw-bold">Upload Style</h1>
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
