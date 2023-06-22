import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/bookings" activeClassName="active">
        Bookings
      </NavLink>
      <NavLink to="/portfolio" activeClassName="active">
        Portfolio
      </NavLink>
    </nav>
  );
}

export default NavBar;
