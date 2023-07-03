import React from "react";

function Header({ pageHeader, headerSupport }) {
  return (
    <section>
      <div className="container text-center mb-4 mt-5 fw-bold">
        <h1 style={{ fontSize: "5rem" }}>{pageHeader}</h1>
        <h2 className="mt-1"> {headerSupport} </h2>
      </div>
    </section>
  );
}

export default Header;
