const db = require('../../services/db.js');

exports.viewGIF = (request, response) => {
  // data from user
  const { gifId } = request.params;

  db.pool.connect((err, client) => {
    // query to find gif
    const query = 'SELECT * FROM gifs WHERE id = $1';
    const value = [gifId];

    // execute gif query
    client.query(query, value)
      .then((output) => {
        // query to find comment
        const commentQuery = 'SELECT * FROM gifs_comment WHERE gif_id = $1';
        const commentValue = [gifId];

        // execute comment query
        client.query(commentQuery, commentValue)
          .then((result) => {
            response.status(200).send({
              status: 'success',
              data: {
                id: output.rows[0].id,
                createdOn: output.rows[0].created_on,
                title: output.rows[0].title,
                url: output.rows[0].image_url,
                comments: result.rows,
              },
            });
          })
          .catch((error) => {
            response.status(401).send({
              status: 'failure',
              data: {
                message: 'could not retrieve record!',
                error,
              },
            });
          });
      })
      .catch((error) => {
        response.status(401).send({
          status: 'failure',
          data: {
            message: 'gif not found!',
            error,
          },
        });
      });
  });
};
