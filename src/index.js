import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

export default (MakeGame) => {
  const Welcome = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
  const QuestName = '\nMay I have your name? ';
  console.log(Welcome);
  console.log(cdr(MakeGame));
  const Name = readlineSync.question(QuestName);
  const Hello = `Hello, ${Name}!\n`;
  console.log(Hello);
  const MakeRound = (i) => {
    if (i === 0) {
      console.log(`Congratulations, ${Name}!`);
      return;
    }
    const CurrentRound = car(MakeGame)();
    console.log(`Question: ${car(CurrentRound)}`);
    const CurrentAnswer = readlineSync.question('Yor answer: ');
    if (cdr(CurrentRound) === CurrentAnswer) console.log('Correct!');
    else {
      console.log(`'${CurrentAnswer}' is wrong answer ;(. Correct answer was '${cdr(CurrentRound)}'.\nLet's try again, ${Name}!`);
      return;
    }
    MakeRound(i - 1);
  };
  MakeRound(3);
};
