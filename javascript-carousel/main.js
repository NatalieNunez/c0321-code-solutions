const $images = document.querySelectorAll('img');
const $previousArrow = document.getElementById('previousImg');
const $nextArrow = document.getElementById('nextImg');
const $dots = document.querySelectorAll('i');
const $progressDots = document.querySelector('.progress-dots');

let currentIndex;

function updateCarousel(index) {
  if (index === $images.length - 1) {
    $images[index].classList.add('hidden');
    $images[0].classList.remove('hidden');
    $dots[index].className = 'far fa-circle';
    $dots[0].className = 'fas fa-circle';
  } else {
    $images[index].classList.add('hidden');
    $images[index + 1].classList.remove('hidden');
    $dots[index].className = 'far fa-circle';
    $dots[index + 1].className = 'fas fa-circle';
  }
}

setInterval(() => {
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].className === '') {
      currentIndex = i;
    }
  }
  updateCarousel(currentIndex);
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
        $dots[currentIndex].className = 'far fa-circle';
        $dots[x].className = 'fas fa-circle';
        $images[currentIndex].classList.add('hidden');
        $images[x].classList.remove('hidden');
      }
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

$previousArrow.addEventListener('click', handleClick);
$nextArrow.addEventListener('click', handleClick);
$progressDots.addEventListener('click', handleClick);
