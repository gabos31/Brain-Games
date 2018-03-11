import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import makeRandom, { isBalance } from '../functions';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(makeRandom(0, 5000));
    const makeAnswer = (arr) => {
      arr.sort((a, b) => a - b);
      const firstDigit = arr[0];
      const lastDigit = arr[arr.length - 1];
      if (isBalance(lastDigit, firstDigit) || arr.length === 1) return arr.join('');
      arr.splice(arr.length - 1, 1, lastDigit - 1);
      arr.splice(0, 1, firstDigit + 1);
      return makeAnswer(arr);
    };
    return cons(question, makeAnswer(question.split('').map(Number)));
  };
  gameEngine(cons(makeRound, task));
};
