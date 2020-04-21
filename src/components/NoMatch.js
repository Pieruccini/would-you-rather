import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

const NoMatch = () => {
  return (
    <Container className="text-center">
      <br />
      <Badge>
        <h2>404</h2>
      </Badge>
      <h5>This page doesn't exist</h5>
    </Container>
  );
};

export default NoMatch;
