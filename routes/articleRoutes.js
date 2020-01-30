/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createArticle = require('./articleRoutes/createArticle');

// create employee API
router.post('/', createArticle.createArticle);

module.exports = router;