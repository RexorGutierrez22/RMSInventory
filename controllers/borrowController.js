const Borrow = require('../models/borrowModel');
const borrowItem = async (req, res) => {
  const { user_id, equipment_id } = req.body;
  try {
    await Borrow.borrowEquipment(user_id, equipment_id);
    res.json({ message: 'Item borrowed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { borrowItem };