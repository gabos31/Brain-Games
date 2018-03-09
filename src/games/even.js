import chalk from 'chalk';
import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
  const makeRound = () => {
    const question = Math.floor(Math.random() * 100);
    const result = (question % 2 === 0) ? 'yes' : 'no';
    return cons(question, result);
  };
  gameEngine(cons(makeRound, task));
};
