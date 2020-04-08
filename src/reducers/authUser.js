const authUser = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return action;

    default:
      return state;
  }
};
