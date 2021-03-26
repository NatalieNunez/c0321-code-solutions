var $phrase = document.querySelector('.phrase');
// var $character = document.querySelectorAll('span');

function handleKeyDown(event) {
  // console.log('key down!');
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
