// this file holds utils generic data

import { userHasAnsweredQuestion, getUserFromQuestion } from "./users";

/**
 * combine user and question and return a PollView Object data
 * @param {user} user
 * @param {user} authUser
 * @param {storeQuestions} questions store.questions

 */
export const getPollViewData = (user, authUser, storeQuestions) => {
  const { avatarURL, name, questions } = user;
  const { answers } = authUser;
  return questions.reduce((acc, cur) => {
    const { optionOne, timestamp, id } = storeQuestions[cur];
    return {
      ...acc,
      [id]: {
        id,
        optionOneText: optionOne.text,
        timestamp,
        avatarURL,
        name,
        userHasAnswered: userHasAnsweredQuestion(cur, answers),
      },
    };
  }, {});
};

/**
 *
 * @param {question} question
 * @param {users} users store.users
 * @param {authUser} authUser  store.authUser
 */
export const getQuestionData = (question, users, authUser) => {
  const { id, optionOne, optionTwo } = question;
  const { avatarURL, name } = getUserFromQuestion(question, users);
  const { answers } = authUser;
  return {
    id,
    optionOne,
    optionTwo,
    avatarURL,
    name,
    userHasAnswered: userHasAnsweredQuestion(id, answers),
  };
};

/**
 * return percentage of both answers as object
 * @param {number} votesOne question.optionOne.votes.length
 * @param {number} votesTwo question.optionTwo.votes.length
 */
export const calculateAnswerPercentage = (votesOne, votesTwo) => {
  const total = votesOne + votesTwo;
  return {
    one: Math.round((100 * votesOne) / total),
    two: Math.round((100 * votesTwo) / total),
  };
};
