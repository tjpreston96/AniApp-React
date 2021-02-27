const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const port = process.env.PORT || 3001;

require("dotenv").config();
require("./config/database");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const animeRouter = require("./routes/anime");
const mangaRouter = require("./routes/manga");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
