import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(makeRandom(0, 5000));
    const isBalance = (x, y) => {
      if (x === y + 1 || x === y) return true;
      return false;
    };
    const makeAnswer = (arr) => {
      arr.sort((a, b) => ((a > b) ? 1 : -1));
      const x = Number(arr[arr.length - 1]);
      const y = Number(arr[0]);
      if (isBalance(x, y) || arr.length === 1) return arr.join('');
      arr.splice(arr.length - 1, 1, String(x - 1));
      arr.splice(0, 1, String(y + 1));
      return makeAnswer(arr);
    };
    return cons(question, makeAnswer(question.split('')));
  };
  gameEngine(cons(makeRound, task));
};
