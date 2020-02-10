/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const viewAllFeed = require('./feedRoutes/viewAllFeed');

// view all feeds
router.get('/', viewAllFeed.viewAllFeed);

module.exports = router;