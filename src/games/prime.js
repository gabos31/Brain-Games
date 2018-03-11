import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Is this number prime?';
  const makeRound = () => {
    const x = makeRandom(2, 100);
    const isPrime = (i) => {
      if (i > x / 2) return true;
      if (x % i === 0) return false;
      return isPrime(i + 1);
    };
    return cons(x, (isPrime(2)) ? 'yes' : 'no');
  };
  gameEngine(cons(makeRound, task));
};
