const db = require('../../services/db.js');

exports.viewArticle = (request, response) => {
  // data from user
  const { articleId } = request.params;

  db.pool.connect((err, client) => {
    // query to find article
    const query = 'SELECT * FROM articles WHERE id = $1';
    const value = [articleId];

    // execute article query
    client.query(query, value)
      .then((output) => {
        // query to find comment
        const commentQuery = 'SELECT * FROM articles_comment WHERE article_id = $1';
        const commentValue = [articleId];

        // execute comment query
        client.query(commentQuery, commentValue)
          .then((result) => {
            response.status(200).send({
              status: 'success',
              data: {
                id: output.rows[0].id,
                createdOn: output.rows[0].created_on,
                title: output.rows[0].title,
                artcle: output.rows[0].body,
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
            message: 'article not found!',
            error,
          },
        });
      });
  });
};
