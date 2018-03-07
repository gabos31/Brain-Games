import readlineSync from 'readline-sync';
import chalk from 'chalk';
import * as even from './games/even';
import * as calc from './games/calc';

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

export const game = (name) => {
  const func = eval(name);
  brain(func.task);
  let answer = '';
  let x = '';
  for (let i = 0; i < 3; i += 1) {
    x = func.n(i);
    const quest = `Question: ${x}`;
    console.log(quest);
    answer = readlineSync.question('Yor answer: ');
    if (func.check() === answer) console.log('Correct!');
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${func.check()}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
