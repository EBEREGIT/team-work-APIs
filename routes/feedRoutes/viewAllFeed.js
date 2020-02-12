const db = require('../../services/db');

exports.viewAllFeed = ((request, response) => {
  db.pool.connect((err, client) => {
    // query
    const articleQuery = 'SELECT * FROM articles ORDER BY created_on DESC';

    // execute query
    client
      .query(articleQuery)
      .then((output) => {
        // gif query
        const GIFQuery = 'SELECT * FROM gifs ORDER BY created_on DESC';

        // execute
        client.query(GIFQuery)
          .then((result) => {
            response.status(200).send({
              status: 'success',
              result: result.rows,
              output: output.rows,
            });
          })
          .catch((e) => {
            response.status(500).send({
              status: 'failure',
              e,
            });
          });
      })
      .catch((error) => {
        response.status(500).send({
          status: 'failure',
          error,
        });
      });
  });
});
