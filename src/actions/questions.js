import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { usersAddAnswer } from "./users";

export const QUESTIONS_SET = "questions: set";
export const QUESTIONS_CREATE = "questions: add";
export const QUESTION_ADD_VOTE = "question: set";

//TODO: temporary author
const author = "Igor Pieruccini";

const questionsSet = (questions) => ({
  type: QUESTIONS_RECEIVE,
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
    //TODO: get auto from state instead of using a mock
    const question = _saveQuestion({ optionOneText, optionTwoText, author });
    dispatch(questionCreate(question));
    dispatch(userAddQuestion(question.id));
  } catch (e) {
    console.error("Error creating question:", e);
  }
};

const questionAddVote = ({ qid, answer }) => ({
  type: QUESTION_ADD_VOTE,
  qid,
  answer,
});

export const handleQuestionAnswer = ({ qid, answer }) => (dispatch) => {
  try {
    //TODO: get auto from state instead of using a mock
    _saveQuestionAnswer({ authedUser: author, qid, answer });
    dispatch(questionAddVote(question));
    dispatch(usersAddAnswer({ qId, answer }));
  } catch (e) {
    console.error("Error handling question answer", e);
  }
};