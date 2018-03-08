import { cons } from 'hexlet-pairs';
import * as index from '..';

export default () => {
  const Task = 'Find the greatest common divisor of given numbers.';
  index.Greetings(Task);
  const MakeRound = () => {
    const Left = Math.floor(Math.random() * 100);
    const Right = Math.floor(Math.random() * 100);
    const n = (Left < Right) ? Left : Right;
    const m = (Left < Right) ? Right : Left;
    let i = n;
    for (; i > 0; i -= 1) {
      if (m % i === 0 && n % i === 0) break;
    }
    return cons(`${Left} ${Right}`, String(i));
  };
  index.GameEngine(MakeRound);
};
