/* eslint-disable max-len */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.get('/', (request, response) => {
  response.status(202).send({
    message: 'Welcome to teamwork APIs',
  });
});

// auth routes
app.use('/auth', authRoutes);

module.exports = app;
