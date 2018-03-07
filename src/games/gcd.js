import * as index from '..';

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  index.brain(task);
  let a = 0;
  const que = () => {
    let f = '';
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    f = `${x} ${y}`;
    let n = 0;
    let m = 0;
    if (x < y) {
      n = x;
      m = y;
    } else {
      n = y;
      m = x;
    }
    for (let i = n; i > 0; i -= 1) {
      if (n % i === 0 && m % i === 0) {
        a = i;
        break;
      }
    }
    return f;
  };
  const ans = () => String(a);
  index.game(que, ans);
};
