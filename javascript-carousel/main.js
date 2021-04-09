var $images = document.querySelectorAll('img');
var $previousArrow = document.getElementById('previousImg');
var $nextArrow = document.getElementById('nextImg');
var $dots = document.querySelectorAll('i');
var $progressDots = document.querySelector('.progress-dots');

var start = null;
var currentIndex = null;

NodeList.prototype.indexOf = Array.prototype.indexOf;

for (var i = 0; i < $images.length; i++) {
  if ($images[i].classList.length === 0) {
    start = $images[i];
    currentIndex = $images.indexOf(start);
  }
}

var timerId = setTimeout(setInterval(function start() {
  if (currentIndex === $images.length - 1) {
    $images[currentIndex].classList.add('hidden');
    $images[0].classList.remove('hidden');
    $dots[currentIndex].className = 'far fa-circle';
    $dots[0].className = 'fas fa-circle';
    currentIndex = 0;
  } else {
    $images[currentIndex].classList.add('hidden');
    $images[currentIndex + 1].classList.remove('hidden');
    $dots[currentIndex].className = 'far fa-circle';
    $dots[currentIndex + 1].className = 'fas fa-circle';
    currentIndex++;
  }
}, 3000), 3000);

function handleClickArrows(event) {
  clearTimeout(timerId);
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].classList.length === 0) {
      start = $images[i];
      currentIndex = $images.indexOf(start);
    }
  }

  if (event.target === $previousArrow) {
    if (currentIndex === 0) {
      $images[currentIndex].classList.add('hidden');
      $images[$images.length - 1].classList.remove('hidden');
      $dots[currentIndex].className = 'far fa-circle';
      $dots[$dots.length - 1].className = 'fas fa-circle';
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex - 1].classList.remove('hidden');
      $dots[currentIndex].className = 'far fa-circle';
      $dots[currentIndex - 1].className = 'fas fa-circle';
    }
  }
  if (event.target === $nextArrow) {
    if (currentIndex === $images.length - 1) {
      $images[currentIndex].classList.add('hidden');
      $images[0].classList.remove('hidden');
      $dots[currentIndex].className = 'far fa-circle';
      $dots[0].className = 'fas fa-circle';
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex + 1].classList.remove('hidden');
      $dots[currentIndex].className = 'far fa-circle';
      $dots[currentIndex + 1].className = 'fas fa-circle';
    }
  }
}

$previousArrow.addEventListener('click', handleClickArrows);
$nextArrow.addEventListener('click', handleClickArrows);

function handleClickDots(event) {
  clearTimeout(timerId);
  for (var i = 0; i < $dots.length; i++) {
    if ($dots[i] === event.target) {
      event.target.className = 'fas fa-circle';
      $images[i].classList.remove('hidden');
    } else {
      $dots[i].className = 'far fa-circle';
      $images[i].classList.add('hidden');
    }
  }
}

$progressDots.addEventListener('click', handleClickDots);
