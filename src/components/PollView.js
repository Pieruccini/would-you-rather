import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PollView = ({ name, optionOneText, avatarURL }) => {
  return (
    <Container>
      <Row>
        <Col className={"center"}>
          <p>{name}</p>
          <Image
            style={{ alignSelf: "center" }}
            width={64}
            height={64}
            src={avatarURL}
            roundedCircle
          />
        </Col>
        <Col>
          <h5>Would you rather?</h5>
          <p>{optionOneText} or ...</p>
          <Button block variant="outline-secondary">
            View Pool
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PollView;
