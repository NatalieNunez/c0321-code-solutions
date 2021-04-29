const fs = require('fs');
const originalFile = process.argv[2];
const newFile = process.argv[3];

fs.readFile(`${originalFile}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    fs.writeFile(`${newFile}`, data, err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
});
