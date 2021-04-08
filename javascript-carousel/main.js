var $images = document.querySelectorAll('img');

var $previousArrow = document.getElementById('previousImg');

var $nextArrow = document.getElementById('nextImg');

// var $progressDots = document.querySelectorAll('i');

var start = null;
var currentIndex = null;

NodeList.prototype.indexOf = Array.prototype.indexOf;

for (var i = 0; i < $images.length; i++) {
  if ($images[i].classList.length === 0) {
    start = $images[i];
    currentIndex = $images.indexOf(start);
  }
}

function handleClick(event) {
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].classList.length === 0) {
      start = $images[i];
      currentIndex = $images.indexOf(start);
    }
  }
  // console.log('start:', start);
  // console.log('index of start:', currentIndex);

  if (event.target === $previousArrow) {
    if (currentIndex === 0) {
      $images[currentIndex].classList.add('hidden');
      $images[$images.length - 1].classList.remove('hidden');
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex - 1].classList.remove('hidden');
    }
  }
  if (event.target === $nextArrow) {
    if (currentIndex === $images.length - 1) {
      $images[currentIndex].classList.add('hidden');
      $images[0].classList.remove('hidden');
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex + 1].classList.remove('hidden');
    }
  }
}

$previousArrow.addEventListener('click', handleClick);
$nextArrow.addEventListener('click', handleClick);

setInterval(function () {
  // console.log('3 seconds'); // works
  // console.log('start:', start); // works
  // console.log('current index:', currentIndex); // works
  for (var i = start; i < $images.length; i++) {
    if ($images[currentIndex] === $images.length - 1) {
      $images[currentIndex].classList.add('hidden');
      $images[0].classList.remove('hidden');
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex + 1].classList.remove('hidden');
    }
  }
}, 3 * 1000);
