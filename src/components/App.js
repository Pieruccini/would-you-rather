import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import Question from "./Question";
import { connect } from "react-redux";
import NewQuestion from "./NewQuestion";
import LeaderboadList from "./LeaderboadList";
import Login from "./Login";
import { Route, withRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { handleInitialData } from "../actions/shared";
import { useCookies } from "react-cookie";
import { handleLogin } from "../actions/authUser";

function App({ logged, loaded, dispatch, history }) {
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    if (cookies.auth) {
      // if the user is saved go to home page
      dispatch(handleLogin(cookies.auth));
      history.push("/home");
    } else {
      // if the user is not saved go to login page
      dispatch(handleInitialData());
      history.push("/login");
    }
  }, [cookies, history, dispatch]);

  if (!logged || !loaded) return null;
  return (
    <Container>
      <Route path="/home" component={PollList} />
      <Route path="/login" component={Login} />
      <Route path="/add" component={NewQuestion} />
      <Route path="/questions/:questions_id" component={Question} />
      <Route path="/leaderboard" component={LeaderboadList} />
    </Container>
  );
}

const mapStateToProps = ({ questions, users, authUser }) => ({
  logged: authUser !== null,
  loaded: Object.keys(questions).length > 0,
});

export default withRouter(connect(mapStateToProps)(App));
