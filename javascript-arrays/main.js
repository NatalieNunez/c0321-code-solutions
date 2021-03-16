var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

var str = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log(str);

colors[2] = 'green';

var str2 = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';

console.log(str2);
console.log(colors);

var students = ['Inosuke', 'Tanjiro', 'Zenitsu', 'Giyu'];
var numberOfStudents = students.length;

var str3 = 'Theres are ' + numberOfStudents + ' students in the class';

console.log(str3);

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
var str4 = 'The last student in the array is ' + lastStudent + '.';

console.log(str4);
console.log(students);
