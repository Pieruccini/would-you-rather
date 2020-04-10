import { _getQuestionsMock, _saveQuestionMock } from "./question-data";
import { questions } from "../reducers/questions";
import {
  questionsSet,
  questionCreate,
  questionAddVote,
} from "../actions/questions";
import { addVoteToQuestion } from "../utils/questions";

describe("TEST: Question Reducer", () => {
  it("QUESTION_SET", () => {
    const questionsMock = _getQuestionsMock();
    const action = questionsSet(questionsMock);
    expect(questions({}, action)).toEqual(questionsMock);
  });

  it("QUESTION_CREATE", () => {
    const questionsMock = _getQuestionsMock();
    const newQuestion = _saveQuestionMock({
      optionOneText: "be a backend developer",
      optionTwoText: "be a frontend developer",
      author: "Igor Pieruccini",
    });
    const action = questionCreate(newQuestion);
    expect(questions(questionsMock, action)).toEqual({
      ...questionsMock,
      [newQuestion.id]: { ...newQuestion },
    });
  });

  it("QUESTION_ADD_VOTE", () => {
    const questionsMock = _getQuestionsMock();
    const { id } = questionsMock["8xf0y6ziyjabvozdd253nd"];
    const action = questionAddVote({
      qId: id,
      answer: "optionOne",
      authUser: "Igor Pieruccini",
    });
    expect(questions(questionsMock, action)).toEqual(
      addVoteToQuestion(questionsMock, id, "optionOne", "Igor Pieruccini")
    );
  });
});
