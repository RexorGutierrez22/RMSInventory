const db = require('./db');
async function borrowEquipment(user_id, equipment_id) {
  await db.query('INSERT INTO borrow_records (user_id, equipment_id) VALUES (?, ?)', [user_id, equipment_id]);
  await db.query('UPDATE equipment SET quantity_available = quantity_available - 1 WHERE id = ?', [equipment_id]);
}
module.exports = { borrowEquipment };