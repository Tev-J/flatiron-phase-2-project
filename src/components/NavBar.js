import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              alt="Navbar Logo"
              style={{ width: "50px", height: "auto" }}
            />
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
