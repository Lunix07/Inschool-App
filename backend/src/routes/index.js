// src/routes/index.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');


// Define routes
router.post('/login', authController.login);
router.get('/', (req, res) => {
  res.send('API is running!');
});

module.exports = router;
