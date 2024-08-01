const axios = require("axios");
const fs = require("fs");
const path = require("path");
const logger = require("../logger/logger")
require("dotenv").config();

const fetchData = async () => {
  try {
    const JSON_DATA_URL = process.env.DATA_URL;
    const { data } = await axios.get(JSON_DATA_URL);
    fs.writeFileSync(
      path.join(__dirname, "../data/dummyData.json"),
      JSON.stringify(data, null, 2)
    );
    logger.info("Data fetched and stored successfully!");
  } catch (error) {
    logger.error("Error fetching data: " + error.message);
  }
};

fetchData();
