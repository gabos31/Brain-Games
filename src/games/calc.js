import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = 'What is the result of the expression?';
  const makeRound = () => {
    const left = Math.floor(Math.random() * 30);
    const right = Math.floor(Math.random() * 30);
    const middle = Math.floor(Math.random() * 3) + 1;
    let result = 0;
    let i = '';
    switch (middle) {
      case 1:
        result = left + right;
        i = '+';
        break;
      case 2:
        result = left - right;
        i = '-';
        break;
      default:
        i = '*';
        result = left * right;
        break;
    }
    return cons(`${left} ${i} ${right}`, String(result));
  };
  gameEngine(cons(makeRound, task));
};
