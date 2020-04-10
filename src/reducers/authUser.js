import { AUTH_LOGIN } from "../actions/authUser";

export const authUser = (state = null, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action.user;

    default:
      return state;
  }
};
