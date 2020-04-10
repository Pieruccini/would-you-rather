import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { getPollViewData } from "../utils/utils";
import PollView from "./PollView";
import Nav from "react-bootstrap/Nav";

const PollList = ({ pollViewsAnswered, pollViewsNotAnswered }) => {
  const [tab, setTab] = useState(0);
  const pools = useRef([pollViewsAnswered, pollViewsNotAnswered]).current;

  const handleTabUpdate = (index) => {
    setTab(index);
  };

  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            active={tab === 0}
            onClick={() => {
              handleTabUpdate(0);
            }}
          >
            Unanswered Questions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={tab === 1}
            onClick={() => {
              handleTabUpdate(1);
            }}
          >
            Answered Questions
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ul>
        {pools[tab].map((poll) => (
          <li key={poll.id}>
            <PollView
              name={poll.name}
              avatarUrl={poll.avatarUrl}
              optionOneText={poll.optionOneText}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => {
  const pollViews = Object.keys(users).reduce((acc, cur) => {
    return {
      ...acc,
      ...getPollViewData(users[cur], authUser, questions),
    };
  }, {});

  return {
    pollViewsAnswered: Object.values(pollViews)
      .sort((a, b) => a.timestamp - b.timestamp)
      .filter((poll) => poll.userHasAnswered),
    pollViewsNotAnswered: Object.values(pollViews)
      .sort((a, b) => a.timestamp - b.timestamp)
      .filter((poll) => !poll.userHasAnswered),
  };
};
export default connect(mapStateToProps, null)(PollList);
