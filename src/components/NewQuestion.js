import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { handleCreateQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch }) => {
  const [options, setOptions] = useState({
    optionOneText: "",
    optionTwoText: "",
  });

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

export default connect()(NewQuestion);
