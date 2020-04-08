import { USERS_SET, USERS_ADD_ANSWER } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case USERS_SET:
      return action.users;

    case USERS_ADD_QUESTIONS:
      const { authUser, qId } = action;
      return addQuestionToUser(state, authUser, qId);

    case USERS_ADD_ANSWER:
      const { authUser, qId, answer } = action;
      return addAnswerToUser(state, authUser, answer, qId);

    default:
      return state;
  }
};
