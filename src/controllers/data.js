const fs = require("fs");
const path = require("path");

const getData = (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/dummyData.json"))
  );

  res.json(data);
};

module.exports = { getData };
