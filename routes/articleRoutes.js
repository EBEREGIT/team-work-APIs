/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const createArticle = require('./articleRoutes/createArticle');
const editArticle = require('./articleRoutes/editArticle');
const deleteArticle = require('./articleRoutes/deleteArticle');
const commentArticle = require('./articleRoutes/commentArticle');
const viewArticle = require('./articleRoutes/viewArticle');

// create article API
router.post('/', auth, createArticle.createArticle);
// edit an article API
router.patch('/:articleId', auth, editArticle.editArticle);
// delete an article API
router.delete('/:articleId', auth, deleteArticle.deleteArticle);
// comment on an article API
router.post('/:articleId/comment', auth, commentArticle.commentArticle);
// view a specific articlce API
router.get('/:articleId', auth, viewArticle.viewArticle);

module.exports = router;