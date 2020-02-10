/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createGIF = require('./gifRoutes/createGIF');
const deleteGIF = require('./gifRoutes/deleteGIF');
const commentGIF = require('./gifRoutes/commentGIF');
const viewGIF = require('./gifRoutes/viewGIF');

// create gif API
router.post('/', createGIF.createGIF);
// delete gif API
router.delete('/:gifId', deleteGIF.deleteGIF);
// comment on an gif API
router.post('/:gifId/comment', commentGIF.commentGIF);
// view specific gif API
router.get('/:gifId', viewGIF.viewGIF);


module.exports = router;