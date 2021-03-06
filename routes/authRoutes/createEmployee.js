/* eslint-disable max-len */
const bcrypt = require('bcrypt');
const db = require('../../services/db');

exports.createEmployee = (request, response) => {
  // hash the password entered by user
  bcrypt.hash(request.body.password, 10).then((hash) => {
    // data entered by user
    const data = {
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      email: request.body.email,
      password: hash,
      gender: request.body.gender,
      job_role: request.body.job_role,
      department: request.body.department,
      address: request.body.address,
    };

    db.pool.connect((err, client, done) => {
      // query and value
      const insertQuery = 'INSERT INTO employees(first_name, last_name, email, password, gender, job_role, department, address) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *';
      const values = [data.first_name, data.last_name, data.email, data.password, data.gender, data.job_role, data.department, data.address];

      // run the query
      client.query(insertQuery, values, (error, result) => {
        done();

        if (error) {
          response.status(400).json({ error });
        } else {
          response.status(202).send({
            status: 'Employee created successfully',
            result: result.rows[0],
          });
        }
      });
    });
  }).catch((e) => {
    response.status(500).send({
      message: 'failed with a 500',
      error: e,
    });
  });
};
