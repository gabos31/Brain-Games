import readlineSync from 'readline-sync';
import chalk from 'chalk';

const welc = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
const name = '\nMay I have your name? ';

export const brain = () => {
  console.log(welc);
  const username = readlineSync.question(name);
  const hello = `Hello, ${username}!\n`;
  console.log(hello);
};

export const even = () => {
  const task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
  console.log(welc);
  console.log(task);
  const username = readlineSync.question(name);
  const hello = `Hello, ${username}!\n`;
  console.log(hello);
  for (let i = 0; i < 3; i += 1) {
    const n = Math.floor(Math.random() * 100);
    const que = `Question: ${n}`;
    console.log(que);
    const answer = readlineSync.question('Yor answer: ');
    const text = `\nLet's try again, ${username}!`;
    if ((n % 2 === 0 && answer === 'yes') || (n % 2 === 1 && answer === 'no')) console.log('Correct!');
    else if (answer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.${text}`);
      return;
    } else if (answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.${text}`);
      return;
    } else {
      if (n % 2 === 0) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.${text}`);
        return;
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.${text}`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
