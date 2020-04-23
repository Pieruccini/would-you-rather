import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import Question from "./Question";
import { connect } from "react-redux";
import NewQuestion from "./NewQuestion";
import LeaderboadList from "./LeaderboadList";
import Login from "./Login";
import { Route, withRouter, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { handleInitialData } from "../actions/shared";
import { useCookies } from "react-cookie";
import { handleLogin, logOut } from "../actions/authUser";
import NavBar from "./NavBar";
import LoadingBar from "react-redux-loading-bar";
import NoMatch from "./NoMatch";

function App({ logged, loaded, dispatch, history, location }) {
  const [cookies, , removeCookie] = useCookies(["auth"]);

  // on component did mount check id the user is logged
  // if not redirect to login page
  useEffect(() => {
    if (cookies.auth) {
      // if the user is saved go to home page
      dispatch(handleLogin(cookies.auth));
      history.replace(location.pathname !== "/login" ? location.pathname : "/");
    } else {
      // if the user is not saved go to login page
      dispatch(handleInitialData());
      history.replace("/login");
    }
    // eslint-disable-next-line
  }, []);

  // if the user is not at login page without being logged in redirect to login page
  useEffect(() => {
    if (location.pathname !== "/login" && !logged && !cookies.auth) {
      history.replace("/login");
    }
    // logout if the user goes back to login
    if (location.pathname === "/login" && logged) {
      dispatch(logOut());
      removeCookie("auth");
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  if (!loaded) return null;
  return (
    <div className="full-height">
      <Container className="no-padding" fluid>
        <LoadingBar style={{ zIndex: 1 }} />
        <Route path="/login" component={Login} />
        {logged && loaded && (
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route exact path="/" component={PollList} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:questions_id" component={Question} />
              <Route path="/leaderboard" component={LeaderboadList} />
              <Route component={NoMatch} />
            </Switch>
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
