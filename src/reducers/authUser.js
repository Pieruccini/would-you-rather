import { AUTH_LOGIN, AUTH_UPDATE_ANSWER } from "../actions/authUser";

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

    default:
      return state;
  }
};
