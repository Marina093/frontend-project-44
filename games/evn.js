import randomNum from '../src/randomNum.js';
import getBrainGames from '../src/index.js';

const mission = "Answer 'yes' if number even otherwise answer 'no'.";

const even = (randomNumber) => {
  let evenNum = '';
  if (randomNumber % 2 === 0) {
    evenNum = 'yes';
  } else {
    evenNum = 'no';
  }
  return evenNum;
};

const setQuestionAnswer = () => {
  const randomNumber = randomNum(10);
  const corrAnswer = even(randomNumber);
  const mathExpression = randomNumber;
  return [mathExpression, corrAnswer];
};

const getBrainGameEven = () => {
  getBrainGames(mission, setQuestionAnswer);
};

export default getBrainGameEven;