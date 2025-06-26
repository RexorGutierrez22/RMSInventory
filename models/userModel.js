const db = require('./db');
async function getUserByQR(qr_code_id) {
  const [rows] = await db.query('SELECT * FROM users WHERE qr_code_id = ?', [qr_code_id]);
  return rows[0];
}
module.exports = { getUserByQR };