var books = [
  {
    isbn: '1233',
    title: 'Clifford',
    author: 'Scott'
  },
  {
    isbn: '1264',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    isbn: '2661',
    title: 'Cat in the Hat',
    author: 'Dr. Suess'
  }
];

console.log('books array:', books);
console.log('books array typeof:', typeof books);

var jsonStr = JSON.stringify(books);
console.log('jsonStr:', jsonStr);
console.log('jsonStr typeof:', typeof jsonStr);

var student = '{ "id": 222, "name": "nat" }';
console.log('String:', student);
console.log('String typeof:', typeof student);

var obj = JSON.parse(student);
console.log('Object:', obj);
console.log('Object typeof:', typeof obj);
