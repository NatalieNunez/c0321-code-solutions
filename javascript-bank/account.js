/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}
var account = new Account();

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    account.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    account.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (account.transactions.length === 0) {
    return 0;
  }
  var depositValue = 0;
  var withdrawalValue = 0;
  for (var i = 0; i < account.transactions.length; i++) {
    if (account.transactions[i].type === 'withdrawal') {
      withdrawalValue += account.transactions[i].amount;
    }
    if (account.transactions[i].type === 'deposit') {
      depositValue += account.transactions[i].amount;
    }
  }
  var totalBalance = depositValue - withdrawalValue;
  return totalBalance;
};
