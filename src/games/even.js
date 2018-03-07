import chalk from 'chalk';
import * as index from '..';

export default () => {
  const task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
  index.brain(task);
  let f = 0;
  const que = () => {
    f = Math.floor(Math.random() * 100);
    return f;
  };
  const ans = () => {
    if (f % 2 === 0) return 'yes';
    return 'no';
  };
  index.game(que, ans);
};
