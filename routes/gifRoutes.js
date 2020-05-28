/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const createGIF = require('./gifRoutes/createGIF');
const deleteGIF = require('./gifRoutes/deleteGIF');
const commentGIF = require('./gifRoutes/commentGIF');
const viewGIF = require('./gifRoutes/viewGIF');

// create gif API
router.post('/', auth, createGIF.createGIF);
// delete gif API
router.delete('/:gifId', auth, deleteGIF.deleteGIF);
// comment on an gif API
router.post('/:gifId/comment', auth, commentGIF.commentGIF);
// view specific gif API
router.get('/:gifId', auth, viewGIF.viewGIF);


module.exports = router;