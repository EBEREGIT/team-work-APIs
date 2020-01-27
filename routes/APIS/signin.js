/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../../services/db.js');

// sign in
exports.signin = (request, response) => {
  // data from login form
  const data = {
    email: request.body.email,
    password: request.body.password,
  };

  // connect to db
  db.pool.connect((err, client, done) => {
    // query and value
    const query = 'SELECT * FROM employees WHERE email = $1';
    const value = [data.email];

    // run query
    client.query(query, value, (error, result) => {
      done();

      // error if no match found
      if (result.rows < 1) {
        return response.status(401).json({
          message: 'Employee not found!',
          error,
        });
      }

      // error if more than one match is found
      if (result.rows > 1) {
        return response.status(500).json({
          message: 'Email has duplicate!',
          error,
        });
      }
      // compare the passwords
      const comparePassword = bcrypt.compare(data.password, result.rows[0].password);
      // error if password is incorrect
      if (!comparePassword) {
        return response.status(401).json({
          error: 'Incorrect password!',
        });
      }
      // create JWT here
      const userId = result.rows[0].id;
      const token = jwt.sign({ userId }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' });
      // success if password is correct
      return response.status(200).json({
        userId,
        token,
        status: 'success',
      });
    });
  });
};
