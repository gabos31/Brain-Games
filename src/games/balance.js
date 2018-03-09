import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(Math.floor(Math.random() * 5000));
    const lenQue = question.length;
    const chek = (arr) => {
      if (Number(arr[lenQue - 1]) === Number(arr[0]) + 1 ||
      Number(arr[lenQue - 1]) === Number(arr[0]) || lenQue === 1) return true;
      return false;
    };
    const bal = (queToArray) => {
      queToArray.sort((a, b) => ((a > b) ? 1 : -1));
      if (chek(queToArray)) return queToArray.join('');
      queToArray.splice(lenQue - 1, 1, String(Number(queToArray[lenQue - 1]) - 1));
      queToArray.splice(0, 1, String(Number(queToArray[0]) + 1));
      return bal(queToArray);
    };
    return cons(question, bal(question.split('')));
  };
  gameEngine(cons(makeRound, task));
};
