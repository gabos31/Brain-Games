import chalk from 'chalk';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = `Is ${chalk.bold('this')} number prime?`;
  const makeRound = () => {
    const x = Math.floor(Math.random() * 101) + 2;
    const makeResult = (i) => {
      if (i > x / 2) return 'yes';
      if (x % i === 0) return 'no';
      return makeResult(i + 1);
    };
    return cons(x, makeResult(2));
  };
  gameEngine(cons(makeRound, task));
};
