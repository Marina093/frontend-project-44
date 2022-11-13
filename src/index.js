import readlineSync from 'readline-sync';

const gameRounds = 3;

const runBrainGames = (rule, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  let i = 0;
  while (i < gameRounds) {
    const [question, corrAnswer] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(corrAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default runBrainGames;
