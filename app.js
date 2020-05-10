/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const gifRoutes = require('./routes/gifRoutes');
const articleRoutes = require('./routes/articleRoutes');
const feedRoutes = require('./routes/feedRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle CORS error
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

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
// articles routes
app.use('/articles', articleRoutes);
// feeds
app.use('/feed', feedRoutes);

module.exports = app;
