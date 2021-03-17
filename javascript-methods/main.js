var x = 4;
var y = 8;
var z = 24;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['Flash', 'SpiderMan', 'Wonder Woman', 'Thor'];

var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  { title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne' },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K. Rowling' },
  { title: 'Oh The Places You\'ll Go', author: 'Dr. Suess' }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Natalie Nunez';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
