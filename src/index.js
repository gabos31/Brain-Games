import readlineSync from 'readline-sync';
import chalk from 'chalk';

let username = '';
export const brain = (task) => {
  const welc = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
  const name = '\nMay I have your name? ';
  console.log(welc);
  console.log(task);
  username = readlineSync.question(name);
  const hello = `Hello, ${username}!\n`;
  console.log(hello);
};

export const game = (que, ans) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${que(i)}`);
    const answer = readlineSync.question('Yor answer: ');
    if (ans(i) === answer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans(i)}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
