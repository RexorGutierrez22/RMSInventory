const db = require('./db');
async function getAllEquipment() {
  const [rows] = await db.query('SELECT * FROM equipment');
  return rows;
}
module.exports = { getAllEquipment };