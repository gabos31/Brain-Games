import { cons } from 'hexlet-pairs';
import GameEngine from '..';

const FindGCD = (x, y) => {
  const n = (x < y) ? x : y;
  const m = (x < y) ? y : x;
  let i = n;
  for (; i > 0; i -= 1) {
    if (m % i === 0 && n % i === 0) break;
  }
  return i;
};
export default () => {
  const Task = 'Find the greatest common divisor of given numbers.';
  const MakeRound = () => {
    const Left = Math.floor(Math.random() * 100);
    const Right = Math.floor(Math.random() * 100);
    return cons(`${Left} ${Right}`, String(FindGCD(Left, Right)));
  };
  GameEngine(cons(MakeRound, Task));
};
