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
import { handleLogin } from "../actions/authUser";
import NavBar from "./NavBar";
import LoadingBar from "react-redux-loading-bar";
import NoMatch from "./NoMatch";
import PrivateRouter from "./PrivateRouter";

function App({ logged, dispatch, history, location }) {
  const [cookies] = useCookies(["auth"]);

  // on component did mount check id the user is logged
  // if not redirect to login page
  useEffect(() => {
    dispatch(handleInitialData());
    if (cookies.auth) {
      // if the user is saved go to home page
      dispatch(handleLogin(cookies.auth));
      history.replace(location.pathname !== "/login" ? location.pathname : "/");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="full-height">
      <Container className="no-padding" fluid>
        <LoadingBar style={{ zIndex: 1 }} />
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRouter logged={logged} exact path="/" component={PollList} />
          <PrivateRouter logged={logged} path="/add" component={NewQuestion} />
          <PrivateRouter
            logged={logged}
            path="/questions/:questions_id"
            component={Question}
          />
          <PrivateRouter
            logged={logged}
            path="/leaderboard"
            component={LeaderboadList}
          />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      <div className={`footer center text-center`}>
        <a href="https://www.freepik.com/free-photos-vectors/people">
          People vector created by freepik - www.freepik.com
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => ({
  logged: authUser !== null,
});

export default withRouter(connect(mapStateToProps)(App));
