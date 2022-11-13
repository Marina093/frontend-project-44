import getRandomIntInclusive from '../randomNum.js';
import runBrainGames from '../index.js';

const rule = 'What number is missing in the progression?';

const progression = (startNum, step, position) => {
  let corrAnswer = '';
  let arithProgression = '';
  let start = startNum;
  for (let i = 0; i < 10; i += 1) {
    if (i !== position) {
      arithProgression = `${arithProgression}${start} `;
      start += step;
    } else {
      arithProgression = `${arithProgression}${'..'} `;
      corrAnswer = start;
      start += step;
    }
  }
  return [arithProgression, corrAnswer];
};

const getQuestionAnswer = () => {
  const startNum = getRandomIntInclusive(0, 100);
  const step = getRandomIntInclusive(1, 10);
  const position = getRandomIntInclusive(0, 9);
  const [question, corrAnswer] = progression(startNum, step, position);
  return [question, corrAnswer];
};

const runBrainGameProgression = () => {
  runBrainGames(rule, getQuestionAnswer);
};

export default runBrainGameProgression;
