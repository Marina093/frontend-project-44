import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) return false;
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomIntInclusive(0, 100);
  const corrAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, corrAnswer];
};

const runBrainGamePrime = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGamePrime;
