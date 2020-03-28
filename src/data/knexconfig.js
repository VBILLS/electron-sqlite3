module.exports = {
  const db = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './seeddata.db'
    }
  });
}