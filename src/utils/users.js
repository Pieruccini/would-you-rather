/**
 * Receive user state, and return the new user state within
 * the question id added to the auth user
 * @param {state.user} users
 * @param {user} authUser
 * @param {string} qId
 */
export const addQuestionToUser = (users, authUser, qId) => {
  if (!users[authUser]) {
    console.warn(`user ${authUser} doesn't exist`);
    return users;
  }
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
export const addAnswerToUser = (users, authUser, answer, qId) => {
  console.log("authUser", authUser);
  if (!users[authUser]) {
    console.warn(`user ${authUser} doesn't exist`);
    return users;
  }
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
