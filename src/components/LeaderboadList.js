import React from "react";
import { connect } from "react-redux";
import { getLeaderboardData } from "../utils/leaderboard";
import LeaderboardView from "./LeaderboardView";
import ListGroup from "react-bootstrap/ListGroup";

const LeaderboardList = ({ leaderboard, dispatch }) => {
  return (
    <div className="pull-list-container">
      <br />
      <h4 className="text-center">Leaderboard</h4>
      <ListGroup>
        {leaderboard.map((props) => (
          <ListGroup.Item key={props.id}>
            <LeaderboardView {...props} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    leaderboard: getLeaderboardData(users).sort((a, b) => b.score - a.score),
  };
};

export default connect(mapStateToProps)(LeaderboardList);
