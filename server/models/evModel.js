const { Pool } = require('pg');

const PG_URI = '';


const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('QUERY EXECUTED: ', text);
    return pool.query(text, params, callback);
  }
};