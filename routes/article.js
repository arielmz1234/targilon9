const express = require('express');
var router = express.Router();
const articleController = require('../controllers/article');

// Routes for /articles/
router.route('/')
    .get(articleController.getArticles)
    .post(articleController.createArticle);

// Routes for /articles/:id
router.route('/:id')
    .get(articleController.getArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle);

module.exports = router;