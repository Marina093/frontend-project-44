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
      throw new Error('Unknown operation!');		  
  }
  return result;
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomIntInclusive(0, 10);
  const secondNumber = getRandomIntInclusive(0, 10);
  const numOperation = getRandomIntInclusive(0, 2);
  const mathSymbol = mathOperations[numOperation];
  const corrAnswer = calculation(firstNumber, secondNumber, mathSymbol);
  const question = `${firstNumber} ${mathSymbol} ${secondNumber}`;
  return [question, corrAnswer];
};

const runBrainGameCalc = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameCalc;
