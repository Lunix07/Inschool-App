// src/routes/index.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const contactController = require('../controllers/contact.controller');
const verifyAdmin = require("../middleware/verifyAdmin");
const articleController = require('../controllers/article.controller')


// Define routes
router.post("/contact", contactController.submitInquiry);
router.get("/admin/inquiries", verifyAdmin, contactController.getAllInquiries);
router.post("/admin/reply", verifyAdmin, contactController.replyToInquiry);
router.post('/login', authController.login);
router.get('/', (req, res) => {
  res.send('API is running!');
});
router.get('/articles', articleController.getArticles)
router.get('/articles/:id', articleController.getArticleById)
router.post('/articles', articleController.createArticle)
router.put('/articles/:id', articleController.updateArticle)
router.delete('/articles/:id', articleController.removeArticle)


module.exports = router;
