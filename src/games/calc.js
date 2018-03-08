import { cons } from 'hexlet-pairs';
import GameEngine from '..';

export default () => {
  const Task = 'What is the result of the expression?';
  const MakeRound = () => {
    const Left = Math.floor(Math.random() * 30);
    const Right = Math.floor(Math.random() * 30);
    const Centr = Math.floor(Math.random() * 3) + 1;
    let r = 0;
    let i = '';
    switch (Centr) {
      case 1:
        r = Left + Right;
        i = '+';
        break;
      case 2:
        r = Left - Right;
        i = '-';
        break;
      default:
        i = '*';
        r = Left * Right;
        break;
    }
    return cons(`${Left} ${i} ${Right}`, String(r));
  };
  GameEngine(cons(MakeRound, Task));
};
