/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (const row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
