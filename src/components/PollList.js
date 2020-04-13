import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { getPollViewData } from "../utils/utils";
import PollView from "./PollView";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";

const PollList = ({ pollViewsAnswered, pollViewsNotAnswered }) => {
  const [tab, setTab] = useState(0);
  const pools = [pollViewsNotAnswered, pollViewsAnswered];
  const handleTabUpdate = (index) => {
    setTab(index);
  };

  return (
    <div className={"pull-list-container"}>
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
      <br />
      <ListGroup>
        {pools[tab].map((poll) => (
          <ListGroup.Item key={poll.id}>
            <PollView
              name={poll.name}
              avatarURL={poll.avatarURL}
              optionOneText={poll.optionOneText}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authUser }) => {
  console.log("Poll list Questions", questions);
  const pollViews = Object.keys(users).reduce((acc, cur) => {
    return {
      ...acc,
      ...getPollViewData(users[cur], authUser, questions),
    };
  }, {});

  return {
    pollViewsAnswered: Object.values(pollViews)
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter((poll) => poll.userHasAnswered),
    pollViewsNotAnswered: Object.values(pollViews)
      .sort((a, b) => b.timestamp - a.timestamp)
      .filter((poll) => !poll.userHasAnswered),
  };
};
export default connect(mapStateToProps, null)(PollList);
