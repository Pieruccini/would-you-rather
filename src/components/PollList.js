import React from "react";
import { connect } from "react-redux";
import { getUserFromQuestion } from "../utils/users";
import { getPollViewData } from "../utils/utils";

const PollList = ({ pollViews }) => {
  return (
    <div>
      <h3>Poll List</h3>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => {
  return {
    pollViews: {},
  };
};
export default connect(mapStateToProps, null)(PollList);
