const Equipment = require('../models/equipmentModel');
const getAllEquipment = async (req, res) => {
  try {
    const items = await Equipment.getAllEquipment();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getAllEquipment };