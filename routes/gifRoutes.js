/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createGIF = require('./gifRoutes/createGIF');

// create employee API
router.post('/', createGIF.createGIF);

module.exports = router;