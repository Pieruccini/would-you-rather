import { _getUsersMock } from "./users-data";
import { _getQuestionsMock } from "./question-data";
import {
  getPollViewData,
  getQuestionData,
  calculateAnswerPercentage,
} from "../utils/utils";
import { getUserFromQuestion } from "../utils/users";

describe("TEST: utils", () => {
  it("getPollViewData", () => {
    const users = _getUsersMock();
    const authUser = users["sarahedo"];
    const questions = _getQuestionsMock();
    const pollView = getPollViewData(users["sarahedo"], authUser, questions);
    const result = {
      ["8xf0y6ziyjabvozdd253nd"]: {
        id: "8xf0y6ziyjabvozdd253nd",
        optionOneText: "have horrible short term memory",
        timestamp: 1467166872634,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: true,
      },
      ["am8ehyc8byjqgar0jgpub9"]: {
        id: "am8ehyc8byjqgar0jgpub9",
        optionOneText: "be telekinetic",
        timestamp: 1488579767190,
        avatarURL: "../../images/snow.jpg",
        name: "Sarah Edo",
        userHasAnswered: true,
      },
    };
    expect(pollView).toEqual(result);
  });

  it("getUserFromQuestion", () => {
    const users = _getUsersMock();
    const questions = _getQuestionsMock();
    const currentQuestion = questions["8xf0y6ziyjabvozdd253nd"];
    const user = getUserFromQuestion(currentQuestion, users);
    expect(user).toEqual({
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "../../images/snow.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    });
  });

  it("getQuestionData", () => {
    const questions = _getQuestionsMock();
    const currentQuestion = questions["8xf0y6ziyjabvozdd253nd"];
    const users = _getUsersMock();
    const authUser = users["sarahedo"];
    const questionData = getQuestionData(currentQuestion, users, authUser);
    const result = {
      id: "8xf0y6ziyjabvozdd253nd",
      optionOne: {
        votes: ["sarahedo"],
        text: "have horrible short term memory",
      },
      optionTwo: {
        votes: [],
        text: "have horrible long term memory",
      },
      name: "Sarah Edo",
      avatarURL: "../../images/snow.jpg",
      userHasAnswered: true,
    };
    expect(questionData).toEqual(result);
  });

  it("calculateAnswersPercentage case 1", () => {
    const optionOne = 40;
    const optionTwo = 60;
    expect(calculateAnswerPercentage(optionOne, optionTwo)).toEqual({
      one: 40,
      two: 60,
    });
  });

  it("calculateAnswersPercentage case 2", () => {
    const optionOne = 10;
    const optionTwo = 25;
    expect(calculateAnswerPercentage(optionOne, optionTwo)).toEqual({
      one: 29,
      two: 71,
    });
  });
});
