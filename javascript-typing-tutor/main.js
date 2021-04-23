var $phrase = document.getElementById('phrase-string');
var string = 'whatever you are, be a good one.';
var phraseArray = string.split('');
// console.log('phrase array:', phraseArray);

function appendPhrase(string) {
  for (var i = 0; i < phraseArray.length; i++) {
    var charSpan = document.createElement('span');
    charSpan.textContent = phraseArray[i];
    $phrase.append(charSpan);
  }
}

appendPhrase(string);

var $spans = document.querySelectorAll('span');
// console.log('$spans:', $spans);

var currentChar = $phrase.firstElementChild;
currentChar.classList.add('current');
// console.log('current char:', currentChar);
var spanArray = Array.from($spans);
var currentIndex = spanArray.indexOf(currentChar);
// console.log('current index:', currentIndex);

function handleKeyDown(event) {
  if (event.key === phraseArray[currentIndex]) {
    $spans[currentIndex].classList.add('green');
    $spans[currentIndex].classList.remove('red', 'current');
    currentIndex++;
    $spans[currentIndex].classList.add('current');
  } else {
    $spans[currentIndex].classList.add('red');
  }
}

window.addEventListener('keydown', handleKeyDown);

// select parent div with class phrase to put an event listener on it
// for each character, check if the user input is the same as the text content for that span
//   + if its equal, style it as correct
//   + if its not equal style it as incorrect
// find length of characters
// store number of how many are correct
// divide length by number correct to get score
// Send a message to user asking if they want to play again (modal?)
//   + if yes, start over
//   + if no, send a message, have a nice day!
// if character is in focus, class = set
// if character textContent === event.key class = true
// if character textContent !== event.key class = false
// only check one span at a time
