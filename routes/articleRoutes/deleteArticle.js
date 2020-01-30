/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable eol-last */
const db = require('../../services/db.js');

exports.deleteArticle = (request, response) => {
  // data from user
  const { articleId } = request.params;

  db.pool.connect((err, client) => {
    // query
    const deleteQuery = 'DELETE FROM articles WHERE id = $1';
    const value = [articleId];

    // execute query
    client.query(deleteQuery, value)
      .then(() => {
        // success response
        response.status(201).send({
          status: 'success',
          message: 'Article successfully deleted',
        });
      })
      .catch((error) => {
        // failure response
        response.status(401).send({
          message: 'article not found',
          error,
        });
      });
  });
};