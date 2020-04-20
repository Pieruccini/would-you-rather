import { _getUsers, _getQuestions } from "../utils/_DATA";
import { usersSet } from "./users";
import { questionsSet } from "./questions";
import { hideLoading, showLoading } from "react-redux-loading-bar";

export const AUTH_LOGIN = "auth: login";
export const AUTH_LOGOUT = "auth: logout";
export const AUTH_UPDATE_ANSWER = "auth: update answer";
export const AUTH_UPDATE_QUESTION = "auth: update question";

export const authLogin = (user) => ({
  type: AUTH_LOGIN,
  user,
});

/**
 * @param {{qId: string, answer: optionOne/Two}} answer
 */
export const updateAuthAnswer = ({ qId, answer }) => ({
  type: AUTH_UPDATE_ANSWER,
  qId,
  answer,
});

export const updateAuthQuestion = ({ qId }) => ({
  type: AUTH_UPDATE_QUESTION,
  qId,
});

export const logOut = () => ({
  type: AUTH_LOGOUT,
});

export const handleLogin = (userId) => (dispatch) => {
  const users = _getUsers();
  const questions = _getQuestions();
  dispatch(showLoading());
  return Promise.all([users, questions]).then((res) => {
    dispatch(usersSet(res[0]));
    dispatch(questionsSet(res[1]));
    dispatch(authLogin(res[0][userId]));
    dispatch(hideLoading());
  });
};
