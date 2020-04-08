import { QUESTIONS_SET } from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_SET:
      return action.questions;

    case QUESTION_CREATE:
      return {
        ...state,
        questions,
      };

    case QUESTION_ADD_VOTE:
      const { qid, answer, authUser } = action;
      return addVoteToQuestion(state, qid, answer, authUser);

    default:
      return state;
  }
};
