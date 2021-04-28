const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  console.log(`result: ${add.add(process.argv[2], process.argv[4])}`);
}

if (process.argv[3] === 'minus') {
  console.log(`return: ${subtract.subtract(process.argv[2], process.argv[4])}`);
}

if (process.argv[3] === 'times') {
  console.log(`return: ${multiply.multiply(process.argv[2], process.argv[4])}`);
}

if (process.argv[3] === 'over') {
  console.log(`return: ${divide.divide(process.argv[2], process.argv[4])}`);
}
