/* eslint-disable indent */
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

  if (!nameValue || !courseValue || !scoreValue) {
    res.status(400).json({
      error: 'Name, course, and score are all required contents.'
    });
    return;
  }

  db.query(sql, values)
    .then(result => {
      if (req.body.score > 100 || req.body.score < 1) {
        res.status(400).json({
          error: 'Score must be a number between 1 and 100.'
        });
      } else {
        res.status(201);
        res.json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
        res.status(500).json({
          error: 'An Unexpected error occurred.'
        });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const values = [req.body.name, req.body.course, req.body.score, gradeId];
  const nameValue = req.body.name;
  const courseValue = req.body.course;
  const scoreValue = req.body.score;

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer.'
    });
    return;
  }
  if (!nameValue || !courseValue || !scoreValue) {
    res.status(400).json({
      error: 'Name, course, and score are all required contents.'
    });
    return;
  }

  const sql = `
  update "grades"
    set "name" = $1,
      "course" = $2,
      "score" = $3
    where "gradeId" = $4
    returning *
  `;

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
        res.status(500).json({
          error: 'An Unexpected error occurred.'
        });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An Unexpected error occurred.'
      });
    });
});
