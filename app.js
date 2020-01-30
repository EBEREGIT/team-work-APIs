/* eslint-disable max-len */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const gifRoutes = require('./routes/gifRoutes');
const articleRoutes = require('./routes/articleRoutes');

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
// gif routes
app.use('/gifs', gifRoutes);
// gif articles
app.use('/articles', articleRoutes);

module.exports = app;
