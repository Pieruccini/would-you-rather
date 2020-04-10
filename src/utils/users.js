// this file holds utils specific to users data

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

/**
 * Use the author from question to get the user(data) from the users
 * @param {question} question
 * @param {store.users} users
 */
export const getUserFromQuestion = (qId, users) => {
  return Object.keys(users).find((key) => {
    console.log(key);
    return users[key].question[qId];
  });
};

/**
 * returns if the user has answered this question
 * @param {string} qId question id of the question you want to check
 * @param {string.array} answers the answers of the user you want to check
 */
export const userHasAnsweredQuestion = (qId, answers) => {
  return answers[qId] !== undefined ? true : false;
};
