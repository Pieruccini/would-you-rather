import React from "react";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

const AuthUser = ({ authUser, history }) => {
  const [, , removeCookie] = useCookies(["auth"]);
  const { avatarURL, name } = authUser;

  const handleLogout = () => {
    history.replace("/Login");
    removeCookie("auth");
  };

  return (
    <Container>
      <Row>
        <Col className={"avatar"}>
          <Image
            style={{ alignSelf: "center" }}
            width={64}
            height={54}
            src={avatarURL}
            roundedCircle
          />
        </Col>
        <Col>
          <p style={{ margin: 0 }}>{name}</p>
          <Link onClick={() => handleLogout()}>Logout</Link>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default withRouter(connect(mapStateToProps)(AuthUser));
