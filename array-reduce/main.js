const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((finalSum, currentNum) => {
  return finalSum + currentNum;
}, 0);

console.log('sum:', sum);

const product = numbers.reduce((finalProduct, currentNum) => {
  return finalProduct * currentNum;
}, 1);

console.log('product:', product);

const balance = account.reduce((finalBalance, currentNum) => {
  if (currentNum.type === 'deposit') {
    finalBalance += currentNum.amount;
  } else {
    finalBalance -= currentNum.amount;
  }
  return finalBalance;
}, 0);

console.log('balance:', balance);

const composit = traits.reduce((allTraits, currentVal) => {
  return Object.assign(allTraits, currentVal);
}, {});

console.log('composit:', composit);
