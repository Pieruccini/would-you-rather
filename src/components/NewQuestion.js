import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { handleCreateQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch, authUser, history }) => {
  const [options, setOptions] = useState({
    optionOneText: "",
    optionTwoText: "",
  });
  const answerRef = useRef(authUser.questions);

  console.log("authUser", authUser);
  useEffect(() => {
    if (authUser.questions.length !== answerRef.current.length) {
      console.log("has created a question");
      history.push("/home");
    }
  }, [authUser, history]);

  const handleUpdateOption = (option, text) => {
    setOptions((prev) => ({
      ...prev,
      [option]: text,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      handleCreateQuestion({
        ...options,
      })
    );
  };

  return (
    <div className="question-container">
      <h4>Would you rather ?</h4>
      <br />
      <Form.Group>
        <Form.Control
          size="sm"
          type="text"
          placeholder="first option"
          onChange={(e) => {
            handleUpdateOption("optionOneText", e.target.value);
          }}
          value={options.optionOneText}
        />
        <br />
        <p>or</p>
        <Form.Control
          size="sm"
          type="text"
          placeholder="second option"
          onChange={(e) => {
            handleUpdateOption("optionTwoText", e.target.value);
          }}
          value={options.optionTwoText}
        />
      </Form.Group>
      <Button
        block
        variant="outline-secondary"
        size="lg"
        disabled={options.optionOneText === "" || options.optionTwoText === ""}
        onClick={handleSubmit}
      >
        Create Question
      </Button>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProps)(NewQuestion);
