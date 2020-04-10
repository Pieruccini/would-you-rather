import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { usersAddAnswer, usersAddQuestion } from "./users";

export const QUESTIONS_SET = "questions: set";
export const QUESTIONS_CREATE = "questions: add";
export const QUESTION_ADD_VOTE = "question: set";

//TODO: temporary author
const author = "Igor Pieruccini";

export const questionsSet = (questions) => ({
  type: QUESTIONS_SET,
  questions,
});

export const handleQuestionInitialData = () => (dispatch) => {
  return _getQuestions().then((question) => {
    dispatch(questionsSet(question));
  });
};

export const questionCreate = (question) => ({
  type: QUESTIONS_CREATE,
  question,
});

export const handleCreateQuestion = ({ optionOneText, optionTwoText }) => (
  dispatch
) => {
  try {
    const question = _saveQuestion({ optionOneText, optionTwoText, author });
    dispatch(questionCreate(question));
    dispatch(usersAddQuestion(question.id, author));
  } catch (e) {
    console.error("Error creating question:", e);
  }
};

export const questionAddVote = ({ qId, answer, authUser }) => ({
  type: QUESTION_ADD_VOTE,
  qId,
  answer,
  authUser,
});

export const handleQuestionAnswer = ({ qId, answer }) => (dispatch) => {
  try {
    _saveQuestionAnswer({ authedUser: author, qId, answer });
    dispatch(questionAddVote({ authUser: author, qId, answer }));
    dispatch(usersAddAnswer({ qId, answer, author }));
  } catch (e) {
    console.error("Error handling question answer", e);
  }
};
