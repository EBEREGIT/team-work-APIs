/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
const express = require('express');
const router = express.Router();

const createEmployee = require('./authRoutes/createEmployee');
const viewAllEmployees = require('./authRoutes/viewAllEmployees');
const signin = require('./authRoutes/signin');

// create employee API
router.post('/create-user', createEmployee.createEmployee);
// view all employees
router.get('/all-user', viewAllEmployees.viewAllEmployees);
// admin/employee sign in
router.post('/signin', signin.signin);

module.exports = router;