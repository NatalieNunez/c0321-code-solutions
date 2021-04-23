var $currentLetter = document.querySelector('.current');
// var $phrase = document.getElementById('phrase-string');
var $spans = document.querySelectorAll('span');
// console.log('$spans:', $spans);
// console.log('$currentLetter', $currentLetter);
// console.log('$phrase', $phrase);

var spanArray = Array.from($spans);
// console.log('spanArray:', spanArray);
var currentIndex = spanArray.indexOf($currentLetter);
// console.log('currentIndex', currentIndex);

function handleKeyDown(event) {
  var currentChar = spanArray[currentIndex];
  if (event.key === currentChar.innerText) {
    // console.log('true');
    // // console.log('event.key:', event.key);
    // console.log('currentChar before:', currentChar);
    currentChar.classList.add('green');
    currentChar.classList.remove('red');
    currentChar.classList.remove('current');
    currentIndex++;
    currentChar = spanArray[currentIndex];
    currentChar.classList.add('current');
    // console.log('currentChar after:', currentChar);
  } else {
    // console.log('false');
    // console.log('event.key:', event.key);
    // console.log('currentChar:', currentChar.innerText);
    currentChar.classList.add('red');
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
