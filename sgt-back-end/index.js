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
  // const params = 'something';
  db.query(sql)
    .then(result => {
      res.json(result.fields);
      res.status(200);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An Unexpected error occurred.'
      });
    });
});
