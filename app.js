/* eslint-disable max-len */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const createEmployee = require('./APIS/createEmployee');
const viewAllEmployees = require('./APIS/viewAllEmployees');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.status(202).send({
    message: 'Welcome to teamwork',
  });
});

// create employee API
app.post('/create-user', createEmployee.createEmployee);

// view all employees
app.get('/all-user', viewAllEmployees.viewAllEmployees);

module.exports = app;
