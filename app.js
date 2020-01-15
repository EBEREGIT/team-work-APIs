/* eslint-disable import/newline-after-import */
/* eslint-disable no-tabs */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
