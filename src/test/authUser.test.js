import { _getUsersMock } from "./authUser-data";
import { authUser } from "../reducers/authUser";
import { authLogin } from "../actions/authUser";

describe("TEST: AuthUser reducer", () => {
  it("AUTH_LOGIN", () => {
    const users = _getUsersMock();
    const user = users["johndoe"];
    const action = authLogin(user);
    expect(authUser(null, action)).toEqual(user);
  });
});
