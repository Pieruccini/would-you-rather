export const AUTH_LOGIN = "auth: login";

export const authLogin = (user) => ({
  type: AUTH_LOGIN,
  user,
});
