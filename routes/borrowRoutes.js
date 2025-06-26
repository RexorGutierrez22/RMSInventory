const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
router.post('/', borrowController.borrowItem);
module.exports = router;