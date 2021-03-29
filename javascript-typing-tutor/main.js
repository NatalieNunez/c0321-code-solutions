var $phrase = document.querySelector('.phrase');
var $character = document.querySelectorAll('span');

function handleKeyDown(event) {
  // console.log('key down!');
  // console.log('event.key', event.key);
  for (var i = 0; i < $character.length; i++) {
    if ($character[i].textContent === event.key) {
      $character[i].setAttribute('class', 'true');
    } else {
      $character[i].setAttribute('class', 'false');
    }
    $character[i + 1].setAttribute('class', 'start');
  }
}

$phrase.addEventListener('keydown', handleKeyDown);

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
