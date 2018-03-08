import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { car, cdr } from 'hexlet-pairs';

let Name = '';
export const Greetings = (Task) => {
  const Welcome = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
  const QuestName = '\nMay I have your name? ';
  console.log(Welcome);
  console.log(Task);
  Name = readlineSync.question(QuestName);
  const hello = `Hello, ${Name}!\n`;
  console.log(hello);
};

export const GameEngine = (MakeRound) => {
  for (let i = 0; i < 3; i += 1) {
    const Round = MakeRound();
    console.log(`Question: ${car(Round)}`);
    const answer = readlineSync.question('Yor answer: ');
    if (cdr(Round) === answer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${cdr(Round)}'.\nLet's try again, ${Name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Name}!`);
};
