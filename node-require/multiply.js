function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

if (process.argv[3] === 'times') {
  console.log(`return: ${multiply(process.argv[2], process.argv[4])}`);
}

module.exports.multiply = multiply;
