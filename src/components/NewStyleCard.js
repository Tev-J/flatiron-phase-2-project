import React, { useState } from "react";

function NewStyleCard({ addStyles, styles }) {
  //stores data in component state
  const [userName, setUserName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [styleImg, setStyleImg] = useState("");

  const styleOptions = styles.filter((style) => {
    return style.origin === "Default";
  });

  console.log(styleOptions);

  //performs POST to db
  const handleSubmit = (event) => {
    event.preventDefault();
    const styleObj = {
      styleInfo: {
        name: selectedStyle,
        image: styleImg,
        description: userName,
        likes: 0,
        price: "unknown",
        origin: "Community_Post",
      },
    };

    fetch("https://my-server-j9z7.onrender.com/db/db.json/styles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(styleObj),
    })
      .then((r) => r.json())
      .then((data) => addStyles(data.styleObj));
    // Perform form submission or further processing
    // console.log("Selected Style:", selectedStyle);
    // console.log("Input Value:", inputValue);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Upload Your Fresh Cuts!</h2>
      <input
        type="text"
        className="form-control"
        id="floatingInputValue"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="text"
        className="form-control"
        id="floatingInputValue"
        placeholder="Image URL"
        value={userName}
        onChange={(e) => setStyleImg(e.target.value)}
      />

      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
        >
          <option value="">Community Uploads</option>

          {styles.map((style) => (
            <option key={style.id} value={style.id}>
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
  );
}

export default NewStyleCard;
