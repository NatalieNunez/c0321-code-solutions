const express = require('express');
const jsonObj = require('./data.json');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

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

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    const id = jsonObj.nextId;
    jsonObj.notes[id] = req.body;
    jsonObj.notes[id].id = id;
    jsonObj.nextId++;
    const newNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('./data.json', newNote, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id !== parseInt(id, 10) || !id > 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!jsonObj.notes[req.params.id]) {
    res.status(404).json({ error: `cannot find note with the id ${id}` });
  } else {
    delete jsonObj.notes[id];
    const deleteNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('./data.json', deleteNote, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id !== parseInt(id, 10) || !id > 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!jsonObj.notes[id]) {
    res.status(404).json({ error: `cannot find note with the id ${id}` });
  } else {
    jsonObj.notes[id].content = req.body.content;
    const updateNote = JSON.stringify(jsonObj, null, 2);
    fs.writeFile('./data.json', updateNote, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(jsonObj.notes[id]);
      }
    });
  }
});
