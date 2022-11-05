import randomNum from '../src/randomNum.js';
import getBrainGames from '../src/index.js';

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
  const randomX = randomNum(10);
  const randomY = randomNum(10);
  const numOperation = randomNum(2);
  const mathSymbol = mathOperations[numOperation];
  const corrAnswer = calculation(randomX, randomY, mathSymbol);
  const mathExpression = `${randomX} ${mathSymbol} ${randomY}`;
  return [mathExpression, corrAnswer];
};

const getBrainGameCalc = () => {
  getBrainGames(mission, setQuestionAnswer);
};

export default getBrainGameCalc;
