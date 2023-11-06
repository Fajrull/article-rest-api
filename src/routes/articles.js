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

// READ - GET
routes.get("/", ArticleControllers.getAllArticle);

// UPDATE - PATCH
routes.patch("/:id", ArticleControllers.updateArticle);

// DELETE - DELETE
routes.delete("/:id", ArticleControllers.deleteArticle);

module.exports = routes;
