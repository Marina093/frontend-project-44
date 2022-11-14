import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const leftLimit = 2;
const rightLimit = 100;

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomIntInclusive(leftLimit, rightLimit);
  const secondNumber = getRandomIntInclusive(leftLimit, rightLimit);
  const corrAnswer = findGCD(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, corrAnswer.toString()];
};

const runBrainGameGCD = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameGCD;
