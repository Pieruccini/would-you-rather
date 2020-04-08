export const AUTH_LOGIN = "auth: login";

export const authLogin = (userId) => ({
  type: userId,
  userId,
});
