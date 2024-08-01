const url = require("url");
const data = require("../data/dummyData.json");

const fields = ["name", "language", "id", "bio", "version"];

const getData = (req, res) => {
  const query = url.parse(req.url, true).query;

  console.log(query);

  let filteredData = [...data];

  for (const key in query) {
    if (key in fields) {
      const value = query[key];
      filteredData = filteredData.filter((item) => {
        if (typeof item[key] === "number") {
          return item[key] === parseFloat(value);
        } else if (typeof item[key] === "string") {
          return item[key].toLowerCase() === value.toLowerCase();
        }
        return false;
      });
    }
  }

  const sortBy = query.sortBy;
  const order = query.order;

  if (typeof sortBy === "string" && filteredData.length > 0) {
    filteredData.sort((a, b) => {
      if (typeof a[sortBy] === "string") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else if (typeof a[sortBy] === "number") {
        return a[sortBy] - b[sortBy];
      }
      return 0;
    });

    if (order === "desc") {
      filteredData.reverse();
    }
  }

  const limit = parseInt(req.query.limit, 10) || filteredData.length;
  const offset = parseInt(req.query.offset, 10) || 0;

  const paginatedData = filteredData.slice(offset, offset + limit);

  res.json(paginatedData);
};

module.exports = { getData };
