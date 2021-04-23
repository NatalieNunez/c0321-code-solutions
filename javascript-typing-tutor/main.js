var $currentLetter = document.querySelector('.current');
var $phrase = document.getElementById('phrase-string');
var $spans = document.querySelectorAll('span');
// console.log($spans);
// console.log($currentLetter);
// console.log($phrase);

var spanArray = Array.from($spans);
var currentIndex = spanArray.indexOf($currentLetter);
// console.log(currentIndex);

function handleKeyDown(event) {
  // debugger;
  // console.log(event.key);
  for (var i = currentIndex; i < $spans.length; i++) {
    if (event.key === $spans[i].textContent) {
      $spans[i].classList.add('green');
      $spans[i].classList.remove('current');
      $spans[i + 1].classList.add('current');
    } else {
      $spans[i].classList.add('red');
    }
  }
}

$phrase.addEventListener('keydown', handleKeyDown);
// var $phrase = document.querySelector('.phrase');
// var $character = document.querySelectorAll('span');
// // console.log($phrase);

// function getCharacters(phrase) {
//   var charArray = [];
//   for (var i = 0; i < phrase.length; i++) {
//     charArray.push(phrase[i].textContent);
//   }
//   return charArray;
// }

// var charactersArr = getCharacters($character);

// function handleKeyDown(event) {
//   for (var i = 0; i < charactersArr.length; i++) {
//     if (event.key === charactersArr[i]) {
//       $character[i].setAttribute('class', 'true');
//     } else {
//       $character[i].setAttribute('class', 'false');
//       i--;
//     }
//   }
// console.log('key down!');
// console.log('event.key', event.key);
// for (var i = 0; i < $character.length; i++) {
// console.log(event.key);
// if ($character[i].textContent === event.key) {
//   $character[i].setAttribute('class', 'true');
// } else {
//   $character[i].setAttribute('class', 'false');
// }
// $character[i + 1].setAttribute('class', 'start');
// }
// }

// $phrase.addEventListener('keydown', handleKeyDown);

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
