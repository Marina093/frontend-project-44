import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'What number is missing in the progression?';

const createProgression = (startNum, step) => {
  const arithProgression = [];
  for (let i = 0; i < 10; i += 1) {
    arithProgression.push(startNum + (step * i));
  }
  return arithProgression;
};

const getQuestionAnswer = () => {
  const firstNumber = getRandomIntInclusive(0, 100);
  const stepProgression = getRandomIntInclusive(1, 10);
  const emptyPosition = getRandomIntInclusive(0, 9);
  const progression = createProgression(firstNumber, stepProgression);
  const corrAnswer = progression[emptyPosition];
  progression[emptyPosition] = '..';
  const question = progression.join(' ');
  return [question, corrAnswer.toString()];
};

const runBrainGameProgression = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameProgression;
