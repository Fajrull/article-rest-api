const express = require("express");
const app = express();
const morgan = require("morgan");
const middlewareLogRequest = require("./src/middlewares/logs");

app.use(morgan("dev"));
app.use(middlewareLogRequest);
app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});

const Routes = require("./src/routes/articles");
app.use("/api/articles", Routes);
