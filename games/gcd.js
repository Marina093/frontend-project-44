import getRandomIntInclusive from '../src/randomNum.js';
import getBrainGames from '../src/index.js';

const mission = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const setQuestionAnswer = () => {
  const randomX = getRandomIntInclusive(2, 100);
  const randomY = getRandomIntInclusive(2, 100);
  const corrAnswer = gcd(randomX, randomY);
  const mathExpression = `${randomX} ${randomY}`;
  return [mathExpression, corrAnswer];
};

const getBrainGameGCD = () => {
  getBrainGames(mission, setQuestionAnswer);
};

export default getBrainGameGCD;
