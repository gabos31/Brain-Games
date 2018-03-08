import chalk from 'chalk';
import { cons } from 'hexlet-pairs';
import * as index from '..';

export default () => {
  const Task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
  index.Greetings(Task);
  const MakeRound = () => {
    const Question = Math.floor(Math.random() * 100);
    const Answer = (Question % 2 === 0) ? 'yes' : 'no';
    return cons(Question, Answer);
  };
  index.GameEngine(MakeRound);
};
