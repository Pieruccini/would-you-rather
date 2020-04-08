/**
 * Receive user state, and return the new user state within
 * the question id added to the auth user
 * @param {state.user} users
 * @param {user} authUser
 * @param {string} qId
 */
const addQuestionToUser = (users, authUser, qId) => {
  return {
    ...users,
    [authUser]: {
      ...users[authUser],
      questions: [...users[authUser].questions, qId],
    },
  };
};

/**
 * Receive user state, and return the new user state within
 * the answer added to the auth user
 * @param {state.user} users
 * @param {user} authUser
 * @param {string} answer optionOne / optionTwo
 * @param {string} qId
 */
const addAnswerToUser = (users, authUser, answer, qId) => {
  return {
    ...users,
    [authUser]: {
      ...users[authUser],
      answers: {
        ...users[authUser].answers,
        [qId]: answer,
      },
    },
  };
};
