import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

const LeaderboardView = (props) => {
  const { name, avatarURL, answeredQuestions, createdQuestions } = props;
  return (
    <Container className="center">
      <Row>
        <Col className="center text-center">
          <h6>{name}</h6>
          <Image
            style={{ alignSelf: "center" }}
            width={64}
            height={64}
            src={avatarURL}
            roundedCircle
          />
        </Col>
        <Col className="center text-center">
          <Badge variant="light">question answered: {answeredQuestions}</Badge>
          <br />
          <Badge variant="light">question created: {createdQuestions}</Badge>
        </Col>
        <Col className="center">
          <Badge variant="secondary" style={{ alignSelf: "center" }}>
            <h4>Score</h4>
            <h1>{answeredQuestions + createdQuestions}</h1>
          </Badge>
        </Col>
      </Row>
    </Container>
  );
};

export default LeaderboardView;
