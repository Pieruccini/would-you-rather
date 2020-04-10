import React from "react";
import { connect } from "react-redux";

const PollList = ({ questions, users, authUser }) => {
  return (
    <div>
      <h3>Poll List</h3>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => ({
  questions,
  users,
  authUser,
});

export default connect(mapStateToProps, null)(PollList);
