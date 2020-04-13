import { _getUsersMock } from "./authUser-data";
import { getLeaderboardData } from "../utils/leaderboard";

describe("TEST: leaderbard utils", () => {
  it("getLeaderboardData", () => {
    const users = _getUsersMock();
    const user = { ["johndoe"]: { ...users["johndoe"] } };
    const result = [
      {
        name: "John Doe",
        avatarURL: "../../images/leaf.jpg",
        answeredQuestions: 3,
        createdQuestions: 2,
      },
    ];
    expect(getLeaderboardData(user)).toEqual(result);
  });
});
