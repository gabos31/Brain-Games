import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import makeRandom from '../functions';

export default () => {
  const task = 'What number is missing in this progression?';
  const makeRound = () => {
    const start = makeRandom(1, 9);
    const step = makeRandom(2, 5);
    const windowPos = makeRandom(0, 9);
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
