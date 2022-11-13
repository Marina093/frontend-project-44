import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = (n) => {
  let answer = '';
  if (n < 2) {
    return 'no';
  }
  for (let j = 2; j <= n; j += 1) {
    if (n % j === 0 && j !== n) {
      return 'no';
    } if (j === n) {
      answer = 'yes';
    }
  }
  return answer;
};

const getQuestionAnswer = () => {
  const randomNum = getRandomIntInclusive(0, 100);
  const corrAnswer = prime(randomNum);
  const question = `${randomNum}`;
  return [question, corrAnswer];
};

const runBrainGamePrime = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGamePrime;
