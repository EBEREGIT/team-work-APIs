/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const viewAllFeed = require('./feedRoutes/viewAllFeed');

// view all feeds
router.get('/', auth, viewAllFeed.viewAllFeed);

module.exports = router;