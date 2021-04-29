const fs = require('fs');
const randNumber = Math.random().toString() + '\n';

fs.writeFile('random.txt', `${randNumber}`, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
