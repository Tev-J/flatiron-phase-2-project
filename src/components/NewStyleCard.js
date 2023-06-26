import React, { useState } from "react";

function NewStyleCard({ addStyles, styles }) {
  //stores data in component state
  const [userName, setUserName] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [styleImg, setStyleImg] = useState("");

  const styleOptions = styles.filter((style) => {
    return style.origin == "Default";
  });

  //performs POST to db on submit
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
      .then((data) => addStyles(data));
  }

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
        value={styleImg}
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

          {styleOptions.map((style) => (
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
