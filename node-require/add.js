function add(num1, num2) {
  return Number(num1) + Number(num2);
}

if (process.argv[3] === 'plus') {
  console.log(`result: ${add(process.argv[2], process.argv[4])}`);
}

module.exports.add = add;
