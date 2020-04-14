import { handleInitialData } from "./shared";

export const AUTH_LOGIN = "auth: login";

export const authLogin = (user) => ({
  type: AUTH_LOGIN,
  user,
});

export const handleLogin = (user) => (dispatch) => {
  dispatch(authLogin(user));
  dispatch(handleInitialData());
};
