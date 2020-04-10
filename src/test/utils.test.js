import { _getUsersMock } from "./users-data";
import { _getQuestionsMock } from "./question-data";
import { getPollViewData } from "../utils/utils";

describe("TEST: utils", () => {
  it("getPollViewData", () => {
    const users = _getUsersMock();
    const authUser = users["johndoe"];
    const questions = _getQuestionsMock();
    const pollView = getPollViewData(users["sarahedo"], authUser, questions);
    const result = {
      ["8xf0y6ziyjabvozdd253nd"]: {
        id: "8xf0y6ziyjabvozdd253nd",
        optionOneText: "have horrible short term memory",
        timestamp: 1467166872634,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: false,
      },
      ["am8ehyc8byjqgar0jgpub9"]: {
        id: "am8ehyc8byjqgar0jgpub9",
        optionOneText: "be telekinetic",
        timestamp: 1488579767190,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: false,
      },
    };
    expect(pollView).toEqual(result);
  });
});
