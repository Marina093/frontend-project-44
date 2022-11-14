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
  const leftLimit = 0;
  const rightLimit = 100;
  const minStep = 1;
  const maxStep = 10;
  const minNumPosition = 0;
  const maxNumPosition = 9;
  const firstNumber = getRandomIntInclusive(leftLimit, rightLimit);
  const stepProgression = getRandomIntInclusive(minStep, maxStep);
  const emptyPosition = getRandomIntInclusive(minNumPosition, maxNumPosition);
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
