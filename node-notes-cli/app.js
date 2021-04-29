const fs = require('fs');
// const jsonObj = require('./data.json');
// const userInput = process.argv[2];

// console.log(typeof JSON.stringify(jsonObj.notes));
// console.log(typeof jsonObj.notes);

// function read() {
//   let allNotes = '';
//   for (const key in jsonObj.notes) {
//     // console.log(`${key}: ${jsonObj.notes[key]}`);
//     // allNotes += `${key}: ${jsonObj.notes[key]}`;
//     allNotes += key + ': ' + jsonObj.notes[key] + '\n';
//   }
//   // console.log(allNotes);
//   return allNotes;
// }

// if (userInput === 'read') {
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(data);
  }
});
// }

// user can read their notes
//   create an fs variable by requiring fs
//   we'll need access to the data.json file so exporting and importing it
//     - when requiring json file, its parsed into JS objects
//   create a variable for user input -> process.argv[2]
//   use readFile method if user input is read
//    - parameters: path- data.json | options: utf8 | callback(err, data)
//      * data parameter will need to be notes object, figure out how to access it
//      * may need to stringify it since its currently parsed
//    - console log the data to terminal

// user can add a note

//   conditionals
//     - if userInput === 'read'
//     - === 'create'
//     - === 'update'
//     - === 'delete'
