import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { usersAddAnswer, usersAddQuestion } from "./users";

export const QUESTIONS_SET = "questions: set";
export const QUESTIONS_CREATE = "questions: add";
export const QUESTION_ADD_VOTE = "question: set";

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
  dispatch,
  getState
) => {
  const { id } = getState().authUser;
  return _saveQuestion({
    optionOneText,
    optionTwoText,
    author: id,
  })
    .then((question) => {
      dispatch(questionCreate(question));
      dispatch(usersAddQuestion({ qId: question.id, authUser: id }));
    })
    .catch((e) => {
      console.error("Error creating question:", e);
    });
};

export const questionAddVote = ({ qId, answer, authUser }) => ({
  type: QUESTION_ADD_VOTE,
  qId,
  answer,
  authUser,
});

export const handleQuestionAnswer = ({ qId, answer }) => (
  dispatch,
  getState
) => {
  try {
    const authUser = getState().authUser;
    _saveQuestionAnswer({ authedUser: authUser.id, qid: qId, answer });
    dispatch(questionAddVote({ authUser: authUser.id, qId, answer }));
    dispatch(usersAddAnswer({ qId, answer, authUser: authUser.id }));
  } catch (e) {
    console.error("Error handling question answer", e);
  }
};
