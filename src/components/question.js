import React from "react";
import { connect } from "react-redux";

const Question = ({ loaded, dispatch, id }) => {
  return <div>Questions</div>;
};

const stateMapToProps = ({ questions, users }, { id }) => {};

export default connect()(Question);
