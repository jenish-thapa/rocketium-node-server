const data = require("../data/dummyData.json");

const getData = (req, res) => {
  res.json(data);
};

module.exports = { getData };
