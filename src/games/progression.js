import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = 'What number is missing in this progression?';
  const makeRound = () => {
    const start = Math.floor(Math.random() * 9) + 1;
    const step = Math.floor(Math.random() * 5) + 2;
    const windowPos = Math.floor(Math.random() * 9) + 0;
    const arrQuest = [];
    const makeQuest = (i, n) => {
      if (n === 10) return arrQuest;
      arrQuest.push(i);
      return makeQuest(i + step, n + 1);
    };
    makeQuest(start, 0);
    const answer = arrQuest[windowPos];
    arrQuest.splice(windowPos, 1, '..');
    return cons(arrQuest.join(' '), String(answer));
  };
  gameEngine(cons(makeRound, task));
};
