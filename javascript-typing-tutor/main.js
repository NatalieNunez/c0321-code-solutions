var $phrase = document.getElementById('phrase-string');
var string = 'whatever you are, be a good one.';
var phraseArray = string.split('');

function appendPhrase(string) {
  for (var i = 0; i < phraseArray.length; i++) {
    var charSpan = document.createElement('span');
    charSpan.textContent = phraseArray[i];
    $phrase.append(charSpan);
  }
}

appendPhrase(string);

var $spans = document.querySelectorAll('span');

var currentChar = $phrase.firstElementChild;
currentChar.classList.add('current');
var spanArray = Array.from($spans);
var currentIndex = spanArray.indexOf(currentChar);

function handleKeyDown(event) {
  if (event.key === phraseArray[currentIndex]) {
    if (currentIndex === phraseArray.length - 1) {
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
