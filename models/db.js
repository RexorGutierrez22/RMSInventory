const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usep_inventory',
});
module.exports = pool.promise();