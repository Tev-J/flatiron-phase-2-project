import React from "react";
import StyleCard from "./StyleCard";

function Portfolio({ styles }) {
  return (
    <div>
      <h2>Fresh Cuts Bruh</h2>
      <>
        {styles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </>
    </div>
  );
}

export default Portfolio;
