import getRandomIntInclusive from '../randomNum.js';
import getBrainGames from '../index.js';

const mission = 'What is the result of the expression?';
const mathOperations = ['+', '-', '*'];
const calculation = (x, y, symbol) => {
  let result = 0;
  switch (symbol) {
    case '+': result = x + y;
      break;
    case '-': result = x - y;
      break;
    case '*': result = x * y;
      break;
    default:
  }
  return result;
};

const setQuestionAnswer = () => {
  const randomX = getRandomIntInclusive(0, 10);
  const randomY = getRandomIntInclusive(0, 10);
  const numOperation = getRandomIntInclusive(0, 2);
  const mathSymbol = mathOperations[numOperation];
  const corrAnswer = calculation(randomX, randomY, mathSymbol);
  const mathExpression = `${randomX} ${mathSymbol} ${randomY}`;
  return [mathExpression, corrAnswer];
};

const getBrainGameCalc = () => {
  getBrainGames(mission, setQuestionAnswer);
};

export default getBrainGameCalc;
