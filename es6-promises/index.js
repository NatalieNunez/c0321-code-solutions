const takeAChance = require('./take-a-chance');
const promise1 = takeAChance('Nat');
promise1.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
