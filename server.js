const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const port = process.env.PORT || 3001;

require("dotenv").config();
require("./config/database");

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const animeRouter = require("./routes/anime");
const mangaRouter = require("./routes/manga");
const mediaRouter = require("./routes/media");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/anime", animeRouter);
app.use("/api/manga", mangaRouter);
app.use("/api/media", mediaRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
