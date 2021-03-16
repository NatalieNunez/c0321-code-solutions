function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds Result:', convertMinutesToSeconds(10));

function greet(name) {
  return 'Hello there, ' + name;
}

console.log('greet Result:', greet('General Kenobi'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea Result:', getArea(15, 3));

function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Natalie', lastName: 'Nunez' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(['strawberries', 'mangos', 'almonds', 'bananas']));
