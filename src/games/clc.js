import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'What is the result of the expression?';
const mathOperations = ['+', '-', '*'];
const leftLimit = 0;
const rightLimit = 10;
const calculate = (x, y, symbol) => {
  switch (symbol) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Unknown operation!');
  }
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomIntInclusive(leftLimit, rightLimit);
  const secondNumber = getRandomIntInclusive(leftLimit, rightLimit);
  const numOperation = getRandomIntInclusive(leftLimit, mathOperations.length - 1);
  const mathSymbol = mathOperations[numOperation];
  const corrAnswer = calculate(firstNumber, secondNumber, mathSymbol);
  const question = `${firstNumber} ${mathSymbol} ${secondNumber}`;
  return [question, corrAnswer.toString()];
};

const runBrainGameCalc = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameCalc;
