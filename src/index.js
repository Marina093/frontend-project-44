import readlineSync from 'readline-sync';

const gameRounds = 3;

const getBrainGames = (mission, setQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(mission);
  let i = 0;
  while (i < gameRounds) {
    const [mathExpression, corrAnswer] = setQuestionAnswer();
    console.log(`Question: ${mathExpression}`);
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

export default getBrainGames;
