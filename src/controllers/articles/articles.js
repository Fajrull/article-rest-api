// READ / GET
const getAllArticle = (req, res) => {
  const data = [
    {
      id: 1,
      title: "ReactJS",
      content: "Belajar ReactJS!",
      date: "2023-11-06",
    },
    {
      id: 2,
      title: "ExpressJS",
      content: "Belajar ExpressJS!",
      date: "2023-11-06",
    },
  ];
  res.send({
    message: "GET all articles success",
    data: data,
  });
};

// CREATE
const createNewArticle = (req, res) => {
  // console.log(req.body);
  res.send({
    message: "CREATE new article success",
    data: req.body,
  });
};

// UPDATE
const updateArticle = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  res.send({
    message: "UPDATE article success",
    data: req.body,
  });
};

// DELETE
const deleteArticle = (req, res) => {
  const { id } = req.params;
  res.send({
    message: "DELETE article success",
    data: {
      id: id,
      title: "ReactJS",
      content: "Belajar ReactJS!",
      date: "2023-11-06",
    },
  });
};

module.exports = {
  getAllArticle,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
