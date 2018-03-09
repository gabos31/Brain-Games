import { cons } from 'hexlet-pairs';
import gameEngine from '..';

const findGCD = (x, y) => {
  if (y === 0) return x;
  return findGCD(y, x % y);
};
export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const makeRound = () => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return cons(`${x} ${y}`, String(findGCD(x, y)));
  };
  gameEngine(cons(makeRound, task));
};
