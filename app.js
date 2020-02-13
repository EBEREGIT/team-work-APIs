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
const db = require('./services/db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// default route
app.get('/', (request, response) => {
  response.status(202).send({
    message: 'Welcome to teamwork APIs',
  });
});

// test db connection
app.get('/db', async (req, res) => {
  try {
    const client = await db.pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { results: (result) ? result.rows : null };
    res.send({
      message: 'We are in the database!',
      result: results,
    })
    client.release();
  } catch (err) {
    console.error(err);
    res.send(`Error ${err}`);
  }
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
