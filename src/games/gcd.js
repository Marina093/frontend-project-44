import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomIntInclusive(2, 100);
  const secondNumber = getRandomIntInclusive(2, 100);
  const corrAnswer = findGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, corrAnswer];
};

const runBrainGameGCD = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameGCD;
