import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import makeRandom from '../functions';

const findGCD = (x, y) => {
  if (y === 0) return x;
  return findGCD(y, x % y);
};
export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const makeRound = () => {
    const x = makeRandom(0, 100);
    const y = makeRandom(0, 100);
    return cons(`${x} ${y}`, String(findGCD(x, y)));
  };
  gameEngine(cons(makeRound, task));
};
