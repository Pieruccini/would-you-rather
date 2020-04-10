// this file holds utils specific to question data

/**
 * Receive user state, and return the new user state within
 * the question id added to the auth user
 * @param {state.questions} questions
 * @param {string} qId
 * @param {user} authUser
 * @param {string} answer
 */
export const addVoteToQuestion = (questions, qId, answer, authUser) => {
  return {
    ...questions,
    [qId]: {
      ...questions[qId],
      [answer]: {
        votes: [...questions[qId][answer].votes, authUser],
      },
    },
  };
};
