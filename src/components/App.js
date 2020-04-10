import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import { connect } from "react-redux";
import { authLogin } from "../actions/authUser";
import { handleInitialData } from "../actions/shared";

function App({ loaded, dispatch }) {
  useEffect(() => {
    // //TODO: dispatch handles after login
    dispatch(handleInitialData());
    // //TODO: remove authLogin once we have a login screen
    dispatch(
      authLogin({
        id: "sarahedo",
        name: "Sarah Edo",
        avatarURL: "../../images/snow.jpg",
        answers: {
          "8xf0y6ziyjabvozdd253nd": "optionOne",
          "6ni6ok3ym7mf1p33lnez": "optionOne",
          am8ehyc8byjqgar0jgpub9: "optionTwo",
          loxhs1bqm25b708cmbf3g: "optionTwo",
        },
        questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
      })
    );
  }, [dispatch]);

  useEffect(() => {});

  return (
    <div className="App">
      would you rather
      {loaded ? <PollList /> : null}
    </div>
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
