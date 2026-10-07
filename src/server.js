require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const webRoutes = require("./routes/web");
const configViewEngine = require("./config/viewEngine");
const connection = mysql.createConnection({
  host: process.env.HOSTNAME,
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>results = ", results);
  console.log(">>>fields= ", fields);
});
configViewEngine(app);

app.use("/abc", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
