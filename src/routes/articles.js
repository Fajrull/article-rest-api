const express = require("express");
const routes = express.Router();

// Controllers
const ArticleControllers = require("../controllers/articles/articles");

// Middleware
const ArticleMiddleware = require("../middlewares/createValidationArticle");

// CREATE - POST
routes.post(
  "/",
  ArticleMiddleware.createValidationArticle,
  ArticleControllers.createNewArticle
);

// READ - PATCH
routes.get("/", ArticleControllers.getAllArticle);

// UPDATE - PUT
routes.patch("/:articleId", ArticleControllers.updateArticle);

// DELETE - DELETE
routes.delete("/:articleId", ArticleControllers.deleteArticle);

module.exports = routes;
