/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const pg = require('pg');

// configuration details
const config = {
  user: 'team_work',
  database: 'team_work',
  password: 'team_work',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

// connect to database
const pool = new pg.Pool(config);

// display message on success
pool.on('connect', () => {
  console.log('Database connected successfully');
});

// create tables here
const createTables = () => {
  // articles table
  const articlesTable = `CREATE TABLE IF NOT EXISTS
        articles(
          id SERIAL PRIMARY KEY,
          title VARCHAR(128) NOT NULL,
          body TEXT NOT NULL
        )`;
  pool.query(articlesTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

// export pool and createTables to be accessible  from any where within the application
module.exports = {
  createTables,
  pool,
};

require('make-runnable');
