import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = (randomNumber) => {
  let evenNum = '';
  if (randomNumber % 2 === 0) {
    evenNum = 'yes';
  } else {
    evenNum = 'no';
  }
  return evenNum;
};

const getQuestionAnswer = () => {
  const randomNumber = getRandomIntInclusive(0, 10);
  const corrAnswer = even(randomNumber);
  const question = randomNumber;
  return [question, corrAnswer];
};

const runBrainGameEven = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameEven;
