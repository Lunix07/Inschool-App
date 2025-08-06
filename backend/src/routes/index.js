// src/routes/index.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const contactController = require('../controllers/contact.controller');
const verifyAdmin = require("../middleware/verifyAdmin");


// Define routes
router.post("/contact", contactController.submitInquiry);
router.get("/admin/inquiries", verifyAdmin, contactController.getAllInquiries);
router.post("/admin/reply/:email", verifyAdmin, contactController.replyToInquiry);
router.post('/login', authController.login);
router.get('/', (req, res) => {
  res.send('API is running!');
});

module.exports = router;
