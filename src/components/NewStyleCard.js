import React, { useState } from "react";

function NewStyleCard({ styles }) {
  const [guestName, setGuestName] = useState("");

  return (
    <form>
      <h2>Upload Your Fresh Cuts!</h2>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Community Uploads</option>
          {styles.map((style) => (
            <option value={style.id}>{style.name}</option>
          ))}
        </select>
        <label for="floatingSelect">Style Name</label>
        <br />
      </div>
    </form>
  );
}

export default NewStyleCard;
