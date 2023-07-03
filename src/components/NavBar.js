import React from "react";
import { NavLink } from "react-router-dom";
import brandImg from "../assets/background_images/brand_image1.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src={brandImg}
            alt="Navbar Logo"
            style={{ width: "80px", height: "80px" }}
            className="rounded-5"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/inspiration"
                style={{ fontSize: "18px" }}
              >
                Inspiration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/bookings"
                style={{ fontSize: "18px" }}
              >
                Book With Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/community"
                style={{ fontSize: "18px" }}
              >
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
