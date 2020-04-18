import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { handleLogin } from "../actions/authUser";

const Login = ({ users, dispatch, history }) => {
  console.log("history", history);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSubmit = () => {
    dispatch(handleLogin(selectedUser));
    history.push("/home");
  };

  return (
    <Container>
      <h3>Login</h3>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="choose a user to login"
          value={selectedUser ? selectedUser.name : ""}
        />
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Users"
          id="input-group-dropdown-1"
        >
          {users.map((user) => (
            <Dropdown.Item onClick={() => handleSelectUser(user)}>
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

const mapStateToProps = ({ users }) => ({
  users: Object.values(users),
});

export default connect(mapStateToProps)(Login);
