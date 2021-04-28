function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

if (process.argv[3] === 'minus') {
  console.log(`return: ${subtract(process.argv[2], process.argv[4])}`);
}

module.exports.subtract = subtract;
