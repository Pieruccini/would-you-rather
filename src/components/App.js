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
import LoadingBar from "react-redux-loading-bar";

function App({ logged, loaded, dispatch, history }) {
  const [cookies] = useCookies(["auth"]);

  useEffect(() => {
    if (cookies.auth) {
      // if the user is saved go to home page
      dispatch(handleLogin(cookies.auth));
      history.push(history.location.path);
    } else {
      // if the user is not saved go to login page
      dispatch(handleInitialData());
      history.push("/login");
      console.log("go to login");
    }
  }, [cookies, history, dispatch]);

  if (!loaded) return null;
  return (
    <div className="full-height">
      <Container className="no-padding" fluid>
        <LoadingBar style={{ zIndex: 1 }} />
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
      <div className={`footer center text-center`}>
        <a href="https://www.freepik.com/free-photos-vectors/people">
          People vector created by freepik - www.freepik.com
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = ({ questions, authUser }) => ({
  logged: authUser !== null,
  loaded: Object.keys(questions).length > 0,
});

export default withRouter(connect(mapStateToProps)(App));
