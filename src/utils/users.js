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
    console.warn(`user ${authUser.id} doesn't exist`);
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
    console.warn(`user ${authUser.id} doesn't exist`);
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
 * get the question from user data
 * @param {question} question
 * @param {store.users} users
 */
export const getQuestionFromUser = (qId, users) => {
  return Object.keys(users).find((key) => {
    return users[key].question[qId];
  });
};

/**
 * returns the user from the question.author
 * @param {question} question
 * @param {users} users store.users
 */
export const getUserFromQuestion = (question, users) => {
  return Object.values(users).find((val) => {
    return question.author === val.id;
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
