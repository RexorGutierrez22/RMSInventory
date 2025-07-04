const User = require('../models/userModel');
const getUserByQR = async (req, res) => {
  try {
    const user = await User.getUserByQR(req.params.qr_code_id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getUserByQR };