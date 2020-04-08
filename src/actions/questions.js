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

const questionsSet = (questions) => ({
  type: QUESTIONS_SET,
  questions,
});

export const questionHandleInitialData = () => (dispatch) => {
  try {
    const question = _getQuestions();
    dispatch(questionsSet(question));
  } catch (e) {
    console.error("Error fetching question", e);
  }
};

const questionCreate = (question) => ({
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

const questionAddVote = ({ qid, answer, authUser }) => ({
  type: QUESTION_ADD_VOTE,
  qid,
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
