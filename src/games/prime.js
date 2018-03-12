import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Is this number prime?';
  const makeRound = () => {
    const question = makeRandom(2, 100);
    const isPrime = (x) => {
      const hasDivisor = (i) => {
        if (i > x / 2) return false;
        if (x % i === 0) return true;
        return hasDivisor(i + 1);
      };
      if (!hasDivisor(2)) return true;
      return false;
    };
    return cons(question, (isPrime(question)) ? 'yes' : 'no');
  };
  gameEngine(cons(makeRound, task));
};
