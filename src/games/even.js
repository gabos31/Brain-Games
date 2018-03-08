import chalk from 'chalk';
import { cons } from 'hexlet-pairs';
import GameEngine from '..';

export default () => {
  const Task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
  const MakeRound = () => {
    const Question = Math.floor(Math.random() * 100);
    const Answer = (Question % 2 === 0) ? 'yes' : 'no';
    return cons(Question, Answer);
  };
  GameEngine(cons(MakeRound, Task));
};
