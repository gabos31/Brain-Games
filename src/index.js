import readlineSync from 'readline-sync';

export default () => {
  const text = '\nMay I have your name? ';
  const uname = readlineSync.question(text);
  console.log(`Hello, ${uname}!`);
};
