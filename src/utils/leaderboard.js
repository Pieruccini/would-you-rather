export const getLeaderboardData = (users) => {
  return Object.values(users).reduce((acc, cur) => {
    const { name, avatarURL, questions, answers, id } = cur;
    const data = {
      name,
      id,
      avatarURL,
      answeredQuestions: Object.keys(answers).length,
      createdQuestions: questions.length,
    };
    return [...acc, data];
  }, []);
};
