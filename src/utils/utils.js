// this file holds utils generic data

import { userHasAnsweredQuestion } from "./users";

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
        userHasAnswered: userHasAnsweredQuestion(cur.id, answers),
      },
    };
  }, {});
};
