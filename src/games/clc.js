import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'What is the result of the expression?';
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

const getQuestionAnswer = () => {
  const randomX = getRandomIntInclusive(0, 10);
  const randomY = getRandomIntInclusive(0, 10);
  const numOperation = getRandomIntInclusive(0, 2);
  const mathSymbol = mathOperations[numOperation];
  const corrAnswer = calculation(randomX, randomY, mathSymbol);
  const question = `${randomX} ${mathSymbol} ${randomY}`;
  return [question, corrAnswer];
};

const runBrainGameCalc = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameCalc;
