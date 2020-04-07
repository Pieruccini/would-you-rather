import { _getUsers } from "../utils/_DATA";

export const USERS_SET = "users: set";
export const USERS_ADD_QUESTIONS = "users: add question to user";
export const USERS_ADD_ANSWER = "users: add answers to user";

const usersSet = (users) => ({
  type: USERS_SET,
  users,
});

/**
 * fetch users and set the data to users reduce
 */
export const HandleInitialDataUsers = () => async (dispatch) => {
  try {
    const users = _getUsers();
    dispatch(usersSet(users));
  } catch (e) {
    console.error("Error fetching users:", e);
  }
};

export const usersAddQuestion = (qId) => ({
  type: USERS_ADD_QUESTIONS,
  qId,
});

export const usersAddAnswer = ({ qId, answer }) => ({
  type: USERS_ADD_ANSWER,
  qId,
  answer,
});
