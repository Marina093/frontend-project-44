import readlineSync from 'readline-sync';

const evenNumber = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  let i = 0;
  while (i < 3) {
    const randomNumber = Math.round(Math.random() * 10);
    console.log('Question:', randomNumber);
    const answer = readlineSync.question('Your answer: ');
    let corrAnswer = '';
    if (randomNumber % 2 === 0) {
      corrAnswer = 'yes';
    } else {
      corrAnswer = 'no';
    }
    if ((answer === 'yes' && randomNumber % 2 === 0) || (answer === 'no' && randomNumber % 2 !== 0)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corrAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
    i += 1;
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenNumber;
