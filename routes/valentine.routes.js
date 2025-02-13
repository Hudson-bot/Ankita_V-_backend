const express = require('express');
const valentineController = require('../controllers/valentine.controller');

const router = express.Router();

router.post('/response', valentineController.saveResponse);

module.exports = router;