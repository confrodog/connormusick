const express = require('express');

const router = express.Router();

const connormusickController = require('../controllers/connormusick');

router.get('/', connormusickController.getIndex);

module.exports = router;