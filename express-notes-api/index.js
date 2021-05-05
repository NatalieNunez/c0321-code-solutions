const express = require('express');
const jsonObj = require('./data.json');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in jsonObj.notes) {
    notesArray.push(jsonObj.notes[key]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id !== parseInt(id, 10) || !id > 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!jsonObj.notes[id]) {
    res.status(404).json({ error: `cannot find note with the id ${id}` });
  } else {
    res.status(200).json(jsonObj.notes[id]);
  }
});
