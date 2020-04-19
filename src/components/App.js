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
import NavBar from "./NavBar";

function App({ logged, loaded, dispatch, history }) {
  const [cookies] = useCookies(["auth"]);
  useEffect(() => {
    console.log("cookies", cookies);
    if (cookies.auth) {
      // if the user is saved go to home page
      dispatch(handleLogin(cookies.auth));
      history.push("/home");
    } else {
      // if the user is not saved go to login page
      dispatch(handleInitialData());
      history.push("/login");
      console.log("go to login");
    }
  }, [cookies, history, dispatch]);

  if (!loaded) return null;
  return (
    <Container fluid>
      <Route path="/login" component={Login} />
      {logged && loaded && (
        <React.Fragment>
          <NavBar />
          <Route path="/home" component={PollList} />
          <Route path="/add" component={NewQuestion} />
          <Route path="/questions/:questions_id" component={Question} />
          <Route path="/leaderboard" component={LeaderboadList} />
        </React.Fragment>
      )}
    </Container>
  );
}

const mapStateToProps = ({ questions, users, authUser }) => ({
  logged: authUser !== null,
  loaded: Object.keys(questions).length > 0,
});

export default withRouter(connect(mapStateToProps)(App));
