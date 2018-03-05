import readlineSync from 'readline-sync';

export default () => {
  const text1 = 'Welcome to the Brain Games!';
  console.log(text1);
  const text = '\nMay I have your name? ';
  const uname = readlineSync.question(text);
  console.log(`Hello, ${uname}!`);
};
