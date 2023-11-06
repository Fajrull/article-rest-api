const createValidationArticle = (req, res, next) => {
  const { id, title, content, date } = req.body;

  if (!id || !title || !content || !date) {
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
