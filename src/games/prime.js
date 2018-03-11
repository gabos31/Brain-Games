import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Is this number prime?';
  const makeRound = () => {
    const x = makeRandom(2, 100);
    const makeResult = (i) => {
      if (i > x / 2) return true;
      if (x % i === 0) return false;
      return makeResult(i + 1);
    };
    return cons(x, (makeResult(2)) ? 'yes' : 'no');
  };
  gameEngine(cons(makeRound, task));
};
