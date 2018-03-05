import readlineSync from 'readline-sync';

export default () => {
  const uname = readlineSync.question(`\ngMay I have your name? `);
  console.log(`Hello, ${uname}!`);
};
