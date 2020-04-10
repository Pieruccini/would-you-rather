import React, { useEffect } from "react";
import "../css/App.css";
import PollList from "./PollList";
import { connect } from "react-redux";
import { handleInitialDataUsers } from "../actions/users";
import { handleQuestionInitialData } from "../actions/questions";
import { authLogin } from "../actions/authUser";

function App({ dispatch }) {
  useEffect(() => {
    console.log("handle initial data");
    dispatch(handleInitialDataUsers());
    dispatch(handleQuestionInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      would you rather
      <PollList />
    </div>
  );
}

export default connect()(App);
