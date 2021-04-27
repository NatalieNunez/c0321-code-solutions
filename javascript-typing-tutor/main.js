var $phrase = document.getElementById('phrase-string');
var typingString = 'whatever you are, be a good one.';

function appendPhrase(string) {
  for (var i = 0; i < string.length; i++) {
    var charSpan = document.createElement('span');
    charSpan.textContent = string[i];
    $phrase.append(charSpan);
  }
}

appendPhrase(typingString);

var $spans = document.querySelectorAll('span');

var currentChar = $phrase.firstElementChild;
currentChar.classList.add('current');
var spanArray = Array.from($spans);
var currentIndex = spanArray.indexOf(currentChar);

function handleKeyDown(event) {
  if (event.key === typingString[currentIndex]) {
    if (currentIndex === typingString.length - 1) {
      $gameOver.classList.remove('hidden');
      $typingPage.classList.add('hidden');
      $spans[0].classList.add('current');
      $spans[0].classList.remove('green', 'red');
      for (var i = 1; i < $spans.length; i++) {
        $spans[i].className = '';
      }
      currentIndex = 0;
      return;
    }
    $spans[currentIndex].classList.add('green');
    $spans[currentIndex].classList.remove('red', 'current');
    currentIndex++;
    $spans[currentIndex].classList.add('current');
  } else {
    $spans[currentIndex].classList.add('red');
  }
}

window.addEventListener('keydown', handleKeyDown);

var $gameOver = document.querySelector('.game-over');
var $typingPage = document.querySelector('.typing');
var $container = document.querySelector('.container');
var $views = document.querySelectorAll('.view');

function clickButtons(event) {
  for (var i = 0; i < $views.length; i++) {
    if (event.target.dataset.view === $views[i].dataset.view) {
      $views[i].classList.remove('hidden');
    } else {
      $views[i].classList.add('hidden');
    }
  }
}

$container.addEventListener('click', clickButtons);
