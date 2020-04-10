import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import { connect } from "react-redux";
import { handleInitialDataUsers } from "../actions/users";
import { handleQuestionInitialData } from "../actions/questions";
import { authLogin } from "../actions/authUser";

function App({ loaded, dispatch }) {
  console.log(loaded);
  useEffect(() => {
    //TODO: dispatch handles after login
    dispatch(handleInitialDataUsers());
    dispatch(handleQuestionInitialData());
    //TODO: remove authLogin once we have a login screen
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
  loaded: authUser !== null,
});

export default connect(mapStateToProps)(App);
