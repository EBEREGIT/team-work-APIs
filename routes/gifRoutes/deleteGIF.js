/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable eol-last */
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const db = require('../../services/db.js');

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.deleteGIF = (request, response) => {
  // data from user
  const { gifId } = request.params;

  db.pool.connect((err, client) => {
    // search query
    const searchQuery = 'SELECT * FROM gifs WHERE id = $1';
    const value = [gifId];

    // execute search query
    client
      .query(searchQuery, value)
      .then((result) => {
        const cloudinaryId = result.rows[0].cloudinary_id;

        // delete image from cloudinary
        cloudinary.uploader.destroy(cloudinaryId)
          .then(() => {
            // delete query
            const deleteQuery = 'DELETE FROM gifs WHERE id = $1';
            const deleteValue = [gifId];

            // execute delete query
            client
              .query(deleteQuery, deleteValue)
              .then(() => {
                response.status(200).send({
                  status: 'success',
                  data: {
                    message: 'gif post successfully deleted',
                  },
                });
              })
              .catch((er) => {
                response.status(500).send({
                  message: 'Could not delete record from database',
                  er,
                });
              });
          }).catch((e) => {
            response.status(500).send({
              message: 'Could not delete image',
              e,
            });
          });
      })
      .catch((error) => {
        response.status(404).send({
          message: 'gif not found',
          error,
        });
      });
  });
};