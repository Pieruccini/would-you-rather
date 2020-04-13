import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

const NewQuestion = () => {
  const [options, setOptions] = useState({
    optionOne: "",
    optionTwo: "",
  });

  const handleUpdateOption = (option, text) => {
    setOptions((prev) => ({
      ...prev,
      [option]: text,
    }));
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
            handleUpdateOption("optionOne", e.target.value);
          }}
          value={options.optionOne}
        />
        <p>or</p>
        <Form.Control
          size="sm"
          type="text"
          placeholder="second option"
          onChange={(e) => {
            handleUpdateOption("optionTwo", e.target.value);
          }}
          value={options.optionTwo}
        />
      </Form.Group>
      <Button
        block
        variant="outline-secondary"
        size="lg"
        disabled={options.optionOne === "" || options.optionTwo === ""}
      >
        Create Question
      </Button>
    </div>
  );
};

export default connect()(NewQuestion);
