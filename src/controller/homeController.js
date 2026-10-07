const getHomepage = (req, res) => {
  res.send("Hello World! & nodemon");
};

const renderHtml = (req, res) => {
  res.render("example");
};

module.exports = { getHomepage, renderHtml };
