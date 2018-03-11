const makeRandom = (x, y) => Math.floor(Math.random() * y) + x;

export const isBalance = (lastDigit, firstDigit) => {
  if (lastDigit === firstDigit + 1 || lastDigit === firstDigit) return true;
  return false;
};

export default makeRandom;
