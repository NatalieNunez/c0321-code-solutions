const express = require('express');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// const nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArr = [];
  for (const key in grades) {
    gradeArr.push(grades[key]);
  }
  res.json(gradeArr);
});
