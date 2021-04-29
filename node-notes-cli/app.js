const fs = require('fs');
const jsonObj = require('./data.json');
const command = process.argv[2];
const input2 = process.argv[3];
const input3 = process.argv[4];

function crudNotes() {
  if (command === 'read') {
    let allNotes = '';
    for (const key in jsonObj.notes) {
      allNotes += key + ': ' + jsonObj.notes[key] + '\n';
    }
    console.log(allNotes);
  } else if (command === 'create') {
    jsonObj.notes[jsonObj.nextId] = input2;
    jsonObj.nextId = jsonObj.nextId + 1;
    const newNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('data.json', newNote, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  } else if (command === 'update') {
    jsonObj.notes[input2] = input3;
    const updateNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('data.json', updateNote, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  } else if (command === 'delete') {
    delete jsonObj.notes[input2];
    const deleteNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('data.json', deleteNote, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  } else {
    console.log('error: invalid input');
  }
}

crudNotes();
