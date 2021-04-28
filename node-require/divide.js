function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

if (process.argv[3] === 'over') {
  console.log(`return: ${divide(process.argv[2], process.argv[4])}`);
}

module.exports.divide = divide;
