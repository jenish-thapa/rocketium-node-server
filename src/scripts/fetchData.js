const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const fetchData = async () => {
  try {
    const JSON_DATA_URL = process.env.DATA_URL;
    const { data } = await axios.get(JSON_DATA_URL);
    fs.writeFileSync(
      path.join(__dirname, "../data/dummyData.json"),
      JSON.stringify(data, null, 2)
    );
    console.log("Data fetched successfully!");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
