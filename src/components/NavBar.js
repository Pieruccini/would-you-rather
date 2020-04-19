import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";
import AuthUser from "./AuthUser";

export const NavBar = ({ history }) => {
  console.log("history", history);

  const handleNavigation = (url) => {
    history.push(url);
  };

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Would you rather?</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => handleNavigation("/home")}
            style={{
              fontWeight:
                history.location.pathname === "/home" ? "bold" : "normal",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavigation("/add")}
            style={{
              fontWeight:
                history.location.pathname === "/add" ? "bold" : "normal",
            }}
          >
            New Question
          </Nav.Link>
          <Nav.Link
            onClick={() => handleNavigation("/leaderboard")}
            style={{
              fontWeight:
                history.location.pathname === "/leaderboard"
                  ? "bold"
                  : "normal",
            }}
          >
            Leaderboard
          </Nav.Link>
        </Nav>
        <Navbar.Brand>
          <AuthUser />
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

export default withRouter(NavBar);
