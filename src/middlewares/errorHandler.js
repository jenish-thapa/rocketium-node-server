const logger = require("../logger/logger");

const notFoundHandler = (req, res, next) => {
  logger.error(`404 - Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).send("404 - Not Found");
};

module.exports = notFoundHandler;
