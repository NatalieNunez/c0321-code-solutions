// unable to finish, total and average are not working correctly
function getRangeReport(start, end) {
  var total = 0;
  var odds = [];
  var evens = [];
  var average = 0;
  var rangeArr = [];

  var rangeObject = {
    total: total,
    odds: odds,
    evens: evens,
    rangeArr: rangeArr,
    average: average
  };

  while (start <= end) {
    rangeArr.push(start);
    start++;
  }

  for (var i = 0; i < rangeArr.length; i++) {
    if (rangeArr[i] % 2 === 0) {
      evens.push(rangeArr[i]);
    } else {
      odds.push(rangeArr[i]);
    }
    total += rangeArr[i];
  }

  average = total / rangeArr.length;

  return rangeObject;
}

getRangeReport(0, 5);
