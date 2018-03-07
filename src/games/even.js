import chalk from 'chalk';

export const task = `Answer "yes" ${chalk.bold('if')} number even otherwise answer "no".`;
let f = 0;
export const n = () => {
  f = Math.floor(Math.random() * 100);
  return f;
};
export const check = () => {
  if (f % 2 === 0) return 'yes';
  return 'no';
};
