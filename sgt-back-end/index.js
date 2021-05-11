const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
    `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
      res.status(200);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An Unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  const nameValue = req.body.name;
  const courseValue = req.body.course;
  const scoreValue = req.body.score;
  // console.log(req.body.score);
  db.query(sql, values)
    .then(result => {
      if (req.body.score > 100 || req.body.score < 1) {
        // console.error(err);
        res.status(400).json({
          error: 'Score must be a number between 1 and 100.'
        });
      } else {
        res.status(201);
        res.json(result.rows[0]);
      }
    })
    .catch(err => {
      if (!nameValue || !courseValue || !scoreValue) {
        // console.error(err);
        res.status(400).json({
          error: 'Name, course, and score are all required contents.'
        });
      } else {
        console.error(err);
        res.status(500).json({
          error: 'An Unexpected error occurred.'
        });
      }
    });
});
