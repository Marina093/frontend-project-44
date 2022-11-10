import getRandomIntInclusive from '../src/randomNum.js';
import getBrainGames from '../src/index.js';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const setQuestionAnswer = () => {
  const randomNum = getRandomIntInclusive(0, 100);
  const corrAnswer = prime(randomNum);
  const mathExpression = `${randomNum}`;
  return [mathExpression, corrAnswer];
};

const getBrainGamePrime = () => {
  getBrainGames(mission, setQuestionAnswer);
};

export default getBrainGamePrime;
