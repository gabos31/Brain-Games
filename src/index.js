import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

export default (makeGame) => {
  const welcome = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
  const questName = '\nMay I have your name? ';
  console.log(welcome);
  console.log(cdr(makeGame));
  const name = readlineSync.question(questName);
  const hello = `Hello, ${name}!\n`;
  console.log(hello);
  const makeRound = (i) => {
    if (i === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const currentRound = car(makeGame)();
    console.log(`Question: ${car(currentRound)}`);
    const currentAnswer = readlineSync.question('Yor answer: ');
    if (cdr(currentRound) === currentAnswer) console.log('Correct!');
    else {
      console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${cdr(currentRound)}'.\nLet's try again, ${name}!`);
      return;
    }
    makeRound(i - 1);
  };
  makeRound(3);
};
