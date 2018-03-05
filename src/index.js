import readlineSync from 'readline-sync';
import chalk from 'chalk';

export default () => {
  const text1 = `${chalk.magenta('Welcome')} to the ${chalk.bold('Brain')} Games!`;
  console.log(text1);
  const text = '\nMay I have your name? ';
  const uname = readlineSync.question(text);
  console.log(`Hello, ${uname}!`);
};
