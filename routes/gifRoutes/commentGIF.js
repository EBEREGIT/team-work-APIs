const db = require('../../services/db.js');

exports.commentGIF = ((request, response) => {
  // data from user
  const { gifId } = request.params;
  const { comment } = request.body;

  db.pool.connect((err, client) => {
    // query to check if gif exist
    const gifQuery = 'SELECT * FROM gifs WHERE id = $1';
    const gifValue = [gifId];

    client.query(gifQuery, gifValue)
      .then((output) => {
        const createdOn = new Date().toLocaleString();

        // query
        const query = 'INSERT INTO gifs_comment(gif_id, comment, created_on) VALUES($1,$2,$3) RETURNING *';
        const value = [gifId, comment, createdOn];

        // execute query
        client.query(query, value)
          .then((result) => {
            response.status(201).send({
              status: 'success',
              data: {
                message: 'Comment successfully created',
                createdOn: result.rows[0].created_on,
                gifTitle: output.rows[0].title,
                comment: result.rows[0].comment,
              },
            });
          })
          .catch((error) => {
            response.status(500).send({
              status: 'failure',
              data: {
                message: 'comment could not be created',
                error,
              },
            });
          });
      })
      .catch((error) => {
        response.status(401).send({
          status: 'failure',
          data: {
            message: 'GIF Record Not Found',
            error,
          },
        });
      });
  });
});
