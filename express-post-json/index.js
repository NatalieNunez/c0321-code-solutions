const express = require('express');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradeArr = [];
  for (const key in grades) {
    // const gradeArr = [];
    gradeArr.push(grades[key]);
  }
  res.json(gradeArr);
});

const jsonParser = express.json();

app.use(jsonParser);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).send(req.body);
  nextId++;
});
