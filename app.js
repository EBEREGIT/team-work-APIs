/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./services/db.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create employee API
app.post('/auth/create-user', (request, response) => {
  const data = {
    firstName: request.body.firstname,
    lastName: request.body.lastname,
    email: request.body.email,
    password: request.body.password,
    gender: request.body.gender,
    jobRole: request.body.jobrole,
    department: request.body.department,
    address: request.body.address,
  };

  db.pool.connect((err, client, done) => {
    const query = {
      insertQuery:
        'INSERT INTO employees(firstname, lastname, email, password, gender, jobrole, department, address) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
      values:
        [data.firstName, data.lastName, data.email, data.password, data.gender, data.jobRole,
          data.department, data.address],
    };

    client.query(query, (error, result) => {
      done();

      if (error) {
        response.status(400).json({ error });
      } else {
        response.status(202).send({
          status: 'Employee created successfully',
          result: result.rows[0],
        });
      }
    });
  });
});

// view 

module.exports = app;
