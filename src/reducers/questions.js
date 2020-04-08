import {
  QUESTIONS_SET,
  QUESTIONS_CREATE,
  QUESTION_ADD_VOTE,
} from "../actions/questions";
import { addVoteToQuestion } from "../utils/questions";

export const questions = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_SET:
      return action.questions;

    case QUESTIONS_CREATE:
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
