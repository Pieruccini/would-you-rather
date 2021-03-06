import { _getUsers } from "../utils/_DATA";

export const USERS_SET = "users: set";
export const USERS_ADD_QUESTIONS = "users: add question to user";
export const USERS_ADD_ANSWER = "users: add answers to user";

export const usersSet = (users) => ({
  type: USERS_SET,
  users,
});

/**
 * fetch users and set the data to users reduce
 */
export const handleInitialDataUsers = () => async (dispatch) => {
  return _getUsers()
    .then((users) => {
      dispatch(usersSet(users));
    })
    .catch((e) => {
      console.error("Error fetching users:", e);
    });
};

export const usersAddQuestion = ({ qId, authUser }) => ({
  type: USERS_ADD_QUESTIONS,
  qId,
  authUser,
});

export const usersAddAnswer = ({ qId, answer, authUser }) => ({
  type: USERS_ADD_ANSWER,
  qId,
  answer,
  authUser,
});
