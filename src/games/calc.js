export const task = 'What is the result of the expression?';
let f = '';
let a = 0;
export const n = (i) => {
  const x = Math.floor(Math.random() * 30);
  const y = Math.floor(Math.random() * 30);
  switch (i) {
    case 0:
      f = `${x} + ${y}`;
      a = x + y;
      return f;
    case 1:
      f = `${x} - ${y}`;
      a = x - y;
      return f;
    default:
      f = `${x} * ${y}`;
      a = x * y;
      return f;
  }
};
export const check = (i) => {
  switch (i) {
    case 0:
      return String(a);
    case 1:
      return String(a);
    default:
      return String(a);
  }
};

