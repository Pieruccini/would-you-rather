/**
 * Receive user state, and return the new user state within
 * the question id added to the auth user
 * @param {state.questions} questions
 * @param {string} qId
 * @param {user} authUser
 * @param {string} answer
 */
const addVoteToQuestion = ({ questions, qid, answer, authUser }) => {
  return {
    ...questions,
    [qid]: {
      ...questions[qid],
      [answer]: {
        votes: [...question[qid][answer], authUser],
      },
    },
  };
};
