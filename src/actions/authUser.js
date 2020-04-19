import { _getUsers, _getQuestions } from "../utils/_DATA";
import { usersSet } from "./users";
import { questionsSet } from "./questions";

export const AUTH_LOGIN = "auth: login";
export const AUTH_UPDATE_ANSWER = "auth: update answer";

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

export const handleLogin = (userId) => (dispatch) => {
  const users = _getUsers();
  const questions = _getQuestions();
  return Promise.all([users, questions]).then((res) => {
    dispatch(usersSet(res[0]));
    dispatch(questionsSet(res[1]));
    dispatch(authLogin(res[0][userId]));
  });
};
