import React from "react";
import { connect } from "react-redux";
import { getLeaderboardData } from "../utils/leaderboard";
import LeaderboardView from "./LeaderboardView";
import ListGroup from "react-bootstrap/ListGroup";

const LeaderboardList = ({ leaderboard, dispatch }) => {
  console.log("leaderboard", leaderboard);
  return (
    <div className="pull-list-container">
      <h4>Leaderboard</h4>
      <ListGroup>
        {leaderboard.map((props) => (
          <ListGroup.Item>
            <LeaderboardView {...props} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    // TODO: sort array by score
    leaderboard: getLeaderboardData(users),
  };
};

export default connect(mapStateToProps)(LeaderboardList);
