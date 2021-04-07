var $countdown = document.querySelector('h1');
var counter = 4;
var timerId = setInterval(function () {
  $countdown.textContent = counter--;
  if (counter < 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}, 1000);
