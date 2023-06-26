import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={NavLink} to="/" exact>
              Style List
            </Nav.Link> */}

            <Nav.Link as={NavLink} to="/portfolio">
              Community
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bookings">
              Book With Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
