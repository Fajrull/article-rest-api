const ArticleModels = require("../../models").Article;

// READ / GET
const getAllArticle = async (req, res) => {
  try {
    const Articles = await ArticleModels.findAll();

    res.status(200).json(Articles);
  } catch (error) {
    res.status(500).json({
      message: "error get all articles",
    });
  }
};

// CREATE
const createNewArticle = async (req, res) => {
  try {
    const { id, title, content, author } = req.body;

    const newArticleData = {
      id: id,
      title: title,
      content: content,
      author: author,
    };

    const newArticle = await ArticleModels.create(newArticleData);

    res.status(201).json({
      message: "new article created",
      article: newArticle,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

// UPDATE
const updateArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const { title, content, author } = req.body;

    const updateArticleData = {
      title: title,
      content: content,
      author: author,
    };

    const updateArticle = await ArticleModels.update(updateArticleData, {
      where: {
        id: articleId,
      },
    });

    res.status(200).json({
      message: "update article success",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

// DELETE
const deleteArticle = async (req, res) => {
  try {
    const { articleId } = req.params;

    await ArticleModels.destroy({
      where: {
        id: articleId,
      },
    });

    res.status(200).json({
      message: "delete article success",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  getAllArticle,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
