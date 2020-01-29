const db = require('../../services/db.js');

exports.viewAllEmployees = (req, res) => {
  db.pool.connect((err, client, done) => {
    // query
    const query = 'SELECT * FROM employees';

    // run query
    client.query(query, (error, result) => {
      done();

      if (error) {
        res.status(400).json({ error });
      }

      if (result.rows < 1) {
        res.status(404).send({
          status: 'Failed',
          message: 'No Employee Found',
        });
      } else {
        res.status(200).send({
          status: 'Success',
          message: 'Employees Info retrieved successfully',
          employees: result.rows,
        });
      }
    });
  });
};
