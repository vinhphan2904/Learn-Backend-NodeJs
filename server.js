const express = require("express");
const path = require("path")
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/abc", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.render("example");
});

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
