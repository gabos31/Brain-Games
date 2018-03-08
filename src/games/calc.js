import { cons } from 'hexlet-pairs';
import * as index from '..';

export default () => {
  const Task = 'What is the result of the expression?';
  index.Greetings(Task);
  const MakeRound = () => {
    const Left = Math.floor(Math.random() * 30);
    const Right = Math.floor(Math.random() * 30);
    let i = '';
    let r = 0;
    if (Left % 2 === 0) {
      i = '+';
      r = Left + Right;
    } else if (Left > Right) {
      i = '-';
      r = Left - Right;
    } else if (Left < Right) {
      i = '*';
      r = Left * Right;
    }
    return cons(`${Left} ${i} ${Right}`, String(r));
  };
  index.GameEngine(MakeRound);
};

