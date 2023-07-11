import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function StyleCardForm({ addStyles, styles }) {
  const [userName, setUserName] = useState("");
  const [styleName, setStyleName] = useState("");
  const [styleImg, setStyleImg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  const styleOptions = styles.filter((style) => style.origin === "Default");

  function handleSubmit(event) {
    event.preventDefault();

    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: styleName,
        image: styleImg,
        description: userName,
        likes: 0,
        price: "*consult for price*",
        origin: "Community_Post",
      }),
    };

    fetch(`${process.env.REACT_APP_API_URL}/styles`, configObj)
      .then((res) => res.json())
      .then((data) => {
        addStyles(data);
        // Reset form fields
        setUserName("");
        setStyleName("");
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

            <div class="mb-3">
              <input
                onChange={(e) => setStyleName(e.target.value)}
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="Style Name"
                value={styleName}
              />
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
