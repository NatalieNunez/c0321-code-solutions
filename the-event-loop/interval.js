let count = 3;

var intervalID = setInterval(() => {
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
    return;
  }
  console.log(count);
  count--;
}, 1000);
