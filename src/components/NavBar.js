import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";

export const NavBar = ({ history }) => {
  const handleNavigation = (url) => {
    history.push(url);
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Would you rather?</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => handleNavigation("/home")}>Home</Nav.Link>
          <Nav.Link onClick={() => handleNavigation("/add")}>
            New Question
          </Nav.Link>
          <Nav.Link onClick={() => handleNavigation("/leaderboard")}>
            Leaderboard
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default withRouter(NavBar);
