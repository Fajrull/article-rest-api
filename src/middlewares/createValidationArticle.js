const createValidationArticle = (req, res, next) => {
  const { id, title, content, author } = req.body;

  if (!id || !title || !content || !author) {
    res.status(400).send({
      message: "Field is not complete!",
      statusText: "Field is not complete!",
      statusCode: 400,
    });
  } else {
    next();
  }
};

module.exports = {
  createValidationArticle,
};
