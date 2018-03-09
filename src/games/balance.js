import { cons } from 'hexlet-pairs';
import gameEngine from '..';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(Math.floor(Math.random() * 10000) + 100);
    const questToArray = question.split('');
    const comp = (a, b) => ((a > b) ? 1 : -1);
    questToArray.sort(comp);
    const lengthArr = questToArray.length;
    let i = lengthArr - 2;
    if ((Number(questToArray[lengthArr - 1]) === Number(questToArray[i])) &&
    (Number(questToArray[lengthArr - 1]) === Number(questToArray[i]) + 1) &&
    (Number(questToArray[lengthArr - 1]) === Number(questToArray[i]) - 1)) i -= 1;
    else i -= 2;
    while ((Number(questToArray[lengthArr - 1]) !== Number(questToArray[i])) &&
    (Number(questToArray[lengthArr - 1]) !== Number(questToArray[i]) + 1) &&
    (Number(questToArray[lengthArr - 1]) !== Number(questToArray[i]) - 1)) {
      for (; i >= 0; i -= 1) {
        questToArray[lengthArr - 1] = String(Number(questToArray[lengthArr - 1]) - 1);
        questToArray[i] = String(Number(questToArray[i]) + 1);
      }
      questToArray.sort(comp);
      i = 0;
    }
    return cons(question, questToArray.join(''));
  };
  gameEngine(cons(makeRound, task));
};
