/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || !Number.isInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var depositValue = 0;
  var withdrawalValue = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      withdrawalValue += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'deposit') {
      depositValue += this.transactions[i].amount;
    }
  }
  var totalBalance = depositValue - withdrawalValue;
  return totalBalance;
};
