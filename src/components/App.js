import React from "react";
import "../css/App.css";
import PollList from "./PollList";
import Question from "./Question";
import { connect } from "react-redux";
import NewQuestion from "./NewQuestion";
import LeaderboadList from "./LeaderboadList";
import Login from "./Login";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App({ loaded, dispatch }) {
  return (
    <Container>
      <BrowserRouter>
        <Route exact path="/" component={PollList} />
        <Route path="/login" component={Login} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/questions/:questions_id" component={Question} />
        <Route path="/leaderboard" component={LeaderboadList} />
      </BrowserRouter>
    </Container>
  );
}

const mapStateToProps = ({ questions, users, authUser }) => ({
  // TODO: look for a better way to implement it
  loaded:
    authUser !== null &&
    Object.keys(questions).length > 0 &&
    Object.keys(users).length > 0,
});

export default connect(mapStateToProps)(App);
