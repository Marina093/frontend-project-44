import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const leftLimit = 0;
  const rightLimit = 10;
  const question = getRandomIntInclusive(leftLimit, rightLimit);
  const corrAnswer = isEven(question) ? 'yes' : 'no';
  return [question, corrAnswer];
};

const runBrainGameEven = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameEven;
