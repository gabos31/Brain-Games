import { cons } from 'hexlet-pairs';
import gameEngine, { makeRandom } from '..';

export default () => {
  const task = 'Balance the given number.';
  const makeRound = () => {
    const question = String(makeRandom(0, 5000));
    const makeAnswer = (str) => {
      const asstdStr = str.split('').sort((a, b) => a - b).join('');
      const firstDigit = Number(asstdStr[0]);
      const lastDigit = Number(asstdStr[asstdStr.length - 1]);
      const middleDigits = asstdStr.substring(1, asstdStr.length - 1);
      if (lastDigit - firstDigit <= 1 || asstdStr.length === 1) return asstdStr;
      const balancingStep = `${String(firstDigit + 1)}${middleDigits}${String(lastDigit - 1)}`;
      return makeAnswer(balancingStep);
    };
    return cons(question, makeAnswer(question));
  };
  gameEngine(cons(makeRound, task));
};
