import { _getUsersMock } from "./authUser-data";
import { authUser } from "../reducers/authUser";
import {
  authLogin,
  updateAuthAnswer,
  updateAuthQuestion,
} from "../actions/authUser";

describe("TEST: AuthUser reducer", () => {
  it("AUTH_LOGIN", () => {
    const users = _getUsersMock();
    const user = users["johndoe"];
    const action = authLogin(user);
    expect(authUser(null, action)).toEqual(user);
  });

  it("AUTH_UPDATE_ANSWER", () => {
    const users = _getUsersMock();
    const user = users["johndoe"];
    const action = updateAuthAnswer({ qId: "test", answer: "optionOne" });
    expect(authUser(user, action)).toEqual({
      ...user,
      answers: {
        ...user.answers,
        ["test"]: "optionOne",
      },
    });
  });

  it("AUTH_UPDATE_QUESTION", () => {
    const users = _getUsersMock();
    const user = users["johndoe"];
    const action = updateAuthQuestion({ qId: "test" });
    expect(authUser(user, action)).toEqual({
      ...user,
      questions: [...user.questions, "test"],
    });
  });
});
