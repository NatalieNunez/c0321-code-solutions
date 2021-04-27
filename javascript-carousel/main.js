var $images = document.querySelectorAll('img');
var $previousArrow = document.getElementById('previousImg');
var $nextArrow = document.getElementById('nextImg');
var $dots = document.querySelectorAll('i');
var $progressDots = document.querySelector('.progress-dots');

var start = null; // rethink using
var currentIndex = null; // rethink using

// NodeList.prototype.indexOf = Array.prototype.indexOf; // dont use this

// this is checking which image has no hidden class and setting to start and currentIndex
// for (var i = 0; i < $images.length; i++) {
//   if ($images[i].classList.length === 0) {
//     start = $images[i];
//     currentIndex = $images.indexOf(start);
//   }
// }

setInterval(function start() {
  // debugger;
  // var i = 0;
  // while ($images[i].classList.value === '') {
  //   if ($images[i] === $images[$images.length - 1]) {
  //     $images[i].classList.add('hidden');
  //     $images[0].classList.remove('hidden');
  //     $dots[i].className = 'far fa-circle';
  //     $dots[0].className = 'fas fa-circle';
  //     i = -1;
  //   } else {
  //     $images[i].classList.add('hidden');
  //     $images[i + 1].classList.remove('hidden');
  //     $dots[i].className = 'far fa-circle';
  //     $dots[i + 1].className = 'fas fa-circle';
  //   }
  //   i++;
  // }
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
}, 3000);

function handleClickArrows(event) {
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
      currentIndex = $images.length - 1;
    } else {
      $images[currentIndex].classList.add('hidden');
      $images[currentIndex - 1].classList.remove('hidden');
      $dots[currentIndex].className = 'far fa-circle';
      $dots[currentIndex - 1].className = 'fas fa-circle';
      currentIndex = currentIndex - 1;
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
  for (var i = 0; i < $progressDots.length; i++) {
    if (event.target === $progressDots[i]) {
      $images[i].classList.remove('hidden');
      $dots[i].className = 'far fa-circle';

    }
  }
  // $images[currentIndex].classList.add('hidden');
  // $dots[currentIndex].className = 'far fa-circle';
  // currentIndex = $dots.indexOf(event.target);
  // start = $images[currentIndex];
  // start.classList.remove('hidden');
  // event.target.className = 'fas fa-circle';
}

$progressDots.addEventListener('click', handleClickDots);
