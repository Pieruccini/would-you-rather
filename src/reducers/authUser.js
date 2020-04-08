import { AUTH_LOGIN } from "../actions/authUser";

export const authUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action;

    default:
      return state;
  }
};
