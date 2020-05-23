/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const pg = require("pg");
require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

// configuration details

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

// display message on success
const pool = new pg.Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
});

pool.on("connect", () => {
  console.log("Teamwork Database connected successfully!");
});

// create tables here
const createTables = () => {
  // admins table
  const adminsTable = `CREATE TABLE IF NOT EXISTS 
    admins(
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(128) NOT NULL,
      lastName VARCHAR(128) NOT NULL,
      email VARCHAR(128) NOT NULL,
      password CHAR(150) NOT NULL,
      gender VARCHAR(128) NOT NULL,
      jobRole VARCHAR(128) NOT NULL,
      department VARCHAR(128) NOT NULL,
      address TEXT NOT NULL
    )`;
  // admins table query
  pool
    .query(adminsTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  // articles table query
  const articlesTable = `CREATE TABLE IF NOT EXISTS
    articles(
      id SERIAL PRIMARY KEY,
      title VARCHAR(128) NOT NULL,
      body TEXT NOT NULL,
      created_on DATE NOT NULL
    )`;
  // run articles table query
  pool
    .query(articlesTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  // employees table
  const employeesTable = `CREATE TABLE IF NOT EXISTS 
    employees(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(128) NOT NULL,
      last_name VARCHAR(128) NOT NULL,
      email VARCHAR(128) NOT NULL,
      password CHAR(150) NOT NULL,
      gender VARCHAR(128) NOT NULL,
      job_role VARCHAR(128) NOT NULL,
      department VARCHAR(128) NOT NULL,
      address TEXT NOT NULL
    )`;
  // execute employees table query
  pool
    .query(employeesTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  // gif table
  const gifsTable = `CREATE TABLE IF NOT EXISTS
    gifs(
      id SERIAL PRIMARY KEY,
      cloudinary_id VARCHAR(128) NOT NULL,
      title VARCHAR(128) NOT NULL,
      image_url VARCHAR(128) NOT NULL,
      created_on DATE NOT NULL
    )`;
  // gif table query
  pool
    .query(gifsTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  // article comment table
  const articleCommentTable = `CREATE TABLE IF NOT EXISTS
  articles_comment(
    id SERIAL PRIMARY KEY,
    article_id VARCHAR(128) NOT NULL,
    comment VARCHAR(128) NOT NULL,
    created_on DATE NOT NULL
  )`;
  // article comment table query
  pool
    .query(articleCommentTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });

  // gif comment table
  const gifCommentTable = `CREATE TABLE IF NOT EXISTS
    gifs_comment(
      id SERIAL PRIMARY KEY,
      gif_id VARCHAR(128) NOT NULL,
      comment VARCHAR(128) NOT NULL,
      created_on DATE NOT NULL
    )`;
  // gif comment table query
  pool
    .query(gifCommentTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  createTables,
  pool,
};

require("make-runnable");
