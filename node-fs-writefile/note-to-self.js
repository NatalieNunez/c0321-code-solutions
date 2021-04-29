const fs = require('fs');
const userText = process.argv[2] + '\n';

fs.writeFile('note.txt', `${userText}`, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
