// const HANDLE_INITIAL_DATA = "HANDLE_INITIAL_DATA";

import { _getUsers, _getQuestions } from "../utils/_DATA";
import { questionsSet } from "./questions";
import { usersSet } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

/**
 * fetch users and questions data and set in redux store
 */
export const handleInitialData = () => (dispatch) => {
  const users = _getUsers();
  const questions = _getQuestions();
  dispatch(showLoading());
  return Promise.all([users, questions]).then((res) => {
    dispatch(usersSet(res[0]));
    dispatch(questionsSet(res[1]));
    dispatch(hideLoading());
  });
};
