import { users } from "../reducers/users";
import { _getUsersMock } from "./users-data";
import {
  USERS_SET,
  usersSet,
  usersAddQuestion,
  usersAddAnswer,
} from "../actions/users";
import { addQuestionToUser, addAnswerToUser } from "../utils/users";

const _getUsers = jest.fn(_getUsersMock);

describe("TEST: User Reducer", () => {
  it("USER_SET", () => {
    const mockUsers = _getUsers();
    const action = usersSet(mockUsers);
    expect(users({}, action)).toEqual(mockUsers);
  });

  it("USERS_ADD_QUESTIONS", () => {
    const mockUsers = _getUsers();
    const authUser = mockUsers["sarahedo"];
    const action = usersAddQuestion({ qId: "qTestId", authUser: authUser.id });
    expect(users(mockUsers, action)).toEqual(
      addQuestionToUser(mockUsers, authUser.id, "qTestId")
    );
  });

  it("USERS_ADD_ANSWER", () => {
    const mockUsers = _getUsers();
    const authUser = mockUsers["sarahedo"];
    const action = usersAddAnswer({
      qId: "qTestId",
      answer: "optionOne",
      authUser: authUser.id,
    });
    expect(users(mockUsers, action)).toEqual(
      addAnswerToUser(mockUsers, authUser.id, "optionOne", "qTestId")
    );
  });
});
