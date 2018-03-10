import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(makeRandom(0, 5000));
    const checkingBalance = (arr) => {
      if (Number(arr[arr.length - 1]) === Number(arr[0]) + 1 ||
      Number(arr[arr.length - 1]) === Number(arr[0]) || arr.length === 1) return true;
      return false;
    };
    const balancing = (arr) => {
      arr.sort((a, b) => ((a > b) ? 1 : -1));
      if (checkingBalance(arr)) return arr.join('');
      arr.splice(arr.length - 1, 1, String(Number(arr[arr.length - 1]) - 1));
      arr.splice(0, 1, String(Number(arr[0]) + 1));
      return balancing(arr);
    };
    return cons(question, balancing(question.split('')));
  };
  gameEngine(cons(makeRound, task));
};
