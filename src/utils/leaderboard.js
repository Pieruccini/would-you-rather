export const getLeaderboardData = (users) => {
  return Object.values(users).reduce((acc, cur) => {
    const { name, avatarURL, questions, answers } = cur;
    const data = {
      name,
      avatarURL,
      answeredQuestions: Object.keys(answers).length,
      createdQuestions: questions.length,
    };
    return [...acc, data];
  }, []);
};
