/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable eol-last */
const db = require('../../services/db.js');

exports.editArticle = (request, response) => {
  // data from user
  const { articleId } = request.params;
  const data = {
    title: request.body.title,
    body: request.body.body,
  };

  db.pool.connect((err, client) => {
    // query
    const updateQuery = 'UPDATE articles SET title = $1, body = $2 WHERE id = $3';
    const value = [data.title, data.body, articleId];

    // execute query
    client.query(updateQuery, value)
      .then((result) => {
        // success response
        response.status(201).send({
          status: 'success',
          result: result.rows[0],
          data: {
            message: 'Article successfully updated',
            title: data.title,
            article: data.body,
          },
        });
      })
      .catch((error) => {
        response.status(401).send({
          message: 'article not found',
          error,
        });
      });
  });
};