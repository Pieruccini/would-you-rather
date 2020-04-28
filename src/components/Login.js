import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { handleLogin } from "../actions/authUser";
import { useCookies } from "react-cookie";
import Image from "react-bootstrap/Image";

const Login = ({ users, authUser, dispatch, history, location }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [cookies, setCookie] = useCookies(["auth"]);
  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    if (cookies.auth) setSelectedUser(users[cookies.auth]);
    // eslint-disable-next-line
  }, [users, cookies.auth]);

  useEffect(() => {
    if (authUser) history.replace(from.pathname);
    // eslint-disable-next-line
  }, [authUser]);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = () => {
    dispatch(handleLogin(selectedUser.id));
    setCookie("auth", selectedUser.id);
  };

  return (
    <Container className="center" style={{ height: "100%" }}>
      <Image
        style={{ alignSelf: "center" }}
        width={148}
        height={148}
        src={"../../images/logo.png"}
      />
      <br />
      <h3 className="text-center">Login</h3>
      <InputGroup className="mb-3">
        <FormControl
          onChange={() => {}}
          placeholder="choose a user to login"
          value={selectedUser ? selectedUser.name : ""}
        />
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Users"
          id="input-group-dropdown-1"
        >
          {Object.values(users).map((user) => (
            <Dropdown.Item key={user.id} onClick={() => handleSelectUser(user)}>
              <Image
                style={{ alignSelf: "center" }}
                width={32}
                height={32}
                src={user.avatarURL}
                roundedCircle
              />
              {user.name}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>

      <Button
        block
        variant="outline-secondary"
        disabled={selectedUser === null}
        onClick={handleSubmit}
      >
        Login
      </Button>
    </Container>
  );
};

const mapStateToProps = ({ users, authUser }) => ({
  users,
  authUser,
});

export default connect(mapStateToProps)(Login);
