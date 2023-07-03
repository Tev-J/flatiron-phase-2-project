import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import brandImg from "../assets/background_images/brand_image1.png";

function NavBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${
        isHomePage ? "" : "bg-dark"
      }`}
    >
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ fontSize: "20px" }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/inspiration"
                style={{ fontSize: "20px" }}
              >
                Inspiration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/bookings"
                style={{ fontSize: "20px" }}
              >
                Book With Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/community"
                style={{ fontSize: "20px" }}
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
