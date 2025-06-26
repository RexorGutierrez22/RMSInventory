const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/:qr_code_id', userController.getUserByQR);
module.exports = router;