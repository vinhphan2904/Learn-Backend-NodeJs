const express = require("express");
const route = express.Router();
const { getHomepage, renderHtml } = require("../controller/homeController");

route.get("/", getHomepage);
route.get("/abc", renderHtml);

module.exports = route;
