/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createArticle = require('./articleRoutes/createArticle');
const editArticle = require('./articleRoutes/editArticle');
const deleteArticle = require('./articleRoutes/deleteArticle');
const commentArticle = require('./articleRoutes/commentArticle');

// create article API
router.post('/', createArticle.createArticle);
// edit an article API
router.patch('/:articleId', editArticle.editArticle);
// delete an article API
router.delete('/:articleId', deleteArticle.deleteArticle);
// comment on an article API
router.post('/:articleId/comment', commentArticle.commentArticle);

module.exports = router;