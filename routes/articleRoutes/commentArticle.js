const db = require('../../services/db.js');

exports.commentArticle = (request, response) => {
  // data from user
  const { articleId } = request.params;
  const { comment } = request.body;

  db.pool.connect((err, client) => {
    // query to check if article exist
    const articleQuery = 'SELECT * FROM articles WHERE id = $1';
    const articleValue = [articleId];

    client.query(articleQuery, articleValue)
      .then((output) => {
        const createdOn = new Date().toLocaleString();

        // query
        const query = 'INSERT INTO articles_comment(article_id, comment, created_on) VALUES($1,$2,$3) RETURNING *';
        const value = [articleId, comment, createdOn];

        // execute query
        client.query(query, value)
          .then((result) => {
            response.status(201).send({
              status: 'success',
              data: {
                message: 'Comment successfully created',
                createdOn: result.rows[0].created_on,
                articleTitle: output.rows[0].title,
                article: output.rows[0].body,
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
            message: 'Article Record Not Found',
            error,
          },
        });
      });
  });
};
