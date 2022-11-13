import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAnswer = () => {
  const randomX = getRandomIntInclusive(2, 100);
  const randomY = getRandomIntInclusive(2, 100);
  const corrAnswer = gcd(randomX, randomY);
  const question = `${randomX} ${randomY}`;
  return [question, corrAnswer];
};

const runBrainGameGCD = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameGCD;
