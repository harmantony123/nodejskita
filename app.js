const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "view", "index.html"));
});

module.exports = app;
