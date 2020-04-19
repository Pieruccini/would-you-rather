import {
  AUTH_LOGIN,
  AUTH_UPDATE_ANSWER,
  AUTH_UPDATE_QUESTION,
} from "../actions/authUser";

export const authUser = (state = null, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.user;

    case AUTH_UPDATE_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.qId]: action.answer,
        },
      };

    case AUTH_UPDATE_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.qId],
      };

    default:
      return state;
  }
};
