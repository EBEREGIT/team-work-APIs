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

exports.createGIF = (request, reponse) => {
  // data entered by user
  const data = {
    title: request.body.title,
    image: request.body.image,
  };

  // upload image to cloudinary
  cloudinary.uploader.upload(data.image)
    .then((image) => {
      db.pool.connect((err, client, done) => {
        const createdOn = new Date().toLocaleString();
        // query
        const insertQuery = 'INSERT INTO gifs (title, image_url, created_on) VALUES($1,$2,$3) RETURNING *';
        const values = [data.title, image.url, createdOn];

        // execute query
        client.query(insertQuery, values)
          .then((result) => {
            result = result.rows[0];

            // send success response
            reponse.status(201).send({
              status: 'success',
              data: {
                gifId: result.id,
                message: 'GIF image successfully posted',
                createdOn: result.created_on,
                title: result.title,
                imageUrl: result.image_url,
              }
            });
          })
          .catch((e) => {
            // send failure response
            reponse.status(500).send({
              e,
            });
          });
      });
    })
    .catch((error) => {
      // send failure response
      reponse.status(500).send({
        error,
      });
    });
};