/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createGIF = require('./gifRoutes/createGIF');
const deleteGIF = require('./gifRoutes/deleteGIF');

// create gif API
router.post('/', createGIF.createGIF);
// delete gif API
router.delete('/:gifId', deleteGIF.deleteGIF);

module.exports = router;