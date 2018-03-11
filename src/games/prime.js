import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import makeRandom from '../functions';

export default () => {
  const task = 'Is this number prime?';
  const makeRound = () => {
    const question = makeRandom(2, 100);
    const isPrime = (x) => {
      const hasDevisor = (i) => {
        if (i > x / 2) return false;
        if (x % i === 0) return true;
        return hasDevisor(i + 1);
      };
      if (!hasDevisor(2)) return true;
      return false;
    };
    return cons(question, (isPrime(question)) ? 'yes' : 'no');
  };
  gameEngine(cons(makeRound, task));
};
