import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = 'What number is missing in this progression?';
  const makeRound = () => {
    const start = Math.floor(Math.random() * 9) + 1;
    const step = Math.floor(Math.random() * 5) + 2;
    const windowPos = Math.floor(Math.random() * 9) + 0;
    const arrQuest = [];
    for (let i = start, n = 0; n < 10; i += step, n += 1) {
      arrQuest.push(i);
    }
    const answer = arrQuest[windowPos];
    arrQuest.splice(windowPos, 1, '..');
    return cons(arrQuest.join(' '), String(answer));
  };
  gameEngine(cons(makeRound, task));
};
