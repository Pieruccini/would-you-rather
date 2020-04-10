import React from "react";
import { connect } from "react-redux";
import { getPollViewData } from "../utils/utils";

const PollList = ({ pollViews }) => {
  console.log("pollViews", pollViews);
  return (
    <div>
      <h3>Poll List</h3>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => {
  const pollViews = Object.keys(users).reduce((acc, cur) => {
    const user = users[cur];
    const data = getPollViewData(user, authUser, questions);
    return {
      ...acc,
      ...data,
    };
  }, {});

  return {
    pollViews,
  };
};
export default connect(mapStateToProps, null)(PollList);
