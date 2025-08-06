const articleService = require("../services/article.service");

exports.getArticles = async (req, res) => {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await articleService.getArticleById(id);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createArticle = async (req, res) => {
    try{
        const{title, content} = req.body;
       
        const article = await articleService.createArticle(title, content);
        res.json(article)
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await articleService.updateArticle(req.params.id, title, content);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeArticle = async (req, res) => {
  try {
    await articleService.deleteArticle(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
