const $images = document.querySelectorAll('img');
const $previousArrow = document.getElementById('previousImg');
const $nextArrow = document.getElementById('nextImg');
const $dots = document.querySelectorAll('i');
const $progressDots = document.querySelector('.progress-dots');

let currentIndex;
let updateIndex;

function updateCarousel(index) {
  for (let i = 0; i < $images.length; i++) {
    if ($images[i] === $images[index]) {
      $images[i].classList.remove('hidden');
      $dots[i].className = 'fas fa-circle';
    } else {
      $images[i].classList.add('hidden');
      $dots[i].className = 'far fa-circle';
    }
  }
}

setInterval(() => {
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].className === '') {
      currentIndex = i;
    }
  }
  if (currentIndex === $images.length - 1) {
    updateIndex = 0;
  } else {
    updateIndex = currentIndex + 1;
  }
  updateCarousel(updateIndex);
}, 3000);

function handleClick(event) {
  for (let i = 0; i < $images.length; i++) {
    if ($images[i].className === '') {
      currentIndex = i;
    }
  }

  if ($progressDots.contains(event.target)) {
    for (let x = 0; x < $dots.length; x++) {
      if (event.target === $dots[x]) {
        updateCarousel(x);
      }
    }
  }

  if (event.target === $previousArrow) {
    if (currentIndex === 0) {
      updateIndex = $images.length - 1;
    } else {
      updateIndex = currentIndex - 1;
    }
    updateCarousel(updateIndex);
  }

  if (event.target === $nextArrow) {
    if (currentIndex === $images.length - 1) {
      updateIndex = 0;
    } else {
      updateIndex = currentIndex + 1;
    }
    updateCarousel(updateIndex);
  }
}

$previousArrow.addEventListener('click', handleClick);
$nextArrow.addEventListener('click', handleClick);
$progressDots.addEventListener('click', handleClick);
