import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import Question from "./Question";
import { connect } from "react-redux";
import NewQuestion from "./NewQuestion";
import LeaderboadList from "./LeaderboadList";
import Login from "./Login";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { handleInitialDataUsers } from "../actions/users";
import { handleInitialData } from "../actions/shared";

function App({ loaded, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Container>
      <BrowserRouter>
        {!loaded && <Redirect to="/login" />}
        <Route path="/home" component={PollList} />
        <Route path="/login" component={Login} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/questions/:questions_id" component={Question} />
        <Route path="/leaderboard" component={LeaderboadList} />
      </BrowserRouter>
    </Container>
  );
}

const mapStateToProps = ({ questions, users, authUser }) => ({
  logged: authUser !== null,
});

export default connect(mapStateToProps)(App);
