/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable eol-last */
const db = require('../../services/db.js');

exports.createArticle = (request, response) => {
  // data from user
  const data = {
    title: request.body.title,
    body: request.body.body,
  };

  db.pool.connect((err, client) => {
    const createdOn = new Date().toLocaleString();
    // query
    const insertQuery = 'INSERT INTO articles (title, body, created_on) VALUES($1,$2,$3) RETURNING *';
    const values = [data.title, data.body, createdOn];

    // execute query
    client.query(insertQuery, values)
      .then((result) => {
        result = result.rows[0];

        // success response
        response.status(201).send({
          status: 'success',
          data: {
            message: 'Article successfully posted',
            articleId: result.id,
            createdOn,
            title: result.title,
          },
        });
      }).catch((error) => {
        // failure response
        response.status(500).send({
          error,
        });
      });
  });
};